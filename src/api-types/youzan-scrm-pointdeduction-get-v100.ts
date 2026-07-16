/**
 * Generated from Youzan API docs for youzan.scrm.pointdeduction.get@1.0.0.
 * 积分消费规则查询。
 */

export interface YouzanScrmPointdeductionGetV100Params {}

export interface YouzanScrmPointdeductionGetV100Content {
  plugin_id?: number;
  /** 策略值；部分策略以 JSON 字符串返回。 */
  policy_value?: string;
}

export interface YouzanScrmPointdeductionGetV100Data {
  kdt_id?: number;
  online_item_ids?: number[];
  content_list?: YouzanScrmPointdeductionGetV100Content[];
  online_range_type?: string;
  update_at?: number | string;
  default_point_deduct?: boolean;
}

export interface YouzanScrmPointdeductionGetV100Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  request_id?: string;
  data?: YouzanScrmPointdeductionGetV100Data;
}

export interface YouzanScrmPointdeductionGetV100ApiMapEntry {
  'youzan.scrm.pointdeduction.get': {
    '1.0.0': {
      params: YouzanScrmPointdeductionGetV100Params;
      response: YouzanScrmPointdeductionGetV100Response;
    };
  };
}
