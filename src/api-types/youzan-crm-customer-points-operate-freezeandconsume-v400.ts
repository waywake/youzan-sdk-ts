/**
 * Generated from Youzan API docs for
 * youzan.crm.customer.points.operate.freezeandconsume@4.0.0.
 * 冻结并消耗客户积分。
 */

export interface YouzanCrmCustomerPointsOperateFreezeandconsumeV400AccountInfo {
  account_type?: number;
  account_id?: string;
}

/** 传入 `params` JSON 字符串的业务参数结构。 */
export interface YouzanCrmCustomerPointsOperateFreezeandconsumeV400Request {
  biz_token?: string;
  consume_type?: number;
  biz_value?: string;
  is_do_ext_point?: boolean;
  operator_name?: string;
  account_info?: YouzanCrmCustomerPointsOperateFreezeandconsumeV400AccountInfo;
  points?: number;
}

export interface YouzanCrmCustomerPointsOperateFreezeandconsumeV400Params {
  /** 文档示例要求将业务参数序列化为 JSON 字符串传入。 */
  params: string;
}

export interface YouzanCrmCustomerPointsOperateFreezeandconsumeV400Data {
  /** 示例返回字符串 `"true"`。 */
  is_success?: string;
}

export interface YouzanCrmCustomerPointsOperateFreezeandconsumeV400Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  request_id?: string;
  data?: YouzanCrmCustomerPointsOperateFreezeandconsumeV400Data;
}

export interface YouzanCrmCustomerPointsOperateFreezeandconsumeV400ApiMapEntry {
  'youzan.crm.customer.points.operate.freezeandconsume': {
    '4.0.0': {
      params: YouzanCrmCustomerPointsOperateFreezeandconsumeV400Params;
      response: YouzanCrmCustomerPointsOperateFreezeandconsumeV400Response;
    };
  };
}
