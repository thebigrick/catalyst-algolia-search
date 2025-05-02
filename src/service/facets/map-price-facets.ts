import { PriceSearchFilter, SearchFilters } from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps Algolia price facets to Catalyst price search filter
 */
export const mapPriceFacets = (
  facetStats: Record<string, { min: number; max: number }>,
  filters: SearchFilters,
  result: any[],
): void => {
  if (facetStats.price) {
    const priceFilter: PriceSearchFilter = {
      __typename: 'PriceSearchFilter',
      name: 'Price',
      isCollapsedByDefault: false,
      selected: {
        minPrice: filters.price?.minPrice || facetStats.price.min,
        maxPrice: filters.price?.maxPrice || facetStats.price.max,
      },
    };
    result.push(priceFilter);
  }
};
