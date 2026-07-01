/**
 * Generated from Youzan API docs for youzan.retail.open.applyorder.query@3.0.0.
 * Review before committing; docs occasionally contain response/example mismatches.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenApplyorderQueryV300Request {
  /** 开始创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time_start: string;
  /** 截止创建时间，格式：yyyy-MM-dd HH:mm:ss */
  create_time_end: string;
  /** 调出仓库编码，可通过youzan.retail.open.warehouse.query接口获取 */
  from_warehouse_code?: string;
  /** 调入仓库编码，可通过youzan.retail.open.warehouse.query接口获取 */
  to_warehouse_code?: string;
  /** 页码，默认从1开始 */
  page_no?: number;
  /** 分页大小，默认每页20条数据 */
  page_size?: number;
  /** 单据状态 */
  status?: number;
  /** 开始更新时间，格式：yyyy-MM-dd HH:mm:ss */
  update_time_start?: string;
  /** 截止更新时间，格式：yyyy-MM-dd HH:mm:ss */
  update_time_end?: string;
  /** 已于 2021-04-26 废弃并取消校验，新接入开发者无需传值。 */
  retail_source?: string;
}

export interface YouzanRetailOpenApplyorderQueryV300Params {
  /** 请求参数。文档 curl/Node 示例以 JSON 字符串传入。 */
  request?: YouzanRetailOpenApplyorderQueryV300Request | string;
}

export interface YouzanRetailOpenApplyorderQueryV300OrderItem {
  /** 申请数量 */
  apply_num?: string;
  /** 预发数量 */
  pre_out_num?: string;
  /** 实际出库数量 */
  actual_out_num?: string;
  /** 实际入库数量 */
  actual_in_num?: string;
  /** 配送价，单位：元 */
  delivery_cost?: string;
  /** 审核配送价，单位：元 */
  checked_delivery_cost?: string;
  /** 商品编码 */
  sku_code?: string;
  /** 商品名称 */
  product_name?: string;
  /** 商品条码 */
  sku_no?: string;
  /** 单位 */
  unit?: string;
  /** 含税成本单价，单位：元 */
  with_tax_cost?: string;
  /** 不含税成本单价，单位：元 */
  without_tax_cost?: string;
  /** 不含税总金额（不含税成本单价数量），单位：元 */
  without_tax_amount?: string;
  /** 含税总金额（含税成本单价数量），单位：元 */
  with_tax_amount?: string;
}

export interface YouzanRetailOpenApplyorderQueryV300RelatedOrder {
  /** 业务单据单号 */
  biz_bill_no?: string;
  /** 单据业务类型：101-库存调拨单，103-配销单，105-采购订单 */
  global_order_type?: number;
  /** 单据业务类型名称 */
  order_type_name?: string;
}

export interface YouzanRetailOpenApplyorderQueryV300Order {
  /** 单据编号 */
  apply_biz_no?: string;
  /** 出库仓库编码 */
  from_warehouse_code?: string;
  /** 入库仓库编码 */
  to_warehouse_code?: string;
  /** 出库仓库名称 */
  from_warehouse_name?: string;
  /** 入库仓库名称 */
  to_warehouse_name?: string;
  /** 单据状态 */
  status?: number;
  /** 拒绝理由 */
  refused_reason?: string;
  /** 出库单据编号 */
  out_biz_no?: string;
  /** 入库单据编号 */
  in_biz_no?: string;
  /** 备注 */
  remark?: string;
  /** 制单人 */
  creator?: string;
  /** 单据日期 */
  created_time?: string;
  /** 采购商品明细 */
  order_items?: YouzanRetailOpenApplyorderQueryV300OrderItem[];
  /** 关联下级单号列表，有关联配送单据时返回 */
  dis_orders?: string[];
  /** 单据更新日期 */
  updated_time?: string;
  /** 关联下游业务单据信息 */
  related_orders?: YouzanRetailOpenApplyorderQueryV300RelatedOrder[];
}

export interface YouzanRetailOpenApplyorderQueryV300Paginator {
  /** 当前页数 */
  page?: number;
  /** 当前分页大小 */
  page_size?: number;
  /** 总条数 */
  total_count?: number;
}

export interface YouzanRetailOpenApplyorderQueryV300Data {
  /** 要货申请单列表 */
  orders?: YouzanRetailOpenApplyorderQueryV300Order[];
  /** 分页信息 */
  paginator?: YouzanRetailOpenApplyorderQueryV300Paginator;
}

export type YouzanRetailOpenApplyorderQueryV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenApplyorderQueryV300Data>;

export interface YouzanRetailOpenApplyorderQueryV300ApiMapEntry {
  'youzan.retail.open.applyorder.query': {
    '3.0.0': {
      params: YouzanRetailOpenApplyorderQueryV300Params;
      response: YouzanRetailOpenApplyorderQueryV300Response;
    };
  };
}
