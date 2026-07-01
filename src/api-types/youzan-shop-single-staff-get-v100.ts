/**
 * Generated from Youzan API docs for youzan.shop.single.staff.get@1.0.0.
 * Review before committing; docs occasionally contain response/example mismatches.
 */

import type { YouzanLong } from './common';

export interface YouzanShopSingleStaffGetV100Params {
  /** 账号（目前仅支持11位手机号） */
  account: string;
}

export interface YouzanShopSingleStaffGetV100Role {
  /** 角色id */
  role_id?: YouzanLong;
  /** 角色名字 */
  name?: string;
}

export interface YouzanShopSingleStaffGetV100Data {
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
  roles?: YouzanShopSingleStaffGetV100Role[];
  /** 启用状态 ON 启用 OFF 禁用 */
  status?: string;
  /** 创建时间，unix时间戳，毫秒级别 */
  create_time?: YouzanLong;
  /** 更新时间，unix时间戳，毫秒级别 */
  update_time?: YouzanLong;
}

export interface YouzanShopSingleStaffGetV100Response
  extends YouzanShopSingleStaffGetV100Data {
  success: true;
  code?: number;
  message?: string;
  request_id?: string | null;
  /** 文档响应体表格中的返回数据结构。 */
  data?: YouzanShopSingleStaffGetV100Data;
}

export interface YouzanShopSingleStaffGetV100ApiMapEntry {
  'youzan.shop.single.staff.get': {
    '1.0.0': {
      params: YouzanShopSingleStaffGetV100Params;
      response: YouzanShopSingleStaffGetV100Response;
    };
  };
}
