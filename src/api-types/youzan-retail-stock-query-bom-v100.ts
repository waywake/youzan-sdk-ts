/**
 * Generated from Youzan API docs for youzan.retail.stock.query.bom@1.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailStockQueryBomV100Params {
  /** 配方编号 */
  bom_no: string;
  /** 已废弃，新接入开发者无需传值，已对接开发者不受影响。 */
  yz_open_id?: YouzanLong;
}

export interface YouzanRetailStockQueryBomV100FinishedSku {
  /** 店铺在有赞的id标识，有赞平台生成，在有赞平台唯一，用于判断信息属于哪一个店铺 */
  kdt_id?: YouzanLong;
  /** 商品名称 */
  name?: string;
  /** 商品图片链接 */
  image_url?: string;
  /** 库存单位 */
  unit?: string;
  /** 零售价，单位：元 */
  retail_price?: string;
  /** 成本单价，单位：元 */
  with_tax_cost?: string;
  /** 毛利率 */
  gross_profit_rate?: string;
}

export interface YouzanRetailStockQueryBomV100RelateSku {
  /** 店铺在有赞的id标识，有赞平台生成，在有赞平台唯一，用于判断信息属于哪一个店铺 */
  kdt_id?: YouzanLong;
  /** 原材料名称 */
  name?: string;
  /** 库存单位 */
  unit?: string;
  /** 商品图片 */
  photo_url?: string;
  /** 加工原料比例数量 */
  relate_combine_num?: string;
  /** 成本单价，单位：元 */
  with_tax_cost?: string;
  /** 成本金额 */
  cost_amount?: string;
}

export interface YouzanRetailStockQueryBomV100Data {
  /** 店铺在有赞的id标识，有赞平台生成，在有赞平台唯一，用于判断信息属于哪一个店铺 */
  kdt_id?: YouzanLong;
  /** 配方单编号 */
  bom_no?: string;
  /** 配方单名称 */
  bom_name?: string;
  /** 备注 */
  remark?: string;
  /** 加工成品 */
  finished_sku?: YouzanRetailStockQueryBomV100FinishedSku;
  /** 加工原料 */
  relate_skus?: YouzanRetailStockQueryBomV100RelateSku[];
  /** 制单人名称 */
  creator_name?: string;
  /** 制单时间，单位：ms */
  created_time?: YouzanLong;
}

export type YouzanRetailStockQueryBomV100Response =
  YouzanApiSuccessResponse<YouzanRetailStockQueryBomV100Data>;

export interface YouzanRetailStockQueryBomV100ApiMapEntry {
  'youzan.retail.stock.query.bom': {
    '1.0.0': {
      params: YouzanRetailStockQueryBomV100Params;
      response: YouzanRetailStockQueryBomV100Response;
    };
  };
}
