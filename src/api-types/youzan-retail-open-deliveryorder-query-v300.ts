/**
 * Generated from Youzan API docs for youzan.retail.open.deliveryorder.query@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenDeliveryorderQueryV300Params {
  /** 开始创建时间，和结束创建时间成对出现，创建时间和更新时间至少选择一对，格式：yyyy-MM-dd HH:mm:ss */
  create_time_start?: string;
  /** 结束创建时间，和开始创建时间一起出现，创建时间和更新时间至少选择一对，格式：yyyy-MM-dd HH:mm:ss */
  create_time_end?: string;
  /** 已废弃 */
  update_time_start?: string;
  /** 已废弃 */
  update_time_end?: string;
  /** 发货单状态 WAIT_DELIVER：待发货或待核销 DELIVERED：已发货或已核销 NO_NEED_TO_DELIVER：无需发货 SUCCESS：交易完成 */
  status?: string;
  /** 订单号（如果订单号不为空，其他条件失效），可以从商家后台订单列表页面或接入消息推送获取 */
  order_no?: string;
  /** 页码，从1~100开始，分页数不能超过100页。如果订单较多请使用时间参数分割。page_size 和page_no相乘总条数不能大于3200条。 */
  page_no?: number;
  /** 每页条数。默认20条，最大不能超过20，建议使用默认分页。如果订单较多请使用时间参数分割。page_size 和page_no相乘总条数不能大于3200条 */
  page_size?: number;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响。详情见：https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
  /** 门店或者仓库编码 */
  warehouse_code?: string;
  /** 销售店铺kdtId */
  seller_kdt_id?: YouzanLong;
}

export interface YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersCashierInfo {
  /** 收银员Id */
  cashier_id?: string;
  /** 收银员名称 */
  cashier_name?: string;
}

export interface YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersBuyerInfo {
  /** 买家Id */
  buyer_id?: YouzanLong;
  /** 买家名字 */
  buyer_name?: string;
  /** 买家手机号 */
  buyer_phone?: string;
  /** 粉丝名称 */
  fans_nickname?: string;
  /** 买家留言 */
  buyer_remark?: string;
  /** 是否是会员 */
  is_member?: boolean;
}

export interface YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersReceiverInfo {
  /** 省 */
  province?: string;
  /** 市 */
  city?: string;
  /** 区 */
  area?: string;
  /** 详细地址 */
  detail_address?: string;
  /** 移动电话 */
  mobile?: string;
  /** 固定电话 */
  tel?: string;
  /** 姓名 */
  name?: string;
  /** 经度 */
  lon?: number;
  /** 纬度 */
  lat?: number;
}

export interface YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersRefundInfos {
  /** 退款单号 */
  refund_no?: string;
  /** 退款申请时间 */
  create_time?: string;
  /** 退款类型: BUYER_APPLY_REFUND=买家申请退款 SELLER_REFUND=商家主动退款 SYSTEM_REFUND=一键退款，特殊类型退款 */
  refund_type?: string;
  /** 退货诉求: REFUND_ONLY=仅退款 REFUND_RETURN_GOODS=退货退款 */
  refund_demand?: string;
  /** 退款金额，单位：元 */
  refund_fee?: string;
  /** 退款状态: REFUND_WAIT_SELLER_AGREE=买家已经申请退款，等待卖家同意 REFUND_SELLER_REFUSE_BUYER=卖家拒绝退款 REFUND_WAIT_BUYER_RETURN_GOODS=卖家已经同意退货，等待买家退货 REFUND_WAIT_SELLER_CONFIRM_GOODS=买家已经退货，等待卖家确认收货 REFUND_SELLER_REFUSE_RETURN_GOODS=卖家未收到货,拒绝退款 REFUND_CLOSED=退款关闭 REFUND_SUCCESS=退款成功 */
  refund_status?: string;
  /** 退款明细Id */
  order_item_nos?: string[];
}

