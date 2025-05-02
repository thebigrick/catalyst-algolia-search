import { PageInfo } from '@thebigrick/catalyst-search-layer/types';

/**
 * Creates an empty PageInfo object
 */
export const createEmptyPageInfo = (): PageInfo => {
  return {
    hasNextPage: false,
    hasPreviousPage: false,
  };
};
