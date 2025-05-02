import {
  SearchFilter,
  SearchFilters,
  SearchProductNode,
} from '@thebigrick/catalyst-search-layer/types';
import { mapAlgoliaHit } from '../product/map-algolia-hit';
import { mapAlgoliaFacets } from '../facets/map-algolia-facets';

/**
 * Processes Algolia search response and maps it to Catalyst format
 */
export const processSearchResults = (
  searchResponse: any,
  filters: SearchFilters,
  currencyCode?: string,
): {
  products: SearchProductNode[];
  pageInfo: {
    startCursor: string;
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  collectionInfo: {
    totalItems: number;
  };
  filters: SearchFilter[];
} => {
  const algoliaHits = searchResponse.hits || [];
  const nbHits = searchResponse.nbHits || 0;
  const nbPages = searchResponse.nbPages || 0;
  const facets = searchResponse.facets || {};
  const facetStats = searchResponse.facets_stats || {};
  const currentPage = searchResponse.page || 0;

  const products: SearchProductNode[] = algoliaHits.map((hit: any) =>
    mapAlgoliaHit(hit, currencyCode),
  );

  const pageInfo = {
    startCursor: currentPage > 0 ? `${currentPage}` : '',
    endCursor: currentPage < nbPages - 1 ? `${currentPage + 1}` : '',
    hasNextPage: currentPage < nbPages - 1,
    hasPreviousPage: currentPage > 0,
  };

  const collectionInfo = {
    totalItems: nbHits,
  };

  const searchFilters = mapAlgoliaFacets(facets, facetStats, filters);

  return {
    products,
    pageInfo,
    collectionInfo,
    filters: searchFilters,
  };
};
