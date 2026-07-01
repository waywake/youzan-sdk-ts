/**
 * Generated from Youzan API docs for youzan.retail.open.purchasereturnorder.get@1.0.0.
 * Review before committing; docs occasionally contain response/example mismatches.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenPurchasereturnorderGetV100Params {
  /** 采购退货单号，可通过接入采购退货单消息获取 */
  purchase_return_order_no: string;
  /** 单据明细第几页，默认 1 */
  page_no?: number;
  /** 单据明细每页多少数据，默认 20 */
  page_size?: number;
  /** 已于 2021-04-26 废弃并取消校验，新接入开发者无需传值。 */
  retail_source?: string;
}

export interface YouzanRetailOpenPurchasereturnorderGetV100OrderItem {
  /** sku编码 */
  sku_code?: string;
  /** sku条码 */
  sku_no?: string;
  /** 商品名称 */
  product_name?: string;
  /** 单位 */
  unit?: string;
  /** 含税成本价，单位：元 */
  with_tax_unit_cost?: string;
  /** 含税成本价总价，单位：元 */
  with_tax_total_cost?: string;
  /** 不含税成本价，单位：元 */
  without_tax_unit_cost?: string;
  /** 不含税成本价总价，单位：元 */
  without_tax_total_cost?: string;
  /** 销项税率 */
  output_tax_rate?: string;
  /** 进项税率 */
  input_tax_rate?: string;
  /** 退货数量 */
  amount_str?: string;
  /** 实际退货数量 */
  actual_out_num_str?: string;
}

export interface YouzanRetailOpenPurchasereturnorderGetV100Paginator {
  /** 当前页码 */
  page?: number;
  /** 每页条数 */
  page_size?: number;
  /** 总条数 */
  total_count?: number;
}

export interface YouzanRetailOpenPurchasereturnorderGetV100Data {
  /** 采购退货单号 */
  purchase_return_order_no?: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 仓库名称 */
  warehouse_name?: string;
  /** 供应商编码 */
  supplier_code?: string;
  /** 供应商名称 */
  supplier_name?: string;
  /** 备注 */
  remark?: string;
  /** 含税成本价总价，单位：元 */
  with_tax_total_cost?: string;
  /** 操作者名称 */
  operator_name?: string;
  /** 单据明细 */
  order_items?: YouzanRetailOpenPurchasereturnorderGetV100OrderItem[];
  /** 明细分页信息 */
  paginator?: YouzanRetailOpenPurchasereturnorderGetV100Paginator;
}

export type YouzanRetailOpenPurchasereturnorderGetV100Response =
  YouzanApiSuccessResponse<YouzanRetailOpenPurchasereturnorderGetV100Data>;

export interface YouzanRetailOpenPurchasereturnorderGetV100ApiMapEntry {
  'youzan.retail.open.purchasereturnorder.get': {
    '1.0.0': {
      params: YouzanRetailOpenPurchasereturnorderGetV100Params;
      response: YouzanRetailOpenPurchasereturnorderGetV100Response;
    };
  };
}
