import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface RetailOpenSpuQueryV300Params {
  /** 商品编码列表，最多 50 个。 */
  spu_codes?: string[];
  /** 销售渠道，2：门店 4：网店。 */
  sell_channels?: number[];
  /** 商品创建时间起始，格式：yyyy-MM-dd HH:mm:ss。 */
  create_time_start?: string;
  /** 商品创建时间截止，格式：yyyy-MM-dd HH:mm:ss。 */
  create_time_end?: string;
  /** 页码，从 1 开始正整数，page_size * page_no 总条数最大支持 3600 条。 */
  page_no: number;
  /** 每页条数，默认 20 条。 */
  page_size: number;
  /**
   * 已废弃字段。文档标记必填，但说明 2021-04-26 后已取消校验，新接入开发者无需传值。
   */
  retail_source?: string;
  /** 是否强制 ES 检索。传此参数时 page_no 无效，结合 last_spu_id 使用。 */
  is_search_after?: boolean;
  /** 指定 spuId 查询下一页。 */
  last_spu_id?: YouzanLong;
}

export interface RetailOpenSpuQueryV300Sku {
  sku_id?: YouzanLong;
  category_id?: string;
  category_name?: string;
  product_name?: string;
  specifications?: string;
  unit?: string;
  sku_no?: string;
  sku_code?: string;
  spu_no?: string;
  spu_code?: string;
  bar_codes?: string[];
  /** 建议零售价，单位：分。 */
  retail_price?: string;
  /** 废弃字段：销项税率。 */
  output_tax_rate?: string;
  /** 废弃字段：进项税率。 */
  input_tax_rate?: string;
  create_time?: string;
  update_time?: string;
}

export interface RetailOpenSpuQueryV300UnitSetting {
  unit_id?: YouzanLong;
  unit_code: string;
  name?: string;
  /** 换算规则，比如 1 包 = 3 件时该值为 3000，数量要乘以 1000。 */
  conversion_rule?: YouzanLong;
  /** 主单位标志，0：主单位 1：非主单位。 */
  primary_unit?: number;
  /** 单位类型，0：订货单位 1：销售单位 2：库存单位。 */
  unit_type?: number;
  /** 计量类型，0：计件类型 10：计重类型。 */
  measure_type?: number;
  /** 来源，0：自建 1：同步 2：系统预设，用户自定义。 */
  origin?: number;
  /** 与基准单位的转换率。 */
  conversion_rate?: YouzanLong;
}

export interface RetailOpenSpuQueryV300AttributeValue {
  attribute_value_id: YouzanLong;
  attribute_value_name: string;
  /** 属性值状态，0：禁用 1：启用。 */
  attribute_value_status: number;
  /** 属性值加价，单位：分。 */
  price: number;
  sequence: number;
}

export interface RetailOpenSpuQueryV300Attribute {
  attribute_id: YouzanLong;
  kdt_id: YouzanLong;
  attribute_name: string;
  is_required: boolean;
  is_multi_select: boolean;
  is_ump: boolean;
  is_sale: boolean;
  attribute_values?: RetailOpenSpuQueryV300AttributeValue[];
  is_edit: boolean;
  sequence: number;
}

export interface RetailOpenSpuQueryV300Spu {
  spu_id?: YouzanLong;
  category_id?: string;
  category_name?: string;
  product_name?: string;
  unit?: string;
  spu_code?: string;
  spu_no?: string;
  bar_codes?: string[];
  sell_channels?: number[];
  default_vendor_id: YouzanLong;
  vendor_code: string;
  skus?: RetailOpenSpuQueryV300Sku[];
  create_time?: string;
  update_time?: string;
  /** 是否多单位商品，0：否 1：是。 */
  multi_units_spu?: number;
  unit_settings?: RetailOpenSpuQueryV300UnitSetting[];
  specifications?: string;
  /** 规格定义组，接口返回 JSON 字符串。 */
  spec_define_tuple?: string;
  is_non_spec?: boolean;
  /** 图片地址，接口返回 JSON 字符串。 */
  photo_url?: string;
  attributes?: RetailOpenSpuQueryV300Attribute[];
}

export interface RetailOpenSpuQueryV300Paginator {
  page?: number;
  page_size?: number;
  total_count?: number;
}

export interface RetailOpenSpuQueryV300Data {
  spus?: RetailOpenSpuQueryV300Spu[];
  paginator?: RetailOpenSpuQueryV300Paginator;
}

export type RetailOpenSpuQueryV300Response =
  YouzanApiSuccessResponse<RetailOpenSpuQueryV300Data>;

export interface RetailOpenSpuQueryV300ApiMapEntry {
  'youzan.retail.open.spu.query': {
    '3.0.0': {
      params: RetailOpenSpuQueryV300Params;
      response: RetailOpenSpuQueryV300Response;
    };
  };
}
