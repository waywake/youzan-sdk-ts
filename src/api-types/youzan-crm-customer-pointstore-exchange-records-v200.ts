/**
 * Generated from Youzan API docs for
 * youzan.crm.customer.pointstore.exchange.records@2.0.0.
 * 获取客户积分兑换记录。
 */

export interface YouzanCrmCustomerPointstoreExchangeRecordsV200User {
  account_type?: number;
  account_id?: string;
}

export interface YouzanCrmCustomerPointstoreExchangeRecordsV200Params {
  user: YouzanCrmCustomerPointstoreExchangeRecordsV200User | string;
  page: number;
  /** 每页最多 50 条。 */
  page_size: number;
  /** 1: 普通商品；2: 优惠券；3: 权益卡。 */
  goods_type?: 1 | 2 | 3;
  /** 开始时间，秒级时间戳。 */
  begin_time: number | string;
  /** 结束时间，秒级时间戳。 */
  end_time: number | string;
}

export interface YouzanCrmCustomerPointstoreExchangeRecordsV200Paginator {
  total_count?: number;
  page?: number;
  page_size?: number;
}

export interface YouzanCrmCustomerPointstoreExchangeRecordsV200Item {
  statement_no?: string;
  goods_title?: string;
  reduced_price?: number;
  mobile?: string;
  /** 秒级时间戳。 */
  created_at?: number | string;
  goods_id?: number | string;
  goods_count?: number;
  goods_type?: number;
  goods_img?: string;
  cost_points?: number;
  cost_price?: number;
}

export interface YouzanCrmCustomerPointstoreExchangeRecordsV200Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  paginator?: YouzanCrmCustomerPointstoreExchangeRecordsV200Paginator;
  items?: YouzanCrmCustomerPointstoreExchangeRecordsV200Item[];
}

export interface YouzanCrmCustomerPointstoreExchangeRecordsV200ApiMapEntry {
  'youzan.crm.customer.pointstore.exchange.records': {
    '2.0.0': {
      params: YouzanCrmCustomerPointstoreExchangeRecordsV200Params;
      response: YouzanCrmCustomerPointstoreExchangeRecordsV200Response;
    };
  };
}
