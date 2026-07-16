/**
 * 有赞开放 API 类型映射。
 *
 * API 调用由 method + version 唯一确定。每个接口的字段类型放在独立文件中，
 * 此文件只负责聚合映射，避免单文件随接口数量膨胀。
 */

import type { RetailOpenSpuQueryV300ApiMapEntry } from './retail-open-spu-query-v300';
import type { YouzanTradesSoldGetV404ApiMapEntry } from './youzan-trades-sold-get-v404';
import type { YouzanRetailOpenAllotOrderCreateV100ApiMapEntry } from './youzan-retail-open-allot-order-create-v100';
import type { YouzanRetailOpenApplyorderGetV300ApiMapEntry } from './youzan-retail-open-applyorder-get-v300';
import type { YouzanRetailOpenAllotorderGetV300ApiMapEntry } from './youzan-retail-open-allotorder-get-v300';
import type { YouzanRetailOpenSpuGetV300ApiMapEntry } from './youzan-retail-open-spu-get-v300';
import type { YouzanItemDetailGetV101ApiMapEntry } from './youzan-item-detail-get-v101';
import type { YouzanRetailOpenStockoutorderCreateV300ApiMapEntry } from './youzan-retail-open-stockoutorder-create-v300';
import type { YouzanRetailOpenStockoutorderQueryV300ApiMapEntry } from './youzan-retail-open-stockoutorder-query-v300';
import type { YouzanRetailOpenStockoutorderGetV300ApiMapEntry } from './youzan-retail-open-stockoutorder-get-v300';
import type { YouzanRetailOpenStockAdjustV300ApiMapEntry } from './youzan-retail-open-stock-adjust-v300';
import type { YouzanRetailOpenWarehouseQueryV300ApiMapEntry } from './youzan-retail-open-warehouse-query-v300';
import type { YouzanRetailOpenQueryWarehousestockV100ApiMapEntry } from './youzan-retail-open-query-warehousestock-v100';
import type { YouzanShopSingleStaffUpdateDisableV100ApiMapEntry } from './youzan-shop-single-staff-update-disable-v100';
import type { YouzanShopSingleStaffListPageV100ApiMapEntry } from './youzan-shop-single-staff-list-page-v100';
import type { YouzanShopSingleStaffGetV100ApiMapEntry } from './youzan-shop-single-staff-get-v100';
import type { YouzanShopSingleStaffAddV100ApiMapEntry } from './youzan-shop-single-staff-add-v100';
import type { YouzanShopStaffGetDetailV101ApiMapEntry } from './youzan-shop-staff-get-detail-v101';
import type { YouzanItemCommonUpdateV100ApiMapEntry } from './youzan-item-common-update-v100';
import type { YouzanRetailOpenPurchaseorderCreateV300ApiMapEntry } from './youzan-retail-open-purchaseorder-create-v300';
import type { YouzanRetailOpenPurchaseorderGetV300ApiMapEntry } from './youzan-retail-open-purchaseorder-get-v300';
import type { YouzanRetailOpenUpdatePurchasepriceV100ApiMapEntry } from './youzan-retail-open-update-purchaseprice-v100';
import type { YouzanRetailOpenUpdatePurchaseorderfinishV100ApiMapEntry } from './youzan-retail-open-update-purchaseorderfinish-v100';
import type { YouzanRetailOpenPurchasereturnorderGetV100ApiMapEntry } from './youzan-retail-open-purchasereturnorder-get-v100';
import type { YouzanRetailOpenStockinorderCreateV300ApiMapEntry } from './youzan-retail-open-stockinorder-create-v300';
import type { YouzanRetailOpenStockinorderGetV300ApiMapEntry } from './youzan-retail-open-stockinorder-get-v300';
import type { YouzanRetailOpenStockinorderQueryV300ApiMapEntry } from './youzan-retail-open-stockinorder-query-v300';
import type { YouzanRetailOpenApplyorderQueryV300ApiMapEntry } from './youzan-retail-open-applyorder-query-v300';
import type { YouzanRetailOpenApplyorderCheckV300ApiMapEntry } from './youzan-retail-open-applyorder-check-v300';
import type { YouzanRetailOpenStockcheckorderGetV300ApiMapEntry } from './youzan-retail-open-stockcheckorder-get-v300';
import type { YouzanRetailOpenStockcheckCreateV300ApiMapEntry } from './youzan-retail-open-stockcheck-create-v300';
import type { YouzanRetailStockQueryBomV100ApiMapEntry } from './youzan-retail-stock-query-bom-v100';
import type { YouzanRetailOpenQueryManufactureV100ApiMapEntry } from './youzan-retail-open-query-manufacture-v100';
import type { YouzanRetailStockinoutOperateAuditV100ApiMapEntry } from './youzan-retail-stockinout-operate-audit-v100';
import type { YouzanRetailOpenUpdateUniquecodeV100ApiMapEntry } from './youzan-retail-open-update-uniquecode-v100';
import type { YouzanRetailOpenStockUniqueCodeV300ApiMapEntry } from './youzan-retail-open-stock-unique-code-v300';
import type { YouzanRetailOpenModifyPlanstockV100ApiMapEntry } from './youzan-retail-open-modify-planstock-v100';
import type { YouzanRetailOpenStockModeQueryV100ApiMapEntry } from './youzan-retail-open-stock-mode-query-v100';
import type { YouzanRetailOpenDeliveryorderGetV300ApiMapEntry } from './youzan-retail-open-deliveryorder-get-v300';
import type { YouzanRetailOpenDeliveryorderQueryV300ApiMapEntry } from './youzan-retail-open-deliveryorder-query-v300';
import type { YouzanShopChainDescendentOrganizationListV101ApiMapEntry } from './youzan-shop-chain-descendent-organization-list-v101';
import type { YouzanWecomStaffSearchV100ApiMapEntry } from './youzan-wecom-staff-search-v100';
import type { YouzanScrmCustomerDetailGetV101ApiMapEntry } from './youzan-scrm-customer-detail-get-v101';
import type { YouzanScrmCustomerListYzopenidV100ApiMapEntry } from './youzan-scrm-customer-list-yzopenid-v100';
import type { YouzanScrmCustomerListV100ApiMapEntry } from './youzan-scrm-customer-list-v100';
import type { YouzanCrmCustomerPointsOperateFreezeandconsumeV400ApiMapEntry } from './youzan-crm-customer-points-operate-freezeandconsume-v400';
import type { YouzanCrmCustomerPointsOperateConsumeV400ApiMapEntry } from './youzan-crm-customer-points-operate-consume-v400';
import type { YouzanScrmCustomerPointsRuleListV100ApiMapEntry } from './youzan-scrm-customer-points-rule-list-v100';
import type { YouzanCrmCustomerPointsOperateFreezeV400ApiMapEntry } from './youzan-crm-customer-points-operate-freeze-v400';
import type { YouzanCrmCustomerPointsOperateIncreasewithexpireV400ApiMapEntry } from './youzan-crm-customer-points-operate-increasewithexpire-v400';
import type { YouzanCrmCustomerPointsIncreaseV400ApiMapEntry } from './youzan-crm-customer-points-increase-v400';
import type { YouzanCrmCustomerPointsGetV100ApiMapEntry } from './youzan-crm-customer-points-get-v100';
import type { YouzanCrmCustomerPointsDecreaseV400ApiMapEntry } from './youzan-crm-customer-points-decrease-v400';
import type { YouzanCrmCustomerPointsSyncV400ApiMapEntry } from './youzan-crm-customer-points-sync-v400';
import type { YouzanUmpPointdeductionUpdateOpenstatusV100ApiMapEntry } from './youzan-ump-pointdeduction-update-openstatus-v100';
import type { YouzanCrmCustomerPointsChangelogSearchV402ApiMapEntry } from './youzan-crm-customer-points-changelog-search-v402';
import type { YouzanScrmPointdeductionGetV100ApiMapEntry } from './youzan-scrm-pointdeduction-get-v100';
import type { YouzanCrmCustomerPointstoreExchangeRecordsV200ApiMapEntry } from './youzan-crm-customer-pointstore-exchange-records-v200';
import type { YouzanCrmCustomerPointsOperateUnfreezeV400ApiMapEntry } from './youzan-crm-customer-points-operate-unfreeze-v400';
import type { YouzanCrmCustomerPointsOperateRevertV400ApiMapEntry } from './youzan-crm-customer-points-operate-revert-v400';
import type { YouzanTradeMemoUpdateV300ApiMapEntry } from './youzan-trade-memo-update-v300';
import type { YouzanTradeRefundGetV301ApiMapEntry } from './youzan-trade-refund-get-v301';
import type { YouzanRetailOpenRefundorderGetV300ApiMapEntry } from './youzan-retail-open-refundorder-get-v300';
import type { YouzanRetailOpenRefundorderQueryV300ApiMapEntry } from './youzan-retail-open-refundorder-query-v300';
import type { YouzanTradeRefundSearchV301ApiMapEntry } from './youzan-trade-refund-search-v301';
import type { YouzanTradeRefundAmountGetV100ApiMapEntry } from './youzan-trade-refund-amount-get-v100';
import type { YouzanRetailOpenChainstaffQuerypageV100ApiMapEntry } from './youzan-retail-open-chainstaff-querypage-v100';

