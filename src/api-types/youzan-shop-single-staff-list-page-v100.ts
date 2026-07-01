/**
 * Generated from Youzan API docs for youzan.shop.single.staff.list.page@1.0.0.
 * Review before committing; docs occasionally contain response/example mismatches.
 */

import type { YouzanLong } from './common';

export interface YouzanShopSingleStaffListPageV100Params {
  /** 页码 */
  page_no: number;
  /** 每页数量，最大50 */
  page_size: number;
}

export interface YouzanShopSingleStaffListPageV100Paginator {
  /** 页码 */
  page?: number;
  /** 每页数量 */
  page_size?: number;
  /** 总数量 */
  total_count?: number;
}

export interface YouzanShopSingleStaffListPageV100Role {
  /** 角色id */
  role_id?: YouzanLong;
  /** 角色名字 */
  name?: string;
}

export interface YouzanShopSingleStaffListPageV100Staff {
  /** 店铺在有赞的id标识，有赞平台生成，在有赞平台唯一，用于判断信息属于哪一个店铺 */
  kdt_id?: YouzanLong;
  /** 员工id */
  yz_open_id?: string;
  /** 员工在有赞的管理员id。文档响应示例返回该字段。 */
  admin_id?: YouzanLong;
  /** 员工编号 */
  staff_no?: string;
  /** 员工账号 */
  account?: string;
  /** 员工姓名 */
  name?: string;
  /** 联系人手机号 */
  link_phone?: string;
  /** 角色信息 */
  roles?: YouzanShopSingleStaffListPageV100Role[];
  /** 启用状态 ON 启用 OFF 禁用 */
  status?: string;
  /** 创建时间，unix时间戳，毫秒级别 */
  create_time?: YouzanLong;
  /** 更新时间，unix时间戳，毫秒级别 */
  update_time?: YouzanLong;
}

export interface YouzanShopSingleStaffListPageV100Data {
  /** 分页数据 */
  paginator?: YouzanShopSingleStaffListPageV100Paginator;
  /** 员工数据 */
  items?: YouzanShopSingleStaffListPageV100Staff[];
}

export interface YouzanShopSingleStaffListPageV100Response {
  success: true;
  code?: number;
  message?: string;
  request_id?: string | null;
  /** 文档响应体表格中的返回数据结构。 */
  data?: YouzanShopSingleStaffListPageV100Data;
  /** 文档响应示例将分页数据返回在顶层。 */
  paginator?: YouzanShopSingleStaffListPageV100Paginator;
  /** 文档响应示例将员工数据返回在顶层。 */
  items?: YouzanShopSingleStaffListPageV100Staff[];
}

export interface YouzanShopSingleStaffListPageV100ApiMapEntry {
  'youzan.shop.single.staff.list.page': {
    '1.0.0': {
      params: YouzanShopSingleStaffListPageV100Params;
      response: YouzanShopSingleStaffListPageV100Response;
    };
  };
}
