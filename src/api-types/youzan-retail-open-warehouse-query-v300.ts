/**
 * Generated from Youzan API docs for youzan.retail.open.warehouse.query@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenWarehouseQueryV300Params {
  /** 1：独立仓，2：门店；4-前置仓。不传默认查全部 */
  type?: number;
  /** 仓库/门店id列表，请根据type的值进行填写；注意：该参数传值时，分页入参不生效 */
  warehouse_ids?: YouzanLong[];
  /** 文档示例使用的数组参数名。 */
  'warehouse_ids[]'?: YouzanLong[] | string;
  /** 仓库编码列表（该参数传值时，分页入参不生效） */
  warehouse_codes?: string[];
  /** 文档示例使用的数组参数名。 */
  'warehouse_codes[]'?: string[] | string;
  /** 页号,1开始，不传默认为1。 */
  page_no?: number;
  /** 分页大小,支持1~20，最大支持20。不传默认值20。 */
  page_size?: number;
  /** 有赞客户id（userid） */
  admin_id?: YouzanLong;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响。https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
}

export interface YouzanRetailOpenWarehouseQueryV300Warehouse {
  /** 区/县 */
  area?: string;
  /** 联系人 */
  contact_name?: string;
  /** 地址 */
  address?: string;
  /** 经度 */
  lng?: string;
  /** 联系电话 */
  contact_phone?: string;
  /** 城市 */
  city?: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 备注 */
  remark?: string;
  /** 仓库类型，1：独立仓，2：门店；4-前置仓 */
  type?: number;
  /** 省份 */
  province?: string;
  /** 仓库名称 */
  name?: string;
  /** 纬度 */
  lat?: string;
  /** 仓库/门店id */
  warehouse_id?: YouzanLong;
  /** 状态 */
  status?: number;
}

export interface YouzanRetailOpenWarehouseQueryV300Paginator {
  /** 总数 */
  total_count?: number;
  /** 当前页 */
  page?: number;
  /** 分页大小 */
  page_size?: number;
}

export interface YouzanRetailOpenWarehouseQueryV300Data {
  /** 仓库列表 */
  warehouses?: YouzanRetailOpenWarehouseQueryV300Warehouse[];
  /** 分页信息 */
  paginator?: YouzanRetailOpenWarehouseQueryV300Paginator;
}

export type YouzanRetailOpenWarehouseQueryV300Response =
  YouzanApiSuccessResponse<YouzanRetailOpenWarehouseQueryV300Data>;

export interface YouzanRetailOpenWarehouseQueryV300ApiMapEntry {
  'youzan.retail.open.warehouse.query': {
    '3.0.0': {
      params: YouzanRetailOpenWarehouseQueryV300Params;
      response: YouzanRetailOpenWarehouseQueryV300Response;
    };
  };
}
