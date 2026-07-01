/**
 * Generated from Youzan API docs for youzan.retail.open.stockinorder.get@3.0.0.
 * Review before committing; docs occasionally contain response/example mismatches.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenStockinorderGetV300Params {
  /** 入库单号，可通过youzan.retail.open.stockinorder.query接口或入库单消息获取 */
  biz_bill_no: string;
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取 */
  warehouse_code?: string;
}

export interface YouzanRetailOpenStockinorderGetV300OrderItem {
  /** 商品编码/规格编码 */
  sku_code?: string;
  /** 商品条码/规格条码 */
  sku_no?: string;
  /** 商品名称 */
  product_name?: string;
  /** 单位 */
  unit?: string;
  /** 入库数量 */
  quantity?: string;
  /** 含税成本单价，单位：元 */
  with_tax_cost?: string;
  /** 含税总金额（含税成本单价*数量），单位：元 */
  with_tax_amount?: string;
  /** 不含税成本单价，单位：元 */
  without_tax_cost?: string;
  /** 不含税总金额（不含税成本单价*数量），单位：元 */
  without_tax_amount?: string;
  /** 销项税率 */
  output_tax_rate?: string;
  /** 进项税率 */
  input_tax_rate?: string;
  /** 成交单价（单个商品的实付单价，销售出库单中才存在），单位：元 */
  real_sales_price?: string;
  /** 含税总收入（用户实付金额，销售出库单中才存在），单位：元 */
  with_tax_income?: string;
  /** 唯一码（商品为唯一码商品时返回） */
  serial_nos?: string[];
}

export interface YouzanRetailOpenStockinorderGetV300Data {
  /** 单据编号 */
  biz_bill_no?: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 单据日期 */
  create_time?: string;
  /** 入库单类型 */
  order_type?: string;
  /** 供应商编码 */
  supplier_code?: string;
  /** 备注 */
  remark?: string;
  /** 制单人 */
  creator?: string;
  /** 关联单据号 */
  source_order_no?: string;
  /** 入库单状态：0-已完成，1-采购单对账中，2-采购单已对账，6-待提交，7-待审核，8-已驳回，9-关闭，10-异步变更库存中 */
  status?: number;
  /** 入库原因 */
  in_reason?: string;
  /** 单据明细 */
  order_items?: YouzanRetailOpenStockinorderGetV300OrderItem[];
}

export type YouzanRetailOpenStockinorderGetV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockinorderGetV300Data>;

export interface YouzanRetailOpenStockinorderGetV300ApiMapEntry {
  'youzan.retail.open.stockinorder.get': {
    '3.0.0': {
      params: YouzanRetailOpenStockinorderGetV300Params;
      response: YouzanRetailOpenStockinorderGetV300Response;
    };
  };
}
