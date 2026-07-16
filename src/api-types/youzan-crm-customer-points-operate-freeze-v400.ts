/**
 * Generated from Youzan API docs for youzan.crm.customer.points.operate.freeze@4.0.0.
 * 冻结客户积分。
 */

export interface YouzanCrmCustomerPointsOperateFreezeV400User {
  operator_name?: string;
  account_type?: number;
  account_id?: string;
}

/** 传入 `params` JSON 字符串的业务参数结构。 */
export interface YouzanCrmCustomerPointsOperateFreezeV400Request {
  reason?: string;
  biz_token?: string;
  consume_type?: number;
  biz_value?: string;
  is_do_ext_point?: boolean;
  points?: number;
  user?: YouzanCrmCustomerPointsOperateFreezeV400User;
}

export interface YouzanCrmCustomerPointsOperateFreezeV400Params {
  /** 文档示例要求将业务参数序列化为 JSON 字符串传入。 */
  params: string;
}

export interface YouzanCrmCustomerPointsOperateFreezeV400Data {
  /** 示例返回字符串 `"true"`。 */
  is_success?: string;
}

export interface YouzanCrmCustomerPointsOperateFreezeV400Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  request_id?: string;
  data?: YouzanCrmCustomerPointsOperateFreezeV400Data;
}

export interface YouzanCrmCustomerPointsOperateFreezeV400ApiMapEntry {
  'youzan.crm.customer.points.operate.freeze': {
    '4.0.0': {
      params: YouzanCrmCustomerPointsOperateFreezeV400Params;
      response: YouzanCrmCustomerPointsOperateFreezeV400Response;
    };
  };
}
