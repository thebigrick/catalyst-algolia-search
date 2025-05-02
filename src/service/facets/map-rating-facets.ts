import {
  PageInfo,
  RatingSearchFilter,
  SearchFilters,
} from '@thebigrick/catalyst-search-layer/types';

/**
 * Maps Algolia rating facets to Catalyst rating search filter
 */
export const mapRatingFacets = (
  facets: Record<string, Record<string, number>>,
  filters: SearchFilters,
  emptyPageInfo: PageInfo,
  result: any[],
): void => {
  if (facets.rating) {
    const ratingFilter: RatingSearchFilter = {
      __typename: 'RatingSearchFilter',
      name: 'Rating',
      isCollapsedByDefault: false,
      ratings: {
        pageInfo: emptyPageInfo,
        edges: Object.entries(facets.rating).map(([rating, count]) => ({
          cursor: rating,
          node: {
            value: parseInt(rating, 10),
            isSelected:
              (filters.rating?.minRating || 0) <= parseInt(rating, 10) &&
              (filters.rating?.maxRating || 5) >= parseInt(rating, 10),
            productCount: count,
          },
        })),
      },
    };
    result.push(ratingFilter);
  }
};
