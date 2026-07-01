/**
 * Generated from Youzan API docs for youzan.retail.open.stockoutorder.query@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenStockoutorderQueryV300Params {
  /** 开始创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time_start: string;
  /** 截止创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time_end: string;
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取（不传默认查所有） */
  warehouse_code?: string;
  /** 出库单类型 */
  order_type?: string;
  /** 页码，默认从1开始 */
  page_no?: number;
  /** 分页大小，默认每页20条数据 */
  page_size?: number;
  /** 关联单号，创建出库单参数中的source_order_no */
  source_order_no?: string;
  /** 已于 2021-04-26 废弃并取消校验，新接入开发者无需传值。 */
  retail_source?: string;
  /** 是否要order_items明细数据，默认为true。为true时可能因数据量大导致超时。 */
  show_item?: boolean;
}

export interface YouzanRetailOpenStockoutorderQueryV300OrderItem {
  /** 商品编码，有规格时为商品规格编码 */
  sku_code?: string;
  /** 商品条码，有规格时为商品规格条码 */
  sku_no?: string;
  /** 商品名称 */
  product_name?: string;
  /** 单位 */
  unit?: string;
  /** 出库数量 */
  quantity?: string;
  /** 含税成本单价，单位：元 */
  with_tax_cost?: string;
  /** 含税总金额（含税成本单价数量），单位：元 */
  with_tax_amount?: string;
  /** 不含税成本单价，单位：元 */
  without_tax_cost?: string;
  /** 不含税总金额（不含税成本单价数量），单位：元 */
  without_tax_amount?: string;
  /** 销项税率 */
  output_tax_rate?: string;
  /** 进项税率 */
  input_tax_rate?: string;
  /** 成交单价（单个商品的实付单价，销售出库单中才存在） */
  real_sales_price?: string;
  /** 含税总收入（用户实付金额，销售出库单中才存在） */
  with_tax_income?: string;
  /** 唯一码 */
  serial_nos?: string[];
  /** 订单总金额，单位：元 */
  total_sell?: string;
}

export interface YouzanRetailOpenStockoutorderQueryV300Order {
  /** 单据编号 */
  biz_bill_no?: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time?: string;
  /** 出库单类型 */
  order_type?: string;
  /** 备注 */
  remark?: string;
  /** 制单人 */
  creator?: string;
  /** 关联单据号，如交易出库关联的订单号 */
  source_order_no?: string;
  /** 明细单 */
  order_items?: YouzanRetailOpenStockoutorderQueryV300OrderItem[];
  /** 供应商Id */
  supplier_id?: YouzanLong;
  /** 供应商名称 */
  supplier_name?: string;
}

export interface YouzanRetailOpenStockoutorderQueryV300Paginator {
  /** 页数 */
  page?: number;
  /** 分页大小 */
  page_size?: number;
  /** 总条数 */
  total_count?: number;
}

export interface YouzanRetailOpenStockoutorderQueryV300Data {
  /** 出库单列表 */
  orders?: YouzanRetailOpenStockoutorderQueryV300Order[];
  /** 分页信息 */
  paginator?: YouzanRetailOpenStockoutorderQueryV300Paginator;
}

export type YouzanRetailOpenStockoutorderQueryV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockoutorderQueryV300Data>;

export interface YouzanRetailOpenStockoutorderQueryV300ApiMapEntry {
  'youzan.retail.open.stockoutorder.query': {
    '3.0.0': {
      params: YouzanRetailOpenStockoutorderQueryV300Params;
      response: YouzanRetailOpenStockoutorderQueryV300Response;
    };
  };
}
