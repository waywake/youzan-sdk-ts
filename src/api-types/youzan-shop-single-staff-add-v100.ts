/**
 * Generated from Youzan API docs for youzan.shop.single.staff.add@1.0.0.
 * Review before committing; docs occasionally contain response/example mismatches.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanShopSingleStaffAddV100ChainStaffRequest {
  /** 联系电话 */
  link_phone: string;
  /** 员工姓名 */
  name: string;
  /** 员工编号 */
  staff_no?: string;
  /** 角色id， 目前仅支持 2 普通客服 3 核销员 4 网点管理员 8 普通管理员 10 售前客服 13 普通员工 15 商品管理员 16 广告投放员 17 美工 */
  role_id_list: YouzanLong[];
  /** 账号（11位数手机号） */
  account: string;
}

export interface YouzanShopSingleStaffAddV100Params {
  /** 员工信息。文档 curl/Node 示例以 JSON 字符串传入。 */
  chain_staff_request: YouzanShopSingleStaffAddV100ChainStaffRequest | string;
}

export interface YouzanShopSingleStaffAddV100Data {
  /** 是否新增成功 */
  isSuccess?: boolean;
}

export type YouzanShopSingleStaffAddV100Response =
  YouzanApiSuccessResponse<YouzanShopSingleStaffAddV100Data>;

export interface YouzanShopSingleStaffAddV100ApiMapEntry {
  'youzan.shop.single.staff.add': {
    '1.0.0': {
      params: YouzanShopSingleStaffAddV100Params;
      response: YouzanShopSingleStaffAddV100Response;
    };
  };
}
