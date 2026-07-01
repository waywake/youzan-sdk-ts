/**
 * Generated from Youzan API docs for youzan.retail.open.stockcheckorder.get@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenStockcheckorderGetV300Params {
  /** 单据编号，可通过接入消息推送获取 */
  biz_bill_no: string;
  /** 仓库编码（连锁总部下必传），可通过youzan.retail.open.warehouse.query接口获取 */
  warehouse_code?: string;
  /** 分页页码，从1开始 */
  page_no?: number;
  /** 分页大小，最大20 */
  page_size?: number;
  /** 已于 2021-04-26 废弃并取消校验，新接入开发者无需传值。 */
  retail_source?: string;
}

export interface YouzanRetailOpenStockcheckorderGetV300OrderItem {
  /** 商品编码/规格编码 */
  sku_code?: string;
  /** 商品名称 */
  product_name?: string;
  /** 商品条码/规格条码 */
  sku_no?: string;
  /** 单位 */
  unit?: string;
  /** 原库存数 */
  old_num?: string;
  /** 实际库存数（变更后的值） */
  real_num?: string;
  /** 系统库存数（实际库存-原库存） */
  number?: string;
}

export interface YouzanRetailOpenStockcheckorderGetV300Data {
  /** 单据编号 */
  biz_bill_no?: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 仓库名称 */
  warehouse_name?: string;
  /** 单据状态：CHECKING-盘点中，SUBMITTED-已提交，DONE-已完成，CANCEL-已作废，UNCHECK-待盘点，PREAUDIT-待审核，REJECTED-已驳回 */
  status?: string;
  /** 备注 */
  remark?: string;
  /** 制单人 */
  creator?: string;
  /** 制单时间 */
  created_time?: string;
  /** 盘点商品明细 */
  order_items?: YouzanRetailOpenStockcheckorderGetV300OrderItem[];
}

export type YouzanRetailOpenStockcheckorderGetV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenStockcheckorderGetV300Data>;

export interface YouzanRetailOpenStockcheckorderGetV300ApiMapEntry {
  'youzan.retail.open.stockcheckorder.get': {
    '3.0.0': {
      params: YouzanRetailOpenStockcheckorderGetV300Params;
      response: YouzanRetailOpenStockcheckorderGetV300Response;
    };
  };
}
