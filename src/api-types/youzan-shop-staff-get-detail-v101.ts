/**
 * Generated from Youzan API docs for youzan.shop.staff.get.detail@1.0.1.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanShopStaffGetDetailV101Params {
  /** 查询范围：SELF_SHOP（默认）或 CHAIN_SHOP。 */
  mode?: 'SELF_SHOP' | 'CHAIN_SHOP';
  /** 页码；连锁范围查询时使用。 */
  page_no?: number;
  /** 每页数量；连锁范围查询时使用。 */
  page_size?: number;
}

export interface YouzanShopStaffGetDetailV101Paginator {
  /** 页码。 */
  page?: number;
  /** 每页数量。 */
  page_size?: number;
  /** 总数量。 */
  total_count?: number;
}

export interface YouzanShopStaffGetDetailV101Role {
  /** 角色 id。 */
  role_id?: YouzanLong;
  /** 角色名称。 */
  name?: string;
}

export interface YouzanShopStaffGetDetailV101Staff {
  /** 店铺在有赞的唯一 id。 */
  kdt_id?: YouzanLong;
  /** 员工 id。 */
  yz_open_id?: string;
  /** 员工管理员 id。 */
  admin_id?: YouzanLong;
  /** 员工编号。 */
  staff_no?: string;
  /** 员工账号。 */
  account?: string;
  /** 员工姓名。 */
  name?: string;
  /** 联系人手机号。 */
  link_phone?: string;
  /** 角色信息。 */
  roles?: YouzanShopStaffGetDetailV101Role[];
  /** 启用状态：ON 为启用，OFF 为禁用。 */
  status?: string;
  /** 创建时间，Unix 时间戳（毫秒）。 */
  create_time?: YouzanLong;
  /** 更新时间，Unix 时间戳（毫秒）。 */
  update_time?: YouzanLong;
}

export interface YouzanShopStaffGetDetailV101Data {
  /** 分页数据；单店范围查询时可能不返回。 */
  paginator?: YouzanShopStaffGetDetailV101Paginator;
  /** 员工数据。 */
  items?: YouzanShopStaffGetDetailV101Staff[];
}

export type YouzanShopStaffGetDetailV101Response =
  YouzanApiSuccessResponse<YouzanShopStaffGetDetailV101Data>;

export interface YouzanShopStaffGetDetailV101ApiMapEntry {
  'youzan.shop.staff.get.detail': {
    '1.0.1': {
      params: YouzanShopStaffGetDetailV101Params;
      response: YouzanShopStaffGetDetailV101Response;
    };
  };
}
