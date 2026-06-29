/** 有赞开放 API 公共类型。 */

export interface YouzanApiSuccessResponse<TData> {
  success: true;
  code?: number;
  message?: string;
  data: TData;
  request_id?: string | null;
}

export type YouzanLong = number | string;
