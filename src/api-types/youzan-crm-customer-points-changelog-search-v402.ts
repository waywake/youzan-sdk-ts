/**
 * Generated from Youzan API docs for youzan.crm.customer.points.changelog.search@4.0.2.
 * 查询客户积分日志。
 */

export interface YouzanCrmCustomerPointsChangelogSearchV402User {
  account_type?: number;
  account_id?: string;
}

export interface YouzanCrmCustomerPointsChangelogSearchV402Params {
  user: YouzanCrmCustomerPointsChangelogSearchV402User | string;
  page: number;
  /** 每页最多 50 条。 */
  page_size: number;
  /** 仅支持当前时间 12 个月内的时间点。 */
  begin_time: string;
  /** 与 begin_time 的时间间隔不得超过 31 天。 */
  end_time: string;
  /** 是否需要走扩展点；默认 true。 */
  is_do_ext_point?: boolean;
  /** 0: 全部；1: 收入；2: 支出；3: 冻结。 */
  type?: 0 | 1 | 2 | 3;
}

/** 文档示例未展开积分日志项字段。 */
export interface YouzanCrmCustomerPointsChangelogSearchV402Item {
  [field: string]: unknown;
}

export interface YouzanCrmCustomerPointsChangelogSearchV402Paginator {
  total_count?: number;
  page?: number;
  page_size?: number;
}

export interface YouzanCrmCustomerPointsChangelogSearchV402Data {
  paginator?: YouzanCrmCustomerPointsChangelogSearchV402Paginator;
  items?: YouzanCrmCustomerPointsChangelogSearchV402Item[];
}

export interface YouzanCrmCustomerPointsChangelogSearchV402Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanCrmCustomerPointsChangelogSearchV402Data;
}

export interface YouzanCrmCustomerPointsChangelogSearchV402ApiMapEntry {
  'youzan.crm.customer.points.changelog.search': {
    '4.0.2': {
      params: YouzanCrmCustomerPointsChangelogSearchV402Params;
      response: YouzanCrmCustomerPointsChangelogSearchV402Response;
    };
  };
}
