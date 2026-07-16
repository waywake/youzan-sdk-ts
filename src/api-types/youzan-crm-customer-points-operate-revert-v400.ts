/**
 * Generated from Youzan API docs for
 * youzan.crm.customer.points.operate.revert@4.0.0.
 * 回补客户积分。
 */

export interface YouzanCrmCustomerPointsOperateRevertV400User {
  operator_name?: string;
  account_type?: number;
  account_id?: string;
}

/** 传入 `params` JSON 字符串的业务参数结构。 */
export interface YouzanCrmCustomerPointsOperateRevertV400Request {
  user?: YouzanCrmCustomerPointsOperateRevertV400User;
  desc?: string;
  biz_value?: string;
  event_type?: number;
  is_do_ext_point?: boolean;
}

export interface YouzanCrmCustomerPointsOperateRevertV400Params {
  /** 文档示例要求将业务参数序列化为 JSON 字符串传入。 */
  params: string;
}

export interface YouzanCrmCustomerPointsOperateRevertV400Data {
  /** 示例返回字符串 `"true"`。 */
  is_success?: string;
}

export interface YouzanCrmCustomerPointsOperateRevertV400Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  request_id?: string;
  data?: YouzanCrmCustomerPointsOperateRevertV400Data;
}

export interface YouzanCrmCustomerPointsOperateRevertV400ApiMapEntry {
  'youzan.crm.customer.points.operate.revert': {
    '4.0.0': {
      params: YouzanCrmCustomerPointsOperateRevertV400Params;
      response: YouzanCrmCustomerPointsOperateRevertV400Response;
    };
  };
}
