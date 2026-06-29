/**
 * Generated from Youzan API docs for youzan.item.detail.get@1.0.1.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanItemDetailGetV101Params {
  /** 有赞连锁网店店铺id，仅供有赞连锁场景下使用。有赞平台生成，在有赞平台唯一，用于判断信息属于哪一个网店 */
  node_kdt_id?: YouzanLong;
  /** 商品Id，有赞生成的店铺下商品唯一id，平台唯一。可以通过列表接口如youzan.items.onsale.get （查询出售中商品）和 youzan.items.inventory.get （查询仓库中商品）获取 */
  item_id?: YouzanLong;
  /** 有赞连锁网店商品id，仅供有赞连锁场景下使用。item_id和node_item_id只能传一个。传了返回网店数据。 */
  node_item_id?: YouzanLong;
  /** 商品别名，店铺类型为单店时item_id和alias二者选一，店铺类型为连锁时不支持传值alias查询信息 */
  alias?: string;
}

export interface YouzanItemDetailGetV101DataSizeGroupSizes {
  /** 尺码id */
  size_id: YouzanLong;
  /** 尺码名称 */
  name: string;
  /** 尺码编码 */
  code: string;
  /** 关联的规格值id */
  related_vid: YouzanLong;
}

export interface YouzanItemDetailGetV101DataSizeGroup {
  /** 尺码组id */
  size_group_id: YouzanLong;
  /** 尺码组名称 */
  name: string;
  /** 关联的规格项id */
  related_kid: YouzanLong;
  sizes?: YouzanItemDetailGetV101DataSizeGroupSizes[];
}

export interface YouzanItemDetailGetV101DataCategoryPropertiesPublics {
  /** 主键 */
  id: YouzanLong;
  /** 属性项名称,如：颜色 */
  pro_name: string;
  /** 属性值有多选情况，如：红色 */
  val_names: string[];
}

export interface YouzanItemDetailGetV101DataCategoryPropertiesPrivates {
  /** 主键 */
  id: YouzanLong;
  /** 属性项名称,如：颜色 */
  pro_name: string;
  /** 属性值有多选情况，如：红色 */
  val_names: string[];
}

export interface YouzanItemDetailGetV101DataCategoryProperties {
  /** 新类目ID叶子类目 */
  leaf_category_id: YouzanLong;
  /** 类目状态 1：正常 2：禁用 */
  status: number;
  /** java.util.List<String> 类目全路径 按照 层级顺序 1、2、3 或者 叶子类目名称 */
  category_names: string[];
  publics?: YouzanItemDetailGetV101DataCategoryPropertiesPublics[];
  privates?: YouzanItemDetailGetV101DataCategoryPropertiesPrivates[];
}

export interface YouzanItemDetailGetV101DataImages {
  /** 图片链接 */
  image_url?: string;
  /** id */
  image_id?: YouzanLong;
}

export interface YouzanItemDetailGetV101DataSkuListSkuProps {
  /** 规格项名称id */
  prop_name_id?: YouzanLong;
  /** 规格项名称 */
  prop_name?: string;
  /** 规格值名称id */
  prop_value_id?: YouzanLong;
  /** 规格值名称 */
  prop_value_name?: string;
}

export interface YouzanItemDetailGetV101DataSkuList {
  /** 商品规格Id，微商城店铺商品规格标识（同一商品Id下，规格id唯一）可以通过youzan.item.get(商品详情)获取 */
  sku_id?: YouzanLong;
  /** sku编码 */
  sku_no?: string;
  /** 规格条码 */
  sku_barcode?: string;
  /** 更多条码 */
  sku_barcodes: string[];
  /** 规格属性 */
  sku_props?: YouzanItemDetailGetV101DataSkuListSkuProps[];
  /** 库存数量 */
  stock_num?: YouzanLong;
  /** 规格的重量，单位g */
  weight?: YouzanLong;
  /** 有规格时最低建议售价，单位：分 */
  min_guide_price?: YouzanLong;
  /** 有规格时最高建议售价，单位：分 */
  max_guide_price?: YouzanLong;
  /** 标准价单位：分 */
  standard_price: YouzanLong;
  /** 配送价（配销价）单位：分 */
  delivery_price: YouzanLong;
  /** 是否可售0.不可售1.可售仅在分销商品时生效非分销商品为null */
  is_fenxiao_sell?: number;
  /** 备货时间，Unix时间戳，单位：毫秒。仅蛋糕烘焙商品类型设置后返回。转换进制为1秒等于1000毫秒 */
  prepare_time?: YouzanLong;
  /** 商品的这个Sku的价格；单位：分 */
  price?: YouzanLong;
  /** SKU销量 */
  sold_num?: YouzanLong;
  /** Sku创建日期，Unix时间戳，单位：毫秒 */
  sku_created_time?: YouzanLong;
  /** Sku最后修改日期，Unix时间戳，单位：毫秒 */
  sku_modified_time?: YouzanLong;
  /** Sku的商品的数量 */
  quantity?: YouzanLong;
  /** Sku的成本价，单位：分 */
  cost_price?: YouzanLong;
}

