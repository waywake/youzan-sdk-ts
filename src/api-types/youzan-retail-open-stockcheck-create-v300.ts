/**
 * Generated from Youzan API docs for youzan.retail.open.stockcheck.create@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenStockcheckCreateV300OrderItem {
  /** 真实盘点数量 */
  real_amount: string;
  /** 商品编码，有规格的商品传规格编码 */
  sku_code: string;
  /** 商品唯一码 */
  unique_code?: string[];
}

export interface YouzanRetailOpenStockcheckCreateV300Params {
  /** 当前页（从1开始） */
  page_no: number;
  /** 每页记录数（最大值为500） */
  page_size: number;
  /** 总记录数 */
  total_count: number;
  /** 盘点单商品明细。文档 curl/Node 示例以 JSON 字符串传入。 */
  order_items?: YouzanRetailOpenStockcheckCreateV300OrderItem[] | string;
  /** 单据编号，支持字母和数字，长度不能超过30个字符 */
  biz_bill_no: string;
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取 */
  warehouse_code?: string;
  /** 备注，200字以内 */
  remark?: string;
  /** 制单人 */
  creator: string;
  /** 单据日期，格式：yyyy-MM-dd HH:mm:ss */
  create_time?: string;
  /** 已于 2021-04-26 废弃并取消校验，新接入开发者无需传值。 */
  retail_source?: string;
}

/** 创建成功后的盘点单编号。 */
export type YouzanRetailOpenStockcheckCreateV300Data = string;

export type YouzanRetailOpenStockcheckCreateV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockcheckCreateV300Data>;

export interface YouzanRetailOpenStockcheckCreateV300ApiMapEntry {
  'youzan.retail.open.stockcheck.create': {
    '3.0.0': {
      params: YouzanRetailOpenStockcheckCreateV300Params;
      response: YouzanRetailOpenStockcheckCreateV300Response;
    };
  };
}
