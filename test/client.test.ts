import { afterAll, beforeEach, describe, it, expect, mock } from 'bun:test';

const postMock = mock(() => Promise.resolve({ data: {} }));
const uploadMock = mock(() => Promise.resolve({ data: {} }));

mock.module('../src/utils/http.js', () => ({
  post: postMock,
  upload: uploadMock,
}));

const { call } = await import('../src/client');

describe('client', () => {
  afterAll(() => {
    mock.restore();
  });

  beforeEach(() => {
    postMock.mockClear();
    uploadMock.mockClear();
  });

  it('should throw when params are missing', () => {
    expect(() => call(undefined as any)).toThrow('api 必传');
  });

  it('should throw when api is missing', () => {
    expect(() => call({} as any)).toThrow('api 必传');
  });

  it('should throw when version is missing', () => {
    expect(() => call({ api: 'ee' } as any)).toThrow('version 必传');
  });

  it('should call post without params', async () => {
    const result = call({ api: 'youzan.shop.get', version: '3.0.0' });
    expect(result instanceof Promise).toBe(true);
    await result;
    expect(postMock.mock.calls).toEqual([
      ['/api/auth_exempt/youzan.shop.get/3.0.0', undefined],
    ]);
  });

  it('should call post with empty params', async () => {
    const result = call({ api: 'youzan.shop.get', version: '3.0.0', params: {} });
    expect(result instanceof Promise).toBe(true);
    await result;
    expect(postMock.mock.calls).toEqual([
      ['/api/auth_exempt/youzan.shop.get/3.0.0', {}],
    ]);
  });

  it('should call post with params', async () => {
    const result = call({
      api: 'youzan.shop.get',
      version: '3.0.0',
      params: { id: 'aa' },
    });
    expect(result instanceof Promise).toBe(true);
    await result;
    expect(postMock.mock.calls).toEqual([
      ['/api/auth_exempt/youzan.shop.get/3.0.0', { id: 'aa' }],
    ]);
  });

  it('should call upload when files are present', async () => {
    const result = call({
      api: 'youzan.shop.get',
      version: '3.0.0',
      token: 'ddd',
      host: 'http://localhost',
      params: {},
      files: { image: './o.png' },
    });
    expect(result instanceof Promise).toBe(true);
    await result;
    expect(uploadMock.mock.calls).toEqual([
      ['http://localhost/api/youzan.shop.get/3.0.0?access_token=ddd', { image: './o.png' }],
    ]);
  });

  it('should call rich text endpoint when configured', async () => {
    const result = call({
      api: 'youzan.shop.get',
      version: '3.0.0',
      token: 'ddd',
      params: { id: 'aa' },
      config: { isRichText: true },
    });
    expect(result instanceof Promise).toBe(true);
    await result;
    expect(postMock.mock.calls).toEqual([
      ['/api/_textarea_/youzan.shop.get/3.0.0', { id: 'aa' }],
    ]);
  });
});
