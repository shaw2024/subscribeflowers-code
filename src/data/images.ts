

// Central image configuration for all flowers
// All roses use real rose photo URLs (Pexels CDN)

// Export BASE_URL for use in other modules
export const BASE_URL = import.meta.env.BASE_URL;

// Rose image type definition
export interface RoseImage {
  path: string;
  alt: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Rose images use hosted real-photo URLs
export const roseImages: Record<string, RoseImage> = {
  red: {
    path: 'https://pngimg.com/uploads/rose/rose_PNG669.png',
    alt: 'Red rose - premium quality flower subscription',
    seo: {
      title: 'Premium Red Roses - Fresh Flower Subscription',
      description:
        'Classic red roses symbolizing love and passion. Subscribe for weekly fresh flower delivery of premium roses.',
      keywords: [
        'red roses',
        'valentine roses',
        'romantic flowers',
        'rose subscription',
        'fresh red roses'
      ]
    }
  },
  pink: {
    path: 'https://images.pexels.com/photos/1458283/pexels-photo-1458283.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop',
    alt: 'Pink rose - elegant flower subscription',
    seo: {
      title: 'Premium Pink Roses - Elegant Flower Subscription',
      description:
        'Delicate pink roses symbolizing grace and admiration. Subscribe for weekly delivery of fresh premium pink roses.',
      keywords: [
        'pink roses',
        'elegant flowers',
        'graceful roses',
        'rose subscription',
        'fresh pink roses'
      ]
    }
  },
  white: {
    path: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop',
    alt: 'White rose - pure flower subscription',
    seo: {
      title: 'Premium White Roses - Pure Flower Subscription',
      description:
        'Elegant white roses symbolizing purity and new beginnings. Subscribe for weekly delivery of fresh premium white roses.',
      keywords: [
        'white roses',
        'pure flowers',
        'elegant roses',
        'rose subscription',
        'fresh white roses'
      ]
    }
  },
  lavender: {
    path: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop',
    alt: 'Lavender rose - enchanting flower subscription',
    seo: {
      title: 'Premium Lavender Roses - Enchanting Flower Subscription',
      description:
        'Enchanting lavender roses symbolizing love at first sight. Subscribe for weekly delivery of fresh premium lavender roses.',
      keywords: [
        'lavender roses',
        'purple roses',
        'enchanting flowers',
        'rose subscription',
        'fresh lavender roses'
      ]
    }
  }
};

// Product images for Shop page - roses use real photo URLs, others use CDN
export const productImages = {
  roses: {
    main: roseImages.red.path,
    colors: {
      red: roseImages.red.path,
      pink: roseImages.pink.path,
      white: roseImages.white.path,
      lavender: roseImages.lavender.path
    }
  },
  tulips: {
    main: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    colors: {
      red: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      pink: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      white: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      yellow: 'https://images.pexels.com/photos/42069/tulips-flowers-spring-yellow-42069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      purple: 'https://images.pexels.com/photos/1682316/pexels-photo-1682316.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      orange: 'https://images.pexels.com/photos/1390365/pexels-photo-1390365.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  },
  sunflowers: {
    main: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  lilies: {
    main: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  orchids: {
    main: 'https://images.pexels.com/photos/414181/pexels-photo-414181.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  peonies: {
    main: 'https://images.pexels.com/photos/2080393/pexels-photo-2080393.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  carnations: {
    main: 'https://images.pexels.com/photos/1458603/pexels-photo-1458603.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  daisies: {
    main: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  hydrangeas: {
    main: 'https://images.pexels.com/photos/1410225/pexels-photo-1410225.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  lavender: {
    main: 'https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  gerberaDaisies: {
    main: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  irises: {
    main: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  chrysanthemums: {
    main: 'https://images.pexels.com/photos/1301862/pexels-photo-1301862.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  daffodils: {
    main: 'https://images.pexels.com/photos/54320/pexels-photo-54320.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  poppies: {
    main: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  jasmine: {
    main: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  magnolias: {
    main: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  anemones: {
    main: 'https://images.pexels.com/photos/931175/pexels-photo-931175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  gardenias: {
    main: 'https://images.pexels.com/photos/1382195/pexels-photo-1382195.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  freesias: {
    main: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  ranunculus: {
    main: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  callaLilies: {
    main: 'https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  zinnias: {
    main: 'https://images.pexels.com/photos/1194036/pexels-photo-1194036.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  dahlias: {
    main: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  sweetPeas: {
    main: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  }
};

// Helper function to get image by product name
export const getProductImage = (productName: string, color?: string): string => {
  const key = productName.toLowerCase().replace(/\s+/g, '');
  const product = productImages[key as keyof typeof productImages];
  
  if (!product) return productImages.roses.main; // fallback
  
  if (color && 'colors' in product) {
    const colorKey = color.toLowerCase();
    return product.colors[colorKey as keyof typeof product.colors] || product.main;
  }
  
  return product.main;
};
