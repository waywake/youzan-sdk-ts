/**
 * Generated from Youzan API docs for youzan.retail.open.stockinorder.create@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenStockinorderCreateV300OrderItem {
  /** 商品编码，有规格时传商品规格编码 */
  sku_code: string;
  /** 商品唯一码，自定义，不能和系统中已有唯一码重复。 */
  unique_code?: string[];
  /** 入库数量 */
  quantity: string;
  /** 含税成本单价，单位：元（单据类型为采购入库时必填） */
  with_tax_cost?: string;
  /** 含税总金额（含税成本单价*数量），单位：元 */
  with_tax_amount?: string;
  /** 生产日期（只有采购入库需要） */
  produce_date?: string;
  /** 差异类型：1-商品漏发，2-商品丢失，3-商品报损。 */
  discrepancy_type?: number;
}

export interface YouzanRetailOpenStockinorderCreateV300Params {
  /** 入库单类型：DBRK=调拨入库 PSRK=配销入库 CGRK=采购入库 YHTHRK=配销退货入库 QTRK=其他入库 */
  order_type: string;
  /** 关联单据号，采购入库填采购订单号，配送入库填配送单号，调拨入库填调拨单号，销售退货填退货单号，要货退货入库填要货退货单号 */
  source_order_no?: string;
  /** 入库商品明细。文档 curl/Node 示例以 JSON 字符串传入。 */
  order_items?: YouzanRetailOpenStockinorderCreateV300OrderItem[] | string;
  /** 单据编号，支持字母和数字，长度不能超过30个字符 */
  biz_bill_no: string;
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取（连锁版需指明具体入到哪个仓库） */
  warehouse_code?: string;
  /** 供应商编码，可通过查询youzan.retail.open.supplier.query接口获取 */
  supplier_code?: string;
  /** 备注，200字以内 */
  remark?: string;
  /** 制单人 */
  creator: string;
  /** 创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time: string;
  /** 采购入库关联有赞系统内部采购订单时，设置为 true */
  purchase_in_if_related?: boolean;
  /** 已于 2021-04-26 废弃并取消校验，新接入开发者无需传值。 */
  retail_source?: string;
  /** order_type=QTRK 时必填入库原因，且原因必须为系统内存在并开启。 */
  custom_reason?: string;
}

/** 创建成功后的入库单号。 */
export type YouzanRetailOpenStockinorderCreateV300Data = string;

export type YouzanRetailOpenStockinorderCreateV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockinorderCreateV300Data> & {
    /** 入库校验不通过详细信息 */
    error_data?: Record<string, unknown>;
  };

export interface YouzanRetailOpenStockinorderCreateV300ApiMapEntry {
  'youzan.retail.open.stockinorder.create': {
    '3.0.0': {
      params: YouzanRetailOpenStockinorderCreateV300Params;
      response: YouzanRetailOpenStockinorderCreateV300Response;
    };
  };
}
