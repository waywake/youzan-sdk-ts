/**
 * Generated from Youzan API docs for youzan.scrm.customer.points.rule.list@1.0.0.
 * 获取商家积分规则。
 */

export interface YouzanScrmCustomerPointsRuleListV100Params {}

export interface YouzanScrmCustomerPointsRuleListV100Rule {
  rule_id?: number;
  give_points?: number;
  is_send_notice?: number;
  rule_name?: string;
  amount_limit?: string;
  trade_limit?: number;
  fans_follow?: number;
  /** 部分商品规则附带返回的商品 ID。 */
  item_ids?: number[];
}

export interface YouzanScrmCustomerPointsRuleListV100Data {
  rules?: YouzanScrmCustomerPointsRuleListV100Rule[];
}

export interface YouzanScrmCustomerPointsRuleListV100Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanScrmCustomerPointsRuleListV100Data;
}

export interface YouzanScrmCustomerPointsRuleListV100ApiMapEntry {
  'youzan.scrm.customer.points.rule.list': {
    '1.0.0': {
      params: YouzanScrmCustomerPointsRuleListV100Params;
      response: YouzanScrmCustomerPointsRuleListV100Response;
    };
  };
}
