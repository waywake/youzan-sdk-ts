/**
 * Generated from Youzan API docs for youzan.retail.open.stockoutorder.create@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenStockoutorderCreateV300OrderItem {
  /** 供应商编码 */
  supplier_code?: string;
  /** 商品编码，有规格时为商品规格编码 */
  sku_code: string;
  /** 商品唯一码 */
  unique_code?: string[];
  /** 出库数量 */
  quantity: string;
  /** 含税成本单价，单位：元 */
  with_tax_cost?: string;
  /** 含税总金额（含税成本单价数量）单位：元 */
  with_tax_amount?: string;
}

export interface YouzanRetailOpenStockoutorderCreateV300Params {
  /** 出库单类型（DBCK=调拨出库 PSCK=配销出库 BSCK=报损出库 YHTHCK=配销退货出库 CGTH=采购退货 QTCK=其他出库） */
  order_type: string;
  /** 关联单据号，配送出库填配送单号，调拨出库填调拨单号，要货退货出库填要货退货单号 采购退货出库时必填 */
  source_order_no?: string;
  /** 出库商品明细。文档 curl 示例以 JSON 字符串传入。 */
  order_items?: YouzanRetailOpenStockoutorderCreateV300OrderItem[] | string;
  /** 物流单号（配销出库用） */
  logistics_order_no?: string;
  /** 物流公司（配销出库用） */
  logistics_company_name?: string;
  /** 物流公司Id（配销出库用） */
  logistics_company_id?: YouzanLong;
  /** 单据编号 */
  biz_bill_no: string;
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取（连锁版需指明具体出库的仓库） */
  warehouse_code?: string;
  /** 备注 */
  remark?: string;
  /** 制单人 */
  creator: string;
  /** 创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time: string;
  /** 出库原因。出库类型为其他出库、报损出库时，必须要填写，且为系统内存在并且启用状态的出库原因 */
  custom_reason?: string;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响。详情见：https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
}

/** 创建成功后的出库单号。 */
export type YouzanRetailOpenStockoutorderCreateV300Data = string;

export type YouzanRetailOpenStockoutorderCreateV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockoutorderCreateV300Data> & {
    /** 错误数据描述 */
    error_data?: Record<string, unknown>;
  };

export interface YouzanRetailOpenStockoutorderCreateV300ApiMapEntry {
  'youzan.retail.open.stockoutorder.create': {
    '3.0.0': {
      params: YouzanRetailOpenStockoutorderCreateV300Params;
      response: YouzanRetailOpenStockoutorderCreateV300Response;
    };
  };
}
