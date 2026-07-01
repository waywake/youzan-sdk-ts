/**
 * Generated from Youzan API docs for youzan.item.common.update@1.0.0.
 * Review before committing; docs occasionally contain object fields shown as JSON strings in examples.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

type YouzanItemCommonUpdateV100JsonObject<T> = T | string;

export interface YouzanItemCommonUpdateV100Media {
  /** 商品主图。.使用【youzan.materials.storage.platform.img.upload】接口上传获取图片id。 */
  image_ids?: YouzanLong[];
  /** 主视频ID。传入特殊值：0，代表删除视频 */
  main_video_id?: YouzanLong;
  /** 讲解视频ID */
  explain_video_id?: YouzanLong;
}

export interface YouzanItemCommonUpdateV100Property {
  /** 属性项名称 */
  prop_name?: string;
  /** 属性值名称 */
  values?: string[];
}

export interface YouzanItemCommonUpdateV100ItemCategory {
  /** 叶子类目id */
  leaf_category_id?: YouzanLong;
  /** 公域属性 */
  public_properties?: YouzanItemCommonUpdateV100Property[];
  /** 私域属性 */
  private_properties?: YouzanItemCommonUpdateV100Property[];
}

export interface YouzanItemCommonUpdateV100SpecValue {
  /** 规格名称 */
  spec_name?: string;
  /** 规格值名称 */
  spec_value_name?: string;
  /** 规格图片地址，可以从商品详情查询接口获取图片地址（youzan.item.detail.get 1.0.0） */
  spec_image_url?: string;
}

export interface YouzanItemCommonUpdateV100Spec {
  /** 规格项名称 */
  spec_name?: string;
  /** 是否显示规格图片，仅第一个规格项允许设置规格图片 */
  is_show_spec_picture?: boolean;
  /** 规格项的值列表 */
  spec_values?: YouzanItemCommonUpdateV100SpecValue[];
  /** 尺码组id，和尺码组名称任意传一 */
  size_group_id?: YouzanLong;
  /** 尺码组名称，和尺码组id任意传一。 */
  size_group_name?: string;
}

export interface YouzanItemCommonUpdateV100SkuMultiSkuMark {
  /** 一品多码 */
  one_item_multi_code?: string;
}

export interface YouzanItemCommonUpdateV100PrepareTimeMark {
  /** 备货时长。单位：ms。 */
  prepare_time?: YouzanLong;
}

export interface YouzanItemCommonUpdateV100Sku {
  /** 规格值列表 */
  spec_values?: YouzanItemCommonUpdateV100SpecValue[];
  /** 规格编码 */
  sku_code?: string;
  /** 规格条码 */
  sku_barcode?: string;
  /** 价格(分) */
  price?: YouzanLong;
  /** 最小建议售价 */
  min_guide_price?: YouzanLong;
  /** 最大建议售价 */
  max_guide_price?: YouzanLong;
  /** 成本价 */
  cost_price?: YouzanLong;
  /** 现货库存数量 */
  spot_stock_num?: YouzanLong;
  /** 商品重量 */
  item_weight?: YouzanLong;
  /** 一品多码标 */
  multi_sku_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100SkuMultiSkuMark>;
  /** 备货时间标 */
  prepare_time_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100PrepareTimeMark>;
  /** 标准价 */
  standard_price?: YouzanLong;
  /** 配送价 */
  delivery_price?: YouzanLong;
  /** 禁用状态 */
  disable_status?: number;
}

export interface YouzanItemCommonUpdateV100ItemAttributeValue {
  /** 属性值id */
  value_id?: YouzanLong;
  /** 属性值名称 */
  value?: string;
}

export interface YouzanItemCommonUpdateV100ItemAttribute {
  /** 属性id */
  attribute_id?: YouzanLong;
  /** 属性值 */
  item_attribute_values?: YouzanItemCommonUpdateV100ItemAttributeValue[];
}

export interface YouzanItemCommonUpdateV100MessageSetting {
  /** 日期时间 */
  datetime?: boolean;
  /** 是否多选 */
  multiple?: boolean;
  /** 留言名称 */
  name?: string;
  /** 是否必填 */
  required?: boolean;
  /** 留言类型 */
  type?: string;
}

