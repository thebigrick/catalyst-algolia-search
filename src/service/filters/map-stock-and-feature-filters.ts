import { SearchFilters } from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps stock and feature filters from Catalyst format to Algolia format
 */
export const mapStockAndFeatureFilters = (filters: SearchFilters, filterParts: string[]): void => {
  if (filters.hideOutOfStock) {
    filterParts.push('in_stock:true');
  }

  if (filters.isFeatured) {
    filterParts.push('is_featured:true');
  }

  if (filters.isFreeShipping) {
    filterParts.push('is_free_shipping:true');
  }
};
