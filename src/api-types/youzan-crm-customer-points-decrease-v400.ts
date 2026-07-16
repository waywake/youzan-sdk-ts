/**
 * Generated from Youzan API docs for youzan.crm.customer.points.decrease@4.0.0.
 * 给客户减积分。
 */

export interface YouzanCrmCustomerPointsDecreaseV400User {
  account_type?: number;
  account_id?: string;
}

/** 传入 `params` JSON 字符串的业务参数结构。 */
export interface YouzanCrmCustomerPointsDecreaseV400Request {
  reason?: string;
  biz_value?: string;
  /** 业务令牌；可用于幂等控制。 */
  biz_token?: string;
  user?: YouzanCrmCustomerPointsDecreaseV400User;
  points?: number;
  created_at?: string;
}

export interface YouzanCrmCustomerPointsDecreaseV400Params {
  /** 文档示例要求将业务参数序列化为 JSON 字符串传入。 */
  params: string;
}

export interface YouzanCrmCustomerPointsDecreaseV400Data {
  is_success?: string;
}

export interface YouzanCrmCustomerPointsDecreaseV400Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  /** 文档标记为废弃字段。 */
  request_id?: string;
  data?: YouzanCrmCustomerPointsDecreaseV400Data;
}

export interface YouzanCrmCustomerPointsDecreaseV400ApiMapEntry {
  'youzan.crm.customer.points.decrease': {
    '4.0.0': {
      params: YouzanCrmCustomerPointsDecreaseV400Params;
      response: YouzanCrmCustomerPointsDecreaseV400Response;
    };
  };
}
