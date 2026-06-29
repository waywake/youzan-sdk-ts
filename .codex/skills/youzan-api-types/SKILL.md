---
name: youzan-api-types
description: Generate TypeScript request and response types from Youzan Cloud API documentation links. Use when the user provides a doc.youzanyun.com API detail URL or asks to add typed SDK support for a Youzan API method/version, especially in repositories that call Youzan APIs by method + version.
---

# Youzan API Types

## Workflow

1. Identify the documentation shape:
   - Legacy pages like `https://doc.youzanyun.com/detail/API/0/216` contain a numeric API id.
   - New pages like `https://doc.youzanyun.com/v2/doc/cloud/token/...` are Feishu-backed token pages and must be rendered with Codex Chrome control first.
2. For legacy numeric-id pages, run the bundled generator:

```bash
python3 .codex/skills/youzan-api-types/scripts/generate_youzan_api_type.py "https://doc.youzanyun.com/detail/API/0/216"
```

3. For token pages, use Codex's built-in Chrome control to render the page and extract the embedded Feishu frame text. Do not add Playwright or browser dependencies to the target repo. Save JSON with this shape:

```json
{
  "mainText": "rendered top-page text",
  "examplePayload": {
    "field_from_curl_body": "optional parsed request example"
  },
  "frames": [
    { "url": "https://qima.feishu.cn/docx/...", "text": "frame body text" },
    { "url": "https://blk_...feishupkg.com/...", "text": "request or response table text" }
  ]
}
```

Then generate from that rendered document JSON:

```bash
python3 .codex/skills/youzan-api-types/scripts/generate_youzan_api_type.py \
  --from-rendered-doc /tmp/youzan-rendered-doc.json
```

The rendered-doc parser finds the method/version in the Feishu document text, parses request/response table frames, and uses `examplePayload` or the curl example to infer simple list item shapes when the table does not expose nested rows.

4. Review the generated TypeScript before editing the repo. The script reads Youzan's JSON detail endpoint or rendered token-page JSON and emits one interface file:
   - method and version metadata
   - `Params`, `Data`, nested response interfaces, and `Response`
   - an `ApiMapEntry` interface for the aggregate map
5. Integrate the output using the target repository's existing type organization. For this SDK shape:
   - put common helpers in `src/api-types/common.ts`
   - put each generated API contract in `src/api-types/<method>-<version>.ts`
   - make `src/api-types/index.ts` export each file and define `YouzanApiMap extends <ApiMapEntry>`
   - ensure `client.call` has a typed overload keyed by `api + version`
   - export useful generated types from `src/index.ts`
6. Run the repository's typecheck, tests, and build.

## Generator Options

Use `--out <file>` to write a generated interface `.ts` file instead of printing to stdout:

```bash
python3 .codex/skills/youzan-api-types/scripts/generate_youzan_api_type.py \
  "https://doc.youzanyun.com/detail/API/0/216" \
  --out /tmp/youzan-retail-open-spu-query.ts
```

Use `--out-dir src/api-types` to write an auto-named per-interface file:

```bash
python3 .codex/skills/youzan-api-types/scripts/generate_youzan_api_type.py \
  "https://doc.youzanyun.com/detail/API/0/216" \
  --out-dir src/api-types
```

Use `--id <number>` if the prompt gives only an API id:

```bash
python3 .codex/skills/youzan-api-types/scripts/generate_youzan_api_type.py --id 216
```

Use `--from-rendered-doc <json>` for the newer token docs after extracting text with Codex Chrome control:

```bash
python3 .codex/skills/youzan-api-types/scripts/generate_youzan_api_type.py \
  --from-rendered-doc /tmp/youzan-rendered-doc.json \
  --out-dir src/api-types
```

## Integration Notes

- Treat the generated result as a first draft. Youzan docs sometimes mark deprecated parameters as required while the description says no new integration needs to pass them; prefer the description and make such fields optional.
- Java `Long` values can exceed safe JS integer ranges in some APIs. The generator uses `number | string` via `YouzanLong`.
- Fields documented as JSON strings, such as image lists in some retail APIs, should stay `string` unless the runtime SDK parses them.
- Preserve backward compatibility: keep the wide `ApiCallParams` overload for unknown/untyped APIs.
- Do not append large generated interfaces to a single aggregate file. Keep `index.ts` small and put fields in one file per method/version.
