import {
  CollectionInfo,
  PageInfo,
  SearchFilter,
  SearchFilters,
  SearchOptions,
  SearchProductNode,
} from '@thebigrick/catalyst-search-layer/types';
import { algoliasearch } from 'algoliasearch';
import { getAlgoliaConfig } from '../config/get-algolia-config';
import { mapAlgoliaFilters } from '../filters/map-algolia-filters';
import { mapAlgoliaSort } from '../sorting/map-algolia-sort';
import { calculatePage } from './calculate-page';
import { buildSearchParams } from './build-search-params';
import { processSearchResults } from './process-search-results';

/**
 * Performs a search using Algolia search API
 */
export const performAlgoliaSearch = async (
  searchTerm: string,
  filters: SearchFilters,
  options?: SearchOptions,
): Promise<{
  products: SearchProductNode[];
  pageInfo?: PageInfo;
  collectionInfo?: CollectionInfo;
  filters?: SearchFilter[];
}> => {
  const { appId, apiKey, indexName } = getAlgoliaConfig();

  if (!appId || !apiKey || !indexName) {
    console.error('Algolia configuration missing, please check your environment variables');
    return { products: [] };
  }

  const client = algoliasearch(appId, apiKey);
  const algoliaFilters = mapAlgoliaFilters(filters);
  const hitsPerPage = options?.limit || 9;

  const page = calculatePage(options);

  let targetIndex = indexName;
  let searchParams = '';

  try {
    if (options?.sort) {
      const sortIndex = await mapAlgoliaSort(options.sort);
      if (sortIndex) {
        targetIndex = sortIndex;
      }
    }

    searchParams = buildSearchParams(hitsPerPage, page, algoliaFilters);
  } catch (error) {
    console.error('Error processing sort options:', error);
    searchParams = buildSearchParams(hitsPerPage, page, algoliaFilters);
  }

  try {
    const { results } = await client.search({
      requests: [
        {
          indexName: targetIndex,
          query: searchTerm,
          params: searchParams,
        },
      ],
    });

    const searchResponse = results[0] as any;

    if (!searchResponse) {
      return { products: [] };
    }

    return processSearchResults(searchResponse, filters, options?.currencyCode);
  } catch (error) {
    console.error('Algolia search error:', error);
    return { products: [] };
  }
};
