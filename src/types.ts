import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';

/**
 * Configuration interface for Algolia
 */
export interface AlgoliaConfig {
  appId: string;
  apiKey: string;
  indexName: string;
}

/**
 * Interface for currency-based prices in Algolia
 */
export interface AlgoliaPrices {
  [currencyCode: string]: number;
}

/**
 * Interface for product image in Algolia
 */
export interface AlgoliaProductImage {
  description?: string;
  is_thumbnail?: boolean;
  url_thumbnail?: string;
  url?: string;
}

/**
 * Interface for product variant in Algolia
 */
export interface AlgoliaVariant {
  id: number;
  image_url?: string;
  sku: string;
  inventory: number;
  in_stock: boolean;
  prices: AlgoliaPrices;
  sales_prices: AlgoliaPrices;
  retail_prices: AlgoliaPrices;
  calculated_prices: AlgoliaPrices;
  options: Record<string, any>;
}

/**
 * Interface that defines the structure of an Algolia hit
 */
export interface AlgoliaHit {
  objectID: string;
  name?: string;
  brand_id?: number;
  brand_name?: string;
  sku?: string;
  url?: string;
  image_url?: string;
  product_images?: AlgoliaProductImage[];
  description?: string;
  is_visible?: boolean;
  in_stock?: boolean;
  inventory_tracking?: string;
  inventory?: number;
  date_created?: string;
  date_modified?: string;
  categories_without_path?: string[];
  categories?: {
    lvl0?: string[];
    [key: string]: string[] | undefined;
  };
  category_ids?: number[];
  variant_ids?: number[];
  variants?: AlgoliaVariant[];
  option_names?: string[];
  _tags?: string[];
  default_price?: number;
  prices?: AlgoliaPrices;
  sales_prices?: AlgoliaPrices;
  retail_prices?: AlgoliaPrices;
  calculated_prices?: AlgoliaPrices;
  custom_fields?: Record<string, any>;
  [key: string]: any;
}
