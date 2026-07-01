/**
 * Generated from Youzan API docs for youzan.retail.open.modify.planstock@1.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenModifyPlanstockV100Item {
  /** 商品sku编码/规格编码 */
  sku_code: string;
  /** 最多支持小数点后3位,不能小于0计划库存不能大于999999.999 */
  plan_stock: string;
}

export interface YouzanRetailOpenModifyPlanstockV100Params {
  /** 仓库编码(连锁必填) */
  warehouse_code?: string;
  /** 幂等号(最多64个字符) */
  idempotent_no: string;
  /** sku商品集合(最多50个)。文档 curl 示例以 JSON 字符串传入。 */
  items?: YouzanRetailOpenModifyPlanstockV100Item[] | string;
}

/** 表示本次请求是否成功。true: 成功，false: 失败。 */
export type YouzanRetailOpenModifyPlanstockV100Data = boolean;

export type YouzanRetailOpenModifyPlanstockV100Response =
  YouzanApiSuccessResponse<YouzanRetailOpenModifyPlanstockV100Data>;

export interface YouzanRetailOpenModifyPlanstockV100ApiMapEntry {
  'youzan.retail.open.modify.planstock': {
    '1.0.0': {
      params: YouzanRetailOpenModifyPlanstockV100Params;
      response: YouzanRetailOpenModifyPlanstockV100Response;
    };
  };
}
