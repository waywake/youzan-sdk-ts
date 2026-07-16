/**
 * Generated from Youzan API docs for
 * youzan.crm.customer.points.operate.increasewithexpire@4.0.0.
 * 增加有效期积分。
 */

export interface YouzanCrmCustomerPointsOperateIncreasewithexpireV400User {
  account_type?: number;
  account_id?: string;
}

/** 传入 `params` JSON 字符串的业务参数结构。 */
export interface YouzanCrmCustomerPointsOperateIncreasewithexpireV400Request {
  event_type?: number;
  created_at?: string;
  biz_value?: string;
  is_do_ext_point?: boolean;
  /** 客户积分有效期校验时间。 */
  check_customer_expire_at?: string;
  channel_type?: number;
  user?: YouzanCrmCustomerPointsOperateIncreasewithexpireV400User;
  points?: number;
  [field: string]: unknown;
}

export interface YouzanCrmCustomerPointsOperateIncreasewithexpireV400Params {
  /** 文档示例要求将业务参数序列化为 JSON 字符串传入。 */
  params: string;
}

export interface YouzanCrmCustomerPointsOperateIncreasewithexpireV400Data {
  /** 示例返回字符串 `"true"`。 */
  is_success?: string;
}

export interface YouzanCrmCustomerPointsOperateIncreasewithexpireV400Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  request_id?: string;
  data?: YouzanCrmCustomerPointsOperateIncreasewithexpireV400Data;
}

export interface YouzanCrmCustomerPointsOperateIncreasewithexpireV400ApiMapEntry {
  'youzan.crm.customer.points.operate.increasewithexpire': {
    '4.0.0': {
      params: YouzanCrmCustomerPointsOperateIncreasewithexpireV400Params;
      response: YouzanCrmCustomerPointsOperateIncreasewithexpireV400Response;
    };
  };
}
