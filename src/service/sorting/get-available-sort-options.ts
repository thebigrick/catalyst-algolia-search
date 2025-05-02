import { getAlgoliaConfig } from '../config/get-algolia-config';
import { algoliasearch } from 'algoliasearch';
import { SearchProductsSortInput, SearchProvider } from '@thebigrick/catalyst-search-layer/types';

/**
 * Cache for available sort indices
 */
let availableSortIndices: SearchProductsSortInput[] | null = null;

/**
 * Gets available sort indices, with caching
 */
export const getAvailableSortOptions: SearchProvider['getAvailableSortOptions'] = async (
  initialSortOptions,
): Promise<SearchProductsSortInput[]> => {
  if (!availableSortIndices) {
    const { appId, apiKey, indexName } = getAlgoliaConfig();

    if (!appId || !apiKey || !indexName) {
      console.error('Algolia configuration missing');
      return [];
    }

    try {
      const client = algoliasearch(appId, apiKey);

      const { items: indices } = await client.listIndices();
      const result: SearchProductsSortInput[] = ['RELEVANCE'];

      for (const index of indices) {
        if (index.name !== indexName && index.name.startsWith(`${indexName}_`)) {
          const suffix = index.name.substring(indexName.length + 1);

          for (const so of initialSortOptions) {
            if (so.value.toLowerCase() === suffix.toLowerCase()) {
              result.push(so.value.toUpperCase() as SearchProductsSortInput);
              break;
            }
          }
        }
      }

      availableSortIndices = result;
    } catch (error) {
      console.error('Error detecting sort indices:', error);
      availableSortIndices = ['RELEVANCE'];
    }
  }
  return availableSortIndices;
};
