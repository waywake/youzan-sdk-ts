/**
 * Generated from Youzan API docs for youzan.retail.open.stock.mode.query@1.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenStockModeQueryV100Request {
  /** 连锁场景下查指定分店kdtId，查总部下全部店铺则不用传。单店场景不用传 */
  node_kdt_id?: YouzanLong;
  /** 库存模式,不传查全部模式 1-独立销售库存2-共享总部库存3-共享门店仓库存库4-进出存单据管理 */
  stock_mode?: number;
  /** 页码,默认从1开始 */
  page_no?: number;
  /** 分页大小,默认每页20条数据 */
  page_size?: number;
  /** 零售调用来源（调用方和有赞约定的值） */
  retail_source: string;
}

export interface YouzanRetailOpenStockModeQueryV100Params {
  /** 查询条件。文档 curl 示例以 JSON 字符串传入。 */
  request: YouzanRetailOpenStockModeQueryV100Request | string;
}

export interface YouzanRetailOpenStockModeQueryV100StockMode {
  /** 店铺kdtId */
  kdt_id?: YouzanLong;
  /** 店铺名称 */
  team_name?: string;
  /** 店铺类型 2-门店，3-独立仓，6-分销供货上店铺，7-前置仓 */
  shop_role?: number;
  /** 库存模式 1-独立销售库存2-共享总部库存3-共享门店仓库存库4-进出存单据管理 */
  stock_mode?: number;
  /** 单据管理库存开关（门店）1-开启,0-关闭 */
  order_manager_stock?: number;
}

export interface YouzanRetailOpenStockModeQueryV100Paginator {
  /** 页码 */
  page?: number;
  /** 页大小 */
  page_size?: number;
  /** 总条数 */
  total_count?: number;
}

export interface YouzanRetailOpenStockModeQueryV100Data {
  /** 库存模式明细 */
  open_stock_mode_search_d_t_o?: YouzanRetailOpenStockModeQueryV100StockMode[];
  /** 分页信息 */
  paginator?: YouzanRetailOpenStockModeQueryV100Paginator;
}

export type YouzanRetailOpenStockModeQueryV100Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockModeQueryV100Data>;

export interface YouzanRetailOpenStockModeQueryV100ApiMapEntry {
  'youzan.retail.open.stock.mode.query': {
    '1.0.0': {
      params: YouzanRetailOpenStockModeQueryV100Params;
      response: YouzanRetailOpenStockModeQueryV100Response;
    };
  };
}
