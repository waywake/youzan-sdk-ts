#!/usr/bin/env python3
"""Generate TypeScript types from a Youzan API documentation detail page."""

from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.parse
import urllib.request
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any


DETAIL_ENDPOINT = "https://doc.youzanyun.com/api/new-doc/list-detail/show-detail"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("url", nargs="?", help="Youzan API documentation URL")
    parser.add_argument("--id", type=int, help="Numeric API id, e.g. 216")
    parser.add_argument(
        "--from-rendered-doc",
        help=(
            "Read JSON extracted from a rendered /v2/doc/.../token/... page. "
            "Use the skill's Chrome-control workflow to create this file."
        ),
    )
    parser.add_argument("--out", help="Write generated TypeScript to this file")
    parser.add_argument("--out-dir", help="Write generated TypeScript to an auto-named file in this directory")
    return parser.parse_args()


def extract_api_id(url: str | None, explicit_id: int | None) -> int:
    if explicit_id is not None:
        return explicit_id
    if not url:
        raise SystemExit("Provide a Youzan API documentation URL or --id.")
    match = re.search(r"/detail/API/\d+/(\d+)(?:[/?#]|$)", url)
    if not match:
        match = re.search(r"(?:^|[?&])id=(\d+)(?:&|$)", url)
    if not match:
        raise SystemExit(f"Could not extract API id from URL: {url}")
    return int(match.group(1))


def fetch_json(url: str) -> Any:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Codex Youzan API type generator",
            "Accept": "application/json,text/plain,*/*",
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def fetch_api_detail(api_id: int) -> dict[str, Any]:
    query = urllib.parse.urlencode({"id": api_id, "docSource": 2})
    payload = fetch_json(f"{DETAIL_ENDPOINT}?{query}")
    if payload.get("code") != 0:
        raise SystemExit(f"Youzan detail endpoint returned error: {payload!r}")
    data = payload.get("data") or {}
    content = json.loads(data.get("content") or "{}")
    return content


def pascal_case(value: str) -> str:
    parts = re.split(r"[^0-9A-Za-z]+", value)
    return "".join(part[:1].upper() + part[1:] for part in parts if part)


def version_suffix(version: str) -> str:
    nums = re.findall(r"\d+", version)
    return "V" + "".join(nums)


def kebab_case(value: str) -> str:
    parts = re.split(r"[^0-9A-Za-z]+", value)
    return "-".join(part.lower() for part in parts if part)


def api_file_name(method: str, version: str) -> str:
    return f"{kebab_case(method)}-{version_suffix(version).lower()}.ts"


def ts_property(name: str) -> str:
    return name if re.fullmatch(r"[A-Za-z_$][0-9A-Za-z_$]*", name) else json.dumps(name)


def java_to_ts(java_type: str | None) -> str:
    value = java_type or ""
    if "Boolean" in value or value == "boolean":
        return "boolean"
    if "Long" in value or value == "long":
        return "YouzanLong"
    if "Map" in value:
        return "Record<string, unknown>"
    if value == "object":
        return "Record<string, unknown>"
    if any(token in value for token in ["Integer", "int", "BigDecimal", "Double", "Float"]):
        return "number"
    if "String" in value or value == "":
        return "string"
    return "unknown"


def is_array_field(field: dict[str, Any]) -> bool:
    return field.get("ref") == 2 or "List" in str(field.get("type") or "")


def clean_comment(text: str | None) -> str:
    if not text:
        return ""
    return " ".join(str(text).replace("*/", "* /").split())


def normalize_lines(text: str) -> list[str]:
    return [line.strip() for line in text.replace("\u200b", "").splitlines() if line.strip()]


def parse_table_text(text: str) -> list[dict[str, Any]]:
    lines = normalize_lines(text)
    if "名称" not in lines or "类型" not in lines or "描述" not in lines:
        return []
    has_required = "必填" in lines
    start = max(i for i, line in enumerate(lines) if line == "描述") + 1
    width = 4 if has_required else 3
    fields: list[dict[str, Any]] = []
    for index in range(start, len(lines), width):
        chunk = lines[index : index + width]
        if len(chunk) < width:
            break
        if has_required:
            name, java_type, required_text, desc = chunk
            required = required_text == "是"
        else:
            name, java_type, desc = chunk
            required = False
        if not re.fullmatch(r"[A-Za-z_][0-9A-Za-z_]*", name):
            continue
        fields.append({"name": name, "type": java_type, "required": required, "desc": desc})
    return fields