export interface YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersOrderItemsPreSaleInfo {
  /** 是否为预售商品，是：返回为1，否返回为空 */
  is_pre_sale: number;
  /** 预售(全款预售或定金预售)商品的发货时间 (yyyy-MM-dd HH:mm:ss格式) */
  expect_delivery_time: string;
  /** 预售商品类型 0 全款预售，1 定金预售 */
  pre_sale_type: number;
}

export interface YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersOrderItems {
  /** 发货单号（取得是履约单单号） */
  delivery_order_no?: string;
  /** 商品明细Id */
  order_item_no?: string;
  /** 计价方式为空或者为：0-计件，10-称重 */
  pricing_strategy?: number;
  /** 称重商品重量(pricingStrategy=10时有效) */
  weight?: string;
  /** 商品编码/规格编码 */
  sku_code?: string;
  /** 商品名称 */
  product_name?: string;
  /** 商品类型 0:普通类型商品; 1:拍卖商品; 5:餐饮商品; 10:分销商品; 20:会员卡商品; 21:礼品卡商品; 23:有赞会议商品; 24:周期购; 30:收银台商品; 31:知识付费商品; 35:酒店商品; 40:普通服务类商品; 182:普通虚拟商品; 183:电子卡券商品; 201:外部会员卡商品; 202:外部直接收款商品; 203:外部普通商品; 205:mock不存在商品; 206:小程序二维码 */
  item_type?: number;
  /** 商品条码/规格条码 */
  sku_no?: string;
  /** 单位(如果是称重商品,表示称重商品的单位) */
  unit?: string;
  /** 出库数量（如果是称重商品，该字段无需关心） */
  quantity?: string;
  /** 销项税率 */
  output_tax_rate?: string;
  /** 含税销售单价（定价，直接销售的价格），单位：元 */
  sales_price?: string;
  /** 单个商品类目的实付金额，已减去均摊的订单优惠，值和realSalesPrice一致 */
  real_sales_amount?: string;
  /** 退款金额，单位：元 */
  refund_fee?: string;
  /** 商品留言 */
  buyer_messages?: string;
  /** 多规格商品规格名称 */
  specifications?: string;
  /** 制作方 */
  produce_kdt_id: YouzanLong;
  /** 预售商品信息 */
  pre_sale_info: YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersOrderItemsPreSaleInfo;
}

export interface YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersSalesmanInfo {
  /** 销售导购Id */
  salesman_id?: string;
  /** 销售导购姓名 */
  salesman_name?: string;
  /** 专属导购id */
  service_salesman_id?: string;
  /** 专属导购名称 */
  service_salesman_name?: string;
}