export interface YouzanItemCommonUpdateV100MultiSkuMark {
  /** 一品多码 */
  one_item_multi_code?: string;
}

export interface YouzanItemCommonUpdateV100DistributionMark {
  /** 是否支持快递发货 */
  is_express?: boolean;
  /** 是否支持同城配送 */
  is_city_delivery?: boolean;
  /** 是否支持自提 */
  is_self_pick?: boolean;
  /** 是否支持阶梯续重 */
  is_heavy_continued?: boolean;
  /** 运费模板id */
  delivery_template_id?: YouzanLong;
  /** 运费，单位：分 */
  postage?: YouzanLong;
}

export interface YouzanItemCommonUpdateV100StartSaleNumMark {
  /** 起售数量 */
  start_sale_num?: YouzanLong;
}

export interface YouzanItemCommonUpdateV100StockDeductMark {
  /** 库存扣减方式 */
  stock_deduct_mode?: number;
}

export interface YouzanItemCommonUpdateV100PreSaleMark {
  /** 是否开启预售 */
  is_enable_pre_sale?: boolean;
  /** 预售商品定金比例，单位：% */
  deposit_ratio?: number;
  /** 预售商品定金金额，单位：分。 */
  deposit?: YouzanLong;
  /** 定金支付开始时间，单位：ms。 */
  presale_start_time?: YouzanLong;
  /** 定金支付结束时间，单位：ms。 */
  presale_end_time?: YouzanLong;
  /** 发货开始时间，单位：ms。 */
  etd_start_time?: YouzanLong;
  /** 发货结束时间，单位：ms。 */
  etd_end_time?: YouzanLong;
  /** 尾款支付开始时间，单位：ms。 */
  balance_due_start_time?: YouzanLong;
  /** 尾款支付结束时间，单位ms。 */
  balance_due_end_time?: YouzanLong;
  /** 发货时间类型 */
  etd_type?: number;
  /** 预售类型 */
  pre_sale_type?: number;
  /** 定金类型 */
  deposit_type?: number;
  /** 付款成功 n 后发货天数 */
  etd_days?: number;
}

export interface YouzanItemCommonUpdateV100VirtualMark {
  code_type?: number;
  card_color?: string;
  card_title?: string;
  location_of_use?: string;
  service_tel_area_code?: string;
  service_tel?: string;
  effective_type?: number;
  effective_delay_hours?: number;
  validity_type?: number;
  days_after_effective?: number;
  effective_start_time?: YouzanLong;
  effective_end_time?: YouzanLong;
  holidays_available?: number;
  instructions_for_use?: string;
  advance_booking_time?: string;
  is_expiration_auto_refund_enabled?: boolean;
  is_sync_we_chat_bag?: boolean;
}

export interface YouzanItemCommonUpdateV100HaiTaoInfoMark {
  port_code?: string;
  haitao_trade_type?: YouzanLong;
  source_country_code?: number;
  tariff_rule?: number;
  tariff_rate?: string;
}

export interface YouzanItemCommonUpdateV100QuotaMark {
  quota_cycle?: number;
  quota?: YouzanLong;
}

export interface YouzanItemCommonUpdateV100RefundMark {
  support_virtual_refund?: number;
  refund_type?: number;
  refund_time?: YouzanLong;
}

export interface YouzanItemCommonUpdateV100BarterMark {
  support_barter?: number;
}

export interface YouzanItemCommonUpdateV100UnconditionalReturnMark {
  is_support_unconditional_return?: boolean;
}

export interface YouzanItemCommonUpdateV100IdCardAuthenticationMark {
  is_required_id_card_info?: boolean;
  is_required_id_card_photo?: boolean;
  is_required_id_card_check?: boolean;
}

export interface YouzanItemCommonUpdateV100ItemDetailConfigMark {
  buy_btn_config?: number;
  buy_btn_label?: string;
  model_switch_config?: number;
  item_page_mode?: string;
}

