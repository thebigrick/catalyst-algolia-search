import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit } from '../../types';

/**
 * Adds inventory data to a product from an Algolia hit
 */
export const addInventoryData = (hit: AlgoliaHit, product: SearchProductNode): void => {
  if (hit.in_stock !== undefined) {
    (product as any).inventory = {
      isInStock: hit.in_stock,
    };

    if (hit.inventory !== undefined) {
      (product as any).inventory.level = hit.inventory;
    }
  }
};
