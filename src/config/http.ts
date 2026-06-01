/**
 * HTTP URL 配置
 */

const BASE_URL = 'https://open.youzanyun.com';

export function getBaseUrl(): string {
  return BASE_URL;
}

export function getUrlToken(): string {
  return '/auth/token';
}

export function getUrlAPI(api: string, version: string, token: string): string {
  return `/api/${api}/${version}?access_token=${token}`;
}

export function getUrlAPIExempt(api: string, version: string): string {
  return `/api/auth_exempt/${api}/${version}`;
}

export function getUrlTextArea(api: string, version: string): string {
  return `/api/_textarea_/${api}/${version}`;
}
