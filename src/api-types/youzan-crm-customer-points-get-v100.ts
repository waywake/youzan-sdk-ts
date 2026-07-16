/**
 * Generated from Youzan API docs for youzan.crm.customer.points.get@1.0.0.
 * 查询客户当前积分。
 */

export interface YouzanCrmCustomerPointsGetV100User {
  account_type?: number;
  account_id?: string;
}

export interface YouzanCrmCustomerPointsGetV100Params {
  user: YouzanCrmCustomerPointsGetV100User;
  /** 是否需要走扩展点；默认 true。 */
  is_do_extpoint?: boolean;
  /** 是否查询积分账户版本号；默认 false。 */
  is_query_points_account_version?: boolean;
}

export interface YouzanCrmCustomerPointsGetV100Data {
  point?: number;
}

export interface YouzanCrmCustomerPointsGetV100Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  /** 文档标记为废弃字段。 */
  request_id?: string;
  data?: YouzanCrmCustomerPointsGetV100Data;
}

export interface YouzanCrmCustomerPointsGetV100ApiMapEntry {
  'youzan.crm.customer.points.get': {
    '1.0.0': {
      params: YouzanCrmCustomerPointsGetV100Params;
      response: YouzanCrmCustomerPointsGetV100Response;
    };
  };
}
