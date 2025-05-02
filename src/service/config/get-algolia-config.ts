import { AlgoliaConfig } from '../../types';

/**
 * Gets the Algolia configuration from environment variables
 * In a real implementation, these would come from environment variables or configuration files
 */
export const getAlgoliaConfig = (): AlgoliaConfig => {
  return {
    appId: process.env.ALGOLIA_APP_ID || '',
    apiKey: process.env.ALGOLIA_API_KEY || '',
    indexName: process.env.ALGOLIA_INDEX_NAME || 'BigCommerce',
  };
};
