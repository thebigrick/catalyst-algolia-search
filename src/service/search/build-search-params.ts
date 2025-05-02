/**
 * Builds search parameters for Algolia search API
 */
export const buildSearchParams = (
  hitsPerPage: number,
  page: number,
  algoliaFilters?: string,
): string => {
  const searchParams = new URLSearchParams();
  searchParams.append('hitsPerPage', hitsPerPage.toString());
  searchParams.append('page', page.toString());
  searchParams.append('facets', '*');

  if (algoliaFilters && algoliaFilters.length > 0) {
    searchParams.append('filters', algoliaFilters);
  }

  return searchParams.toString();
};
