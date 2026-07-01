/**
 * Generated from Youzan API docs for youzan.retail.open.query.warehousestock@1.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenQueryWarehousestockV100Params {
  /** 商品库商品规格编码,最多50个。文档 curl 示例以 JSON 字符串传入。 */
  sku_codes: string[] | string;
  /** 仓库/门店编码 */
  warehouse_code: string;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响。详情见：https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
}

export interface YouzanRetailOpenQueryWarehousestockV100DataItem {
  /** 商品规格编码 */
  sku_code?: string;
  /** 实物库存数量 */
  stock_num?: string;
  /** 实物库存占用数量 */
  freeze_num?: string;
  /** 计划库存数量 */
  plan_num?: string;
  /** 计划库存占用数量 */
  plan_freeze_num?: string;
  /** 在途库存数量 */
  road_num?: string;
}

export type YouzanRetailOpenQueryWarehousestockV100Data =
  YouzanRetailOpenQueryWarehousestockV100DataItem[];

export type YouzanRetailOpenQueryWarehousestockV100Response =
  YouzanApiSuccessResponse<YouzanRetailOpenQueryWarehousestockV100Data> & {
    /** 返回数据条数 */
    count?: number;
  };

export interface YouzanRetailOpenQueryWarehousestockV100ApiMapEntry {
  'youzan.retail.open.query.warehousestock': {
    '1.0.0': {
      params: YouzanRetailOpenQueryWarehousestockV100Params;
      response: YouzanRetailOpenQueryWarehousestockV100Response;
    };
  };
}
