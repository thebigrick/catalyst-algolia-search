import { SearchFilters } from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps price filters from Catalyst format to Algolia format
 */
export const mapPriceFilters = (filters: SearchFilters, filterParts: string[]): void => {
  if (filters.price) {
    if (filters.price.minPrice !== undefined && filters.price.minPrice !== null) {
      filterParts.push(`default_price >= ${filters.price.minPrice}`);
    }

    if (filters.price.maxPrice !== undefined && filters.price.maxPrice !== null) {
      filterParts.push(`default_price <= ${filters.price.maxPrice}`);
    }
  }
};
