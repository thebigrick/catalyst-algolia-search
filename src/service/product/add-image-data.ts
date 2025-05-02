import { SearchProductNode } from '@thebigrick/catalyst-search-layer/types';
import { AlgoliaHit, AlgoliaProductImage } from '../../types';

/**
 * Adds image data to a product from an Algolia hit
 */
export const addImageData = (hit: AlgoliaHit, product: SearchProductNode): void => {
  if (hit.image_url || (hit.product_images && hit.product_images.length > 0)) {
    let url = '';
    let altText = '';

    if (hit.image_url) {
      url = hit.image_url;
    }

    if (hit.product_images && hit.product_images.length > 0) {
      let thumbnail: AlgoliaProductImage | undefined;
      hit.product_images.forEach((img: AlgoliaProductImage) => {
        if (img.is_thumbnail) {
          thumbnail = img;
        }
      });

      if (thumbnail) {
        if (!url && thumbnail.url_thumbnail) {
          url = thumbnail.url_thumbnail;
        }
        altText = thumbnail.description || '';
      } else if (hit.product_images[0].url_thumbnail) {
        if (!url) {
          url = hit.product_images[0].url_thumbnail;
        }
        altText = hit.product_images[0].description || '';
      }
    }

    if (url) {
      product.defaultImage = {
        url,
        ...(altText && { altText }),
      };
    }
  }
};
