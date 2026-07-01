/**
 * Generated from Youzan API docs for youzan.retail.open.query.manufacture@1.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenQueryManufactureV100Params {
  /** 加工单号 */
  business_order_no: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 已废弃，新接入开发者无需传值，已对接开发者不受影响。 */
  yz_open_id?: string;
}

export interface YouzanRetailOpenQueryManufactureV100Product {
  /** 配方单编号 */
  bom_no?: string;
  /** 计划加工数量 */
  plan_in_stock_str?: string;
  /** 实际加工良品数量 */
  good_amount_str?: string;
  /** 实际加工不良品数量 */
  loss_amount_str?: string;
  /** 成品结束时间，单位：ms */
  finish_time?: YouzanLong;
  /** 库存单位 */
  unit?: string;
  /** 备注 */
  remark?: string;
}

export interface YouzanRetailOpenQueryManufactureV100Material {
  /** 原材料ID */
  material_id?: YouzanLong;
  /** 原材料名称 */
  material_name?: string;
  /** 单位 */
  unit?: string;
  /** 标准发料量 */
  stand_out_stock?: string;
  /** 实际发料数量 */
  actual_out_stock?: string;
}

export interface YouzanRetailOpenQueryManufactureV100Data {
  /** 加工单号 */
  biz_bill_no?: string;
  /** 关联单号 */
  source_order_no?: string;
  /** 加工单状态：0 创建中，1 创建成功，2 异常，3 待加工，4 加工中，5 已关闭，11 部分加工完成 */
  status?: number;
  /** 仓库/门店名称 */
  warehouse_name?: string;
  /** 生产组名称 */
  manufacture_group_name?: string;
  /** 计划加工时间开始，单位：ms */
  business_start_time?: YouzanLong;
  /** 计划加工时间结束，单位：ms */
  business_end_time?: YouzanLong;
  /** 实际加工时间开始，单位：ms */
  actual_start_time?: YouzanLong;
  /** 实际加工时间结束，单位：ms */
  actual_end_time?: YouzanLong;
  /** 制单人 */
  operator_name?: string;
  /** 制单时间，单位：ms */
  created_time?: YouzanLong;
  /** 备注 */
  remark?: string;
  /** 成品信息 */
  products?: YouzanRetailOpenQueryManufactureV100Product[];
  /** 原材料信息 */
  materials?: YouzanRetailOpenQueryManufactureV100Material[];
}

export type YouzanRetailOpenQueryManufactureV100Response =
  YouzanApiSuccessResponse<YouzanRetailOpenQueryManufactureV100Data>;

export interface YouzanRetailOpenQueryManufactureV100ApiMapEntry {
  'youzan.retail.open.query.manufacture': {
    '1.0.0': {
      params: YouzanRetailOpenQueryManufactureV100Params;
      response: YouzanRetailOpenQueryManufactureV100Response;
    };
  };
}
