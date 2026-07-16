/**
 * Generated from Youzan API docs for youzan.trade.refund.amount.get@1.0.0.
 * 查询订单售后金额详情。
 */

export interface YouzanTradeRefundAmountGetV100Params {
  /** 有赞订单号。 */
  tid: string;
  /** 订单明细 ID 列表；不传时查询整个订单。 */
  oids?: Array<number | string>;
}

export interface YouzanTradeRefundAmountGetV100AmountDetail {
  extra_amount?: number;
  total_amount?: number;
  items_amount?: number;
  postage_amount?: number;
}

export interface YouzanTradeRefundAmountGetV100OrderAggregate {
  applicable_detail?: YouzanTradeRefundAmountGetV100AmountDetail;
  refunded_detail?: YouzanTradeRefundAmountGetV100AmountDetail;
  processing_amount?: number;
  applicable_amount?: number;
  processing_detail?: YouzanTradeRefundAmountGetV100AmountDetail;
  pay_detail?: YouzanTradeRefundAmountGetV100AmountDetail;
  [field: string]: unknown;
}

export interface YouzanTradeRefundAmountGetV100Data {
  order_aggregate?: YouzanTradeRefundAmountGetV100OrderAggregate;
}

export interface YouzanTradeRefundAmountGetV100Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  request_id?: string;
  data?: YouzanTradeRefundAmountGetV100Data;
}

export interface YouzanTradeRefundAmountGetV100ApiMapEntry {
  'youzan.trade.refund.amount.get': {
    '1.0.0': {
      params: YouzanTradeRefundAmountGetV100Params;
      response: YouzanTradeRefundAmountGetV100Response;
    };
  };
}