def parse_curl_json_payload(text: str) -> dict[str, Any]:
    match = re.search(r"-d\s+'(\{.*?\})'", text, re.S)
    if not match:
        return {}
    try:
        return json.loads(match.group(1))
    except json.JSONDecodeError:
        return {}


def infer_list_structs_from_example(params: list[dict[str, Any]], example_payload: dict[str, Any]) -> None:
    for field_info in params:
        field_name = field_info.get("name")
        if not field_name or not is_array_field(field_info) or field_info.get("structInfos"):
            continue
        value = example_payload.get(field_name)
        if isinstance(value, str):
            try:
                value = json.loads(value)
            except json.JSONDecodeError:
                continue
        if not (isinstance(value, list) and value and isinstance(value[0], dict)):
            continue
        struct_infos: list[dict[str, Any]] = []
        for key, item_value in value[0].items():
            if isinstance(item_value, bool):
                java_type = "boolean"
            elif isinstance(item_value, (int, float)):
                java_type = "Integer"
            else:
                java_type = "String"
            struct_infos.append({"name": key, "type": java_type, "required": True, "desc": ""})
        field_info["struct"] = True
        field_info["structInfos"] = struct_infos
        field_info["allowJsonString"] = True


def rendered_doc_to_content(payload: dict[str, Any]) -> dict[str, Any]:
    texts = [str(payload.get("mainText") or "")]
    texts.extend(str(frame.get("text") or "") for frame in payload.get("frames") or [])
    joined = "\n".join(texts)
    match = re.search(r"((?:[A-Za-z0-9_]+\.)+[A-Za-z0-9_]+)\.(\d+\.\d+\.\d+)", joined)
    if not match:
        raise SystemExit("Could not find method/version in rendered doc JSON.")
    method, version = match.group(1), match.group(2)

    request_fields: list[dict[str, Any]] = []
    response_fields: list[dict[str, Any]] = []
    example_payload: dict[str, Any] = payload.get("examplePayload") or {}
    for frame in payload.get("frames") or []:
        text = str(frame.get("text") or "")
        fields = parse_table_text(text)
        if fields:
            if any(field.get("name") in {"success", "code", "message", "errorData", "data"} for field in fields):
                response_fields = fields
            elif any(field.get("required") for field in fields):
                request_fields = fields
        example_payload.update(parse_curl_json_payload(text))

    if not request_fields:
        raise SystemExit("Could not find request table in rendered doc JSON.")
    if not response_fields:
        response_fields = [{"name": "data", "type": "object", "required": False, "desc": "响应数据"}]
    infer_list_structs_from_example(request_fields, example_payload)
    return {
        "apiForm": {"apiName": method, "version": version},
        "apiParams": request_fields,
        "results": response_fields,
        "renderedDoc": True,
    }


@dataclass
class InterfaceDef:
    name: str
    lines: list[str] = field(default_factory=list)


