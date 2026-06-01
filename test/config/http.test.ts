import { describe, it, expect } from 'bun:test';
import { getBaseUrl, getUrlToken, getUrlAPI, getUrlAPIExempt, getUrlTextArea } from '../../src/config/http';

describe('config/http', () => {
  it('getBaseUrl', () => {
    expect(getBaseUrl()).toBe('https://open.youzanyun.com');
  });

  it('getUrlToken', () => {
    expect(getUrlToken()).toBe('/auth/token');
  });

  it('getUrlAPI', () => {
    expect(getUrlAPI('youzan.get', '2.0.0', 'token'))
      .toBe('/api/youzan.get/2.0.0?access_token=token');
  });

  it('getUrlAPIExempt', () => {
    expect(getUrlAPIExempt('youzan.get', '2.0.0'))
      .toBe('/api/auth_exempt/youzan.get/2.0.0');
  });

  it('getUrlTextArea', () => {
    expect(getUrlTextArea('youzan.get', '2.0.0'))
      .toBe('/api/_textarea_/youzan.get/2.0.0');
  });
});
