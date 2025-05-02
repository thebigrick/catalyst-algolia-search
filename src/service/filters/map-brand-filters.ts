import { SearchFilters } from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps brand filters from Catalyst format to Algolia format
 */
export const mapBrandFilters = (filters: SearchFilters, filterParts: string[]): void => {
  if (filters.brandEntityIds && filters.brandEntityIds.length > 0) {
    const brandFilters = filters.brandEntityIds.map((id: number) => `brand_id:${id}`).join(' OR ');
    filterParts.push(`(${brandFilters})`);
  }
};
