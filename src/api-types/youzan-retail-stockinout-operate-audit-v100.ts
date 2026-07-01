/**
 * Generated from Youzan API docs for youzan.retail.stockinout.operate.audit@1.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailStockinoutOperateAuditV100Params {
  /** 出入库单据号 */
  biz_bill_no: string;
  /** 审核状态：0 审核驳回，1 审核通过 */
  audit_status: 0 | 1;
  /** 驳回原因，驳回时必填 */
  refused_reason?: string;
}

/** 出入库单据号。 */
export type YouzanRetailStockinoutOperateAuditV100Data = string;

export type YouzanRetailStockinoutOperateAuditV100Response =
  YouzanApiSuccessResponse<YouzanRetailStockinoutOperateAuditV100Data>;

export interface YouzanRetailStockinoutOperateAuditV100ApiMapEntry {
  'youzan.retail.stockinout.operate.audit': {
    '1.0.0': {
      params: YouzanRetailStockinoutOperateAuditV100Params;
      response: YouzanRetailStockinoutOperateAuditV100Response;
    };
  };
}
