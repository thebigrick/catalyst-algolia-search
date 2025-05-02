import { SearchFilters } from '@thebigrick/catalyst-search-layer/types';
import { camelToUnderscore } from '../utils/camel-to-underscore';

/**
 * Maps product attribute filters from Catalyst format to Algolia format
 */
export const mapAttributeFilters = (filters: SearchFilters, filterParts: string[]): void => {
  if (filters.productAttributes && filters.productAttributes.length > 0) {
    filters.productAttributes.forEach((attribute: { attribute: string; values: string[] }) => {
      if (attribute.values.length > 0) {
        const attrName = camelToUnderscore(attribute.attribute);
        const attributeFilters = attribute.values
          .map((value: string) => `${attrName}:"${value}"`)
          .join(' OR ');

        filterParts.push(`(${attributeFilters})`);
      }
    });
  }
};