export interface YouzanItemDetailGetV101DataSkuValueProps {
  /** 规格属性值Id */
  id?: YouzanLong;
  /** 规格属性值名称 */
  name?: string;
  /** 图片URL */
  img_url?: string;
}

export interface YouzanItemDetailGetV101DataItemPropsTextModels {
  /** 属性值id */
  prop_text_id?: YouzanLong;
  /** 属性值名称 */
  prop_text_name?: string;
  /** 属性值价格，单位：分 */
  price?: number;
}

export interface YouzanItemDetailGetV101DataItemProps {
  /** 属性名称 */
  prop_name?: string;
  /** 属性ID */
  prop_id?: YouzanLong;
  /** 属性项关联属性值列表 */
  text_models?: YouzanItemDetailGetV101DataItemPropsTextModels[];
}

export interface YouzanItemDetailGetV101DataItemPriceParam {
  /** 商品价格，单位：分 */
  price?: YouzanLong;
  /** 商品划线价 */
  origin?: string;
  /** 无规格商品的成本价，分销商品返回供货价 */
  cost_price?: YouzanLong;
  /** 最小建议售价，单位：分 */
  min_guide_price?: YouzanLong;
  /** 最大建议售价，单位：分 */
  max_guide_price?: YouzanLong;
}

export interface YouzanItemDetailGetV101DataItemDeliveryParamDeliverySetting {
  /** 是否支持快递发货，true-支持，false-不支持，不设置默认为不支持 */
  express?: boolean;
  /** 是否支持同城配送，true-支持，false-不支持，不设置默认为不支持 */
  city_delivery?: boolean;
  /** 是否支持到店自提，true-支持，false-不支持，不设置默认为不支持 */
  self_pick?: boolean;
  /** 是同城配送费用续重是否收费，true-收取，false-不收取，不设置默认为不收取 */
  heavy_continued?: boolean;
}

export interface YouzanItemDetailGetV101DataItemDeliveryParam {
  /** 运费，单位：分 */
  postage?: YouzanLong;
  /** 运费模板ID */
  delivery_template_id?: YouzanLong;
  /** 商品纬度物流配送方式 */
  delivery_setting?: YouzanItemDetailGetV101DataItemDeliveryParamDeliverySetting;
}

export interface YouzanItemDetailGetV101DataHaiTaoParam {
  /** 海淘口岸编码，详情见：https://doc.youzanyun.com/resource/solution/27031/27100 */
  customs_code?: string;
  /** 海淘商品贸易模式，BC直邮：9610，BBC保税进口：1210 */
  cross_border_trade_mode?: YouzanLong;
  /** 进口地code非必填 */
  source_country_code?: number;
  /** 是否包税；0-不包税，1-包税必填 */
  tariff_rule?: number;
  /** 税率范围；取值范围0.01-28.9 */
  tariff_rate?: string;
  /** 供货商品是否包税；0-不包税，1-包税必填 */
  supply_tariff_rule?: number;
  /** 原产地，可通过youzan.delivery.region.crossboard.get获取跨境地址列表 */
  original_place_code: number;
  /** 认证仓名称 */
  warehouse_name: string;
  /** 认证仓code */
  warehouse_code: string;
}

