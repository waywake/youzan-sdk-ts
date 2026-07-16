/**
 * Generated from Youzan API docs for youzan.wecom.staff.search@1.0.0.
 * 分页查询企助员工列表。
 */

import type { YouzanLong } from './common';

export interface YouzanWecomStaffSearchV100PageRequest {
  /** 页码（文档示例使用字符串值） */
  page_no: number | string;
  /** 每页数量（文档示例使用字符串值） */
  page_size: number | string;
}

export interface YouzanWecomStaffSearchV100Params {
  /** 员工手机号或者名称 */
  staff_mobile_or_name?: string;
  /** 状态：0 正常，3 停用；不传时查询全部 */
  status?: number;
  /** 分页条件 */
  page_request: YouzanWecomStaffSearchV100PageRequest;
}

export interface YouzanWecomStaffSearchV100Pageable {
  pageNumber?: number;
  offset?: number;
  countEnabled?: boolean;
  pageSize?: number;
}

export interface YouzanWecomStaffSearchV100MobileNumber {
  country_code?: string;
  mobile_number?: string;
}

export interface YouzanWecomStaffSearchV100Staff {
  staff_name?: string;
  thumb_avatar?: string;
  wecom_kdt_id?: YouzanLong;
  staff_id?: YouzanLong;
  yz_open_id?: string;
  avatar?: string;
  mobile_number?: YouzanWecomStaffSearchV100MobileNumber;
  shop_keeper?: number;
  /** 状态：0 正常，3 停用 */
  status?: number;
}

export interface YouzanWecomStaffSearchV100Data {
  total?: number;
  pageable?: YouzanWecomStaffSearchV100Pageable;
  content?: YouzanWecomStaffSearchV100Staff[];
}

export interface YouzanWecomStaffSearchV100Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanWecomStaffSearchV100Data;
}

export interface YouzanWecomStaffSearchV100ApiMapEntry {
  'youzan.wecom.staff.search': {
    '1.0.0': {
      params: YouzanWecomStaffSearchV100Params;
      response: YouzanWecomStaffSearchV100Response;
    };
  };
}
