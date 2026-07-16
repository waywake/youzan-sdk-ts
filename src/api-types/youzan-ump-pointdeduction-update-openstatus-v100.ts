/**
 * Generated from Youzan API docs for
 * youzan.ump.pointdeduction.update.openstatus@1.0.0.
 * 更新积分抵现规则开启状态。
 */

export interface YouzanUmpPointdeductionUpdateOpenstatusV100EditRequest {
  status: number;
}

export interface YouzanUmpPointdeductionUpdateOpenstatusV100Params {
  /** 文档示例将编辑参数序列化为 JSON 字符串传入。 */
  edit_request:
    | string
    | YouzanUmpPointdeductionUpdateOpenstatusV100EditRequest;
}

export interface YouzanUmpPointdeductionUpdateOpenstatusV100Response {
  /** 是否开启或关闭成功。 */
  data?: boolean;
  success: boolean;
  code?: number;
  message?: string;
  trace_id?: string;
}

export interface YouzanUmpPointdeductionUpdateOpenstatusV100ApiMapEntry {
  'youzan.ump.pointdeduction.update.openstatus': {
    '1.0.0': {
      params: YouzanUmpPointdeductionUpdateOpenstatusV100Params;
      response: YouzanUmpPointdeductionUpdateOpenstatusV100Response;
    };
  };
}
