import {
  SearchFilters,
  SearchOptions,
  SearchProvider,
  SearchResults,
} from '@thebigrick/catalyst-search-layer/types';
import { PublicToPrivateParams } from '@bigcommerce/catalyst-core/app/[locale]/(default)/(faceted)/fetch-faceted-search';
import { performAlgoliaSearch } from './search/perform-algolia-search';

/**
 * Algolia search provider for Catalyst search layer
 */
export const algoliaSearchProvider: SearchProvider = {
  id: 'algolia-provider',
  isEnabled: true,

  search: async (
    searchTerm: string,
    filters: SearchFilters,
    options?: SearchOptions,
  ): Promise<SearchResults> => {
    return performAlgoliaSearch(searchTerm, filters, options);
  },

  facetedSearch: async (
    params: Record<string, any>,
    options?: {
      currencyCode?: string;
      customerAccessToken?: string;
    },
  ): Promise<SearchResults> => {
    const { filters, after, before, limit, sort } = PublicToPrivateParams.parse(params);

    const searchTerm = filters.searchTerm || '';

    const searchOptions = {
      after: after || undefined,
      before: before || undefined,
      limit: limit ?? undefined,
      sort: sort || undefined,
      currencyCode: options?.currencyCode,
    };

    return performAlgoliaSearch(searchTerm, filters as any, searchOptions);
  },
};

export default algoliaSearchProvider;
