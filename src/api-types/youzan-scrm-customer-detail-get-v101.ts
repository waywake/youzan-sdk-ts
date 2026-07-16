/**
 * Generated from Youzan API docs for youzan.scrm.customer.detail.get@1.0.1.
 * 查询客户详细信息。
 */

/** 文档支持在 `fields` 中用逗号组合的客户信息模块。 */
export type YouzanScrmCustomerDetailGetV101Field =
  | 'user_base'
  | 'tags'
  | 'benefit_cards'
  | 'benefit_level'
  | 'benefit_rights'
  | 'credit'
  | 'behavior'
  | 'giftcard'
  | 'prepaid'
  | 'coupon'
  | 'level'
  | 'auth_info';

export interface YouzanScrmCustomerDetailGetV101AccountInfo {
  /** 帐号类型；文档示例为 2。 */
  account_type?: number;
  /** 有赞帐号 ID；与 yz_open_id 至少传一个。 */
  account_id?: string;
  /** 有赞用户 ID；与 account_id 至少传一个。 */
  yz_open_id?: string;
}

export interface YouzanScrmCustomerDetailGetV101Params {
  /** 是否触发“查询客户详细信息”扩展点，默认 true。 */
  is_do_ext_point?: boolean;
  /** 有赞用户 ID，推荐使用。 */
  yz_open_id: string;
  /** 要查询的资料模块；多个模块以英文逗号分隔。 */
  fields: string;
  /** 用户帐号信息；其中 yz_open_id 与 account_id 不能同时为空。 */
  account_info: YouzanScrmCustomerDetailGetV101AccountInfo;
}

/**
 * 响应内容随 `fields` 变化。已选择的资料模块以各自的字段名返回，
 * 保留扩展索引以兼容文档后续新增的资料模块。
 */
export interface YouzanScrmCustomerDetailGetV101Data {
  [field: string]: unknown;
}

export interface YouzanScrmCustomerDetailGetV101Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanScrmCustomerDetailGetV101Data;
}

export interface YouzanScrmCustomerDetailGetV101ApiMapEntry {
  'youzan.scrm.customer.detail.get': {
    '1.0.1': {
      params: YouzanScrmCustomerDetailGetV101Params;
      response: YouzanScrmCustomerDetailGetV101Response;
    };
  };
}
