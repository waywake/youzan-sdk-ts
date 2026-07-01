/**
 * Generated from Youzan API docs for youzan.retail.open.stockoutorder.get@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenStockoutorderGetV300Params {
  /** 单据编号，通过出库单消息获取 */
  biz_bill_no?: string;
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取（连锁版必传） */
  warehouse_code?: string;
  /** 已于 2021-04-26 废弃并取消校验，新接入开发者无需传值。 */
  retail_source?: string;
}

export interface YouzanRetailOpenStockoutorderGetV300OrderItem {
  /** 商品编码/规格编码 */
  sku_code?: string;
  /** 商品条码/规格条码 */
  sku_no?: string;
  /** 商品名称 */
  product_name?: string;
  /** 单位 */
  unit?: string;
  /** 出库数量 */
  quantity?: string;
  /** 含税成本单价，单位：元 */
  with_tax_cost?: string;
  /** 含税总金额，单位：元（含税成本单价*数量） */
  with_tax_amount?: string;
  /** 不含税成本单价，单位：元 */
  without_tax_cost?: string;
  /** 不含税总金额，单位：元（不含税成本单价*数量） */
  without_tax_amount?: string;
  /** 销项税率 */
  output_tax_rate?: string;
  /** 进项税率 */
  input_tax_rate?: string;
  /** 成交单价，单位：元（单个商品的实付单价，销售出库单中才存在） */
  real_sales_price?: string;
  /** 含税总收入，单位：元（用户实付金额，销售出库单中才存在） */
  with_tax_income?: string;
  /** 唯一码 */
  serial_nos?: string[];
}

export interface YouzanRetailOpenStockoutorderGetV300Data {
  /** 单据编号 */
  biz_bill_no?: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 单据日期 */
  create_time?: string;
  /** 出库单类型 */
  order_type?: string;
  /** 备注 */
  remark?: string;
  /** 制单人 */
  creator?: string;
  /** 关联单据号，如交易出库关联的订单号 */
  source_order_no?: string;
  /** 出库单状态：0 完成出入库，6 待提交，7 待审核，8 已驳回，9 关闭，10 异步变更库存中 */
  out_stock_order_status?: number;
  /** 明细单 */
  order_items?: YouzanRetailOpenStockoutorderGetV300OrderItem[];
  /** 供应商Id */
  supplier_id?: YouzanLong;
  /** 供应商名称 */
  supplier_name?: string;
  /** 出库原因 */
  out_reason?: string;
}

export type YouzanRetailOpenStockoutorderGetV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockoutorderGetV300Data>;

export interface YouzanRetailOpenStockoutorderGetV300ApiMapEntry {
  'youzan.retail.open.stockoutorder.get': {
    '3.0.0': {
      params: YouzanRetailOpenStockoutorderGetV300Params;
      response: YouzanRetailOpenStockoutorderGetV300Response;
    };
  };
}
