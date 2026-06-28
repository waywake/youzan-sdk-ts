/**
 * HTTP 请求工具
 */

import fs from 'fs';
import path from 'path';
import * as configHttp from '../config/http';

const USER_AGENT = 'YZY-Open-Client 1.0.0 - Node';

export interface HttpResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  url: string;
}

export class HttpError<T = unknown> extends Error {
  response: HttpResponse<T>;

  constructor(response: HttpResponse<T>) {
    super(`Request failed with status code ${response.status}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

export class YouzanApiError<T = unknown> extends Error {
  response: HttpResponse<T>;

  constructor(response: HttpResponse<T>) {
    const data = response.data as Record<string, unknown>;
    const message = typeof data.message === 'string' ? data.message : 'Youzan API request failed';

    super(message);
    this.name = 'YouzanApiError';
    this.response = response;
  }
}

function getRequestUrl(url: string): string {
  return new URL(url, configHttp.getBaseUrl()).toString();
}

function headersToObject(headers: Headers): Record<string, string> {
  const result: Record<string, string> = {};
  headers.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

async function parseResponseBody(resp: Response): Promise<unknown> {
  const text = await resp.text();
  if (text === '') {
    return null;
  }

  const contentType = resp.headers.get('content-type');
  if (contentType?.includes('application/json')) {
    return JSON.parse(text);
  }

  return text;
}

async function toHttpResponse(resp: Response): Promise<HttpResponse> {
  const response = {
    data: await parseResponseBody(resp),
    status: resp.status,
    statusText: resp.statusText,
    headers: headersToObject(resp.headers),
    url: resp.url,
  };

  if (!resp.ok) {
    throw new HttpError(response);
  }

  if (isFailedApiResponse(response.data)) {
    throw new YouzanApiError(response);
  }

  return response;
}

function isFailedApiResponse(data: unknown): data is { success: false } {
  return typeof data === 'object' && data !== null && 'success' in data && data.success === false;
}

/**
 * 发起 POST 请求
 *
 * @param url 支持绝对路径、相对路径
 * @param params POST 参数
 */
export async function post(url: string, params?: Record<string, unknown>) {
  const resp = await fetch(getRequestUrl(url), {
    method: 'POST',
    headers: {
      'User-Agent': USER_AGENT,
      'Content-type': 'application/json;charset=UTF-8',
    },
    body: params === undefined ? undefined : JSON.stringify(params),
  });
  return toHttpResponse(resp);
}

/**
 * 发起上传文件请求
 *
 * @param url 支持绝对路径、相对路径
 * @param files 上传文件参数，支持 Map 或 Object。示例: {"image": "/path/to/filename.jpg"}
 */
export async function upload(url: string, files: Map<string, string> | Record<string, string>) {
  const form = new FormData();

  for (const [key, filePath] of files instanceof Map ? files : Object.entries(files)) {
    const data = await fs.promises.readFile(filePath);
    const blob = new Blob([new Uint8Array(data)]);
    form.append(key, blob, path.basename(filePath));
  }

  const resp = await fetch(getRequestUrl(url), {
    method: 'POST',
    headers: {
      'User-Agent': USER_AGENT,
    },
    body: form,
  });
  return toHttpResponse(resp);
}
