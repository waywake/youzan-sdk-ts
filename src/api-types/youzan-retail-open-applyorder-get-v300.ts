/**
 * Generated from Youzan API docs for youzan.retail.open.applyorder.get@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenApplyorderGetV300Params {
  /** 要货申请单号，可通过youzan.retail.open.applyorder.query接口或接要货申请单消息获取 */
  apply_order_no: string;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响。详情见：https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
}

export interface YouzanRetailOpenApplyorderGetV300Data {
  [key: string]: unknown;
}

export type YouzanRetailOpenApplyorderGetV300Response = YouzanApiSuccessResponse<YouzanRetailOpenApplyorderGetV300Data>;

export interface YouzanRetailOpenApplyorderGetV300ApiMapEntry {
  "youzan.retail.open.applyorder.get": {
    "3.0.0": {
      params: YouzanRetailOpenApplyorderGetV300Params;
      response: YouzanRetailOpenApplyorderGetV300Response;
    };
  };
}
