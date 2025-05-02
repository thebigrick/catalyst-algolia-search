import { valuePlugin } from '@thebigrick/catalyst-pluginizr';
import algoliaSearchProvider from '../service/search/algolia-search-provider';
import { SearchProvidersRegistry } from '@thebigrick/catalyst-search-layer/types';
import searchProvidersRegistry from '@thebigrick/catalyst-search-layer/service/search-providers-registry';

/**
 * Plugin that registers the Algolia search provider to the providers registry.
 *
 * This provider implements both search() and facetedSearch() methods,
 * which are used by the intercept-quick-search and intercept-faceted-search
 * plugins respectively. These plugins replace the old hijack-search approach
 * with more specific and targeted integrations.
 *
 * Setting sortOrder to -10 ensures this runs before other plugins that might modify the registry.
 */
export default valuePlugin<typeof searchProvidersRegistry>({
  name: 'register-algolia-provider',
  resourceId: '@thebigrick/catalyst-search-layer/service/search-providers-registry',
  sortOrder: -10,
  wrap: (registry: SearchProvidersRegistry): SearchProvidersRegistry => [
    algoliaSearchProvider,
    ...registry,
  ],
}) as any;
