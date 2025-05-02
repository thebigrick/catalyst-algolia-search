import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';

/**
 * Sets price data for a product
 */
export const setPriceData = (
  product: SearchProductNode,
  finalPrice: number,
  basePrice?: number,
  salePrice?: number,
  currencyCode: string = 'USD',
): void => {
  (product.prices as any) = {
    price: {
      value: finalPrice,
      currencyCode,
    },
    priceRange: {
      min: {
        value: finalPrice,
        currencyCode,
      },
      max: {
        value: finalPrice,
        currencyCode,
      },
    },
  };

  if (basePrice && salePrice) {
    (product.prices as any).basePrice = {
      value: basePrice,
      currencyCode,
    };
    (product.prices as any).salePrice = {
      value: salePrice,
      currencyCode,
    };
  }
};
