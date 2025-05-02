import {
  ProductAttributeSearchFilter,
  SearchFilters,
} from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps Algolia facets to Catalyst product attribute search filters
 */
export const mapProductAttributes = (
  facets: Record<string, Record<string, number>>,
  filters: SearchFilters,
  result: any[],
): void => {
  Object.entries(facets).forEach(([facetName, facetValues]) => {
    if (
      facetName !== 'brand_name' &&
      facetName !== 'categories.lvl0' &&
      facetName !== 'price' &&
      facetName !== 'rating'
    ) {
      const attribArray = Object.entries(facetValues).map(([value, count]) => ({
        value,
        isSelected:
          filters.productAttributes?.some(
            (attr) => attr.attribute === facetName && attr.values.includes(value),
          ) || false,
        productCount: count,
      }));

      const attributeFilter = {
        __typename: 'ProductAttributeSearchFilter',
        name: facetName.replace('_', ' ').replace(/^\w/, (c) => c.toUpperCase()),
        isCollapsedByDefault: false,
        displayProductCount: true,
        filterName: facetName,
        attributes: attribArray,
      } as unknown as ProductAttributeSearchFilter;

      result.push(attributeFilter);
    }
  });
};
