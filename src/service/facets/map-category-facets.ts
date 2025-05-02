import {
  CategorySearchFilter,
  PageInfo,
  SearchFilters,
} from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps Algolia category facets to Catalyst category search filter
 */
export const mapCategoryFacets = (
  facets: Record<string, Record<string, number>>,
  filters: SearchFilters,
  emptyPageInfo: PageInfo,
  result: any[],
): void => {
  if (facets.categories?.lvl0) {
    const categoryFilter: CategorySearchFilter = {
      __typename: 'CategorySearchFilter',
      name: 'Category',
      isCollapsedByDefault: false,
      displayProductCount: true,
      categories: {
        pageInfo: emptyPageInfo,
        edges: Object.entries(facets.categories.lvl0).map(([categoryName, count]) => ({
          cursor: categoryName,
          node: {
            entityId: 0,
            name: categoryName,
            isSelected:
              filters.categoryEntityId === 0 || filters.categoryEntityIds?.includes(0) || false,
            productCount: count,
          },
        })),
      },
    };
    result.push(categoryFilter);
  }
};