export type { YouzanApiSuccessResponse, YouzanLong } from './common';
export type * from './retail-open-spu-query-v300';
export type * from './youzan-trades-sold-get-v404';
export type * from './youzan-retail-open-allot-order-create-v100';
export type * from './youzan-retail-open-applyorder-get-v300';
export type * from './youzan-retail-open-allotorder-get-v300';
export type * from './youzan-retail-open-spu-get-v300';
export type * from './youzan-item-detail-get-v101';
export type * from './youzan-retail-open-stockoutorder-create-v300';
export type * from './youzan-retail-open-stockoutorder-query-v300';
export type * from './youzan-retail-open-stockoutorder-get-v300';
export type * from './youzan-retail-open-stock-adjust-v300';
export type * from './youzan-retail-open-warehouse-query-v300';
export type * from './youzan-retail-open-query-warehousestock-v100';
export type * from './youzan-shop-single-staff-update-disable-v100';
export type * from './youzan-shop-single-staff-list-page-v100';
export type * from './youzan-shop-single-staff-get-v100';
export type * from './youzan-shop-single-staff-add-v100';
export type * from './youzan-shop-staff-get-detail-v101';
export type * from './youzan-item-common-update-v100';
export type * from './youzan-retail-open-purchaseorder-create-v300';
export type * from './youzan-retail-open-purchaseorder-get-v300';
export type * from './youzan-retail-open-update-purchaseprice-v100';
export type * from './youzan-retail-open-update-purchaseorderfinish-v100';
export type * from './youzan-retail-open-purchasereturnorder-get-v100';
export type * from './youzan-retail-open-stockinorder-create-v300';
export type * from './youzan-retail-open-stockinorder-get-v300';
export type * from './youzan-retail-open-stockinorder-query-v300';
export type * from './youzan-retail-open-applyorder-query-v300';
export type * from './youzan-retail-open-applyorder-check-v300';
export type * from './youzan-retail-open-stockcheckorder-get-v300';
export type * from './youzan-retail-open-stockcheck-create-v300';
export type * from './youzan-retail-stock-query-bom-v100';
export type * from './youzan-retail-open-query-manufacture-v100';
export type * from './youzan-retail-stockinout-operate-audit-v100';
export type * from './youzan-retail-open-update-uniquecode-v100';
export type * from './youzan-retail-open-stock-unique-code-v300';
export type * from './youzan-retail-open-modify-planstock-v100';
export type * from './youzan-retail-open-stock-mode-query-v100';
export type * from './youzan-retail-open-deliveryorder-get-v300';
export type * from './youzan-retail-open-deliveryorder-query-v300';
export type * from './youzan-shop-chain-descendent-organization-list-v101';
export type * from './youzan-wecom-staff-search-v100';
export type * from './youzan-scrm-customer-detail-get-v101';
export type * from './youzan-scrm-customer-list-yzopenid-v100';
export type * from './youzan-scrm-customer-list-v100';
export type * from './youzan-crm-customer-points-operate-freezeandconsume-v400';
export type * from './youzan-crm-customer-points-operate-consume-v400';
export type * from './youzan-scrm-customer-points-rule-list-v100';
export type * from './youzan-crm-customer-points-operate-freeze-v400';
export type * from './youzan-crm-customer-points-operate-increasewithexpire-v400';
export type * from './youzan-crm-customer-points-increase-v400';
export type * from './youzan-crm-customer-points-get-v100';
export type * from './youzan-crm-customer-points-decrease-v400';
export type * from './youzan-crm-customer-points-sync-v400';
export type * from './youzan-ump-pointdeduction-update-openstatus-v100';
export type * from './youzan-crm-customer-points-changelog-search-v402';
export type * from './youzan-scrm-pointdeduction-get-v100';
export type * from './youzan-crm-customer-pointstore-exchange-records-v200';
export type * from './youzan-crm-customer-points-operate-unfreeze-v400';
export type * from './youzan-crm-customer-points-operate-revert-v400';
export type * from './youzan-trade-memo-update-v300';
export type * from './youzan-trade-refund-get-v301';
export type * from './youzan-retail-open-refundorder-get-v300';
export type * from './youzan-retail-open-refundorder-query-v300';
export type * from './youzan-trade-refund-search-v301';
export type * from './youzan-trade-refund-amount-get-v100';
export type * from './youzan-retail-open-chainstaff-querypage-v100';

