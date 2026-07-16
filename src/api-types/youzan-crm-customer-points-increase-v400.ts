/**
 * Generated from Youzan API docs for youzan.crm.customer.points.increase@4.0.0.
 * 给客户加积分。
 */

export interface YouzanCrmCustomerPointsIncreaseV400User {
  account_type?: number;
  account_id?: string;
}

/** 传入 `params` JSON 字符串的业务参数结构。 */
export interface YouzanCrmCustomerPointsIncreaseV400Request {
  reason?: string;
  /** 业务标识；与账户、biz_token 共同用于幂等控制。 */
  biz_value?: string;
  /** 业务令牌；可缺省。 */
  biz_token?: string;
  user?: YouzanCrmCustomerPointsIncreaseV400User;
  points?: number;
  created_at?: string;
}

export interface YouzanCrmCustomerPointsIncreaseV400Params {
  /** 文档示例要求将业务参数序列化为 JSON 字符串传入。 */
  params: string;
}

export interface YouzanCrmCustomerPointsIncreaseV400Data {
  /** 示例返回字符串 `"false"`。 */
  is_success?: string;
}

export interface YouzanCrmCustomerPointsIncreaseV400Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  /** 文档标记为废弃字段。 */
  request_id?: string;
  data?: YouzanCrmCustomerPointsIncreaseV400Data;
}

export interface YouzanCrmCustomerPointsIncreaseV400ApiMapEntry {
  'youzan.crm.customer.points.increase': {
    '4.0.0': {
      params: YouzanCrmCustomerPointsIncreaseV400Params;
      response: YouzanCrmCustomerPointsIncreaseV400Response;
    };
  };
}
