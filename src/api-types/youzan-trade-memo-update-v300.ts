/**
 * Generated from Youzan API docs for youzan.trade.memo.update@3.0.0.
 * 更新订单备注。
 */

export interface YouzanTradeMemoUpdateV300Params {
  /** 有赞订单号；以 E 开头的 24 位字母和数字组合。 */
  tid: string;
  /** 卖家备注。 */
  memo: string;
  /** 订单星标，1–5 星。 */
  flag?: string;
}

export interface YouzanTradeMemoUpdateV300SuccessData {
  is_success?: boolean;
}

/** 文档未展开错误返回值字段。 */
export interface YouzanTradeMemoUpdateV300ErrorData {
  [field: string]: unknown;
}

export interface YouzanTradeMemoUpdateV300Response {
  response?: YouzanTradeMemoUpdateV300SuccessData;
  error_response?: YouzanTradeMemoUpdateV300ErrorData;
}

export interface YouzanTradeMemoUpdateV300ApiMapEntry {
  'youzan.trade.memo.update': {
    '3.0.0': {
      params: YouzanTradeMemoUpdateV300Params;
      response: YouzanTradeMemoUpdateV300Response;
    };
  };
}
