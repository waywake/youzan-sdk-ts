import { afterEach, describe, it, expect, mock } from 'bun:test';
import fs from 'fs';
import os from 'os';
import path from 'path';

const { post, upload } = await import('../../src/utils/http.ts?actual-http');

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

describe('utils/http', () => {
  it('post should be a function', () => {
    expect(typeof post).toBe('function');
  });

  it('upload should be a function', () => {
    expect(typeof upload).toBe('function');
  });

  it('post should send json with fetch and return parsed response', async () => {
    const fetchMock = mock(() =>
      Promise.resolve(
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
      ),
    );
    globalThis.fetch = fetchMock as unknown as typeof fetch;

    const resp = await post('/api/test', { id: 'aa' });

    expect(resp.data).toEqual({ ok: true });
    expect(resp.status).toBe(200);
    expect(fetchMock.mock.calls[0][0]).toBe('https://open.youzanyun.com/api/test');
    expect(fetchMock.mock.calls[0][1]).toMatchObject({
      method: 'POST',
      body: JSON.stringify({ id: 'aa' }),
    });
    expect((fetchMock.mock.calls[0][1] as RequestInit).headers).toEqual({
      'User-Agent': 'YZY-Open-Client 1.0.0 - Node',
      'Content-type': 'application/json;charset=UTF-8',
    });
  });

  it('post should reject non-2xx responses with response details', async () => {
    globalThis.fetch = mock(() =>
      Promise.resolve(
        new Response(JSON.stringify({ error: 'bad' }), {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'content-type': 'application/json' },
        }),
      ),
    ) as unknown as typeof fetch;

    await expect(post('/api/test', {})).rejects.toMatchObject({
      name: 'HttpError',
      response: {
        data: { error: 'bad' },
        status: 400,
        statusText: 'Bad Request',
      },
    });
  });

  it('post should reject youzan api errors returned with 2xx status', async () => {
    const data = {
      trace_id: 'yz7-0a34f85c-1782617275912-355713',
      code: 223014001,
      success: false,
      message: '单据明细出库量超出库存值,商品条码:6973763345449',
    };

    globalThis.fetch = mock(() =>
      Promise.resolve(
        new Response(JSON.stringify(data), {
          status: 200,
          statusText: 'OK',
          headers: { 'content-type': 'application/json' },
        }),
      ),
    ) as unknown as typeof fetch;

    await expect(post('/api/test', {})).rejects.toMatchObject({
      name: 'YouzanApiError',
      message: data.message,
      response: {
        data,
        status: 200,
        statusText: 'OK',
      },
    });
  });

  it('upload should send files with native FormData', async () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'youzan-sdk-'));
    const filePath = path.join(tmpDir, 'pic.txt');
    fs.writeFileSync(filePath, 'hello');

    const fetchMock = mock(() =>
      Promise.resolve(
        new Response('uploaded', {
          status: 200,
          headers: { 'content-type': 'text/plain' },
        }),
      ),
    );
    globalThis.fetch = fetchMock as unknown as typeof fetch;

    const resp = await upload('https://example.com/upload', { image: filePath });
    const body = (fetchMock.mock.calls[0][1] as RequestInit).body;

    expect(resp.data).toBe('uploaded');
    expect(fetchMock.mock.calls[0][0]).toBe('https://example.com/upload');
    expect(body).toBeInstanceOf(FormData);
    const file = (body as FormData).get('image') as File;
    expect(file.name).toBe('pic.txt');
    expect(await file.text()).toBe('hello');

    fs.rmSync(tmpDir, { recursive: true, force: true });
  });
});
