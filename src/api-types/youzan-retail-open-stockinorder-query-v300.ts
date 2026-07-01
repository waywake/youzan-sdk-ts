/**
 * Generated from Youzan API docs for youzan.retail.open.stockinorder.query@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenStockinorderQueryV300Params {
  /** 开始创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time_start: string;
  /** 截止创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time_end: string;
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取（如果不填默认查所有） */
  warehouse_code?: string;
  /** 入库单据类型 */
  order_type?: string;
  /** 页码，默认从1开始 */
  page_no?: number;
  /** 分页大小，默认每页20条数据 */
  page_size?: number;
  /** 是否展示商品明细，默认为true。展示明细信息该接口容易超时，建议为false。 */
  show_item?: boolean;
  /** 关联单号，创建入库单参数中的source_order_no */
  source_order_no?: string;
  /** 已于 2021-04-26 废弃并取消校验，新接入开发者无需传值。 */
  retail_source?: string;
}

export interface YouzanRetailOpenStockinorderQueryV300OrderItem {
  /** 商品编码/规格编码 */
  sku_code?: string;
  /** 商品编码/规格条码 */
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

export interface YouzanRetailOpenStockinorderQueryV300Order {
  /** 单据编号 */
  biz_bill_no?: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 单据日期 */
  create_time?: string;
  /** 入库单据类型 */
  order_type?: string;
  /** 供应商编码 */
  supplier_code?: string;
  /** 备注 */
  remark?: string;
  /** 制单人 */
  creator?: string;
  /** 关联单据号，如门店要货关联的要货单号 */
  source_order_no?: string;
  /** 单据明细 */
  order_items?: YouzanRetailOpenStockinorderQueryV300OrderItem[];
}

export interface YouzanRetailOpenStockinorderQueryV300Paginator {
  /** 当前页码 */
  page?: number;
  /** 每页条数 */
  page_size?: number;
  /** 总条数 */
  total_count?: number;
}

export interface YouzanRetailOpenStockinorderQueryV300Data {
  /** 入库单列表 */
  orders?: YouzanRetailOpenStockinorderQueryV300Order[];
  /** 分页信息 */
  paginator?: YouzanRetailOpenStockinorderQueryV300Paginator;
}

export type YouzanRetailOpenStockinorderQueryV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockinorderQueryV300Data>;

export interface YouzanRetailOpenStockinorderQueryV300ApiMapEntry {
  'youzan.retail.open.stockinorder.query': {
    '3.0.0': {
      params: YouzanRetailOpenStockinorderQueryV300Params;
      response: YouzanRetailOpenStockinorderQueryV300Response;
    };
  };
}
