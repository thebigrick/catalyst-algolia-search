import { SearchFilters } from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps rating filters from Catalyst format to Algolia format
 */
export const mapRatingFilters = (filters: SearchFilters, filterParts: string[]): void => {
  if (filters.rating) {
    if (filters.rating.minRating !== undefined && filters.rating.minRating !== null) {
      filterParts.push(`average_rating >= ${filters.rating.minRating}`);
    }

    if (filters.rating.maxRating !== undefined && filters.rating.maxRating !== null) {
      filterParts.push(`average_rating <= ${filters.rating.maxRating}`);
    }
  }
};
