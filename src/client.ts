/**
 * API 调用客户端
 */

import type { AccessTokenProvider, ApiCallInput, ApiCallResult, ApiDefinition, ClientCallParams, ClientOptions, ClientTokenApiOptions, TokenApiCallParams, TradesSoldGetParams } from './types';
import type { HttpResponse } from './utils/http';
import { apiDefinitions } from './api-definitions';
import * as configHttp from './config/http';
import * as utilHttp from './utils/http';

interface RuntimeApiCallParams {
  api?: string;
  version?: string;
  token?: string;
  params?: unknown;
  files?: Map<string, string> | Record<string, string>;
  config?: {
    isRichText?: boolean;
  };
  host?: string;
  signal?: AbortSignal;
}

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
export function call<TMethod extends string, TVersion extends string>(
  apiParam: ApiCallInput<TMethod, TVersion>,
): Promise<HttpResponse<ApiCallResult<TMethod, TVersion>>>;
export function call(
  apiParam: RuntimeApiCallParams | null | undefined,
): Promise<HttpResponse<any>> {
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
    return utilHttp.upload(urlPath, apiParam.files!, apiParam.signal);
  }

  // 普通调用
  return utilHttp.post(
    urlPath,
    apiParam.params as Record<string, unknown> | undefined,
    apiParam.signal,
  );
}

/**
 * 创建 Token 类固定 API 调用方法
 */
export function createTokenApiCaller<TParams extends Record<string, unknown> = Record<string, unknown>>(
  definition: ApiDefinition,
) {
  return function tokenApiCall(apiParam: TokenApiCallParams<TParams>) {
    if (!apiParam || typeof apiParam !== 'object') {
      throw new Error('参数异常: token 必传');
    }
    if (!apiParam.token) {
      throw new Error('参数异常: token 必传');
    }

    return call({
      api: definition.api,
      version: definition.version,
      token: apiParam.token,
      params: apiParam.params,
      config: definition.config,
      host: apiParam.host,
      signal: apiParam.signal,
    });
  };
}

/** 订单批量查询接口 */
export const tradesSoldGet = createTokenApiCaller<TradesSoldGetParams>(apiDefinitions.tradesSoldGet);

/**
 * 有赞云 API 客户端实例
 */
export class Client {
  private readonly getToken?: AccessTokenProvider;
  private readonly host?: string;

  constructor(options: ClientOptions = {}) {
    this.getToken = options.getToken;
    this.host = options.host;
  }

  private async requireToken(token?: string): Promise<string> {
    const accessToken = token ?? await this.getToken?.();
    if (!accessToken) {
      throw new Error('参数异常: token 必传');
    }
    return accessToken;
  }

  /**
   * 发起实例接口调用，不传 token 时自动调用 getToken。
   */
  async call(apiParam: ClientCallParams) {
    const { authExempt, token, host, ...rest } = apiParam;
    const urlHost = host ?? this.host;

    if (authExempt) {
      return call({ ...rest, host: urlHost });
    }

    return call({
      ...rest,
      token: await this.requireToken(token),
      host: urlHost,
    });
  }

  /**
   * 订单批量查询接口
   */
  async tradesSoldGet(params?: TradesSoldGetParams, options: ClientTokenApiOptions = {}) {
    return this.call({
      api: apiDefinitions.tradesSoldGet.api,
      version: apiDefinitions.tradesSoldGet.version,
      params,
      token: options.token,
      host: options.host,
      signal: options.signal,
    });
  }
}
