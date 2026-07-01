/**
 * Generated from Youzan API docs for youzan.retail.open.update.purchaseprice@1.0.0.
 * Review before committing; docs occasionally contain array fields shown as JSON strings in examples.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenUpdatePurchasepriceV100Item {
  /** 商品库skuId(可通过youzan.retail.open.purchaseorder.get.3.0.0获取) */
  sku_id: YouzanLong;
  /** 采购单价，单位：元 */
  with_tax_unit_cost: string;
  /** 采购数量 */
  order_amount?: string;
}

export interface YouzanRetailOpenUpdatePurchasepriceV100Params {
  /** 采购订单号 */
  biz_bill_no: string;
  /** 更新商品。文档 curl/Node 示例以 JSON 字符串传入。 */
  items?: YouzanRetailOpenUpdatePurchasepriceV100Item[] | string;
}

/** 采购订单号 */
export type YouzanRetailOpenUpdatePurchasepriceV100Data = string;

export type YouzanRetailOpenUpdatePurchasepriceV100Response =
  YouzanApiSuccessResponse<YouzanRetailOpenUpdatePurchasepriceV100Data>;

export interface YouzanRetailOpenUpdatePurchasepriceV100ApiMapEntry {
  'youzan.retail.open.update.purchaseprice': {
    '1.0.0': {
      params: YouzanRetailOpenUpdatePurchasepriceV100Params;
      response: YouzanRetailOpenUpdatePurchasepriceV100Response;
    };
  };
}
