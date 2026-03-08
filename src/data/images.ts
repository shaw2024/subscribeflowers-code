

// Central image configuration for all flowers
// Using Unsplash API for high-quality flower images

// Export BASE_URL for use in other modules
export const BASE_URL = import.meta.env.BASE_URL;

// Helper function for local images
const localImg = (filename: string) => `${BASE_URL}images/roses/${filename}`;

// Unsplash image helper function for other flower types
const unsplashImg = (photoId: string, w = 400, h = 400) => 
  `https://images.unsplash.com/photo-${photoId}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

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

// Rose images using local files
export const roseImages: Record<string, RoseImage> = {
  red: {
    path: localImg('rose-red.png'),
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
    path: localImg('rose-pink.png'),
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
    path: localImg('rose-white.png'),
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
    path: localImg('rose-lavender.png'),
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

// Product images for Shop page - using Unsplash for high-quality flower images
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
    main: unsplashImg('1520763185298-1b434c919102'), // Red tulips
    colors: {
      red: unsplashImg('1520763185298-1b434c919102'),
      pink: unsplashImg('1457530378978-8bac673b8062'), // Pink tulips
      white: unsplashImg('1521334726092-b509a19597c6'), // White tulips
      yellow: unsplashImg('1459411552884-841db9b3cc2a'), // Yellow tulips
      purple: unsplashImg('1518882541-8c6b21d0f8b5'), // Purple tulips
      orange: unsplashImg('1585320806297-9794b3e4eeae') // Orange tulips
    }
  },
  sunflowers: {
    main: unsplashImg('1470509037663-253afd7f0f51') // Bright sunflowers
  },
  lilies: {
    main: unsplashImg('1455659817273-f96807779a8a') // Beautiful lilies
  },
  orchids: {
    main: unsplashImg('1509423350716-97f9360b4e09') // Purple orchids
  },
  peonies: {
    main: unsplashImg('1527061637736-80747f199cde') // Pink peonies
  },
  carnations: {
    main: unsplashImg('1563784462041-5c0e9d6e5a3e') // Pink carnations
  },
  daisies: {
    main: unsplashImg('1463699775698-f6a6dc4b6bbf') // White daisies
  },
  hydrangeas: {
    main: unsplashImg('1591697485071-8f8e9a5c8e8f') // Blue hydrangeas
  },
  lavender: {
    main: unsplashImg('1499002238440-d264edd596ec') // Lavender field
  },
  gerberaDaisies: {
    main: unsplashImg('1561181286-d2d98e5cfb66') // Colorful gerbera daisies
  },
  irises: {
    main: unsplashImg('1524386416013-92e301c22742') // Purple irises
  },
  chrysanthemums: {
    main: unsplashImg('1566401040434-c84d8f5f1b8c') // Yellow chrysanthemums
  },
  daffodils: {
    main: unsplashImg('1490750967868-88aa4486c946') // Yellow daffodils
  },
  poppies: {
    main: unsplashImg('1527061637736-7e0d1b1b6d5b') // Red poppies
  },
  jasmine: {
    main: unsplashImg('1589391886645-d51941baf7fb') // White jasmine
  },
  magnolias: {
    main: unsplashImg('1523542045154-b8ecebbc9c28') // Pink magnolias
  },
  anemones: {
    main: unsplashImg('1487530811176-3780de880c2d') // Purple anemones
  },
  gardenias: {
    main: unsplashImg('1559563362-c667ba5f5480') // White gardenias
  },
  freesias: {
    main: unsplashImg('1524386416013-92e301c22742') // Colorful freesias
  },
  ranunculus: {
    main: unsplashImg('1527061637736-80747f199cde') // Pink ranunculus
  },
  callaLilies: {
    main: unsplashImg('1509423350716-97f9360b4e09') // White calla lilies
  },
  zinnias: {
    main: unsplashImg('1561181286-d2d98e5cfb66') // Colorful zinnias
  },
  dahlias: {
    main: unsplashImg('1455659817273-f96807779a8a') // Pink dahlias
  },
  sweetPeas: {
    main: unsplashImg('1463699775698-f6a6dc4b6bbf') // Sweet peas
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
