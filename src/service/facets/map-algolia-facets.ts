import { SearchFilters, SearchFilter } from '@thebigrick/catalyst-search-layer/types';
import { createEmptyPageInfo } from './create-empty-page-info';
import { mapBrandFacets } from './map-brand-facets';
import { mapCategoryFacets } from './map-category-facets';
import { mapPriceFacets } from './map-price-facets';
import { mapProductAttributes } from './map-product-attributes';
import { addOtherFilters } from './add-other-filters';
import { mapRatingFacets } from './map-rating-facets';

/**
 * Maps Algolia facets to Catalyst search filters
 */
export const mapAlgoliaFacets = (
  facets: Record<string, Record<string, number>>,
  facetStats: Record<string, { min: number; max: number }>,
  filters: SearchFilters,
): SearchFilter[] => {
  const result: SearchFilter[] = [];
  const emptyPageInfo = createEmptyPageInfo();

  mapBrandFacets(facets, filters, emptyPageInfo, result);
  mapCategoryFacets(facets, filters, emptyPageInfo, result);
  mapPriceFacets(facetStats, filters, result);
  mapProductAttributes(facets, filters, result);
  addOtherFilters(filters, result);
  mapRatingFacets(facets, filters, emptyPageInfo, result);

  return result;
};