export interface YouzanItemDetailGetV101DataExtraParamEcardExtra {
  /** 虚拟商品有效期开始时间,单位：秒 */
  item_validity_start: YouzanLong;
  /** 虚拟商品有效期结束时间,单位：秒 */
  item_validity_end: YouzanLong;
  /** 电子凭证生效类型，0-立即生效，1-自定义推迟时间，2-隔天生效 */
  effective_type: number;
  /** 生效后可用类型；0-长期可用，1-生效后设置天数可用，2-生效后一定日期内可用 */
  validity_type: number;
  /** 电子凭证自定义推迟时间，单位：小时 */
  effective_delay_hours: number;
  /** 节假日是否可用；true-可用，false-不可用 */
  holidays_available: boolean;
  /** 生效后可用天数，单位：天 */
  item_validity_day: number;
  /** 电子卡券使用说明 */
  instructions: string;
  /** 提前预定时间。可用类型是3(使用日期当天有效)时才能用。格式：{提前x天}-{x点}-{x分}，比如，0-16-37:代表当天16点37分；1-14-26：代表前一天14点26分，以此类推） */
  item_pre_order_time: string;
}

export interface YouzanItemDetailGetV101DataExtraParamItemChannelExtra {
  /** 商品分类id */
  category_id: YouzanLong;
}

export interface YouzanItemDetailGetV101DataExtraParam {
  /** 电子卡券扩展参数 */
  ecard_extra: YouzanItemDetailGetV101DataExtraParamEcardExtra;
  /** 商品扩展信息 */
  item_channel_extra: YouzanItemDetailGetV101DataExtraParamItemChannelExtra;
}

export interface YouzanItemDetailGetV101DataPresaleParam {
  /** 预售类型：-1-表示非预售，0-表示全款预售，1-表示定金预售 */
  pre_sale_type?: number;
  /** 发货类型:0-xxx时间开始发货,1-付款n天后发货。 */
  etd_type?: number;
  /** 发货开始时间，Unix时间戳，单位：毫秒 */
  etd_start?: YouzanLong;
  /** 付款成功后发货天数。单位：天 */
  etd_days?: number;
  /** 当预售类型为定金预售时，这个字段用于区分是按比例预售还是按金额预售定金预售类型:0-表示按比例预售，1-表示按金额预售 */
  deposit_type?: number;
  /** 表示订金预售时，订金所占全款的百分比，范围为1-100的整数 */
  deposit_ratio?: number;
  /** 否 表示定金预售时，用户设置的定金金额，单位:分，范围为1~（商品价格*100-1）举例：一个商品价格100元，定金最大可以设置为99.99元 */
  deposit?: string;
  /** 预售开始时间,Unix时间戳，单位：毫秒 */
  pre_sale_start?: YouzanLong;
  /** 预售结束时间，Unix时间戳，单位：毫秒 */
  presale_end?: YouzanLong;
  /** 尾款支付开始时间，Unix时间戳，单位：毫秒 */
  balance_due_start?: YouzanLong;
  /** 尾款支付结束时间，Unix时间戳，单位：毫秒 */
  balance_due_end?: YouzanLong;
}

export interface YouzanItemDetailGetV101DataPostSaleParamRefundParam {
  /** 退款方式。0-未核销卡券即支持退款，1-未核销卡券在过期前若干时间前可退款。仅对电子卡券有效，且电子卡券是长久有效时值不能是1。 */
  refund_type?: number;
  /** 电子卡券有效期剩余时间，Unix时间戳，单位：毫秒。仅支持退款类型是未核销卡券在过期前若干时间前可退款，且仅对电子卡券有效。 */
  period_mill_seconds?: YouzanLong;
  /** 是否支持退款。1-支持，0-不支持仅对虚拟商品、电子卡券有效 */
  support_refund?: number;
}

export interface YouzanItemDetailGetV101DataPostSaleParam {
  /** 是否支持七天无理由退换货。false-不支持，true-支持仅支持实物商品，其他商品忽略 */
  support_unconditional_return?: boolean;
  /** 商品是否支持换货。0-不支持，1-支持仅支持实物商品，其他商品忽略 */
  is_support_barter?: number;
  /** 商品是否支持极速退款。false-不支持，true-支持 */
  is_return_msg?: boolean;
  /** 退款参数 */
  refund_param?: YouzanItemDetailGetV101DataPostSaleParamRefundParam;
}

