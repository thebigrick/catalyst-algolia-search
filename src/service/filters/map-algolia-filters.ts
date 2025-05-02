import { SearchFilters } from '@thebigrick/catalyst-search-layer/types';
import { mapCategoryFilters } from './map-category-filters';
import { mapBrandFilters } from './map-brand-filters';
import { mapStockAndFeatureFilters } from './map-stock-and-feature-filters';
import { mapPriceFilters } from './map-price-filters';
import { mapAttributeFilters } from './map-attribute-filters';
import { mapRatingFilters } from './map-rating-filters';

/**
 * Maps Catalyst search filters to Algolia filter syntax
 */
export const mapAlgoliaFilters = (filters: SearchFilters): string => {
  const filterParts: string[] = [];

  mapCategoryFilters(filters, filterParts);
  mapBrandFilters(filters, filterParts);
  mapStockAndFeatureFilters(filters, filterParts);
  mapPriceFilters(filters, filterParts);
  mapAttributeFilters(filters, filterParts);
  mapRatingFilters(filters, filterParts);

  return filterParts.join(' AND ');
};
