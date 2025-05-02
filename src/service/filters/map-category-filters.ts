import { SearchFilters } from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps category filters from Catalyst format to Algolia format
 */
export const mapCategoryFilters = (filters: SearchFilters, filterParts: string[]): void => {
  if (filters.categoryEntityId) {
    filterParts.push(`category_ids = ${filters.categoryEntityId}`);
  }

  if (filters.categoryEntityIds && filters.categoryEntityIds.length > 0) {
    const categoryFilters = filters.categoryEntityIds
      .map((id: number) => `category_ids = ${id}`)
      .join(' OR ');

    filterParts.push(`(${categoryFilters})`);
  }
};
