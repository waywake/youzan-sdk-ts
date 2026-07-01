/**
 * Generated from Youzan API docs for youzan.retail.open.update.uniquecode@1.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenUpdateUniquecodeV100Params {
  /** 商品编码 */
  sku_code?: string;
  /** 唯一码 */
  serial_no: string;
}

/** true 表示操作成功，false 表示操作失败。 */
export type YouzanRetailOpenUpdateUniquecodeV100Data = boolean;

export type YouzanRetailOpenUpdateUniquecodeV100Response =
  YouzanApiSuccessResponse<YouzanRetailOpenUpdateUniquecodeV100Data>;

export interface YouzanRetailOpenUpdateUniquecodeV100ApiMapEntry {
  'youzan.retail.open.update.uniquecode': {
    '1.0.0': {
      params: YouzanRetailOpenUpdateUniquecodeV100Params;
      response: YouzanRetailOpenUpdateUniquecodeV100Response;
    };
  };
}
