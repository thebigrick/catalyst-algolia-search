import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit } from '../../types';

/**
 * Adds description data to a product from an Algolia hit
 */
export const addDescriptionData = (hit: AlgoliaHit, product: SearchProductNode): void => {
  if (hit.description) {
    (product as any).description = hit.description;
  }
};
