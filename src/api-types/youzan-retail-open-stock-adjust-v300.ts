/**
 * Generated from Youzan API docs for youzan.retail.open.stock.adjust@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenStockAdjustV300OrderItem {
  /** 商品编码，有规格信息的商品传规格编码 */
  sku_code: string;
  /** 库存数量 */
  quantity: string;
  /** 供应商编码，可通过youzan.retail.open.supplier.query接口查询获取 */
  supplier_code?: string;
}

export interface YouzanRetailOpenStockAdjustV300Params {
  /** 操作类型，默认为空表示全量更新，1-增加；2-减少 */
  operate_type?: number;
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取（连锁版必填） */
  warehouse_code?: string;
  /** 备注，200字以内 */
  remark?: string;
  /** 操作人 */
  creator?: string;
  /** 创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time: string;
  /** 关联单据号，如在销售导致库存变化的场景下可以使用其它渠道的订单号（唯一不重复，支持自定义，支持英文和数字组合,最大长度30个字符） */
  source_order_no: string;
  /** 商品明细。文档 curl 示例以 JSON 字符串传入。 */
  order_items?: YouzanRetailOpenStockAdjustV300OrderItem[] | string;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响 */
  retail_source?: string;
}

/** 是否调整成功。 */
export type YouzanRetailOpenStockAdjustV300Data = boolean;

export type YouzanRetailOpenStockAdjustV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockAdjustV300Data>;

export interface YouzanRetailOpenStockAdjustV300ApiMapEntry {
  'youzan.retail.open.stock.adjust': {
    '3.0.0': {
      params: YouzanRetailOpenStockAdjustV300Params;
      response: YouzanRetailOpenStockAdjustV300Response;
    };
  };
}
