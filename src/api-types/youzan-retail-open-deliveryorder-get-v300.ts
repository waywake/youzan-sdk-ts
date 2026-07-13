/**
 * Generated from Youzan API docs for youzan.retail.open.deliveryorder.get@3.0.0.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanRetailOpenDeliveryorderGetV300Params {
  /** 销售发货单号，可以从youzan.retail.open.deliveryorder.query接口返回参数中或接入消息推送获取 */
  delivery_order_no: string;
  /** 该字段已于2021-04-26号废弃取消校验，新接入开发者无需传值，已对接开发者不受影响。详情见：https://doc.youzanyun.com/resource/faq/27034/29009/33485 */
  retail_source?: string;
  /** 是否查询销售单元门店编码，true：查询，false：不查询，默认false */
  query_seller_warehouse_code?: boolean;
}

export interface YouzanRetailOpenDeliveryorderGetV300DataCashierInfo {
  /** 收银员Id */
  cashier_id?: string;
  /** 收银员名称 */
  cashier_name?: string;
}

export interface YouzanRetailOpenDeliveryorderGetV300DataBuyerInfo {
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
  /** 是否是会员，true：是，false：否 */
  is_member?: boolean;
}

export interface YouzanRetailOpenDeliveryorderGetV300DataReceiverInfo {
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

export interface YouzanRetailOpenDeliveryorderGetV300DataRefundInfos {
  /** 退款单号 */
  refund_no?: string;
  /** 退款申请时间(yyyy-MM-dd HH:mm:ss格式) */
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

export interface YouzanRetailOpenDeliveryorderGetV300DataOrderItemsPreSaleInfo {
  /** 是否为预售商品，是：返回为1，否返回为空 */
  is_pre_sale: number;
  /** 预售(全款预售或定金预售)商品的发货时间 (yyyy-MM-dd HH:mm:ss格式) */
  expect_delivery_time: string;
  /** 预售商品类型 0 全款预售，1 定金预售 */
  pre_sale_type: number;
}

export interface YouzanRetailOpenDeliveryorderGetV300DataOrderItems {
  /** 发货单号（取得是履约单单号） */
  delivery_order_no?: string;
  /** 商品明细Id */
  order_item_no?: string;
  /** 计价方式为空或者为：0-计件，10-称重 */
  pricing_strategy?: number;
  /** 称重商品重量(pricingStrategy=10时有效) */
  weight?: string;
  /** 商品规格编码,如果不填的话，接口会自动生成默认编码，如果业务上需要编码唯一，必须入参 */
  sku_code?: string;
  /** 商品名称 */
  product_name?: string;
  /** 商品类型：0:普通类型商品;1:拍卖商品;5:餐饮商品;10:分销商品;20:会员卡商品;21:礼品卡商品;23:有赞会议商品;24:周期购;30:收银台商品;31:知识付费商品;35:酒店商品;40:普通服务类商品;182:普通虚拟商品;183:电子卡券商品;201:外部会员卡商品;202:外部直接收款商品;203:外部普通商品;205:mock不存在商品;206:小程序二维码 */
  item_type?: number;
  /** 商品规格条码,如果不填的话，接口会自动生成默认条码，如果业务上需要条码唯一，必须入参 */
  sku_no?: string;
  /** 单位(如果是称重商品,表示称重商品的单位) */
  unit?: string;
  /** 出库数量（如果是称重商品，该字段无需关心） */
  quantity?: string;
  /** 销项税率 */
  output_tax_rate?: string;
  /** 含税销售单价（定价，直接销售的价格） */
  sales_price?: string;
  /** 名字有歧义，准备废弃(有商家在用暂存)单个商品实付金额，已减去均摊的订单优惠 */
  real_sales_price?: string;
  /** 单个商品类目的实付金额，已减去均摊的订单优惠，值和real_sales_price一致 */
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
  pre_sale_info: YouzanRetailOpenDeliveryorderGetV300DataOrderItemsPreSaleInfo;
}

export interface YouzanRetailOpenDeliveryorderGetV300DataSalesmanInfo {
  /** 销售导购名称 */
  salesman_name?: string;
  /** 销售导购Id */
  salesman_id?: string;
  /** 专属导购id */
  service_salesman_id?: string;
  /** 专属导购名称 */
  service_salesman_name?: string;
}

export interface YouzanRetailOpenDeliveryorderGetV300Data {
  /** 发货单号 */
  delivery_order_no?: string;
  /** 订单类型（0：自营订单 1：分销订单 2：分销供货订单） */
  fx_order_type?: number;
  /** 订单号 */
  order_no?: string;
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
  /** 具体发货时间，时间格式：yyyy-MM-dd HH:mm:ss，如果还没有发货时间，发货时间为0 */
  deliver_time: string;
  /** 备注 */
  remark?: string;
  /** 发货单状态； WAIT_DELIVER：待发货或待核销 ；CREATED 为刚创建的状态，还没有到达待发货或者完成的状态，为瞬时状态开发者无需关注。；DELIVERED：已发货或已核销 ；NO_NEED_TO_DELIVER：无需发货； SUCCESS：交易完成； */
  status?: string;
  /** 备货状态，0：无备货状态 10：待备货 20：备货中 30：备货完成 */
  stock_up_status?: number;
  /** 销售渠道，ONLINE：网店 OFFLINE：门店 */
  sale_way?: string;
  /** 配送方式： TYPE_EXPRESS=快递 TYPE_LOCAL_DELIVERY=同城送 TYPE_SELF_FETCH=自提 */
  dist_type?: string;
  /** 支付类型： 0=老的方式，支付方式与支付渠道组合在一起 1=无需支付 2=现付 3=部分支付 4=货到付款 5=线下收银 6=单次支付 7=阶段支付 */
  pay_type?: number;
  /** 支付方式，0:默认值 1:微信自有支付 2:支付宝 3:银联银行卡 4:财付通银行卡 5:银行卡 6:找人代付 7:联动U付银行卡 8:货到付款 9:微信安全支付-代销 10:百度支付银行卡 11:合并付货款 12:领取赠品 13:优惠兑换 14:自动付货款 15:爱学贷 16:微信红包支付 17:返利 18:ump红包 19:payza支付 20:易宝支付银行卡 21:paypal 22:qq支付 23:有赞E卡-代销 24:储值余额付款 25:礼品卡支付 26:分销商余额支付 27:信用卡银联支付 28:储蓄卡银联支付 29:代收账户 30:储值账户 31:保证金账户 32:收款码 33:微信 34:刷卡 35:二维码台卡 36:储值卡 37:有赞E卡 38:标记收款-自有微信支付 39:标记收款-自有支付宝 40:标记收款-自有POS刷卡 41:通联刷卡支付 42:记账账户 43:现金支付 44:组合支付 114:自定义标记付款(具体名称见pay_way_desc); */
  pay_way?: number;
  /** 支付方式描述 */
  pay_way_desc?: string;
  /** 收银员信息 */
  cashier_info?: YouzanRetailOpenDeliveryorderGetV300DataCashierInfo;
  /** 买家信息 */
  buyer_info?: YouzanRetailOpenDeliveryorderGetV300DataBuyerInfo;
  /** 收件人信息 */
  receiver_info?: YouzanRetailOpenDeliveryorderGetV300DataReceiverInfo;
  /** 退款信息 */
  refund_infos?: YouzanRetailOpenDeliveryorderGetV300DataRefundInfos[];
  /** 商品明细 */
  order_items?: YouzanRetailOpenDeliveryorderGetV300DataOrderItems[];
  /** 发货单整单金额，未计任何优惠，未计邮费，单位：元 */
  sales_amount?: string;
  /** 均摊邮费，单位：元 */
  postage?: string;
  /** 发货单实付金额 ，包含邮费(均摊邮费)单位：元 */
  real_sales_amount?: string;
  /** 导购员信息 */
  salesman_info?: YouzanRetailOpenDeliveryorderGetV300DataSalesmanInfo;
  /** 同城配送起始时间((yyyy-MM-dd HH:mm:ss格式)) */
  delivery_start_time?: string;
  /** 同城配送结束时间((yyyy-MM-dd HH:mm:ss格式)) */
  delivery_end_time?: string;
  /** 下单店铺 */
  seller_kdt_id?: YouzanLong;
  /** 下单店铺名称 */
  shop_name?: string;
  /** 仓库类型 1：独立仓 2：门店仓。注意网店独立销售库存无仓库信息，网店共享门店/仓库库存有仓库信息 */
  warehouse_type?: number;
  /** 下单店铺编码 1、如果是网店订单，且网店只有一个供货门店，则返回该供货门店编码，如果有多个供货门店，则返回空 2、如果是门店订单，则返回门店编码 */
  seller_warehouse_code?: string;
  /** 该发货单关联的订单邮费，单位：元 */
  trade_order_postage?: string;
}

export type YouzanRetailOpenDeliveryorderGetV300Response = YouzanApiSuccessResponse<YouzanRetailOpenDeliveryorderGetV300Data>;

export interface YouzanRetailOpenDeliveryorderGetV300ApiMapEntry {
  "youzan.retail.open.deliveryorder.get": {
    "3.0.0": {
      params: YouzanRetailOpenDeliveryorderGetV300Params;
      response: YouzanRetailOpenDeliveryorderGetV300Response;
    };
  };
}
