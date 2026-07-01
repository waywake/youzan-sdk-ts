/**
 * Generated from Youzan API docs for youzan.shop.single.staff.update.disable@1.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanShopSingleStaffUpdateDisableV100Params {
  /** 账号（11位数手机号） */
  account: string;
}

export interface YouzanShopSingleStaffUpdateDisableV100Data {
  /** 是否禁用成功 */
  isSuccess?: boolean;
}

export type YouzanShopSingleStaffUpdateDisableV100Response =
  YouzanApiSuccessResponse<YouzanShopSingleStaffUpdateDisableV100Data>;

export interface YouzanShopSingleStaffUpdateDisableV100ApiMapEntry {
  'youzan.shop.single.staff.update.disable': {
    '1.0.0': {
      params: YouzanShopSingleStaffUpdateDisableV100Params;
      response: YouzanShopSingleStaffUpdateDisableV100Response;
    };
  };
}
