/**
 * Generated from Youzan API docs for youzan.retail.open.refundorder.query@3.0.0.
 * 查询连锁售后单列表。
 */

export interface YouzanRetailOpenRefundorderQueryV300Params {
  create_time_start?: string;
  create_time_end?: string;
  update_time_start?: string;
  update_time_end?: string;
  status?: string;
  /** 页码范围为 1–100。 */
  page_no?: number;
  /** 默认 20，最大 20。 */
  page_size?: number;
  /** 历史来源校验字段；新接入开发者无需传值。 */
  retail_source?: string;
}

export interface YouzanRetailOpenRefundorderQueryV300RefundItem {
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

export interface YouzanRetailOpenRefundorderQueryV300RefundOrder {
  order_no?: string;
  refund_demand?: string;
  refund_status?: string;
  refund_type?: string;
  create_time?: string;
  refund_no?: string;
  version?: number | string;
  pay_way?: number;
  pay_way_desc?: string;
  refund_items?: YouzanRetailOpenRefundorderQueryV300RefundItem[];
  refund_mode?: string;
  refund_fee?: string;
  refund_principal?: string;
  sale_way?: string;
  [field: string]: unknown;
}

export interface YouzanRetailOpenRefundorderQueryV300Data {
  refund_orders?: YouzanRetailOpenRefundorderQueryV300RefundOrder[];
  [field: string]: unknown;
}

export interface YouzanRetailOpenRefundorderQueryV300Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanRetailOpenRefundorderQueryV300Data;
}

export interface YouzanRetailOpenRefundorderQueryV300ApiMapEntry {
  'youzan.retail.open.refundorder.query': {
    '3.0.0': {
      params: YouzanRetailOpenRefundorderQueryV300Params;
      response: YouzanRetailOpenRefundorderQueryV300Response;
    };
  };
}
