/**
 * Generated from Youzan API docs for youzan.retail.open.spu.get@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenSpuGetV300Params {
  /** 商品编码/商品规格编码，支持商家自定义参数，支持英文和数字组合，店铺下唯一。可通过youzan.retail.open.spu.query接口获取。spu_code和spu_no至少有一个不为空 */
  spu_code?: string;
  /** 仓库编码，可通过youzan.retail.open.warehouse.query接口获取（传入以仓库对应的店铺Id维度查询商品信息，不传以解析token获取的店铺Id维度查询） */
  warehouse_code?: string;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响。详情见：https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
  /** 商品条码/商品规格条码/单位条码，支持商家自定义参数，支持英文和数字组合，店铺下唯一。可通过youzan.retail.open.spu.query接口获取。spu_code和spu_no至少有一个不为空 */
  spu_no?: string;
}

export interface YouzanRetailOpenSpuGetV300DataSkus {
  /** 规格Id，有赞生成的店铺下商品规格唯一Id */
  sku_id?: YouzanLong;
  /** 商品分类Id，有赞生成的店铺下商品分类唯一Id */
  category_id?: string;
  /** 商品分类名称 */
  category_name?: string;
  /** 商品名称 */
  product_name?: string;
  /** 规格信息 */
  specifications?: string;
  /** 单位 */
  unit?: string;
  /** 规格条码，支持商家自定义参数，支持英文和数字组合，店铺下唯一 */
  sku_no?: string;
  /** 规格编码，支持商家自定义参数，支持英文和数字组合，店铺下唯一 */
  sku_code?: string;
  /** 商品条码，支持商家自定义参数，支持英文和数字组合，店铺下唯一 */
  spu_no?: string;
  /** 商品编码，支持商家自定义参数，支持英文和数字组合，店铺下唯一 */
  spu_code?: string;
  /** 一品多码 */
  bar_codes?: string[];
  /** 建议零售价，单位：元 */
  retail_price?: string;
  /** 销项税率，0.003需要乘以1000为3% */
  output_tax_rate?: string;
  /** 进项税率，0.003需要乘以1000为3% */
  input_tax_rate?: string;
  /** 创建日期 */
  create_time?: string;
  /** 更新日期 */
  update_time?: string;
  /** 标准价格，单位：元 */
  standard_price?: string;
}

export interface YouzanRetailOpenSpuGetV300DataUnitSettings {
  /** 单位Id */
  unit_id?: YouzanLong;
  /** 单位条码 */
  unit_code: string;
  /** 单位名称 */
  name?: string;
  /** 换算规则，比如该单位库存单位为包，库存单位是件，1包=3件，那么该值为3000，数量要乘以1000 */
  conversion_rule?: YouzanLong;
  /** 主单位标志，0：主单位 1：非主单位 */
  primary_unit?: number;
  /** 单位类型，0：订货单位 1：销售单位 2：库存单位 */
  unit_type?: number;
  /** 单位类型，0：计件类型 10：计重类型 */
  measure_type?: number;
  /** 来源，0：自建 1：同步 2：系统预设 */
  origin?: number;
  /** 与基准单位的转换率本单位基准单位，扩大1000倍 */
  conversion_rate?: YouzanLong;
}

export interface YouzanRetailOpenSpuGetV300DataAttributesAttributeValues {
  /** 属性值 id */
  attribute_value_id: YouzanLong;
  /** 属性值名称 */
  attribute_value_name: string;
  /** 属性值状态，0 禁用，1 启用 */
  attribute_value_status: number;
  /** 属性值加价，单位分 */
  price: number;
  /** 属性值顺序 */
  sequence: number;
}

export interface YouzanRetailOpenSpuGetV300DataAttributes {
  /** 属性项 id */
  attribute_id: YouzanLong;
  /** 店铺id */
  kdt_id: YouzanLong;
  /** 属性项名称 */
  attribute_name: string;
  /** 是否必填 */
  is_required: boolean;
  /** 是否多选 */
  is_multi_select: boolean;
  /** 是否参加营销 */
  is_ump: boolean;
  /** 是否是售卖属性 */
  is_sale: boolean;
  /** 属性值列表 */
  attribute_values?: YouzanRetailOpenSpuGetV300DataAttributesAttributeValues[];
  /** 属性项是否可以编辑 */
  is_edit: boolean;
  /** 属性项顺序 */
  sequence: number;
}

export interface YouzanRetailOpenSpuGetV300Data {
  /** 商品Id，有赞生成的店铺下商品唯一Id */
  spu_id?: YouzanLong;
  /** 商品分类Id，有赞生成的店铺下商品分类唯一Id */
  category_id?: string;
  /** 商品分类名称 */
  category_name?: string;
  /** 商品名称 */
  product_name?: string;
  /** 单位 */
  unit?: string;
  /** 商品编码，支持商家自定义参数，支持英文和数字组合，店铺下唯一 */
  spu_code?: string;
  /** 商品条码，支持商家自定义参数，支持英文和数字组合，店铺下唯一 */
  spu_no?: string;
  /** 一品多码 */
  bar_codes?: string[];
  /** 销售渠道，2：门店 4：网店 */
  sell_channels?: number[];
  /** 商品SKU基础数据 */
  skus?: YouzanRetailOpenSpuGetV300DataSkus[];
  /** 创建时间 */
  create_time?: string;
  /** 更新时间 */
  update_time?: string;
  /** 是否多单位，0：否 1：是 */
  multi_units_spu?: number;
  /** 单位设置数据多单位不为空，非多单位则为空list */
  unit_settings?: YouzanRetailOpenSpuGetV300DataUnitSettings[];
  /** 规格型号 */
  specifications?: string;
  /** 规格定义组 */
  spec_define_tuple?: string;
  /** 是否无规格商品，true：无规格 false：有规格 */
  is_non_spec?: boolean;
  /** 图片地址 */
  photo_url?: string;
  /** 供应商品Id */
  default_vendor_id?: YouzanLong;
  /** 品牌名称 */
  brand_name?: string;
  /** 品牌Id */
  brand_id?: YouzanLong;
  /** 商品关联的尺码组id；无规格商品/无尺码规格/尺码规格项未关联尺码组时为0 */
  size_group_id: YouzanLong;
  /** 商品关联的尺码组名称；不关联尺码组时为空 */
  size_group_name: string;
  /** 进项税率，0.003需要乘以1000为3% */
  input_tax_rate: string;
  /** 销项税率，0.003需要乘以1000为3% */
  output_tax_rate: string;
  /** 供应商编码 */
  vendor_code: string;
  /** 供应商品名称 */
  vendor_name: string;
  /** 生命周期节点 1 "新品" ， 2 "正常"，3 "停购"，4 "停售"，5 "淘汰" */
  lifecycle_id: number;
  /** 商品属性 */
  attributes?: YouzanRetailOpenSpuGetV300DataAttributes[];
}

export type YouzanRetailOpenSpuGetV300Response = YouzanApiSuccessResponse<YouzanRetailOpenSpuGetV300Data>;

export interface YouzanRetailOpenSpuGetV300ApiMapEntry {
  "youzan.retail.open.spu.get": {
    "3.0.0": {
      params: YouzanRetailOpenSpuGetV300Params;
      response: YouzanRetailOpenSpuGetV300Response;
    };
  };
}
