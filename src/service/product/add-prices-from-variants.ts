import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit } from '../../types';
import { setPriceData } from './set-price-data';

/**
 * Adds prices from variants in an Algolia hit
 */
export const addPricesFromVariants = (
  hit: AlgoliaHit,
  product: SearchProductNode,
  defaultCurrency: string,
): void => {
  if (!hit.variants || hit.variants.length === 0) return;

  const firstVariant = hit.variants[0];
  if (firstVariant.prices && Object.keys(firstVariant.prices).length > 0) {
    const price = firstVariant.prices[defaultCurrency] || 0;
    const salePrice =
      firstVariant.sales_prices && firstVariant.sales_prices[defaultCurrency]
        ? firstVariant.sales_prices[defaultCurrency]
        : undefined;

    const basePrice = salePrice && salePrice > 0 ? price : undefined;
    const actualSalePrice = salePrice && salePrice > 0 ? salePrice : undefined;
    const finalPrice = actualSalePrice || price;

    setPriceData(product, finalPrice, basePrice, actualSalePrice, defaultCurrency);
  }
};
