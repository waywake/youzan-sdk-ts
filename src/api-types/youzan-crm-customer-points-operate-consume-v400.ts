/**
 * Generated from Youzan API docs for
 * youzan.crm.customer.points.operate.consume@4.0.0.
 * 消耗客户积分。
 */

export interface YouzanCrmCustomerPointsOperateConsumeV400User {
  account_type?: number;
  account_id?: string;
}

export interface YouzanCrmCustomerPointsOperateConsumeV400Request {
  user?: YouzanCrmCustomerPointsOperateConsumeV400User;
  reason?: string;
  biz_value?: string;
  source_kdt_id?: number;
  is_do_ext_point?: boolean;
  biz_token?: string;
  consume_type?: number;
}

export interface YouzanCrmCustomerPointsOperateConsumeV400Params {
  params: YouzanCrmCustomerPointsOperateConsumeV400Request;
}

export interface YouzanCrmCustomerPointsOperateConsumeV400Data {
  /** 示例返回字符串 `"true"`。 */
  is_success?: string;
}

export interface YouzanCrmCustomerPointsOperateConsumeV400Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  request_id?: string;
  data?: YouzanCrmCustomerPointsOperateConsumeV400Data;
}

export interface YouzanCrmCustomerPointsOperateConsumeV400ApiMapEntry {
  'youzan.crm.customer.points.operate.consume': {
    '4.0.0': {
      params: YouzanCrmCustomerPointsOperateConsumeV400Params;
      response: YouzanCrmCustomerPointsOperateConsumeV400Response;
    };
  };
}
