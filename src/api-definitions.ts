import type { ApiDefinition } from './types';

export const apiDefinitions = {
  tradesSoldGet: {
    api: 'youzan.trades.sold.get',
    version: '4.0.4',
  },
} as const satisfies Record<string, ApiDefinition>;
