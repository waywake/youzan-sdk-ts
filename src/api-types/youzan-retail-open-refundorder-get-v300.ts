/**
 * Generated from Youzan API docs for youzan.retail.open.refundorder.get@3.0.0.
 * 查询零售单店售后单详情。
 */

export interface YouzanRetailOpenRefundorderGetV300Params {
  /** 退款编号。 */
  refund_no: string;
  /** 历史来源校验字段；新接入开发者无需传值。 */
  retail_source?: string;
}

export interface YouzanRetailOpenRefundorderGetV300RefundItem {
  unit?: string;
  quantity?: string;
  sku_no?: string;
  real_sales_price?: string;
  item_type?: number;
  output_tax_rate?: string;
  sales_price?: string;
  order_item_no?: string;
  real_sales_amount?: string;
  delivery_order_no?: string;
  sku_code?: string;
  product_name?: string;
}

export interface YouzanRetailOpenRefundorderGetV300Data {
  order_no?: string;
  refund_demand?: string;
  refund_status?: string;
  refund_type?: string;
  create_time?: string;
  refund_no?: string;
  buyer_name?: string;
  version?: number | string;
  pay_way?: number;
  pay_way_desc?: string;
  refund_items?: YouzanRetailOpenRefundorderGetV300RefundItem[];
  refund_mode?: string;
  reason_desc?: string;
  refund_fee?: string;
  refund_principal?: string;
  sale_way?: string;
  [field: string]: unknown;
}

export interface YouzanRetailOpenRefundorderGetV300Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanRetailOpenRefundorderGetV300Data;
}

export interface YouzanRetailOpenRefundorderGetV300ApiMapEntry {
  'youzan.retail.open.refundorder.get': {
    '3.0.0': {
      params: YouzanRetailOpenRefundorderGetV300Params;
      response: YouzanRetailOpenRefundorderGetV300Response;
    };
  };
}
