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

interface ApiCallBase {
  /** OAuth access token（免登接口可不传） */
  token?: string;
  /** 上传文件：字段名到文件路径的映射 */
  files?: Map<string, string> | Record<string, string>;
  /** 额外配置 */
  config?: ClientConfig;
  /** 自定义主机地址 */
  host?: string;
}

/** API 调用参数。未知或未收录接口的 params 按 Record 处理。 */
export interface ApiCallParams extends ApiCallBase {
  /** 接口名称，如 'youzan.trade.get'（已收录接口支持补全） */
  api: LiteralStringUnion<import('./api-types').YouzanApiMethod>;
  /** 接口版本，如 '4.0.0'（已收录版本支持补全） */
  version: LiteralStringUnion<import('./api-types').YouzanApiKnownVersion>;
  /** 请求参数 */
  params?: Record<string, unknown>;
}

/** 未收录 API 调用参数。 */
export type UntypedApiCallParams = ApiCallParams;

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

type ParamsProperty<TParams> = RequiredKeys<TParams> extends never
  ? { params?: TParams }
  : { params: TParams };

export type TypedApiCallParams<
  TMethod extends import('./api-types').YouzanApiMethod,
  TVersion extends import('./api-types').YouzanApiVersion<TMethod>,
> = ApiCallBase & {
  /** 接口名称 */
  api: TMethod;
  /** 接口版本 */
  version: TVersion;
} & ParamsProperty<import('./api-types').YouzanApiParams<TMethod, TVersion>>;

/** 已收录 API 调用参数。api + version 会约束 params。 */
export type KnownApiCallParams = {
  [TMethod in import('./api-types').YouzanApiMethod]: {
    [TVersion in import('./api-types').YouzanApiVersion<TMethod>]: TypedApiCallParams<
      TMethod,
      TVersion
    >;
  }[import('./api-types').YouzanApiVersion<TMethod>];
}[import('./api-types').YouzanApiMethod];

export type ApiCallInput<TMethod extends string, TVersion extends string> =
  TMethod extends import('./api-types').YouzanApiMethod
    ? TVersion extends import('./api-types').YouzanApiVersion<TMethod>
      ? TypedApiCallParams<TMethod, TVersion>
      : UntypedApiCallParams & { api: TMethod; version: TVersion }
    : UntypedApiCallParams & { api: TMethod; version: TVersion };

export type ApiCallResult<TMethod extends string, TVersion extends string> =
  TMethod extends import('./api-types').YouzanApiMethod
    ? TVersion extends import('./api-types').YouzanApiVersion<TMethod>
      ? import('./api-types').YouzanApiResponse<TMethod, TVersion>
      : unknown
    : unknown;

/** 获取 access token 的方法 */
export type AccessTokenProvider = () => string | Promise<string>;

/** Client 实例配置 */
export interface ClientOptions {
  /** 获取 OAuth access token 的方法 */
  getToken?: AccessTokenProvider;
  /** 默认自定义主机地址 */
  host?: string;
}

/** Client 实例通用 API 调用参数 */
export interface ClientCallParams extends Omit<ApiCallParams, 'token' | 'host'> {
  /** OAuth access token；不传时使用 Client 实例的 getToken */
  token?: string;
  /** 自定义主机地址；不传时使用 Client 实例的 host */
  host?: string;
  /** 是否调用免登接口；为 true 时不注入 token */
  authExempt?: boolean;
}

/** Client 实例固定 API 调用选项 */
export interface ClientTokenApiOptions {
  /** OAuth access token；不传时使用 Client 实例的 getToken */
  token?: string;
  /** 自定义主机地址；不传时使用 Client 实例的 host */
  host?: string;
}

/** 固定 API 封装定义 */
export interface ApiDefinition {
  /** 接口名称，如 'youzan.trade.get' */
  api: string;
  /** 接口版本，如 '4.0.0' */
  version: string;
  /** 额外配置 */
  config?: ClientConfig;
}

