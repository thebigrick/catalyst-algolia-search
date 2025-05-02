import { OtherSearchFilter, SearchFilters } from '@thebigrick/catalyst-search-layer/types';

/**
 * Adds other filters (free shipping, featured, stock) to search filters result
 */
export const addOtherFilters = (filters: SearchFilters, result: any[]): void => {
  const otherFilter: OtherSearchFilter = {
    __typename: 'OtherSearchFilter',
    name: 'Other',
    isCollapsedByDefault: false,
    displayProductCount: true,
    freeShipping: {
      isSelected: filters.isFreeShipping || false,
      productCount: 0,
    },
    isFeatured: {
      isSelected: filters.isFeatured || false,
      productCount: 0,
    },
    isInStock: {
      isSelected: filters.hideOutOfStock || false,
      productCount: 0,
    },
  };
  result.push(otherFilter);
};
