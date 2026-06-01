/**
 * API 调用客户端
 */

import type { ApiCallParams } from './types';
import * as configHttp from './config/http';
import * as utilHttp from './utils/http';

/**
 * 判断文件集合是否非空
 */
function hasFiles(files: Map<string, string> | Record<string, string> | undefined): boolean {
  if (!files) return false;
  if (files instanceof Map) return files.size > 0;
  return Object.keys(files).length > 0;
}

/**
 * 发起接口调用
 *
 * @param apiParam 接口调用参数 { api, version, token?, params?, files?, config?, host? }
 */
export function call(apiParam: ApiCallParams) {
  if (!apiParam || typeof apiParam !== 'object') {
    throw new Error('参数异常: api 必传');
  }
  if (!apiParam.api) {
    throw new Error('参数异常: api 必传');
  }
  if (!apiParam.version) {
    throw new Error('参数异常: version 必传');
  }

  let urlPath: string;
  if (apiParam.token != null) {
    urlPath = configHttp.getUrlAPI(apiParam.api, apiParam.version, apiParam.token);
    if (apiParam.config?.isRichText) {
      urlPath = configHttp.getUrlTextArea(apiParam.api, apiParam.version);
    }
  } else {
    urlPath = configHttp.getUrlAPIExempt(apiParam.api, apiParam.version);
  }

  if (apiParam.host != null) {
    urlPath = apiParam.host + urlPath;
  }

  // 上传文件
  if (hasFiles(apiParam.files)) {
    return utilHttp.upload(urlPath, apiParam.files!);
  }

  // 普通调用
  return utilHttp.post(urlPath, apiParam.params);
}
