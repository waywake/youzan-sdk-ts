/**
 * Generated from Youzan API docs for youzan.trade.refund.search@3.0.1.
 * 查询售后单列表。
 */

export interface YouzanTradeRefundSearchV301Params {
  tid?: string;
  refund_id?: string;
  sku_no?: string;
  goods_title?: string;
  status?: string;
  /** 1: 买家申请退款；2: 商家主动退款；3: 店铺换货；4: 发货-零售门店换货；5: 微商城换货。 */
  type?: number;
  pay_type?: number;
  pay_way?: number;
  /** 1: 不需要客服介入；2: 需要客服介入；3: 介入结束。 */
  cs_status?: 1 | 2 | 3;
  /** 1: 仅退款；2: 退货退款；3: 换货。 */
  demand?: 1 | 2 | 3;
  /** 1: 售中；2: 售后。 */
  phase?: 1 | 2;
  /** 0: 无需入库；10: 待入库；20: 归还库存成功。 */
  return_stock_status?: 0 | 10 | 20;
  yz_open_id?: string;
  buyer_phone?: string;
  /** 秒级时间戳；未传时默认最近三个月。 */
  create_time_start?: number | string;
  create_time_end?: number | string;
  update_time_start?: number | string;
  update_time_end?: number | string;
  /** 1: 门店；2: 网店。 */
  sale_way?: 1 | 2;
  /** 0: 有效；1: 无效退款单。 */
  invalid?: 0 | 1;
  /** 0: 原路退；1: 现金退；2: 标记退。 */
  refund_mode?: 0 | 1 | 2;
  search_tag?: number;
  /** page_no * page_size 不得超过 3000。 */
  page_size?: number;
  /** 最大 100。 */
  page_no?: number;
  /** 1: 未发货；2: 已发货。 */
  delivery_status?: 1 | 2;
  delivery_no?: string;
  node_kdt_id?: number | string;
}

/** 文档示例未展开售后单列表项字段。 */
export interface YouzanTradeRefundSearchV301Refund {
  [field: string]: unknown;
}

export interface YouzanTradeRefundSearchV301Data {
  refunds?: YouzanTradeRefundSearchV301Refund[];
}

export interface YouzanTradeRefundSearchV301Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanTradeRefundSearchV301Data;
}

export interface YouzanTradeRefundSearchV301ApiMapEntry {
  'youzan.trade.refund.search': {
    '3.0.1': {
      params: YouzanTradeRefundSearchV301Params;
      response: YouzanTradeRefundSearchV301Response;
    };
  };
}
