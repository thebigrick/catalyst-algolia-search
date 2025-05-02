import {
  BrandSearchFilter,
  PageInfo,
  SearchFilters,
} from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps Algolia brand facets to Catalyst brand search filter
 */
export const mapBrandFacets = (
  facets: Record<string, Record<string, number>>,
  filters: SearchFilters,
  emptyPageInfo: PageInfo,
  result: any[],
): void => {
  if (facets.brand_name) {
    const brandFilter: BrandSearchFilter = {
      __typename: 'BrandSearchFilter',
      name: 'Brand',
      isCollapsedByDefault: false,
      displayProductCount: true,
      brands: {
        pageInfo: emptyPageInfo,
        edges: Object.entries(facets.brand_name).map(([brandName, count]) => ({
          cursor: brandName,
          node: {
            entityId: 0,
            name: brandName,
            isSelected: filters.brandEntityIds?.includes(0) || false,
            productCount: count,
          },
        })),
      },
    };
    result.push(brandFilter);
  }
};
