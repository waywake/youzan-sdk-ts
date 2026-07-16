/**
 * Generated from Youzan API docs for
 * youzan.crm.customer.points.operate.unfreeze@4.0.0.
 * 解冻客户积分。
 */

export interface YouzanCrmCustomerPointsOperateUnfreezeV400User {
  operator_name?: string;
  account_type?: number;
  account_id?: string;
}

/** 传入 `params` JSON 字符串的业务参数结构。 */
export interface YouzanCrmCustomerPointsOperateUnfreezeV400Request {
  reason?: string;
  biz_token?: string;
  consume_type?: number;
  biz_value?: string;
  is_do_ext_point?: boolean;
  user?: YouzanCrmCustomerPointsOperateUnfreezeV400User;
}

export interface YouzanCrmCustomerPointsOperateUnfreezeV400Params {
  /** 文档示例要求将业务参数序列化为 JSON 字符串传入。 */
  params: string;
}

export interface YouzanCrmCustomerPointsOperateUnfreezeV400Data {
  /** 示例返回字符串 `"true"`。 */
  is_success?: string;
}

export interface YouzanCrmCustomerPointsOperateUnfreezeV400Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  request_id?: string;
  data?: YouzanCrmCustomerPointsOperateUnfreezeV400Data;
}

export interface YouzanCrmCustomerPointsOperateUnfreezeV400ApiMapEntry {
  'youzan.crm.customer.points.operate.unfreeze': {
    '4.0.0': {
      params: YouzanCrmCustomerPointsOperateUnfreezeV400Params;
      response: YouzanCrmCustomerPointsOperateUnfreezeV400Response;
    };
  };
}
