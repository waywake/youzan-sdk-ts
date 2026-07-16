/**
 * Generated from Youzan API docs for youzan.retail.open.chainstaff.querypage@1.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenChainstaffQuerypageV100Params {
  /** 页码，默认从1开始 */
  page_no?: number;
  /** 分页大小,支持1~20，最大支持20。默认值20。 */
  page_size?: number;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
}

export interface YouzanRetailOpenChainstaffQuerypageV100DataPaginator {
  /** 页码 */
  page?: number;
  /** 分页大小,支持1~20，最大支持20。默认值20。 */
  page_size?: number;
  /** 总条数 */
  total_count?: number;
}

export interface YouzanRetailOpenChainstaffQuerypageV100DataItemsOrgDepRolesRoles {
  /** 角色id */
  role_id?: YouzanLong;
  /** 角色类型 */
  role_type?: string;
}

export interface YouzanRetailOpenChainstaffQuerypageV100DataItemsOrgDepRoles {
  /** 组织id，即所属店铺id */
  kdt_id?: YouzanLong;
  /** 部门id */
  dept_id?: YouzanLong;
  /** 角色列表 */
  roles?: YouzanRetailOpenChainstaffQuerypageV100DataItemsOrgDepRolesRoles[];
}

export interface YouzanRetailOpenChainstaffQuerypageV100DataItems {
  /** 员工所属店铺id */
  kdt_id?: YouzanLong;
  /** 员工id */
  admin_id?: YouzanLong;
  /** 员工账号，此处指手机号 */
  account?: string;
  /** 员工姓名 */
  name?: string;
  /** 员工编号 */
  staff_no?: string;
  /** 创建时间。Unix时间戳，单位：毫秒。 */
  create_time?: YouzanLong;
  /** 更新时间。Unix时间戳，单位：毫秒。 */
  update_time?: YouzanLong;
  /** 组织部门角色 */
  org_dep_roles?: YouzanRetailOpenChainstaffQuerypageV100DataItemsOrgDepRoles[];
}

export interface YouzanRetailOpenChainstaffQuerypageV100Data {
  /** 返回条数信息 */
  paginator?: YouzanRetailOpenChainstaffQuerypageV100DataPaginator;
  /** 员工详情 */
  items?: YouzanRetailOpenChainstaffQuerypageV100DataItems[];
}

export type YouzanRetailOpenChainstaffQuerypageV100Response = YouzanApiSuccessResponse<YouzanRetailOpenChainstaffQuerypageV100Data>;

export interface YouzanRetailOpenChainstaffQuerypageV100ApiMapEntry {
  'youzan.retail.open.chainstaff.querypage': {
    '1.0.0': {
      params: YouzanRetailOpenChainstaffQuerypageV100Params;
      response: YouzanRetailOpenChainstaffQuerypageV100Response;
    };
  };
}
