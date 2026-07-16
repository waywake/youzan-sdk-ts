/**
 * Generated from Youzan API docs for youzan.crm.customer.points.sync@4.0.0.
 * 同步客户积分。
 */

export interface YouzanCrmCustomerPointsSyncV400User {
  account_type?: number;
  account_id?: string;
}

export interface YouzanCrmCustomerPointsSyncV400Params {
  /** 文档示例将账户对象序列化为 JSON 字符串传入。 */
  user: string | YouzanCrmCustomerPointsSyncV400User;
  /** 同步后的积分值。 */
  points: number;
  /** 外部业务标识；相同账号下三个月内相同值会被视为重复操作。 */
  biz_value?: string;
  reason: string;
  /** 是否需要走扩展点；默认 true。 */
  is_do_extpoint?: boolean;
}

export interface YouzanCrmCustomerPointsSyncV400Data {
  is_success?: boolean;
}

export interface YouzanCrmCustomerPointsSyncV400Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanCrmCustomerPointsSyncV400Data;
}

export interface YouzanCrmCustomerPointsSyncV400ApiMapEntry {
  'youzan.crm.customer.points.sync': {
    '4.0.0': {
      params: YouzanCrmCustomerPointsSyncV400Params;
      response: YouzanCrmCustomerPointsSyncV400Response;
    };
  };
}
