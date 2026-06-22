import { afterAll, beforeEach, describe, it, expect, mock } from 'bun:test';

const postMock = mock(() => Promise.resolve({ data: {} }));
const uploadMock = mock(() => Promise.resolve({ data: {} }));

mock.module('../src/utils/http.js', () => ({
  post: postMock,
  upload: uploadMock,
}));

const { get } = await import('../src/token');

describe('token', () => {
  afterAll(() => {
    mock.restore();
  });

  beforeEach(() => {
    postMock.mockClear();
    uploadMock.mockClear();
  });

  it('should throw for invalid input', () => {
    expect(() => get('err' as any)).toThrow('参数缺少必要字段');
  });

  it('should throw for empty params with wrong authorize_type', () => {
    expect(() => get({ authorize_type: 'silent' } as any)).toThrow();
  });

  it('should throw when authorize_type is invalid', () => {
    const params = {
      aaaaa: 'silent' as any,
      client_id: 'aaa',
      client_secret: 'bb',
      ddd: '11',
      ddda: '11',
    } as any;
    expect(() => get(params)).toThrow('authorize_type');
  });

  it('should throw when client_secret is missing', () => {
    const params = {
      authorize_type: 'silent' as const,
      client_id: 'aaa',
      ddd: '11',
      ddda: '11',
    } as any;
    expect(() => get(params)).toThrow('client_id client_secret 必传');
  });

  it('should throw when grant_id is missing for silent type', () => {
    const params = {
      authorize_type: 'silent' as const,
      client_id: 'aaa',
      ddd: '11',
      client_secret: 'bb',
    } as any;
    expect(() => get(params)).toThrow('grant_id 必传');
  });

  it('should call post for silent type with valid params', async () => {
    const params = {
      authorize_type: 'silent' as const,
      client_id: 'aaa',
      client_secret: 'bb',
      grant_id: 110,
    };
    const result = get(params);
    expect(result instanceof Promise).toBe(true);
    await result;
    expect(postMock.mock.calls).toEqual([['/auth/token', params]]);
  });

  it('should throw when redirect_uri is missing for authorization_code type', () => {
    const params = {
      authorize_type: 'authorization_code' as const,
      client_id: 'aaa',
      code: '11',
      client_secret: 'bb',
    } as any;
    expect(() => get(params)).toThrow('code redirect_uri 必传');
  });

  it('should call post for authorization_code type with valid params', async () => {
    const params = {
      authorize_type: 'authorization_code' as const,
      client_id: 'aaa',
      client_secret: 'bb',
      code: 'aaa',
      redirect_uri: 'http://example.com',
    };
    const result = get(params);
    expect(result instanceof Promise).toBe(true);
    await result;
    expect(postMock.mock.calls).toEqual([['/auth/token', params]]);
  });

  it('should throw when refresh_token is missing for refresh_token type', () => {
    const params = {
      authorize_type: 'refresh_token' as const,
      client_id: 'aaa',
      client_secret: 'bb',
      ddd: '11',
    } as any;
    expect(() => get(params)).toThrow('refresh_token 必传');
  });

  it('should call post for refresh_token type with valid params', async () => {
    const params = {
      authorize_type: 'refresh_token' as const,
      client_id: 'aaa',
      client_secret: 'bb',
      refresh_token: 'aaaa',
    };
    const result = get(params);
    expect(result instanceof Promise).toBe(true);
    await result;
    expect(postMock.mock.calls).toEqual([['/auth/token', params]]);
  });
});
