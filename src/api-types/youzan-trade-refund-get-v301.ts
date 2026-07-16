/**
 * Generated from Youzan API docs for youzan.trade.refund.get@3.0.1.
 * 查询售后单详情。
 */

export interface YouzanTradeRefundGetV301QueryOption {
  include_all_consult_message?: boolean;
}

export interface YouzanTradeRefundGetV301Params {
  /** 售后单号；由年月日时分秒和 10 位随机数组成。 */
  refund_id: string;
  query_option?: YouzanTradeRefundGetV301QueryOption;
}

/** 退货物流信息；文档示例仅展开部分字段。 */
export interface YouzanTradeRefundGetV301Logistics {
  address?: string;
  receiver?: string;
  province?: string;
  city?: string;
  [field: string]: unknown;
}

/** 售后单详情字段由退款类型和查询选项决定。 */
export interface YouzanTradeRefundGetV301Data {
  reason?: number;
  refund_success_time?: string;
  demand_desc?: string;
  logistics?: YouzanTradeRefundGetV301Logistics;
  [field: string]: unknown;
}

export interface YouzanTradeRefundGetV301Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanTradeRefundGetV301Data;
}

export interface YouzanTradeRefundGetV301ApiMapEntry {
  'youzan.trade.refund.get': {
    '3.0.1': {
      params: YouzanTradeRefundGetV301Params;
      response: YouzanTradeRefundGetV301Response;
    };
  };
}
