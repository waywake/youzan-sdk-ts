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

export type { YouzanApiSuccessResponse, YouzanLong } from './common';
export type * from './retail-open-spu-query-v300';
export type * from './youzan-trades-sold-get-v404';
export type * from './youzan-retail-open-allot-order-create-v100';
export type * from './youzan-retail-open-applyorder-get-v300';
export type * from './youzan-retail-open-allotorder-get-v300';

export interface YouzanApiMap
  extends RetailOpenSpuQueryV300ApiMapEntry,
    YouzanTradesSoldGetV404ApiMapEntry,
    YouzanRetailOpenAllotOrderCreateV100ApiMapEntry,
    YouzanRetailOpenApplyorderGetV300ApiMapEntry,
    YouzanRetailOpenAllotorderGetV300ApiMapEntry {}

export type YouzanApiMethod = keyof YouzanApiMap;

export type YouzanApiVersion<TMethod extends YouzanApiMethod> =
  keyof YouzanApiMap[TMethod] & string;

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
