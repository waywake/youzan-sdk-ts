/**
 * Generated from Youzan API docs for youzan.retail.open.purchaseorder.get@3.0.0.
 * Review before committing; docs occasionally contain response/example mismatches.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenPurchaseorderGetV300Params {
  /** 单据编号，可以通过接采购单消息获取 */
  purchase_order_no: string;
}

export interface YouzanRetailOpenPurchaseorderGetV300OrderItem {
  /** 商品编码/规格编码 */
  sku_code?: string;
  /** 商品编码/规格条码 */
  sku_no?: string;
  /** 商品名称 */
  product_name?: string;
  /** 商品规格 */
  specifications?: string;
  /** 单位 */
  unit?: string;
  /** 申请数量 */
  apply_num?: string;
  /** 实际入库数量 */
  actual_in_num?: string;
  /** 库存单位含税成本单价，单位：元 */
  with_tax_unit_cost?: string;
  /** 含税成本总价，单位：元（单价*数量） */
  with_tax_total_cost?: string;
  /** 库存单位不含税成本单价，单位：元 */
  without_tax_unit_cost?: string;
  /** 不含税成本总价，单位：元（单价*数量） */
  without_tax_total_cost?: string;
  /** 销项税率 */
  output_tax_rate?: string;
  /** 进项税率 */
  input_tax_rate?: string;
  /** 商品sku的id */
  sku_id?: YouzanLong;
  /** 采购单位 */
  order_unit?: string;
  /** 采购数量 */
  order_amount?: string;
  /** 采购单位与库存单位转换比例 */
  unit_transform_times?: string;
  /** 采购单位含税单价，单位：元 */
  order_unit_with_tax_cost?: string;
  /** 采购单位不含税单价，单位：元 */
  order_unit_without_tax_cost?: string;
}

export interface YouzanRetailOpenPurchaseorderGetV300Data {
  /** 单据编号 */
  purchase_order_no?: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 仓库名称 */
  warehouse_name?: string;
  /** 供应商编码 */
  supplier_code?: string;
  /** 供应商名称 */
  supplier_name?: string;
  /** 供应商id */
  supplier_id?: YouzanLong;
  /** 单据状态 3:待入库 5:已作废 6:已完成 11:待提交 15:已审核 18:部分入库 */
  status?: number;
  /** 备注 */
  remark?: string;
  /** 含税成本价总价，单位：元 */
  with_tax_total_cost?: string;
  /** 不含税成本价总价，单位：元 */
  without_tax_total_cost?: string;
  /** 预计到达时间 */
  estimated_arrival_time?: string;
  /** 单据创建时间(yyyy-MM-dd HH:mm:ss) */
  created_at?: string;
  /** 操作者名称 */
  operator_name?: string;
  /** 单据明细 */
  order_items?: YouzanRetailOpenPurchaseorderGetV300OrderItem[];
  /** 结算方式(0-无结算方式,1-先款后货,2-先货后款,3-按销结算,4-扣率提成) */
  settlement_way?: number;
  /** 经营方式(0-经销,1-代销,2-联营) */
  purchase_type?: number;
  /** 门店/仓库id */
  warehouse_id?: YouzanLong;
}

export type YouzanRetailOpenPurchaseorderGetV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenPurchaseorderGetV300Data>;

export interface YouzanRetailOpenPurchaseorderGetV300ApiMapEntry {
  'youzan.retail.open.purchaseorder.get': {
    '3.0.0': {
      params: YouzanRetailOpenPurchaseorderGetV300Params;
      response: YouzanRetailOpenPurchaseorderGetV300Response;
    };
  };
}
