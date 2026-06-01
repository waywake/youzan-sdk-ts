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

// ===== Client 模块类型 =====

/** API 调用配置 */
export interface ClientConfig {
  /** 是否使用富文本接口 */
  isRichText?: boolean;
}

/** API 调用参数 */
export interface ApiCallParams {
  /** 接口名称，如 'youzan.trade.get'（必传） */
  api: string;
  /** 接口版本，如 '4.0.0'（必传） */
  version: string;
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
