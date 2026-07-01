/**
 * Generated from Youzan API docs for youzan.retail.open.update.purchaseorderfinish@1.0.0.
 * Review before committing; docs occasionally contain array fields shown as JSON strings in examples.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenUpdatePurchaseorderfinishV100Params {
  /**
   * 采购订单编号。
   *
   * 可通过监听开放采购订单消息获取 retail_open_purchase_order_to_in，
   * 或通过创建采购订单接口 youzan.retail.open.purchaseorder.create 返回获取。
   */
  biz_bill_no: string;
}

/** true 表示修改成功，false 表示修改失败。 */
export type YouzanRetailOpenUpdatePurchaseorderfinishV100Data = boolean;

export type YouzanRetailOpenUpdatePurchaseorderfinishV100Response =
  YouzanApiSuccessResponse<YouzanRetailOpenUpdatePurchaseorderfinishV100Data>;

export interface YouzanRetailOpenUpdatePurchaseorderfinishV100ApiMapEntry {
  'youzan.retail.open.update.purchaseorderfinish': {
    '1.0.0': {
      params: YouzanRetailOpenUpdatePurchaseorderfinishV100Params;
      response: YouzanRetailOpenUpdatePurchaseorderfinishV100Response;
    };
  };
}
