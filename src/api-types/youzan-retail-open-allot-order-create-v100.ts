import type { YouzanApiSuccessResponse } from './common';

export interface YouzanRetailOpenAllotOrderCreateV100OrderItem {
  /** 商品编码。 */
  sku_code: string;
  /** 调拨数量。文档示例以字符串传入。 */
  apply_num: number | string;
}

export interface YouzanRetailOpenAllotOrderCreateV100Params {
  /** 调出仓库/门店编码，可通过 youzan.retail.open.warehouse.query 接口获取。 */
  from_warehouse_code: string;
  /** 调入仓库/门店编码，可通过 youzan.retail.open.warehouse.query 接口获取。 */
  to_warehouse_code: string;
  /** 商品明细。文档 curl 示例以 JSON 字符串传入。 */
  order_items?: YouzanRetailOpenAllotOrderCreateV100OrderItem[] | string;
  /** 单据编号，外部开发者自定义，请开发者保持唯一值传入。 */
  biz_bill_no: string;
  /** 备注，最多支持 200 个字。 */
  remark?: string;
  /** 关联要货单（给要货单配货）。 */
  related_goods_apply_order_no?: string;
  /**
   * 已废弃字段。文档说明 2021-04-26 后已取消校验，新接入开发者无需传值。
   */
  retail_source?: string;
}

export interface YouzanRetailOpenAllotOrderCreateV100Data {
  [key: string]: unknown;
}

export type YouzanRetailOpenAllotOrderCreateV100Response =
  YouzanApiSuccessResponse<YouzanRetailOpenAllotOrderCreateV100Data> & {
    errorData?: Record<string, unknown>;
  };

export interface YouzanRetailOpenAllotOrderCreateV100ApiMapEntry {
  'youzan.retail.open.allot.order.create': {
    '1.0.0': {
      params: YouzanRetailOpenAllotOrderCreateV100Params;
      response: YouzanRetailOpenAllotOrderCreateV100Response;
    };
  };
}
