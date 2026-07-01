/**
 * Generated from Youzan API docs for youzan.retail.open.applyorder.check@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenApplyorderCheckV300Item {
  /** 商品编码/规格编码 */
  sku_code: string;
  /** 预发数量 */
  num: string;
  /** 审核配送价，单位：元 */
  checked_delivery_cost: string;
}

export interface YouzanRetailOpenApplyorderCheckV300Params {
  /** 要货申请单号，可通过youzan.retail.open.applyorder.query接口或接要货申请单消息获取 */
  apply_order_no: string;
  /** 调出仓库编码，可通过youzan.retail.open.warehouse.query接口获取 */
  from_warehouse_code: string;
  /** 商品信息。文档 curl/Node 示例以 JSON 字符串传入。 */
  items?: YouzanRetailOpenApplyorderCheckV300Item[] | string;
  /** 已于 2021-04-26 废弃并取消校验，新接入开发者无需传值。 */
  retail_source?: string;
}

/** 调拨/配销单单号。 */
export type YouzanRetailOpenApplyorderCheckV300Data = string;

export type YouzanRetailOpenApplyorderCheckV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenApplyorderCheckV300Data>;

export interface YouzanRetailOpenApplyorderCheckV300ApiMapEntry {
  'youzan.retail.open.applyorder.check': {
    '3.0.0': {
      params: YouzanRetailOpenApplyorderCheckV300Params;
      response: YouzanRetailOpenApplyorderCheckV300Response;
    };
  };
}