export interface YouzanItemDetailGetV101DataFenxiaoExtend {
  /** 供货店铺Id */
  supplier_kdt_id?: YouzanLong;
  /** 供货商品Id */
  supplier_item_id?: YouzanLong;
}

export interface YouzanItemDetailGetV101DataPurchasePermission {
  /** 是否设置商品限购；true-限购，false-不限购 */
  purchase_right?: boolean;
  /** 每人限购多少件。0代表无限购，默认为0 */
  buy_quota?: YouzanLong;
  /** 限购周期：0-终身限购， 1-按天限购，2-按周限购，3-按月限购，不传默认不限购 */
  quota_cycle?: number;
  /** 权益卡 */
  ump_levels: string[];
  /** 权益卡名称 */
  ump_level_text: string[];
  /** 会员身份ID */
  customer_levels: string[];
  /** 会员身份名称 */
  customer_level_text: string[];
  /** 用户标签ID */
  ump_tags: string[];
  /** 用户标签身份 */
  ump_tags_text: string[];
}

export interface YouzanItemDetailGetV101DataItemPageSettingModel {
  /** 商品详情页浏览模式。0-普通下单，1-商详页极速下单，2-分步极速下单 */
  item_page_mode?: string;
  /** 是否启用商详页独立下单模式。0-不启用，1-启用 */
  model_switch_config?: number;
}

export interface YouzanItemDetailGetV101DataTemplate {
  /** 模板Id */
  template_id?: number;
  /** 模板名称 */
  template_title?: string;
}

export interface YouzanItemDetailGetV101DataMessages {
  /** 留言类型；text-文本格式，tel-数字格式，email-邮箱格式，date-日期格式，id_no-身份证号格式，image-图片格式，mobile-手机号格式，time-时间格式 */
  type?: string;
  /** 留言名称，不能多于10字 */
  name?: string;
  /** 当type=date时，0-不包含日期，1-含日期 */
  datetime?: number;
  /** 表示是否必填，0-不必填，1-必填 */
  required?: number;
  /** 表示是否多行，0-不必填，1-必填 */
  multiple?: number;
}

export interface YouzanItemDetailGetV101DataSpu {
  /** 无规格商品规格id，可以用于【youzan.trade.bill.good.url.get和youzan.trade.bill.goods.url.get】接口使用 */
  spu_id?: YouzanLong;
}

export interface YouzanItemDetailGetV101DataChannelsChannelItemPropsTextModels {
  /** 属性值id */
  id: YouzanLong;
  /** 属性值名称 */
  text_name: string;
  /** 属性价格 */
  price: number;
}

export interface YouzanItemDetailGetV101DataChannelsChannelItemProps {
  /** 商品添加的规格项id */
  prop_name: string;
  /** 商品关联的属性值id列表 */
  prop_id: YouzanLong;
  text_models?: YouzanItemDetailGetV101DataChannelsChannelItemPropsTextModels[];
}

export interface YouzanItemDetailGetV101DataChannelsItemPriceParam {
  /** 商品价格，单位：分，没有SKU时用，有sku时，该字段值为sku中的最小价格 */
  price: YouzanLong;
  /** 显示在原价那里的信息，划线价 */
  origin: string;
  /** 无规格商品的成本价 */
  cost_price: YouzanLong;
  /** 最小建议售价（分） */
  min_guide_price: YouzanLong;
  /** 最大建议售价（分） */
  max_guide_price: YouzanLong;
}

export interface YouzanItemDetailGetV101DataChannelsChannelSkuListChannelSkuProps {
  /** 规格项名称id */
  prop_name_id: YouzanLong;
  /** 规格项名称 */
  prop_name: string;
  /** 规格值名称id */
  prop_value_id: YouzanLong;
  /** 规格值名称 */
  prop_value_name: string;
}

