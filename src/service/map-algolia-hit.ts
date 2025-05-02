import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit } from '../types';
import { createBaseProduct } from './create-base-product';
import { addImageData } from './add-image-data';
import { addPriceData } from './add-price-data';
import { addInventoryData } from './add-inventory-data';
import { addDescriptionData } from './add-description-data';
import { addCategoryData } from './add-category-data';

/**
 * Maps an Algolia hit to a Catalyst SearchProductNode
 * @param hit - The Algolia hit object
 * @param currencyCode - Optional currency code to use for pricing
 * @returns A Catalyst SearchProductNode
 */
export const mapAlgoliaHit = (hit: AlgoliaHit, currencyCode?: string): SearchProductNode => {
  const defaultCurrency = currencyCode || 'USD';
  const product: SearchProductNode = createBaseProduct(hit);

  if (hit.brand_name) {
    product.brand = { name: hit.brand_name };
  }

  addImageData(hit, product);
  addPriceData(hit, product, defaultCurrency);
  addInventoryData(hit, product);
  addDescriptionData(hit, product);
  addCategoryData(hit, product);

  return product;
};
