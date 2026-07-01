/**
 * Generated from Youzan API docs for youzan.retail.open.purchaseorder.create@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenPurchaseorderCreateV300OrderItem {
  /** 商品无规格时传商品编码，有规格时要指定某一规格传规格编码，支持自定义，英文和数字组合 */
  sku_code: string;
  /** 商品无规格时传商品条码，有规格时要指定某一规格传规格条码，支持自定义，英文和数字组合 */
  sku_no?: string;
  /** 含税采购单价，单位：元 */
  with_tax_price_str: string;
  /** 商品数量 */
  apply_num: string;
}

export interface YouzanRetailOpenPurchaseorderCreateV300Request {
  /** 供应商编码，可通过youzan.retail.open.supplier.query接口获取 */
  supplier_code: string;
  /** 单据日期，格式：yyyy-MM-dd HH:mm:ss */
  create_time: string;
  /** 预计送达时间，格式：yyyy-MM-dd */
  estimated_arrival_time: string;
  /** 采购订单商品明细 */
  order_items?: YouzanRetailOpenPurchaseorderCreateV300OrderItem[];
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取 */
  warehouse_code: string;
  /** 外部单据编号(用于创建单据幂等使用,不作为采购单号)，支持字母和数字，长度不能超过30个字符 */
  biz_bill_no: string;
  /** 备注，200字以内 */
  remark: string;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响。详情见：https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
}

export interface YouzanRetailOpenPurchaseorderCreateV300Params {
  /** 请求参数对象。文档 curl/Node 示例以 JSON 字符串传入。 */
  request?: YouzanRetailOpenPurchaseorderCreateV300Request | string;
}

/** 单据号 */
export type YouzanRetailOpenPurchaseorderCreateV300Data = string;

export type YouzanRetailOpenPurchaseorderCreateV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenPurchaseorderCreateV300Data>;

export interface YouzanRetailOpenPurchaseorderCreateV300ApiMapEntry {
  'youzan.retail.open.purchaseorder.create': {
    '3.0.0': {
      params: YouzanRetailOpenPurchaseorderCreateV300Params;
      response: YouzanRetailOpenPurchaseorderCreateV300Response;
    };
  };
}
