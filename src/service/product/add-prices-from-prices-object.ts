import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit } from '../../types';
import { setPriceData } from './set-price-data';

/**
 * Adds prices from the prices object in an Algolia hit
 */
export const addPricesFromPricesObject = (
  hit: AlgoliaHit,
  product: SearchProductNode,
  defaultCurrency: string,
): void => {
  const prices = hit.prices || {};
  const price = prices[defaultCurrency] || hit.default_price || 0;
  const salePrice =
    hit.sales_prices && hit.sales_prices[defaultCurrency]
      ? hit.sales_prices[defaultCurrency]
      : undefined;

  const basePrice = salePrice && salePrice > 0 ? price : undefined;
  const actualSalePrice = salePrice && salePrice > 0 ? salePrice : undefined;
  const finalPrice = actualSalePrice || price;

  setPriceData(product, finalPrice, basePrice, actualSalePrice, defaultCurrency);
};
