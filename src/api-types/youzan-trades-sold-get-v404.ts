/**
 * Generated from Youzan API docs for youzan.trades.sold.get@4.0.4.
 * Review before committing; docs occasionally contain deprecated required fields.
 */

import type { YouzanApiSuccessResponse, YouzanLong } from './common';

export interface YouzanTradesSoldGetV404Params {
  /** 订单类型NORMAL：普通订单；PEERPAY：代付；GIFT：我要送人；FX_CAIGOUDAN：分销供货单；PRESENT：赠品；WISH：心愿单；QRCODE：二维码订单；QRCODE_3RD：线下收银台订单；FX_MERGED：合并付货款；VERIFIED：1分钱实名认证；PINJIAN：品鉴；REBATE：返利；FX_QUANYUANDIAN：全员开店；FX_DEPOSIT：保证金；PF：批发；GROUP：拼团；HOTEL：酒店；TAKE_AWAY：外卖；CATERING_OFFLINE：堂食点餐；CATERING_QRCODE：外卖买单；BEAUTY_APPOINTMENT：美业预约单；BEAUTY_SERVICE：美业服务单；KNOWLEDGE_PAY：知识付费；GIFT_CARD：礼品卡（参照微商城模块） */
  type?: string;
  /** 订单状态，一次只能查询一种状态待付款：WAIT_BUYER_PAY待发货：WAIT_SELLER_SEND_GOODS等待买家确认：WAIT_BUYER_CONFIRM_GOODS订单完成：TRADE_SUCCESS订单关闭：TRADE_CLOSED（新增-参照微商城模块）退款中：TRADE_REFUND */
  status?: string;
  /** 按订单创建时间开始开始时间和结束时间的跨度不能大于3个月;结束时间必须大于开始时间;开始时间和结束时间必须成对出现 */
  start_created?: unknown;
  /** 按订单创建时间结束例:2017-01-01 12:00:00;开始时间和结束时间的跨度不能大于3个月;结束时间必须大于开始时间;开始时间和结束时间必须成对出现 */
  end_created?: unknown;
  /** 按订单更新时间开始例:2017-01-01 12:00:00;开始时间和结束时间的跨度不能大于3个月;结束时间必须大于开始时间;开始时间和结束时间必须成对出现 */
  start_update?: unknown;
  /** 按订单更新时间结束例:2017-01-01 12:00:00;开始时间和结束时间的跨度不能大于3个月;结束时间必须大于开始时间;开始时间和结束时间必须成对出现 */
  end_update?: unknown;
  /** 同城送预计送达时间-开始时间，时间格式：yyyy-MM-dd-HH-mm-ss；开始时间和结束时间必须成对出现 */
  delivery_start_time?: unknown;
  /** 同城送预计送达时间-结束时间，时间格式：yyyy-MM-dd-HH-mm-ss；开始时间和结束时间必须成对出现 */
  delivery_end_time?: unknown;
  /** 粉丝id */
  fans_id?: YouzanLong;
  /** 粉丝类型，0:未知、1:微信自有粉丝; 9:代销粉丝,2:微博,105:,知乎,128: 有赞精选app,188: QQ,312:腾讯云,736:支付宝,1180:百度,1181:今日头条,1590:微信广告,56473:陌陌 ,59011:线下微信支付产生的粉丝,59465:线下支付宝支付,4591:有人,16940: 快手 ,26879:上鱼,6227:精选小程序,61489:虎牙 */
  fans_type?: number;
  /** 页码，从 1 开始。页码最大不能超过100，如需查询更多内容，可以按照时间等其他搜索条件分多次查询。 */
  page_no?: number;
  /** 每页条数，默认 20 条，最大不能超过100，建议使用默认分页。 */
  page_size?: number;
  /** 多网点id */
  offline_id?: YouzanLong;
  /** 收货人手机号 */
  receiver_phone?: string;
  /** 收货人昵称 */
  receiver_name?: string;
  /** 订单号 */
  tid?: string;
  /** 有赞对外统一openId */
  yz_open_id?: string;
  /** 商品id，有赞生成的商品唯一id */
  goods_id?: YouzanLong;
  /** 物流类型搜索，同城送订单：LOCAL_DELIVERY，自提订单：SELF_FETCH，快递配送：EXPRESS */
  express_type?: string;
  /** 商品名称 */
  goods_title?: string;
  /** 是否需要返回订单url */
  need_order_url?: boolean;
  /** 通用搜索字段，使用底层符合条件查询搜索,订单号、收货人手机号、收货人手机号后四位 */
  keywords?: string;
  /** 子店kdtId */
  node_kdt_id?: YouzanLong;
  /** 按订单完成时间开始 例:2017-01-01 12:00:00; 开始时间和结束时间的跨度不能大于3个月; 结束时间必须大于开始时间; 开始时间和结束时间必须成对出现 */
  start_success?: unknown;
  /** 按订单完成时间结束 例:2017-01-01 12:00:00; 开始时间和结束时间的跨度不能大于3个月; 结束时间必须大于开始时间; 开始时间和结束时间必须成对出现 */
  end_success?: unknown;
  /** 要排除的订单标签，（例如排除已开票订单，传入IS_INVOICED）；REFUND-是否退款；USE_UMP_PROMOTION-是否有优惠；IS_VIRTUAL-是否虚拟；IS_PAYED-是否经过支付；FEEDBACK-是否有维权；IS_MEMBER-是否为会员订单"), IS_FENXIAO_ORDER-是否是分销订单”)；IS_PURCHASE_ORDER-是否是采购单；USE_UMP_COUPON-是否使用了优惠券或码；IS_INVOICED-订单是否已开发票；IS_DOWN_PAYMENT_PRE-是否为定金预售订单；FULL_REFUND-是否有全额退款； IS_CROSS_BORDER-是否跨境海淘订单；MALL_GROUP_BUY-群团购订单；USE_PAY_UMP_PROMOTION-是否使用了支付营销优惠；EXCHANGE_GOODS-是否存在换货成功；IS_FISSION_ORDER-是否内购活动订单；WX_GUARANTEE,是否微信交易保障；SOLITAIRE_BUY- 社群接龙订单,IS_PRESCRIPTION_DRUG_ORDER-处方药订单 */
  exclude_order_tag?: string;
  /** 商品店内组织ID列表，订购云上专柜插件后在商品发布时可编辑该字段，未订购云上专柜请勿使用该字段。搜索组织的API：https://doc.youzanyun.com/detail/API/0/3696 */
  shop_org_id_list?: YouzanLong[];
  /** 是否是云跨专柜订单，专柜订单特有逻辑 */
  is_special_cloud_counter_order?: boolean;
  /** 自定义扩展标搜索，参考文档：https://doc.youzanyun.com/resource/doc/3885/8776 */
  custom_tags?: unknown;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderTags {
  /** 是否虚拟订单 */
  is_virtual?: boolean;
  /** 是否采购单 */
  is_purchase_order?: boolean;
  /** 是否分销单 */
  is_fenxiao_order?: boolean;
  /** 是否会员订单 */
  is_member?: boolean;
  /** 已废弃 */
  is_preorder?: boolean;
  /** 是否线下订单 */
  is_offline_order?: boolean;
  /** 是否多门店订单 */
  is_multi_store?: boolean;
  /** 是否结算 */
  is_settle?: boolean;
  /** 是否支付 */
  is_payed?: boolean;
  /** 是否担保交易 */
  is_secured_transactions?: boolean;
  /** 是否享受免邮 */
  is_postage_free?: boolean;
  /** 是否有维权 */
  is_feedback?: boolean;
  /** 是否有退款 */
  is_refund?: boolean;
  /** 是否定金预售 */
  is_down_payment_pre?: boolean;
  /** 是否实体卡订单 */
  is_entity_card: boolean;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtraServiceGuide {
  /** 专属导购员工编号 */
  service_guide_staff: string;
  /** 专属导购名 */
  service_guide_name: string;
  /** 专属导购所在门店编码 */
  service_guide_shop_no: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtraSalesGuide {
  /** 订单级销售导购员工编号 */
  order_sales_staff: string;
  /** 订单级销售导购名 */
  order_sales_name: string;
  /** 订单级销售导购门店编码 */
  order_sales_shop_no: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtraSalesman {
  /** 销售员昵称 */
  salesman_nick_name: string;
  /** 销售员手机号码 */
  salesman_mobile: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtraTrialDetail {
  /** 0：不是先试后付 1：是先试后付订单 */
  is_trial: string;
  /** 先试后付，试用单号 */
  trial_no: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtra {
  /** 是否来自购物车 是：true 不是：false */
  is_from_cart?: string;
  /** 收银员id */
  cashier_id?: string;
  /** 收银员名字 */
  cashier_name?: string;
  /** 发票抬头 */
  invoice_title?: string;
  /** 已废弃，无需关注 */
  settle_time?: string;
  /** 是否父单(分销合并订单) 是：1 其他：null */
  is_parent_order?: string;
  /** 是否子单(分销买家订单) 是：1 其他：null */
  is_sub_order?: string;
  /** 分销单订单号 */
  fx_order_no?: string;
  /** 分销店铺id */
  fx_kdt_id?: string;
  /** 已废弃字段，开发者无需关注（18年4月废弃） */
  parent_order_no?: string;
  /** 采购单订单号 */
  purchase_order_no?: string;
  /** 美业分店id */
  dept_id?: string;
  /** 下单设备号 */
  create_device_id?: string;
  /** 是否是积分订单：1：是 0：不是 */
  is_points_order?: string;
  /** 海淘身份证信息：332527XXXXXXXXX */
  id_card_number?: string;
  /** 下单人昵称 */
  buyer_name?: string;
  /** 是否会员订单 */
  is_member?: string;
  /** 团购返现优惠金额 */
  tm_cash?: YouzanLong;
  /** 团购返现最大返现金额 */
  t_cash?: YouzanLong;
  /** 订单返现金额 */
  cash?: YouzanLong;
  /** 虚拟总单号：一次下单发生拆单时，会生成一个虚拟总单号 */
  orders_combine_id?: string;
  /** 拆单时店铺维度的虚拟总单号：发生拆单时，单个店铺生成了多笔订单会生成一个店铺维度的虚拟总单号 */
  kdt_dimension_combine_id?: string;
  /** 使用了同一张优惠券&优惠码的多笔订单对应的虚拟总单号 */
  promotion_combine_id?: string;
  /** 身份证姓名信息 （订购人的身份证号字段可通过订单详情4.0接口“id_card_number ”获取） */
  id_card_name?: string;
  /** 分销单外部支付流水号 */
  fx_outer_transaction_no?: string;
  /** 分销单内部支付流水号 */
  fx_inner_transaction_no?: string;
  /** 支付营销优惠 */
  pay_ump_detail?: string;
  /** 推广方式 */
  marketing_channel?: string;
  /** 专属导购 */
  service_guide: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtraServiceGuide;
  /** 订单级销售导购 */
  sales_guide: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtraSalesGuide;
  /** 订单销售员 */
  salesman: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtraSalesman;
  /** CHEAT:异常砍价订单；SECKILL_CHEAT:异常秒杀订单;VOUCHER_CHEAT:异常优惠券订单;RISK_CHEAT:异常订单;RISK_ORDER:风险订单;SCALPER_RISK_ORDER:黄牛风险订单;QUOTA_RISK_ORDER:异常限购订单 */
  risk_control_mark: string;
  /** 是否分销群团团订单 */
  fx_zpp_order: string;
  /** 群团团跟团号 */
  fx_zpp_participate_no: string;
  /** 群团团团购ID */
  fx_zpp_note_id: string;
  /** 群团团团购标题 */
  fx_zpp_note_title: string;
  /** 零售订单流水号 */
  serial_no: string;
  /** 自定义扩展标，map类型，样例：{"key1":"1"} ，其中key1为商家自定义，需要配合订单写入或者修改扩展属性时搭配使用，参考文档：https://doc.youzanyun.com/resource/doc/3885/8776 */
  custom_tags: string;
  /** 先试后付信息 */
  trial_detail: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtraTrialDetail;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfo {
  /** 主订单状态 WAIT_BUYER_PAY （等待买家付款，定金预售描述：定金待付、等待尾款支付开始、尾款待付）； TRADE_PAID（订单已支付 ）； WAIT_CONFIRM（待确认，包含待成团、待接单等等。即：买家已付款，等待成团或等待接单）； WAIT_SELLER_SEND_GOODS（等待卖家发货，即：买家已付款）； WAIT_BUYER_CONFIRM_GOODS (等待买家确认收货，即：卖家已发货) ； TRADE_SUCCESS（买家已签收以及订单成功）； TRADE_CLOSED（交易关闭）； PS：TRADE_PAID状态仅代表当前订单已支付成功，表示瞬时状态，稍后会自动修改成后面的状态。如果不关心此状态请再次请求详情接口获取下一个状态。 */
  status?: string;
  /** 主订单类型0:普通订单; 1:送礼订单; 2:代付; 3:供货商查询时返回表示为分销供货单。; 4:赠品; 5:心愿单; 6:二维码订单; 7:合并付货款; 8:1分钱实名认证; 9:品鉴; 10:拼团; 15:返利; 35:酒店; 40:外卖; 41:堂食点餐; 46:外卖买单; 51:全员开店; 61:线下收银台订单; 71:美业预约单; 72:美业服务单; 75:知识付费; 81:礼品卡;85：直播带货订单（仅指爱逛平台产生的订单） 100:批发;89:样品订单 */
  type?: YouzanLong;
  /** 订单号 */
  tid?: string;
  /** 主订单状态 描述 */
  status_str?: string;
  /** 支付类型；WEIXIN-微信支付(1); WEIXIN_DAIXIAO-微信代销支付类型，包含如下支付渠道：[WXPAY_DAIXIAO-微信支付(10);WXPAY_SHOULI-受理模式(11);WX_APPPAY-sdk支付(13);WX_WAPPAY-微信支付(19);WX_HB-微信红包支付(20);BARCODE_WX-微信支付(29);WX_NATIVE-微信支付(72);OF_YOUZAN_QR-收款码(101);OF_WEIXIN-微信(102)]； ALIPAY-支付宝支付类型，包含如下支付渠道：[ALIWAP-支付宝-用户付(2);ALIPAY-支付宝-用户付(3);BARCODE_ALIPAY-支付宝-商家扫(30);ALIPAY_HBFQ-支付宝花呗分期支付(53);OF_ALIPAY-支付宝支付(103);MARK_PAY_ALIPAY-标记支付-支付宝(111);ALIPAY_FLOWER-花呗支付(4095); ALIPAY_AGREEMENT-支付宝免密支付(4096); ALIPAY_APPLET-支付宝-用户付(4097)]； BANKCARDPAY-银行卡支付类型，包含如下支付渠道：[ UNIONPAY-(4);UNIONWAP-(6);UMPAY-联动优势(8); YZPAY-易宝支付(24);CREDIT_CARD_UNIONPAY-银行卡支付(36);DEBIT_CARD_UNIONPAY-银行卡支付(37); ]； PREPAIDCARD-储值卡支付类型，包含如下支付渠道：[PREPAID_CARD-储值卡支付(25);UNIFIED_PREPAID_CARD-储值卡支付(35);OF_PREPAID_CARD-储值卡(106) ]； ECARD-E卡支付类型，包含如下支付渠道：[ECARD-E卡支付(28);OF_E_CARD-有赞E卡(107)]； MARKPAY-标记支付类型，包含如下支付渠道： [ MARK_PAY_WXPAY-标记支付-微信(110); MARK_PAY_ALIPAY-标记支付-支付宝(111); MARK_PAY_POS-标记支付-自有POS刷卡(112); MARK_PAY_DIY-标记收款-自定义(114); MARK_PAY_CREDIT_PAY-标记支付-挂账(205); ] "ENCHASHMENT_GIFT_CARD-礼品卡支付类型，包含如下支付渠道：[ GIFT_CARD-礼品卡支付(33);ENCHASHMENT_GIFT_CARD-礼品卡支付(90); ], DEFAULT-默认值,未支付(0); TENPAY-财付通(5); PEERPAY-找人代付(7); CODPAY-货到付款(9); BAIDUWAP-银行卡支付(12); FX_MERGED-合并付货款(14); UMP_PRESENT-领取赠品(15); UMP_COUPON-优惠兑换(16); FX_SPLITTING-自动付货款(17); AIXUEDAI-爱学贷(18); UMP_REBATE-返利(21); UMP_HB-ump红包(22); PAYZA-(23); PAYPAL-(26); QQPAY-QQ钱包(27); INSTALMENT-分期支付(40); PRIOR_USE-先用后付(49); UN_SETTLED_AMOUNT_PAY-店铺余额支付(80); OF_ONLINE_ACCOUNT-代收账户(100); OF_POS-刷卡(104); OF_TABLE_CARD-二维码台卡(105); ALLIN_SWIPECARD-POS刷卡(113); CHANGE_PAY-有赞零钱(115); UMP_PAY-优惠全额抵扣(116); SUNMI_WX-商米支付(117); SUNMI_ALIPAY-商米支付-支付宝(118); SUNMI_SWIPECARD-商米pos(119); OF_OFFLINE_ACCOUNT-记账账户(200); OF_CASH-现金支付(201); MIXED_PAYMENT-组合支付(202); OUTSIDE_PAYMENT-外部支付(203); TRANSFER_TO_PUBLIC-对公转账(206); OF_ONLINE_PREPAID_ACCOUNT-储值账户(300); OF_ONLINE_DEPOSIT_ACCOUNT-保证金账户(400); ABC_EPAY-农行商E付(4093); ELECTRONIC_BANK_PAY-银联网银支付(4101); */
  pay_type?: YouzanLong;
  /** 店铺类型 0:微商城; 1:微小店; 2:爱学贷微商城; 3:批发店铺; 4:批发商城; 5:外卖; 6:美业; 7:超级门店; 8:收银; 9:收银加微商城; 10:零售总部; 99:有赞开放平台平台型应用创建的店铺 */
  team_type?: YouzanLong;
  /** 关闭类型；0:未关闭; 1:过期关闭; 2:标记退款; 3:订单取消; 4:买家取消; 5:卖家取消; 6:部分退款; 10:无法联系上买家; 11:买家误拍或重拍了; 12:买家无诚意完成交易; 13:已通过银行线下汇款; 14:已通过同城见面交易; 15:已通过货到付款交易; 16:已通过网上银行直接汇款; 17:已经缺货无法交易；18：扣款失败；19：0元关单；20：社区团购活动结束未付款；21：0元抽奖订单未中一等奖；22：拒单退款；23：主播寄样申请被拒绝；27：规格/款式/数量拍错 28：无法正常支付；29：收货地址信息填写错误；30：商品缺货；31-买家不想购买了；32：其他 */
  close_type?: YouzanLong;
  /** 物流类型 0:快递发货; 1:到店自提; 2:同城配送; 9:无需发货（虚拟商品订单） */
  express_type?: YouzanLong;
  /** 订单打标 */
  order_tags?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderTags;
  /** 订单扩展信息 */
  order_extra?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfoOrderExtra;
  /** 订单创建时间 */
  created?: unknown;
  /** 订单更新时间 */
  update_time?: unknown;
  /** 订单过期时间（未付款将自动关单） */
  expired_time?: unknown;
  /** 订单支付时间 */
  pay_time?: unknown;
  /** 订单发货时间（当所有商品发货后才会更新） */
  consign_time?: unknown;
  /** 订单确认时间（多人拼团成团） */
  confirm_time?: unknown;
  /** 订单退款金额状态； 0:未退款， 2:部分退款成功， 12:全额退款成功。瞬时状态1:部分退款中，11:全额退款中；当查询接口返回1或11状态时，建议重试查询直到出现0、2、12状态为止 */
  refund_state?: YouzanLong;
  /** 是否零售订单 */
  is_retail_order?: boolean;
  /** 交易完成时间，时间格式为yyyy年-MM月-dd日 HH时:mm分:ss秒 */
  success_time?: unknown;
  /** 多网点id，非多网点订单，返回为空。 */
  offline_id?: YouzanLong;
  /** 支付渠道；WEIXIN-微信支付(1); WEIXIN_DAIXIAO-微信代销支付类型，包含如下支付渠道：[WXPAY_DAIXIAO-微信支付(10);WXPAY_SHOULI-受理模式(11);WX_APPPAY-sdk支付(13);WX_WAPPAY-微信支付(19);WX_HB-微信红包支付(20);BARCODE_WX-微信支付(29);WX_NATIVE-微信支付(72);OF_YOUZAN_QR-收款码(101);OF_WEIXIN-微信(102)]； ALIPAY-支付宝支付类型，包含如下支付渠道：[ALIWAP-支付宝-用户付(2);ALIPAY-支付宝-用户付(3);BARCODE_ALIPAY-支付宝-商家扫(30);ALIPAY_HBFQ-支付宝花呗分期支付(53);OF_ALIPAY-支付宝支付(103);MARK_PAY_ALIPAY-标记支付-支付宝(111);ALIPAY_FLOWER-花呗支付(4095); ALIPAY_AGREEMENT-支付宝免密支付(4096); ALIPAY_APPLET-支付宝-用户付(4097)]； BANKCARDPAY-银行卡支付类型，包含如下支付渠道：[ UNIONPAY-(4);UNIONWAP-(6);UMPAY-联动优势(8); YZPAY-易宝支付(24);CREDIT_CARD_UNIONPAY-银行卡支付(36);DEBIT_CARD_UNIONPAY-银行卡支付(37); ]； PREPAIDCARD-储值卡支付类型，包含如下支付渠道：[PREPAID_CARD-储值卡支付(25);UNIFIED_PREPAID_CARD-储值卡支付(35);OF_PREPAID_CARD-储值卡(106) ]； ECARD-E卡支付类型，包含如下支付渠道：[ECARD-E卡支付(28);OF_E_CARD-有赞E卡(107)]； MARKPAY-标记支付类型，包含如下支付渠道： [ MARK_PAY_WXPAY-标记支付-微信(110); MARK_PAY_ALIPAY-标记支付-支付宝(111); MARK_PAY_POS-标记支付-自有POS刷卡(112); MARK_PAY_DIY-标记收款-自定义(114); MARK_PAY_CREDIT_PAY-标记支付-挂账(205); ] "ENCHASHMENT_GIFT_CARD-礼品卡支付类型，包含如下支付渠道：[ GIFT_CARD-礼品卡支付(33);ENCHASHMENT_GIFT_CARD-礼品卡支付(90); ], DEFAULT-默认值,未支付(0); TENPAY-财付通(5); PEERPAY-找人代付(7); CODPAY-货到付款(9); BAIDUWAP-银行卡支付(12); FX_MERGED-合并付货款(14); UMP_PRESENT-领取赠品(15); UMP_COUPON-优惠兑换(16); FX_SPLITTING-自动付货款(17); AIXUEDAI-爱学贷(18); UMP_REBATE-返利(21); UMP_HB-ump红包(22); PAYZA-(23); PAYPAL-(26); QQPAY-QQ钱包(27); INSTALMENT-分期支付(40); PRIOR_USE-先用后付(49); UN_SETTLED_AMOUNT_PAY-店铺余额支付(80); OF_ONLINE_ACCOUNT-代收账户(100); OF_POS-刷卡(104); OF_TABLE_CARD-二维码台卡(105); ALLIN_SWIPECARD-POS刷卡(113); CHANGE_PAY-有赞零钱(115); UMP_PAY-优惠全额抵扣(116); SUNMI_WX-商米支付(117); SUNMI_ALIPAY-商米支付-支付宝(118); SUNMI_SWIPECARD-商米pos(119); OF_OFFLINE_ACCOUNT-记账账户(200); OF_CASH-现金支付(201); MIXED_PAYMENT-组合支付(202); OUTSIDE_PAYMENT-外部支付(203); TRANSFER_TO_PUBLIC-对公转账(206); OF_ONLINE_PREPAID_ACCOUNT-储值账户(300); OF_ONLINE_DEPOSIT_ACCOUNT-保证金账户(400); ABC_EPAY-农行商E付(4093); ELECTRONIC_BANK_PAY-银联网银支付(4101); */
  pay_type_str?: string;
  /** 详情页 */
  order_url?: string;
  /** 去支付链接。如果订单未支付，会返回该链接。目前只针对订单类型type=0且非堂食的订单。 */
  prepare_pay_url: string;
  /** 门店id */
  node_kdt_id?: YouzanLong;
  /** 总店id */
  root_kdt_id?: YouzanLong;
  /** 门店编码 */
  shop_display_no: string;
  /** 店铺名 */
  shop_name: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoSourceInfoSource {
  /** 平台 wx:微信; merchant_3rd:商家自有app; buyer_v:买家版; browser:系统浏览器; alipay:支付宝;qq:腾讯QQ; wb:微博; other:其他 */
  platform?: string;
  /** wx_gzh:微信公众号; merchant_xcx:商家小程序 表示订单来自微信的商家小程序 yzdh_xcx:有赞大号小程序 表示订单来自微信的有赞精选 direct_buy:直接购买 表示除了以上两种之外的其他微信来源，比如微信网页等； 注意：yzdh:有赞大号规则已经废弃 */
  wx_entrance?: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoSourceInfo {
  /** 是否来自线下订单 */
  is_offline_order?: boolean;
  /** 平台 */
  source?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoSourceInfoSource;
  /** 订单来源（端），详细枚举参考：https://doc.youzanyun.com/v2/doc/cloud/token/BkfIwmSi2i8eb5keef7cWVXgnah */
  order_mark?: string;
  /** 订单唯一识别码 */
  book_key?: string;
  /** 活动类型：如群团购：”mall_group_buy“ */
  biz_source?: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoBuyerInfo {
  /** 有赞对外统一openId */
  yz_open_id?: string;
  /** 买家手机号 */
  buyer_phone?: string;
  /** 【已废弃，推荐使用yz_open_id字段，使用youzan.users.info.query接口查询】；粉丝类型0:未知、1:微信自有粉丝; 9:代销粉丝,2:微博,105:,知乎,128: 有赞精选app,188: QQ,312:腾讯云,736:支付宝,1180:百度,1181:今日头条,1590:微信广告,56473:陌陌 ,59011:线下微信支付产生的粉丝,59465:线下支付宝支付,4591:有人,16940: 快手 ,26879:上鱼,6227:精选小程序,61489:虎牙 */
  fans_type?: YouzanLong;
  /** 【已废弃，推荐使用yz_open_id字段，使用youzan.users.info.query接口查询】；粉丝id */
  fans_id?: YouzanLong;
  /** 【已废弃，推荐使用yz_open_id字段，使用youzan.users.info.query接口查询】粉丝昵称 */
  fans_nickname?: string;
  /** 微信H5和微信小程序（有赞小程序和小程序插件）的订单会返回微信weixin_openid，三方App（有赞APP开店）的订单会返回open_user_id，2019年1月30号后的订单支持返回该参数 */
  outer_user_id?: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoChannelInfo {
  /** 渠道平台，WX */
  type: string;
  /** 渠道入口：wx_video、wx_video_xd、wx_video_ad_ag */
  entrance: string;
  /** 视频号小店appid(可能为空) */
  app_id: string;
  /** 外部应用对应的appname(目前视频号小店会返回,存在即返回) */
  app_name: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoPayInfoPhasePayments {
  /** 支付阶段 */
  phase?: YouzanLong;
  /** 支付开始时间 */
  pay_start_time?: unknown;
  /** 支付结束时间 */
  pay_end_time?: unknown;
  /** 阶段支付金额 */
  real_price?: string;
  /** 外部支付流水号 */
  outer_transaction_no?: string;
  /** 内部支付流水号 */
  inner_transaction_no?: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoPayInfo {
  /** 优惠前商品总价 */
  total_fee?: string;
  /** 邮费 */
  post_fee?: string;
  /** 最终支付价格 payment=orders.payment的总和 */
  payment?: string;
  /** 有赞支付流水号 */
  transaction?: string[];
  /** 外部支付单号 */
  outer_transactions?: string[];
  /** 多阶段支付信息 */
  phase_payments?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoPayInfoPhasePayments[];
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoRemarkInfo {
  /** 订单买家留言 */
  buyer_message?: string;
  /** 订单标星等级 0-5 */
  star?: YouzanLong;
  /** 订单商家备注 */
  trade_memo?: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoAddressInfo {
  /** 收货人姓名 */
  receiver_name?: string;
  /** 收货人手机号 */
  receiver_tel?: string;
  /** 省 */
  delivery_province?: string;
  /** 市 */
  delivery_city?: string;
  /** 区 */
  delivery_district?: string;
  /** 详细地址 */
  delivery_address?: string;
  /** 字段为json格式，需要开发者自行解析lng、lon（经纬度）；checkOutTime（酒店退房时间）；recipients（入住人）；checkInTime（酒店入住时间）；areaCode（邮政编码） */
  address_extra?: string;
  /** 邮政编码 */
  delivery_postal_code?: string;
  /** 到店自提信息 json格式 */
  self_fetch_info?: string;
  /** 同城送预计送达时间-开始时间非同城送以及没有开启定时达的订单不返回。delivery_end_time= delivery_start_time 表示立即送达，即时达；delivery_end_time> delivery_start_time 定时达，预约单 */
  delivery_start_time?: unknown;
  /** 同城送预计送达时间-结束时间 非同城送以及没有开启定时达的订单不返回 */
  delivery_end_time?: unknown;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrdersItemTags {
  /** 是否已发货，电子卡券，虚拟商品无发货标识 */
  is_deliver_goods: boolean;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrders {
  /** 订单明细id */
  oid?: string;
  /** 订单类型，0:普通类型商品; 1:拍卖商品; 5:餐饮商品; 10:分销商品; 20:会员卡商品; 21:礼品卡商品; 23:有赞会议商品; 24:周期购; 30:收银台商品; 31:知识付费商品; 35:酒店商品; 40:普通服务类商品; 71:卡项商品;182:普通虚拟商品; 183:电子卡券商品; 201:外部会员卡商品; 202:外部直接收款商品; 203:外部普通商品; 204:外部服务商品;205:mock不存在商品; 206:小程序二维码;207:积分充值商品;208:付费优惠券商品 */
  item_type?: YouzanLong;
  /** 商品名称 */
  title?: string;
  /** 商品数量 */
  num?: YouzanLong;
  /** 微商城店铺类型：outer_sku_id 对应的是规格编码；在零售店铺类型场景下outer_sku_id 对应的是规格条码 */
  outer_sku_id?: string;
  /** 商品留言 */
  buyer_messages?: string;
  /** 单商品原价 单位:元 */
  price?: string;
  /** 商品优惠后总价 单位:元 */
  total_fee?: string;
  /** 商品最终均摊价 单位:元 */
  payment?: string;
  /** 商品id，有赞微商城，和unified_item_id一致。有赞门店，对应网店、门店商品ID；连锁店铺，对应分店渠道商品ID。可以通过youzan.item.base.search（批量查询商品列表）获取，对应字段为 items.channel_item_id */
  item_id?: YouzanLong;
  /** 商品sku_id，有赞微商城，和unified_sku_id一致。有赞门店，对应网店、门店商品sku_id；连锁店铺，对应分店渠道商品sku_id。可以通过youzan.item.itemdetail.get（查询商品详情）获取，对应字段为skus.channel_sku_id（无规格商品为0） */
  sku_id?: YouzanLong;
  /** 总部商品id（零售连锁版本特有字段） */
  root_item_id: YouzanLong;
  /** 总部商品规格id（零售连锁版本特有字段） */
  root_sku_id: YouzanLong;
  /** 商品唯一id，有赞商品体系下商品唯一id，平台唯一。可以通过youzan.item.base.search（批量查询商品列表）获取，对应字段为 items.item_id */
  unified_item_id: YouzanLong;
  /** 商品唯一规格id，同一商品id下，规格id唯一。可以通过youzan.item.itemdetail.get（查询商品详情）获取，对应字段为skus.sku_id */
  unified_sku_id: YouzanLong;
  /** 规格信息（无规格商品为空） */
  sku_properties_name?: string;
  /** 微商城店铺类型：outer_item_id 对应的是规格编码；在零售店铺类型场景下outer_item_id 对应的是规格条码 */
  outer_item_id?: string;
  /** 商品积分价（非积分商品则为0） */
  points_price?: string;
  /** 是否使用了运费到付，"1"是使用了，"0' 或者""是没有使用 */
  express_pay_mode: string;
  /** 商品图片地址 */
  pic_path?: string;
  /** 商品详情链接 */
  goods_url?: string;
  /** 商品别名 */
  alias?: string;
  /** 是否赠品 */
  is_present?: boolean;
  /** 是否是套餐商品 */
  is_combo: boolean;
  /** 单商品现价，减去了商品的优惠金额 单位:元 */
  discount_price?: string;
  /** 已废弃字段；由item_id + sku_id构成的，文档描述的是商品唯一编码 */
  sku_unique_code?: string;
  /** 0 全款预售，1 定金预售 */
  pre_sale_type?: string;
  /** 是否为预售商品 如果是预售商品则为1 */
  is_pre_sale?: string;
  /** 是否是跨境海淘订单("1":是,"0":否) */
  is_cross_border?: string;
  /** 海关编号 */
  customs_code?: string;
  /** 海淘商品贸易模式，BC直邮：9610，BBC保税进口：1210，CC个人行邮：1000 */
  cross_border_trade_mode?: string;
  /** 原产地编码，详见https://doc.youzanyun.com/detail/API/0/311。 */
  origin_place_code: string;
  /** 海淘子订单号（仅海淘订单会返回） */
  sub_order_no?: string;
  /** 分销单金额 ，单位元 */
  fenxiao_price?: string;
  /** 分销单实付金额，单位元 */
  fenxiao_payment?: string;
  /** 税费，单位元 */
  tax_total?: string;
  /** 运杂费，单位元 */
  freight?: string;
  /** 非现金抵扣金额，单位元 */
  discount?: string;
  /** 分销税费，单位元 */
  fenxiao_tax_total?: string;
  /** 分销运杂费，单位元 */
  fenxiao_freight?: string;
  /** 分销非现金抵扣金额，单位元 */
  fenxiao_discount?: string;
  /** 分销商品单价，单位元 */
  fenxiao_discount_price?: string;
  /** 商品重量 单位 克 */
  weight?: string;
  /** 商品级销售导购列表 */
  item_sales_staff: string[];
  /** 订单条目打标 */
  item_tags: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrdersItemTags;
  /** 商品编码 */
  item_no: string;
  /** 商品条码 */
  item_barcode: string;
  /** 规格编码 */
  sku_no: string;
  /** 规格条码 */
  sku_barcode: string;
  /** 商品店内组织ID列表，订购云上专柜插件后在商品发布时可编辑该字段，未订购云上专柜请勿使用该字段。搜索组织的API：https://doc.youzanyun.com/detail/API/0/3696 */
  shop_org_id: YouzanLong;
  /** 商品扩展字段, json格式字符串。out_sku_id 外部系统的规格id,一般channel_info有值的情况下该字段有值.目前仅视频号小店订单透出(视频号小店的skuId); out_item_id 外部系统的商品id。一般channel_info有值的情况下该字段有值。目前仅视频号小店订单会透出(视频号小店的商品id） */
  goods_extra: string;
  /** 预售商品的预计发货时间，秒级时间戳 */
  expect_delivery_time: YouzanLong;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoChildInfoChildOrdersItems {
  /** 交易明细id */
  oid: YouzanLong;
  /** 商品数量 */
  num: number;
  /** 商品id，有赞生成的商品唯一值。 */
  item_id: YouzanLong;
  /** 商品规格id，有赞生成的规格id。无规格商品返回0 */
  sku_id: YouzanLong;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoChildInfoChildOrders {
  /** 订单号 */
  tid?: string;
  /** 领取人姓名 */
  user_name?: string;
  /** 领取人电话 */
  user_tel?: string;
  /** 省 */
  province?: string;
  /** 市 */
  city?: string;
  /** 区 */
  county?: string;
  /** 收货地址详情 */
  address_detail?: string;
  /** 老送礼订单状态：WAIT_EXPRESS(5, "待发货"), EXPRESS(6, "已发货"), SUCCESS(100, "成功") */
  order_state?: string;
  /** 礼物的领取时间，时间格式：yyyy-MM-dd-HH-mm-ss */
  claimed_time: unknown;
  /** 交易明细列表 */
  items?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoChildInfoChildOrdersItems[];
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoChildInfo {
  /** 送礼编号 */
  gift_no?: string;
  /** 送礼标记 */
  gift_sign?: string;
  /** 送礼类型：gift-老版本我要送礼、gift_community-我要送礼社群版 */
  gift_type: string;
  /** 子单详情 */
  child_orders?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoChildInfoChildOrders[];
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOutOrderInfo {
  /** 外部订单号 */
  out_order_no: string;
  /** 商家收入，单位：分 */
  income: string;
  /** 打包费，单位：分 */
  out_order_container_fee: string;
  /** 外部优惠信息 */
  out_order_promotions: string;
  /** 平台服务费，单位：分 */
  out_order_agent_service_fee: string;
  /** 平台、合作商、第三方活动支出，单位：分 */
  out_order_activity_fee_agent_part: string;
  /** 商家活动支出，单位：分 */
  out_order_activity_fee_shop_part: string;
  /** 外部电子面单的订单密文 */
  out_waybill_order_code: string;
  /** 外部订单用户收获地址的唯一标识（视频号小店） */
  out_address_hash_code: string;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfo {
  /** 交易基础信息 */
  order_info?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrderInfo;
  /** 交易来源信息 */
  source_info?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoSourceInfo;
  /** 订单买家信息 */
  buyer_info?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoBuyerInfo;
  /** 渠道信息(视频号-交易组件3.0、视频号小店) */
  channel_info: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoChannelInfo;
  /** 订单支付信息 */
  pay_info?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoPayInfo;
  /** 标记信息 */
  remark_info?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoRemarkInfo;
  /** 收货地址信息 */
  address_info?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoAddressInfo;
  /** 交易明细结 */
  orders?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOrders[];
  /** 送礼订单子单 */
  child_info?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoChildInfo;
  /** 外部订单信息（美团、饿了么、视频号小店） */
  out_order_info: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfoOutOrderInfo;
}

export interface YouzanTradesSoldGetV404DataFullOrderInfoList {
  /** 交易基础信息结构体 */
  full_order_info?: YouzanTradesSoldGetV404DataFullOrderInfoListFullOrderInfo;
}

export interface YouzanTradesSoldGetV404Data {
  /** 交易基础信息结构体 */
  full_order_info_list?: YouzanTradesSoldGetV404DataFullOrderInfoList[];
  /** 搜索订单总条数 */
  total_results?: YouzanLong;
}

export type YouzanTradesSoldGetV404Response = YouzanApiSuccessResponse<YouzanTradesSoldGetV404Data>;

export interface YouzanTradesSoldGetV404ApiMapEntry {
  "youzan.trades.sold.get": {
    "4.0.4": {
      params: YouzanTradesSoldGetV404Params;
      response: YouzanTradesSoldGetV404Response;
    };
  };
}
