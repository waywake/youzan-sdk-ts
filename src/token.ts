/**
 * Token 管理
 */

import { type AuthorizeType } from './types';
import type { TokenParams } from './types';
import * as configHttp from './config/http';
import * as utilHttp from './utils/http';

const VALID_AUTHORIZE_TYPES = new Set<AuthorizeType>([
  'silent',
  'authorization_code',
  'refresh_token',
]);

/**
 * 获取 Token
 *
 * 必要字段: authorize_type client_id client_secret
 *
 * 自用型应用获取 Token: authorize_type = silent, 必传 grant_id
 * 工具型应用获取 Token: authorize_type = authorization_code, 必传 code redirect_uri
 * 工具型应用/自用型应用刷新 Token: authorize_type = refresh_token, 必传 refresh_token
 */
export function get(params: TokenParams) {
  // 公共参数校验
  if (!params || typeof params !== 'object') {
    throw new Error('参数异常: 参数缺少必要字段');
  }

  if (!params.client_id || !params.client_secret) {
    throw new Error('参数异常: client_id client_secret 必传');
  }

  if (!params.authorize_type || !VALID_AUTHORIZE_TYPES.has(params.authorize_type)) {
    throw new Error('参数异常: authorize_type 类型错误');
  }

  // 各类型参数校验
  switch (params.authorize_type) {
    case 'silent':
      if (!params.grant_id) {
        throw new Error('参数异常: grant_id 必传');
      }
      break;
    case 'authorization_code':
      if (!params.code || !params.redirect_uri) {
        throw new Error('参数异常: code redirect_uri 必传');
      }
      break;
    case 'refresh_token':
      if (!params.refresh_token) {
        throw new Error('参数异常: refresh_token 必传');
      }
      break;
    default: {
      // 穷尽检查
      const _exhaustive: never = params;
      throw new Error(`参数异常: 未知的 authorize_type`);
    }
  }

  let urlPath = configHttp.getUrlToken();
  if (params.host != null) {
    urlPath = params.host + urlPath;
  }

  return utilHttp.post(urlPath, params as unknown as Record<string, unknown>);
}
