import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit } from '../../types';

/**
 * Adds category data to a product from an Algolia hit
 */
export const addCategoryData = (hit: AlgoliaHit, product: SearchProductNode): void => {
  if (hit.categories && hit.categories.lvl0 && hit.categories.lvl0.length > 0) {
    (product as any).categories = {
      edges: hit.categories.lvl0.map((cat) => ({
        node: {
          name: cat,
          path: `/categories/${cat.toLowerCase().replace(/ /g, '-')}`,
        },
      })),
    };
  }
};
