import { SearchOptions } from '@thebigrick/catalyst-search-layer/types';

/**
 * Calculates the page number from search options
 */
export const calculatePage = (options?: SearchOptions): number => {
  let page = 0;
  if (options?.after) {
    page = parseInt(options.after, 10);
  } else if (options?.before) {
    const beforePage = parseInt(options.before, 10);
    page = Math.max(0, beforePage - 2);
  }
  return page;
};
