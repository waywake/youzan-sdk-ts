/**
 * Generated from Youzan API docs for youzan.retail.open.stock.unique.code@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenStockUniqueCodeV300Params {
  /** 仓库编码，可通过可通过youzan.retail.open.warehouse.query接口获取 */
  warehouse_code?: string;
  /** 指定查询一批唯一码(一次最多20个) */
  serial_nos?: string[] | string;
  /** 页码，默认从1开始 */
  page_no?: number;
  /** 分页大小，默认每页20条数据 */
  page_size?: number;
  /** 来源 */
  retail_source?: string;
}

export interface YouzanRetailOpenStockUniqueCodeV300Item {
  /** 店铺名称 */
  warehouse_name?: string;
  /** 仓库类型1：独立仓 2：门店仓 */
  warehouse_type?: number;
  /** 供应商Id */
  vendor_id?: YouzanLong;
  /** 供应商名称 */
  vendor_name?: string;
  /** 规格信息 */
  specifications?: string;
  /** 商品规格Id */
  sku_id?: YouzanLong;
  /** 商品条码/规格条码 */
  sku_no?: string;
  /** 单据日期 */
  created_time?: string;
  /** 最后更新日期 */
  updated_time?: string;
  /** 商品名称 */
  name?: string;
  /** 单位 */
  unit?: string;
  /** 对应sku图片 */
  picture_url?: string;
  /** 串码：唯一码 */
  serial_no?: string;
  /** 当前串码状态1：在库 3：在途 5：已售出 6：采购退货 7：已作废 8：已报损 9：异常 */
  state?: number;
  /** 是否已加锁，0：未加锁 1：加锁 */
  locked?: number;
  /** 是否已打印，0：未打印 1：已打印 */
  printed?: number;
}

export interface YouzanRetailOpenStockUniqueCodeV300Paginator {
  /** 第几页 */
  page?: number;
  /** 每页条数 */
  page_size?: number;
  /** 明细总数 */
  total_count?: number;
}

export interface YouzanRetailOpenStockUniqueCodeV300Data {
  /** 唯一码数据 */
  items?: YouzanRetailOpenStockUniqueCodeV300Item[];
  /** 分页信息 */
  paginator?: YouzanRetailOpenStockUniqueCodeV300Paginator;
}

export type YouzanRetailOpenStockUniqueCodeV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockUniqueCodeV300Data>;

export interface YouzanRetailOpenStockUniqueCodeV300ApiMapEntry {
  'youzan.retail.open.stock.unique.code': {
    '3.0.0': {
      params: YouzanRetailOpenStockUniqueCodeV300Params;
      response: YouzanRetailOpenStockUniqueCodeV300Response;
    };
  };
}
