/**
 * Generated from Youzan API docs for youzan.scrm.customer.list@1.0.0.
 * 搜索客户。
 */

export interface YouzanScrmCustomerListV100Params {
  /** 是否为会员：0 表示非会员，1 表示会员；不传则查询全部客户。 */
  is_member?: number;
  /** 成为客户时间的起始值，Unix 时间戳（毫秒）。 */
  created_at_start?: number;
  /** 成为客户时间的截止值，Unix 时间戳（毫秒）。 */
  created_at_end?: number;
  /** 页码；最多支持 500 页。 */
  page_no?: number;
  /** 每页数量；最多支持 50 个。 */
  page_size?: number;
  /** 成为会员时间的起始值，Unix 时间戳（毫秒）。 */
  created_member_at_start?: number;
  /** 成为会员时间的截止值，Unix 时间戳（毫秒）。 */
  created_member_at_end?: number;
  /** 客户标签 ID，由有赞生成。 */
  tag_ids?: number[];
  /** 是否有手机号。 */
  has_mobile?: boolean;
}

export interface YouzanScrmCustomerListV100Customer {
  gender?: number;
  is_member?: number;
  trade_count?: number;
  show_name?: string;
  mobile?: string;
  /** 成为客户时间，Unix 时间戳（秒）。 */
  created_at?: number;
  is_mobile_enable?: boolean;
  yz_open_id?: string;
  /** 成为会员时间，Unix 时间戳（秒）。 */
  created_member_at?: number;
  points?: number;
}

export interface YouzanScrmCustomerListV100Data {
  total?: number;
  page_no?: number;
  record_list?: YouzanScrmCustomerListV100Customer[];
}

export interface YouzanScrmCustomerListV100Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanScrmCustomerListV100Data;
}

export interface YouzanScrmCustomerListV100ApiMapEntry {
  'youzan.scrm.customer.list': {
    '1.0.0': {
      params: YouzanScrmCustomerListV100Params;
      response: YouzanScrmCustomerListV100Response;
    };
  };
}
