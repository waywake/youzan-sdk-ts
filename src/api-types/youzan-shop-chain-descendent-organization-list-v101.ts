/**
 * Generated from Youzan API docs for youzan.shop.chain.descendent.organization.list@1.0.1.
 * Review before committing; docs occasionally contain response/example mismatches.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanShopChainDescendentOrganizationListV101Params {
  /** 页码，从 1 开始。 */
  page_num: number;
  /** 每页条数，最大不能超过 50。 */
  page_size: number;
  /** 是否需要查询部门信息，默认为 false。 */
  with_dept_info?: boolean;
  /** 是否需要查询店铺状态或者店铺过期时间，默认为 false。 */
  with_shop_status_and_lifecycle_end_time?: boolean;
  /** 是否查询 CRM 店铺，默认为 false。 */
  with_crm_shop?: boolean;
  /** 店铺角色：2 门店/网店、3 仓库、4 合伙人、6 分销供货商店铺、7 前置仓、9 三方 CRM 门店。 */
  shop_roles?: number[] | string;
}

export interface YouzanShopChainDescendentOrganizationListV101ShopAddress {
  /** 区。 */
  county: string;
  /** 区编码。 */
  county_id: number;
  /** 详细地址。 */
  address: string;
}

export interface YouzanShopChainDescendentOrganizationListV101DeptInfo {
  /** 部门 ID。 */
  dept_id: YouzanLong;
  /** 部门名称。 */
  dept_name: string;
  /** 外部部门 ID（企微助手专用）。 */
  out_dept_id: string;
}

export interface YouzanShopChainDescendentOrganizationListV101Organization {
  /** 组织（即店铺）在有赞平台唯一的 ID。 */
  kdt_id?: YouzanLong;
  /** 组织（即店铺）名称。 */
  name?: string;
  /** 组织角色：2001 门店、2002 网店、3 独立仓、4 合伙人、6 分销供货店铺、7 前置仓。 */
  role?: number;
  /** 经营模式：1 直营、2 加盟。 */
  join_type?: number;
  /** 上级组织（即店铺）ID。 */
  parent_kdt_id?: YouzanLong;
  /** 店铺地址信息。 */
  shop_address: YouzanShopChainDescendentOrganizationListV101ShopAddress;
  /** 三方门店编码。官方响应示例可能不返回该字段。 */
  outer_id?: string;
  /** 网店渠道营业状态：2 运营中、3 停用。 */
  access_status: string;
  /** 门店渠道营业状态：2 运营中、3 停用。官方响应示例可能不返回该字段。 */
  offline_business_status?: string;
  /** 部门列表；仅在请求部门信息时返回。 */
  dept_info_list?: YouzanShopChainDescendentOrganizationListV101DeptInfo[];
  /** 门店状态；仅在请求店铺状态时返回。 */
  store_status?: string;
  /** 门店生命周期到期时间；仅在请求店铺过期时间时返回。 */
  lifecycle_end_time?: string;
}

export interface YouzanShopChainDescendentOrganizationListV101Data {
  /** 总数。 */
  total?: number;
  /** 当前页码。 */
  page_num?: number;
  /** 分页大小。 */
  page_size?: number;
  /** 组织数据列表。 */
  organization_list?: YouzanShopChainDescendentOrganizationListV101Organization[];
}

export type YouzanShopChainDescendentOrganizationListV101Response =
  YouzanApiSuccessResponse<YouzanShopChainDescendentOrganizationListV101Data>;

export interface YouzanShopChainDescendentOrganizationListV101ApiMapEntry {
  'youzan.shop.chain.descendent.organization.list': {
    '1.0.1': {
      params: YouzanShopChainDescendentOrganizationListV101Params;
      response: YouzanShopChainDescendentOrganizationListV101Response;
    };
  };
}