/** Token 类固定 API 封装调用参数 */
export interface TokenApiCallParams<TParams extends Record<string, unknown> = Record<string, unknown>> {
  /** OAuth access token（必传） */
  token: string;
  /** 请求参数 */
  params?: TParams;
  /** 自定义主机地址 */
  host?: string;
}

/** 订单批量查询接口订单状态 */
export type TradesSoldGetStatus =
  | 'WAIT_BUYER_PAY'
  | 'WAIT_SELLER_SEND_GOODS'
  | 'WAIT_BUYER_CONFIRM_GOODS'
  | 'TRADE_SUCCESS'
  | 'TRADE_CLOSE'
  | 'TRADE_REFUND';

/** 订单批量查询接口物流类型 */
export type TradesSoldGetExpressType =
  | 'LOCAL_DELIVERY'
  | 'SELF_FETCH'
  | 'EXPRESS';

/** 订单批量查询接口订单类型 */
export type TradesSoldGetType =
  | 'NORMAL'
  | 'PEERPAY'
  | 'GIFT'
  | 'FX_CAIGOUDAN'
  | 'PRESENT'
  | 'WISH'
  | 'QRCODE'
  | 'QRCODE_3RD'
  | 'FX_MERGED'
  | 'VERIFIED'
  | 'PINJIAN'
  | 'REBATE'
  | 'FX_QUANYUANDIAN'
  | 'FX_DEPOSIT'
  | 'PF'
  | 'GROUP'
  | 'HOTEL'
  | 'TAKE_AWAY'
  | 'CATERING_OFFLINE'
  | 'CATERING_QRCODE'
  | 'BEAUTY_APPOINTMENT'
  | 'BEAUTY_SERVICE'
  | 'KNOWLEDGE_PAY'
  | 'GIFT_CARD';

/** 订单批量查询接口请求参数 */
export interface TradesSoldGetParams extends Record<string, unknown> {
  /** 通用搜索字段：订单号、收货人手机号、收货人手机号后四位等 */
  keywords?: string;
  /** 维权状态 */
  feedback_desc?: string[];
  /** 有赞对外统一 openId */
  yz_open_id?: string;
  /** 订单类型 */
  type?: TradesSoldGetType | string;
  /** 页码，最大不超过 100 */
  page_no?: number;
  /** 每页条数，默认 20，最大不超过 100 */
  page_size?: number;
  /** 按订单创建时间开始，格式: yyyy-MM-dd HH:mm:ss */
  start_created?: string;
  /** 按订单创建时间结束，格式: yyyy-MM-dd HH:mm:ss */
  end_created?: string;
  /** 按订单更新时间开始，格式: yyyy-MM-dd HH:mm:ss */
  start_update?: string;
  /** 按订单更新时间结束，格式: yyyy-MM-dd HH:mm:ss */
  end_update?: string;
  /** 按订单完成时间开始，格式: yyyy-MM-dd HH:mm:ss */
  start_success?: string;
  /** 按订单完成时间结束，格式: yyyy-MM-dd HH:mm:ss */
  end_success?: string;
  /** 同城送预计送达时间-开始时间，格式: yyyy-MM-dd HH:mm:ss */
  delivery_start_time?: string;
  /** 同城送预计送达时间-结束时间，格式: yyyy-MM-dd HH:mm:ss */
  delivery_end_time?: string;
  /** 订单状态 */
  status?: TradesSoldGetStatus | string;
  /** 订单号 */
  tid?: string;
  /** 商品 ID */
  goods_id?: number | string;
  /** 物流类型 */
  express_type?: TradesSoldGetExpressType | string;
  /** 门店 ID/网点 ID */
  offline_id?: number | string;
  /** 加星数量 */
  star?: number[];
  /** 退款状态 */
  refund_state?: number | string;
}

/** 订单批量查询接口调用参数 */
export interface TradesSoldGetCallParams extends TokenApiCallParams<TradesSoldGetParams> {}
