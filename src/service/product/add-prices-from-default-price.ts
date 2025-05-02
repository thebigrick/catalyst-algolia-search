import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit } from '../../types';
import { setPriceData } from './set-price-data';

/**
 * Adds prices from the default price in an Algolia hit
 */
export const addPricesFromDefaultPrice = (
  hit: AlgoliaHit,
  product: SearchProductNode,
  defaultCurrency: string,
): void => {
  const defaultPrice = hit.default_price || 0;
  setPriceData(product, defaultPrice, undefined, undefined, defaultCurrency);
};