export interface YouzanItemCommonUpdateV100Params {
  /** 商品Id，有赞生成的店铺下商品唯一id，平台唯一。 */
  item_id: YouzanLong;
  /** 商品条码 */
  item_barcode?: string;
  /** 商品编码 */
  item_code?: string;
  /** 商品名称。不能超过100字，受违禁词控制 */
  title?: string;
  /** 分享描述 */
  share_description?: string;
  /** 商品卖点信息 */
  sell_point?: string;
  /** 商品媒体信息。包含主图、主图视频、视频讲解。 */
  media?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100Media>;
  /** 商品分类Id */
  classification_id?: YouzanLong;
  /** 更新规格模式。值：1 根据规格编码、条码修改规格值，2 根据规格值修改规格其他信息 */
  update_spec_mode?: number;
  /** 总部的网店渠道分组ID。 */
  group_ids?: YouzanLong[];
  /** 品牌Id */
  brand_id?: YouzanLong;
  /** 商品类目信息 */
  item_category?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100ItemCategory>;
  /** 规格信息。规格是覆盖式更新。 */
  specs?: YouzanItemCommonUpdateV100Spec[];
  /** SKU 信息。规格是覆盖式更新。 */
  skus?: YouzanItemCommonUpdateV100Sku[];
  /** 商品属性 */
  item_attributes?: YouzanItemCommonUpdateV100ItemAttribute[];
  /** 上下架状态 */
  display?: number;
  /** 定时上架时间 */
  auto_display_on_time?: YouzanLong;
  /** 是否隐藏库存 */
  hide_stock?: number;
  /** 产地 */
  origin?: string;
  /** 是否参加会员折扣 */
  join_member_discount?: number;
  /** 留言信息 */
  message_settings?: YouzanItemCommonUpdateV100MessageSetting[];
  /** 是否清空留言 */
  empty_messages?: boolean;
  /** 运费模板id */
  template_id?: YouzanLong;
  /** 商品详情内容 */
  content?: string;
  /** 一品多码标 */
  multi_sku_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100MultiSkuMark>;
  /** 配送标。文档 curl/Node 示例以 JSON 字符串传入。 */
  distribution_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100DistributionMark>;
  /** 起售数量标 */
  start_sale_num_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100StartSaleNumMark>;
  /** 库存扣减标 */
  stock_deduct_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100StockDeductMark>;
  /** 备货时间标 */
  prepare_time_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100PrepareTimeMark>;
  /** 预售标 */
  pre_sale_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100PreSaleMark>;
  /** 电子卡券信息 */
  virtual_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100VirtualMark>;
  /** 海淘商品信息标 */
  hai_tao_info_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100HaiTaoInfoMark>;
  /** 限购标 */
  quota_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100QuotaMark>;
  /** 退款标 */
  refund_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100RefundMark>;
  /** 换货标 */
  barter_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100BarterMark>;
  /** 七天无理由退换货标 */
  unconditional_return_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100UnconditionalReturnMark>;
  /** 身份证认证标记 */
  id_card_authentication_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100IdCardAuthenticationMark>;
  /** 商品详情页配置标 */
  item_detail_config_mark?: YouzanItemCommonUpdateV100JsonObject<YouzanItemCommonUpdateV100ItemDetailConfigMark>;
  /** 是否编辑(更新)商品库存数量，默认值：true */
  is_stock_num_edited?: boolean;
  /** 规格图片是否在商详展示 */
  sku_picture_display_config?: boolean;
}

export interface YouzanItemCommonUpdateV100Data {
  /** 商品Id */
  item_id?: YouzanLong;
  /** 商品别名 */
  alias?: string;
}

export type YouzanItemCommonUpdateV100Response =
  YouzanApiSuccessResponse<YouzanItemCommonUpdateV100Data>;

export interface YouzanItemCommonUpdateV100ApiMapEntry {
  'youzan.item.common.update': {
    '1.0.0': {
      params: YouzanItemCommonUpdateV100Params;
      response: YouzanItemCommonUpdateV100Response;
    };
  };
}