class TypeGenerator:
    def __init__(self, method: str, version: str):
        self.method = method
        self.version = version
        self.base_name = pascal_case(method) + version_suffix(version)
        self.interfaces: list[InterfaceDef] = []

    def interface_name(self, path: list[str]) -> str:
        return self.base_name + "".join(pascal_case(part) for part in path)

    def emit_struct(self, name: str, fields: list[dict[str, Any]], path: list[str]) -> str:
        interface_name = self.interface_name(path)
        lines: list[str] = []
        for field_info in fields:
            field_name = str(field_info.get("name") or field_info.get("alias") or "field")
            required = bool(field_info.get("required"))
            comment = clean_comment(field_info.get("desc"))
            if comment:
                lines.append(f"  /** {comment} */")
            if field_info.get("struct") or field_info.get("structInfos"):
                child_name = self.emit_struct(field_name, field_info.get("structInfos") or [], path + [field_name])
                ts_type = child_name
            else:
                ts_type = java_to_ts(field_info.get("type"))
            if is_array_field(field_info):
                ts_type += "[]"
            if field_info.get("allowJsonString"):
                ts_type += " | string"
            optional = "" if required else "?"
            lines.append(f"  {ts_property(field_name)}{optional}: {ts_type};")
        self.interfaces.append(InterfaceDef(interface_name, lines))
        return interface_name

    def emit_params(self, params: list[dict[str, Any]]) -> str:
        interface_name = self.base_name + "Params"
        lines: list[str] = []
        for field_info in params:
            field_name = str(field_info.get("name") or field_info.get("alias") or "field")
            required = bool(field_info.get("required"))
            desc = clean_comment(field_info.get("desc"))
            if "废弃" in desc and ("无需传" in desc or "取消校验" in desc):
                required = False
            if desc:
                lines.append(f"  /** {desc} */")
            if field_info.get("struct") or field_info.get("structInfos"):
                child_name = self.emit_struct(field_name, field_info.get("structInfos") or [], [field_name])
                ts_type = child_name
            else:
                ts_type = java_to_ts(field_info.get("type"))
            if is_array_field(field_info):
                ts_type += "[]"
            if field_info.get("allowJsonString"):
                ts_type += " | string"
            optional = "" if required else "?"
            lines.append(f"  {ts_property(field_name)}{optional}: {ts_type};")
        self.interfaces.append(InterfaceDef(interface_name, lines))
        return interface_name

    def generate(self, content: dict[str, Any]) -> str:
        params_name = self.emit_params(content.get("apiParams") or [])
        data_field = next(
            (item for item in content.get("results") or [] if item.get("name") == "data"),
            None,
        )
        if data_field and (data_field.get("struct") or data_field.get("structInfos")):
            data_name = self.emit_struct("data", data_field.get("structInfos") or [], ["Data"])
        else:
            data_name = self.base_name + "Data"
            self.interfaces.append(InterfaceDef(data_name, ["  [key: string]: unknown;"]))

        response_name = self.base_name + "Response"
        map_entry_name = self.base_name + "ApiMapEntry"

        out: list[str] = [
            "/**",
            f" * Generated from Youzan API docs for {self.method}@{self.version}.",
            " * Review before committing; docs occasionally contain deprecated required fields.",
            " */",
            "",
            "import type { YouzanApiSuccessResponse, YouzanLong } from './common';",
            "",
        ]

        for item in self.interfaces:
            out.append(f"export interface {item.name} {{")
            out.extend(item.lines)
            out.append("}")
            out.append("")

        extra_response_fields = [
            item
            for item in content.get("results") or []
            if item.get("name") not in {"success", "code", "message", "data", "request_id"}
        ]
        if extra_response_fields:
            out.append(f"export type {response_name} = YouzanApiSuccessResponse<{data_name}> & {{")
            for field_info in extra_response_fields:
                field_name = str(field_info.get("name") or "field")
                comment = clean_comment(field_info.get("desc"))
                if comment:
                    out.append(f"  /** {comment} */")
                out.append(f"  {ts_property(field_name)}?: {java_to_ts(field_info.get('type'))};")
            out.append("};")
            out.append("")
        else:
            out.append(f"export type {response_name} = YouzanApiSuccessResponse<{data_name}>;")
            out.append("")

        out.extend(
            [
                f"export interface {map_entry_name} {{",
                f"  {json.dumps(self.method)}: {{",
                f"    {json.dumps(self.version)}: {{",
                f"      params: {params_name};",
                f"      response: {response_name};",
                "    };",
                "  };",
                "}",
                "",
            ]
        )
        return "\n".join(out)


def main() -> int:
    args = parse_args()
    if args.from_rendered_doc:
        content = rendered_doc_to_content(json.loads(Path(args.from_rendered_doc).read_text(encoding="utf-8")))
    else:
        api_id = extract_api_id(args.url, args.id)
        content = fetch_api_detail(api_id)
    api_form = content.get("apiForm") or {}
    method = api_form.get("apiName") or content.get("apiName")
    version = api_form.get("version") or content.get("version")
    if not method or not version:
        raise SystemExit("Could not find apiName/version in Youzan detail response.")

    generated = TypeGenerator(method, version).generate(content)
    if args.out and args.out_dir:
        raise SystemExit("Use either --out or --out-dir, not both.")

    if args.out_dir:
        out_dir = Path(args.out_dir)
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / api_file_name(method, version)
        out_path.write_text(generated, encoding="utf-8")
        print(out_path)
    elif args.out:
        Path(args.out).write_text(generated, encoding="utf-8")
    else:
        print(generated)
    return 0


if __name__ == "__main__":
    sys.exit(main())
