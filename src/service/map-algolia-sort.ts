import { SearchProductsSortInput } from '@thebigrick/catalyst-search-layer/types';
import { getAvailableSortIndices } from './get-available-sort-indices';

/**
 * Maps a Catalyst sort option to the corresponding Algolia sort index
 */
export const mapAlgoliaSort = async (sort: SearchProductsSortInput): Promise<string | null> => {
  const indices = await getAvailableSortIndices();

  if (indices[sort]) {
    return indices[sort];
  }

  if (indices.RELEVANCE) {
    console.warn(`Sort option ${sort} not available, using RELEVANCE instead`);
    return indices.RELEVANCE;
  }

  return null;
};
