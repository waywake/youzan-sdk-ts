/**
 * OAuth 授权类型
 */
export type AuthorizeType = 'silent' | 'authorization_code' | 'refresh_token';

/** Token 请求公共字段 */
interface TokenBaseParams {
  client_id: string;
  client_secret: string;
  host?: string;
}

/** 自用型应用获取 Token */
export interface SilentTokenParams extends TokenBaseParams {
  authorize_type: 'silent';
  grant_id: number;
  refresh?: boolean;
}

/** 工具型应用获取 Token（授权码模式） */
export interface AuthorizationCodeTokenParams extends TokenBaseParams {
  authorize_type: 'authorization_code';
  code: string;
  redirect_uri: string;
}

/** 刷新 Token */
export interface RefreshTokenParams extends TokenBaseParams {
  authorize_type: 'refresh_token';
  refresh_token: string;
}

/** Token 请求参数联合类型 */
export type TokenParams =
  | SilentTokenParams
  | AuthorizationCodeTokenParams
  | RefreshTokenParams;

/** Token 响应数据 */
export interface TokenData {
  access_token: string;
  expires: number;
  scope: string;
  authority_id?: number;
  refresh_token?: string;
}

/** Token 接口响应体 */
export interface TokenGetResponse {
  success: boolean;
  code?: number;
  message?: string;
  data: TokenData;
}

// ===== Client 模块类型 =====

type LiteralStringUnion<T extends string> = T | (string & Record<never, never>);

/** API 调用配置 */
export interface ClientConfig {
  /** 是否使用富文本接口 */
  isRichText?: boolean;
}

/** API 调用参数 */
export interface ApiCallParams {
  /** 接口名称，如 'youzan.trade.get'（必传，已收录接口支持补全） */
  api: LiteralStringUnion<import('./api-types').YouzanApiMethod>;
  /** 接口版本，如 '4.0.0'（必传，已收录版本支持补全） */
  version: LiteralStringUnion<import('./api-types').YouzanApiKnownVersion>;
  /** OAuth access token（免登接口可不传） */
  token?: string;
  /** 请求参数 */
  params?: Record<string, unknown>;
  /** 上传文件：字段名到文件路径的映射 */
  files?: Map<string, string> | Record<string, string>;
  /** 额外配置 */
  config?: ClientConfig;
  /** 自定义主机地址 */
  host?: string;
}

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

type ParamsProperty<TParams> = RequiredKeys<TParams> extends never
  ? { params?: TParams }
  : { params: TParams };

export type TypedApiCallParams<
  TMethod extends import('./api-types').YouzanApiMethod,
  TVersion extends import('./api-types').YouzanApiVersion<TMethod>,
> = Omit<ApiCallParams, 'api' | 'version' | 'params'> & {
  /** 接口名称 */
  api: TMethod;
  /** 接口版本 */
  version: TVersion;
} & ParamsProperty<import('./api-types').YouzanApiParams<TMethod, TVersion>>;
