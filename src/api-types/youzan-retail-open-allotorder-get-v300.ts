/**
 * Generated from Youzan API docs for youzan.retail.open.allotorder.get@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenAllotorderGetV300Params {
  /** 调拨单号，可以通过接入调拨单消息获取 */
  allot_order_no: string;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响。详情见：https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
}

export interface YouzanRetailOpenAllotorderGetV300Data {
  [key: string]: unknown;
}

export type YouzanRetailOpenAllotorderGetV300Response = YouzanApiSuccessResponse<YouzanRetailOpenAllotorderGetV300Data>;

export interface YouzanRetailOpenAllotorderGetV300ApiMapEntry {
  "youzan.retail.open.allotorder.get": {
    "3.0.0": {
      params: YouzanRetailOpenAllotorderGetV300Params;
      response: YouzanRetailOpenAllotorderGetV300Response;
    };
  };
}