export interface YouzanApiMap
  extends RetailOpenSpuQueryV300ApiMapEntry,
    YouzanTradesSoldGetV404ApiMapEntry,
    YouzanRetailOpenAllotOrderCreateV100ApiMapEntry,
    YouzanRetailOpenApplyorderGetV300ApiMapEntry,
    YouzanRetailOpenAllotorderGetV300ApiMapEntry,
    YouzanRetailOpenSpuGetV300ApiMapEntry,
    YouzanItemDetailGetV101ApiMapEntry,
    YouzanRetailOpenStockoutorderCreateV300ApiMapEntry,
    YouzanRetailOpenStockoutorderQueryV300ApiMapEntry,
    YouzanRetailOpenStockoutorderGetV300ApiMapEntry,
    YouzanRetailOpenStockAdjustV300ApiMapEntry,
    YouzanRetailOpenWarehouseQueryV300ApiMapEntry,
    YouzanRetailOpenQueryWarehousestockV100ApiMapEntry,
    YouzanShopSingleStaffUpdateDisableV100ApiMapEntry,
    YouzanShopSingleStaffListPageV100ApiMapEntry,
    YouzanShopSingleStaffGetV100ApiMapEntry,
    YouzanShopSingleStaffAddV100ApiMapEntry,
    YouzanShopStaffGetDetailV101ApiMapEntry,
    YouzanItemCommonUpdateV100ApiMapEntry,
    YouzanRetailOpenPurchaseorderCreateV300ApiMapEntry,
    YouzanRetailOpenPurchaseorderGetV300ApiMapEntry,
    YouzanRetailOpenUpdatePurchasepriceV100ApiMapEntry,
    YouzanRetailOpenUpdatePurchaseorderfinishV100ApiMapEntry,
    YouzanRetailOpenPurchasereturnorderGetV100ApiMapEntry,
    YouzanRetailOpenStockinorderCreateV300ApiMapEntry,
    YouzanRetailOpenStockinorderGetV300ApiMapEntry,
    YouzanRetailOpenStockinorderQueryV300ApiMapEntry,
    YouzanRetailOpenApplyorderQueryV300ApiMapEntry,
    YouzanRetailOpenApplyorderCheckV300ApiMapEntry,
    YouzanRetailOpenStockcheckorderGetV300ApiMapEntry,
    YouzanRetailOpenStockcheckCreateV300ApiMapEntry,
    YouzanRetailStockQueryBomV100ApiMapEntry,
    YouzanRetailOpenQueryManufactureV100ApiMapEntry,
    YouzanRetailStockinoutOperateAuditV100ApiMapEntry,
    YouzanRetailOpenUpdateUniquecodeV100ApiMapEntry,
    YouzanRetailOpenStockUniqueCodeV300ApiMapEntry,
    YouzanRetailOpenModifyPlanstockV100ApiMapEntry,
    YouzanRetailOpenStockModeQueryV100ApiMapEntry,
    YouzanRetailOpenDeliveryorderGetV300ApiMapEntry,
    YouzanRetailOpenDeliveryorderQueryV300ApiMapEntry,
    YouzanShopChainDescendentOrganizationListV101ApiMapEntry,
    YouzanWecomStaffSearchV100ApiMapEntry,
    YouzanScrmCustomerDetailGetV101ApiMapEntry,
    YouzanScrmCustomerListYzopenidV100ApiMapEntry,
    YouzanScrmCustomerListV100ApiMapEntry,
    YouzanCrmCustomerPointsOperateFreezeandconsumeV400ApiMapEntry,
    YouzanCrmCustomerPointsOperateConsumeV400ApiMapEntry,
    YouzanScrmCustomerPointsRuleListV100ApiMapEntry,
    YouzanCrmCustomerPointsOperateFreezeV400ApiMapEntry,
    YouzanCrmCustomerPointsOperateIncreasewithexpireV400ApiMapEntry,
    YouzanCrmCustomerPointsIncreaseV400ApiMapEntry,
    YouzanCrmCustomerPointsGetV100ApiMapEntry,
    YouzanCrmCustomerPointsDecreaseV400ApiMapEntry,
    YouzanCrmCustomerPointsSyncV400ApiMapEntry,
    YouzanUmpPointdeductionUpdateOpenstatusV100ApiMapEntry,
    YouzanCrmCustomerPointsChangelogSearchV402ApiMapEntry,
    YouzanScrmPointdeductionGetV100ApiMapEntry,
    YouzanCrmCustomerPointstoreExchangeRecordsV200ApiMapEntry,
    YouzanCrmCustomerPointsOperateUnfreezeV400ApiMapEntry,
    YouzanCrmCustomerPointsOperateRevertV400ApiMapEntry,
    YouzanTradeMemoUpdateV300ApiMapEntry,
    YouzanTradeRefundGetV301ApiMapEntry,
    YouzanRetailOpenRefundorderGetV300ApiMapEntry,
    YouzanRetailOpenRefundorderQueryV300ApiMapEntry,
    YouzanTradeRefundSearchV301ApiMapEntry,
    YouzanTradeRefundAmountGetV100ApiMapEntry,
    YouzanRetailOpenChainstaffQuerypageV100ApiMapEntry {}

export type YouzanApiMethod = keyof YouzanApiMap;

export type YouzanApiVersion<TMethod extends YouzanApiMethod> =
  keyof YouzanApiMap[TMethod] & string;

export type YouzanApiKnownVersion = {
  [TMethod in YouzanApiMethod]: YouzanApiVersion<TMethod>;
}[YouzanApiMethod];

export type YouzanApiParams<
  TMethod extends YouzanApiMethod,
  TVersion extends YouzanApiVersion<TMethod>,
> = YouzanApiMap[TMethod][TVersion] extends { params: infer TParams }
  ? TParams
  : never;

export type YouzanApiResponse<
  TMethod extends YouzanApiMethod,
  TVersion extends YouzanApiVersion<TMethod>,
> = YouzanApiMap[TMethod][TVersion] extends { response: infer TResponse }
  ? TResponse
  : never;
