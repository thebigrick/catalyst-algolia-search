import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit } from '../types';

/**
 * Creates a base product from an Algolia hit
 */
export const createBaseProduct = (hit: AlgoliaHit): SearchProductNode => {
  return {
    entityId: parseInt(hit.objectID),
    name: hit.name || '',
    path: hit.url || '',
  };
};
