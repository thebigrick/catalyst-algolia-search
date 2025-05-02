import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit } from '../../types';
import { addPricesFromPricesObject } from './add-prices-from-prices-object';
import { addPricesFromDefaultPrice } from './add-prices-from-default-price';
import { addPricesFromVariants } from './add-prices-from-variants';

/**
 * Adds price data to a product from an Algolia hit
 */
export const addPriceData = (
  hit: AlgoliaHit,
  product: SearchProductNode,
  defaultCurrency: string,
): void => {
  if (hit.prices && Object.keys(hit.prices).length > 0) {
    addPricesFromPricesObject(hit, product, defaultCurrency);
  } else if (hit.default_price) {
    addPricesFromDefaultPrice(hit, product, defaultCurrency);
  } else if (hit.variants && hit.variants.length > 0) {
    addPricesFromVariants(hit, product, defaultCurrency);
  }
};
