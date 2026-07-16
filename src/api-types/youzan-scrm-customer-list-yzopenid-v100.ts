/**
 * Generated from Youzan API docs for youzan.scrm.customer.list.yzopenid@1.0.0.
 * 根据 yz_open_id 批量查询客户信息。
 */

export interface YouzanScrmCustomerListYzopenidV100Params {
  /** 有赞用户 ID；一次最多支持 50 个。 */
  yz_open_ids: string[];
}

/** 文档将返回项定义为客户信息对象，但未展开其字段。 */
export interface YouzanScrmCustomerListYzopenidV100Customer {
  [field: string]: unknown;
}

export interface YouzanScrmCustomerListYzopenidV100Response {
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
  data?: YouzanScrmCustomerListYzopenidV100Customer[];
}

export interface YouzanScrmCustomerListYzopenidV100ApiMapEntry {
  'youzan.scrm.customer.list.yzopenid': {
    '1.0.0': {
      params: YouzanScrmCustomerListYzopenidV100Params;
      response: YouzanScrmCustomerListYzopenidV100Response;
    };
  };
}