export interface YouzanItemDetailGetV101DataChannelsChannelSkuList {
  /** 规格ID */
  sku_id: YouzanLong;
  /** sku编码 */
  sku_no: string;
  /** 规格条码 */
  sku_barcode: string;
  /** 更多规格条码 */
  sku_barcodes: string[];
  channel_sku_props?: YouzanItemDetailGetV101DataChannelsChannelSkuListChannelSkuProps[];
  /** 库存数量 */
  stock_num: YouzanLong;
  /** 规格的重量，单位g */
  weight: YouzanLong;
  /** 有规格时最低建议售价(分） */
  min_guide_price: YouzanLong;
  /** 有规格时最高建议售价（分） */
  max_guide_price: YouzanLong;
  /** 标准价 单位：分 */
  standard_price: YouzanLong;
  /** 配送价（配销价）单位：分 */
  delivery_price: YouzanLong;
  /** 是否可售0.不可售1.可售仅在分销商品时生效非分销商品为null */
  is_fenxiao_sell: number;
  /** 备货时间，Unix时间戳，单位：毫秒，仅蛋糕烘焙商品类型设置后返回。转换进制为1秒等于1000毫秒 */
  prepare_time: YouzanLong;
  /** 商品的这个Sku的价格；单位：分 */
  price: YouzanLong;
  /** SKU销量 */
  sold_num: YouzanLong;
  /** Sku创建日期，单位ms */
  sku_created_time: YouzanLong;
  /** Sku最后修改日期，单位ms */
  sku_modified_time: YouzanLong;
  /** 属于这个Sku的商品的数量 */
  quantity: YouzanLong;
  /** 商品的这个Sku的成本价，单位分 */
  cost_price: YouzanLong;
}

export interface YouzanItemDetailGetV101DataChannelsChannelSkuValueProps {
  /** 规格属性值Id */
  id: YouzanLong;
  /** 规格属性值名称 */
  name: string;
  /** 图片URL */
  img_url: string;
}

export interface YouzanItemDetailGetV101DataChannels {
  /** 渠道商品id */
  id: YouzanLong;
  /** 渠道类型，0:网店 1:门店 */
  channel: number;
  /** 渠道商品标题。不能超过100字，受违禁词控制 */
  title: string;
  /** 子标题 */
  summary: string;
  /** 商品卖点信息 */
  sell_point: string;
  /** 商品分组（仅一级）列表即商品标签Id列表 */
  tag_ids: YouzanLong[];
  /** 商品分组（含二级）列表即商品标签Id列表 */
  actual_tag_ids: YouzanLong[];
  channel_item_props?: YouzanItemDetailGetV101DataChannelsChannelItemProps[];
  /** 是否参加会员折扣。默认1，设置为1参加会员折扣 */
  join_level_discount: number;
  /** 价格属性集 */
  item_price_param: YouzanItemDetailGetV101DataChannelsItemPriceParam;
  channel_sku_list?: YouzanItemDetailGetV101DataChannelsChannelSkuList[];
  channel_sku_value_props?: YouzanItemDetailGetV101DataChannelsChannelSkuValueProps[];
  /** 总库存 */
  quantity: YouzanLong;
  /** 计价方式 0:计件 10:计重，仅门店渠道使用 */
  measurement: string;
  /** 连锁模式下总店渠道商品编辑，上架店铺列表 */
  display_on_kdt_ids: YouzanLong[];
  /** 连锁模式下总店渠道商品编辑，下架店铺列表 */
  display_off_kdt_ids: YouzanLong[];
  /** 连锁模式下总店渠道商品编辑，不可售店铺列表 */
  no_sale_kdt_ids: YouzanLong[];
}