export interface YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrders {
  /** 发货单号 */
  delivery_order_no?: string;
  /** 订单号 */
  order_no?: string;
  /** 原始订单号，仅限定制合作商家使用，标准店铺商家无需关注该字段 */
  origin_order_no: string;
  /** 仓库编码 */
  warehouse_code?: string;
  /** 仓库名称 */
  warehouse_name?: string;
  /** 仓库（发货方） */
  warehouse_kdt_id: YouzanLong;
  /** 发货单创建时间 */
  create_time?: string;
  /** 发货单更新时间 */
  update_time?: string;
  /** 订单创建时间 */
  order_create_time?: string;
  /** 具体发货时间，时间格式：yyyy-MM-dd HH:mm:ss；如果没有发货时间，发货时间为0 */
  deliver_time: string;
  /** 备注 */
  remark?: string;
  /** 发货单状态： WAIT_DELIVER=待发货或待核销 DELIVERED=已发货或已核销 NO_NEED_TO_DELIVER=无需发货 SUCCESS：交易完成 */
  status?: string;
  /** 销售渠道：ONLINE=网店 OFFLINE=门店 */
  sale_way?: string;
  /** 配送方式： TYPE_EXPRESS=快递 TYPE_LOCAL_DELIVERY=同城送 TYPE_SELF_FETCH=自提 */
  dist_type?: string;
  /** 支付类型： 0=老的方式，支付方式与支付渠道组合在一起 1=无需支付 2=现付 3=部分支付 4=货到付款 5=线下收银 6=单次支付 7=阶段支付 8=外部支付 */
  pay_type?: number;
  /** 支付方式: 0:默认值 1:微信自有支付 2:支付宝 3:银联银行卡 4:财付通银行卡 5:银行卡 6:找人代付 7:联动U付银行卡 8:货到付款 9:微信安全支付-代销 10:百度支付银行卡 11:合并付货款 12:领取赠品 13:优惠兑换 14:自动付货款 15:爱学贷 16:微信红包支付 17:返利 18:ump红包 19:payza支付 20:易宝支付银行卡 21:paypal 22:qq支付 23:有赞E卡-代销 24:储值余额付款 25:礼品卡支付 26:分销商余额支付 27:信用卡银联支付 28:储蓄卡银联支付 29:代收账户 30:储值账户 31:保证金账户 32:收款码 33:微信 34:刷卡 35:二维码台卡 36:储值卡 37:有赞E卡 38:标记收款-自有微信支付 39:标记收款-自有支付宝 40:标记收款-自有POS刷卡 41:通联刷卡支付 42:记账账户 43:现金支付 44:组合支付 114:自定义标记付款(具体名称见pay_way_desc); */
  pay_way?: number;
  /** 支付方式描述 */
  pay_way_desc?: string;
  /** 收银员信息 */
  cashier_info?: YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersCashierInfo;
  /** 买家信息 */
  buyer_info?: YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersBuyerInfo;
  /** 收件人信息 */
  receiver_info?: YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersReceiverInfo;
  /** 退款信息 */
  refund_infos?: YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersRefundInfos[];
  /** 商品明细 */
  order_items?: YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersOrderItems[];
  /** 发货单整单金额，未计任何优惠，未计邮费，单位：元 */
  sales_amount?: string;
  /** 均摊邮费，单位：元 */
  postage?: string;
  /** 发货单实付金额 ，包含邮费(均摊邮费)单位：元 */
  real_sales_amount?: string;
  /** 订单类型（0:自营订单、1:分销订单、2：分销供货订单） */
  fx_order_type?: number;
  /** 导购员信息，注意：该字段集合是客户支付成功之后异步获取的，存在1~30分钟延时返回（即客户立即支付该字段不一定立即返回信息，可能存在为空的信息）建议开发者调整调用间隔时间。 */
  salesman_info?: YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrdersSalesmanInfo;
  /** 同城配送起始时间 */
  delivery_start_time?: string;
  /** 同城配送结束时间 */
  delivery_end_time?: string;
  /** 备货状态，0：无备货状态 10：待备货 20：备货中 30：备货完成 */
  stock_up_status?: number;
  /** 下单店铺Id */
  seller_kdt_id?: YouzanLong;
  /** 下单店铺名称 */
  shop_name?: string;
  /** 仓库类型 1：独立仓 2：门店仓 */
  warehouse_type?: number;
  /** 该发货单关联的订单邮费，单位：元 */
  trade_order_postage?: string;
}

export interface YouzanRetailOpenDeliveryorderQueryV300DataPaginator {
  /** 页码 */
  page?: number;
  /** 页数 */
  page_size?: number;
  /** 总条数 */
  total_count?: number;
}

export interface YouzanRetailOpenDeliveryorderQueryV300Data {
  /** 发货单列表 */
  delivery_orders?: YouzanRetailOpenDeliveryorderQueryV300DataDeliveryOrders[];
  /** 分页参数 */
  paginator?: YouzanRetailOpenDeliveryorderQueryV300DataPaginator;
}

export type YouzanRetailOpenDeliveryorderQueryV300Response = YouzanApiSuccessResponse<YouzanRetailOpenDeliveryorderQueryV300Data>;

export interface YouzanRetailOpenDeliveryorderQueryV300ApiMapEntry {
  "youzan.retail.open.deliveryorder.query": {
    "3.0.0": {
      params: YouzanRetailOpenDeliveryorderQueryV300Params;
      response: YouzanRetailOpenDeliveryorderQueryV300Response;
    };
  };
}
