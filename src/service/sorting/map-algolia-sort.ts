import { SearchProductsSortInput } from '@thebigrick/catalyst-search-layer/types';
import { getAvailableSortOptions } from './get-available-sort-options';
import { getAlgoliaConfig } from '../config/get-algolia-config';

/**
 * Maps a Catalyst sort option to the corresponding Algolia sort index
 */
export const mapAlgoliaSort = async (sort: SearchProductsSortInput): Promise<string | null> => {
  const lcSort = sort.toLowerCase();
  const { indexName } = getAlgoliaConfig();
  const indices = await getAvailableSortOptions!([{ value: lcSort, label: '' }]);

  if (lcSort !== 'relevance' && indices.find((index) => index.toLowerCase() === lcSort)) {
    return `${indexName}_${lcSort}`;
  }

  return indexName;
};