export interface YouzanItemDetailGetV101Data {
  /** 店铺在有赞的id标识，有赞平台生成，在有赞平台唯一，用于判断信息属于哪一个店铺 */
  kdt_id?: YouzanLong;
  /** 商品类型： 0—普通商品 3—UMP降价拍 5—外卖商品 10—分销商品 20—会员卡商品 21—礼品卡商品 22—团购券 25—批发商品 30—收银台商品 31—知识付费商品 35—酒店商品 40—美业商品 60—虚拟商品 61—电子卡券 */
  item_type?: number;
  /** 业务标：010000000001:茶饮烘焙商品； 010000000002:预售商品； 000000000041:餐饮商品； 010000000042:生鲜果蔬商品； 010000000043:海淘跨境商品； 010000000045:实体卡商品； 010000000050:付费等级商品； 010000000051:付费优惠券商品； 000000000000:基础商品； 000000000001:拍卖商品； 000000000005:外卖商品； 000000000020:会员卡商品； 000000000021:礼品卡商品； 000000000022:团购券； 000000000024:周期购； 000000000025:批发商品； 000000000030:收银台商品； 000000000031:知识付费商品； 000000000035:酒店商品； 000000000040:美业商品； 000000000060:虚拟商品 //目前作废不用，使用item_type区分； 000000000061:电子卡券 //目前作废不用，使用item_type区分； 000000000071:卡项商品，暂针对于美业卡商品，包含次卡、折扣卡、充值卡； */
  biz_code: string;
  /** 是否虚拟商品，使用item_types和s_virtual判断商品类型；详情见商品类型说明：https://doc.youzanyun.com/resource/faq/27034/29008/67034 */
  is_virtual: number;
  /** 商品参与的平台。0-普通、10-分销商品。注：为10时也是供货商品 */
  goods_platform: number;
  /** 能力标code集合。其中：70001-分销商品标、70002-供货商品标、10003-影子商品(关联的元商品)、10004-元商品标(关联了影子商品，即供货商品) */
  ability_mark_codes: number[];
  /** 商品Id，有赞生成的店铺下商品唯一id，平台唯一。可以通过列表接口如youzan.items.onsale.get （查询出售中商品）和 youzan.items.inventory.get （查询仓库中商品）获取 */
  item_id?: YouzanLong;
  /** 商品关联总部商品id */
  root_item_id?: YouzanLong;
  /** 有赞连锁总部店铺id，仅供有赞连锁场景下使用。有赞平台生成，在有赞平台唯一，用于判断信息属于哪一个总部 */
  root_kdt_id?: YouzanLong;
  /** 商品编码（商家为商品设置的外部编号，可与商家外部系统对接） */
  item_no?: string;
  /** 商品条码 */
  item_barcode?: string;
  /** 更多条码，连锁L-专业版店铺专有 */
  item_barcodes: string[];
  /** 是否有一品多码 */
  has_multi_barcode: boolean;
  /** 尺码组，连锁L-专业版店铺专有 */
  size_group: YouzanItemDetailGetV101DataSizeGroup;
  /** 规格型号，最多100个字，连锁L-专业版店铺专有 */
  specifications: string;
  /** 创建时间，Unix时间戳，单位：毫秒 */
  created_time?: YouzanLong;
  /** 商品标题 */
  title?: string;
  /** 分享描述 */
  summary?: string;
  /** 商品卖点信息 */
  sell_point?: string;
  /** 商品类目Id，使用youzan.itemcategories.get获取商品类目二维列表接口获取 */
  cid: YouzanLong;
  /** 商品类目属性相关 */
  category_properties: YouzanItemDetailGetV101DataCategoryProperties;
  /** 商品分组（仅一级）列表即商品标签Id列表 */
  tag_ids?: YouzanLong[];
  /** 商品分组（含二级）列表即商品标签Id列表 */
  actual_tag_ids: YouzanLong[];
  /** 商品图片信息 */
  images?: YouzanItemDetailGetV101DataImages[];
  /** 主视频id */
  video_id?: YouzanLong;
  /** 商品规格详情 */
  sku_list?: YouzanItemDetailGetV101DataSkuList[];
  /** 是否展示规格图片展示在商详页和规格选择页。true-是，false-否 */
  sku_picture_display_config?: boolean;
  /** SKU图片，第一个规格属性项对应的规格值的图片 */
  sku_value_props?: YouzanItemDetailGetV101DataSkuValueProps[];
  /** 商品属性数据，仅蛋糕烘焙商品类型，会有该数据内容 */
  item_props?: YouzanItemDetailGetV101DataItemProps[];
  /** 是否上架商品。1—上架商品，0—不上架商品新增若不传该字段默认传1 */
  is_display?: number;
  /** 商品定时上架（定时开售）的时间。没设置则为空，单位ms */
  auto_listing_time?: YouzanLong;
  /** 商品重量,商品无规格的时候使用，单位：克 */
  item_weight?: YouzanLong;
  /** 无规格价格属性集（无规格商品会返回信息） */
  item_price_param?: YouzanItemDetailGetV101DataItemPriceParam;
  /** 是否参加会员折扣，true-参加，false-不参加 */
  join_level_discount?: boolean;
  /** 商品总库存 */
  quantity?: YouzanLong;
  /** 库存扣减模式0：下单扣库存->拍减1：付款扣库存->拍占2：非预占付款扣库存->付减 */
  stock_deduct_mode?: number;
  /** 隐藏库存,0-不隐藏,1-隐藏 */
  hide_stock?: number;
  /** 商品总销量；按照商品实际成交及退款进行统计，即销量=商品累计支付件数 - 商品累计全额退款件数；为什么商品销量和商品规格销量对不上？：https://help.youzan.com/displaylist/detail_4_4-1-53412 */
  sold_num?: YouzanLong;
  /** 配送属性集 */
  item_delivery_param?: YouzanItemDetailGetV101DataItemDeliveryParam;
  /** 备货时间，Unix时间戳，单位：毫秒，仅蛋糕烘焙商品类型设置后返回。转换进制为1秒等于1000毫秒 */
  prepare_time?: YouzanLong;
  /** 海淘相关信息 */
  hai_tao_param?: YouzanItemDetailGetV101DataHaiTaoParam;
  /** 是否需要实名认证信息，海淘商品默认为ture；true-需要实名认证信息false-不需要实名认证信息 */
  need_customs_check?: boolean;
  /** 是否需要身份认证信息，海淘商品默认为ture；true-需要身份认证信息false-不需要身份认证信息 */
  need_customs_info?: boolean;
  /** 是否需要上传身份证正反面照片（此字段为true时，needCustomsInfo固定为true,可以为空） */
  need_customs_info_with_picture?: boolean;
  /** 商品扩展参数 */
  extra_param: YouzanItemDetailGetV101DataExtraParam;
  /** 预售商品信息 */
  presale_param?: YouzanItemDetailGetV101DataPresaleParam;
  /** 售后信息 */
  post_sale_param?: YouzanItemDetailGetV101DataPostSaleParam;
  /** 商品分销信息 */
  fenxiao_extend?: YouzanItemDetailGetV101DataFenxiaoExtend;
  /** 商品起售数量 */
  start_sale_num?: number;
  /** 购买权限 */
  purchase_permission?: YouzanItemDetailGetV101DataPurchasePermission;
  /** 商品详情页下单模式配置 */
  item_page_setting_model?: YouzanItemDetailGetV101DataItemPageSettingModel;
  /** 商详立即购买按钮。0-为默认，1-为自定义 */
  buy_btn_config?: number;
  /** 自定义立即购买按钮，支持6字以内 */
  buy_btn_label?: string;
  /** 商品详情内容 */
  desc?: string;
  /** 商品详情页模板信息 */
  template?: YouzanItemDetailGetV101DataTemplate;
  /** 适合wap应用的商品详情url，分享出去的商品详情url */
  detail_url?: string;
  /** 商品留言 */
  messages?: YouzanItemDetailGetV101DataMessages[];
  /** 商品规格汇总信息，有规格、无规格均会有这个汇总信息 */
  spu?: YouzanItemDetailGetV101DataSpu;
  /** 商品别名 */
  alias?: string;
  /** 是否有网店渠道 */
  has_online_channel: boolean;
  /** 是否有门店渠道 */
  has_offline_channel: boolean;
  channels?: YouzanItemDetailGetV101DataChannels[];
  /** 商品店内组织ID，订购云上专柜插件后在商品发布时可编辑该字段。查询店铺的店内组织API：https://doc.youzanyun.com/detail/API/0/3696 */
  shop_org_id: YouzanLong;
}

export type YouzanItemDetailGetV101Response = YouzanApiSuccessResponse<YouzanItemDetailGetV101Data>;

export interface YouzanItemDetailGetV101ApiMapEntry {
  "youzan.item.detail.get": {
    "1.0.1": {
      params: YouzanItemDetailGetV101Params;
      response: YouzanItemDetailGetV101Response;
    };
  };
}
