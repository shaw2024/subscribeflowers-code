

// Central image configuration for all flowers
// Uses local photo assets from the public directory for stable storefront images.

// Export BASE_URL for use in other modules
export const BASE_URL = import.meta.env.BASE_URL;

const localImage = (folder: string, filename: string) => `${BASE_URL}images/${folder}/${filename}`;
const remoteImage = (url: string) => url;
const roseImg = (filename: string) => localImage('roses', filename);
const flowerImg = (filename: string) => localImage('flowers', filename);
const tulipImg = (filename: string) => localImage('tulips', filename);

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

export interface OfflineRoseApiResponse {
  color: 'red';
  name: 'Red Rose';
  image: string;
  alt: string;
  seo: RoseImage['seo'];
}

// Rose images using local files
export const roseImages: Record<string, RoseImage> = {
  red: {
    path: roseImg('rose-red.jpg'),
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
  white: {
    path: roseImg('rose-white.jpg'),
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
  pink: {
    path: roseImg('rose-pink.jpg'),
    alt: 'Closed pale pink rosebud - flower subscription',
    seo: {
      title: 'Premium Pink Rosebuds - Fresh Flower Subscription',
      description:
        'Closed pink rosebuds symbolizing appreciation and joy. Subscribe for weekly delivery of fresh premium pink roses.',
      keywords: [
        'pink roses',
        'pink rosebuds',
        'appreciation flowers',
        'graceful roses',
        'rose subscription',
        'fresh pink roses'
      ]
    }
  },
};

export const getOfflineRedRose = (): OfflineRoseApiResponse => ({
  color: 'red',
  name: 'Red Rose',
  image: roseImages.red.path,
  alt: roseImages.red.alt,
  seo: roseImages.red.seo,
});

// Product images for Shop page
export const productImages = {
  roses: {
    main: roseImages.red.path,
    colors: {
      red: roseImages.red.path,
      white: roseImages.white.path,
      pink: roseImages.pink.path
    }
  },
  tulips: {
    main: tulipImg('tulips-vase.jpg'),
    colors: {
      red: tulipImg('tulip-red.jpg'),
      pink: tulipImg('tulip-pink.jpg'),
      white: tulipImg('tulip-white.jpg'),
      yellow: tulipImg('tulip-yellow.jpg'),
      purple: tulipImg('tulip-purple.jpg'),
      orange: tulipImg('tulip-orange.jpg')
    }
  },
  sunflowers: {
    main: flowerImg('sunflower-bloom.jpg')
  },
  lilies: {
    main: flowerImg('lilies-bouquet.jpg')
  },
  orchids: {
    main: flowerImg('orchids.jpg')
  },
  peonies: {
    main: flowerImg('peonies.jpg')
  },
  carnations: {
    main: flowerImg('carnations.jpg')
  },
  daisies: {
    main: remoteImage('https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80'),
    colors: {
      white: remoteImage('https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80'),
      yellow: remoteImage('https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80'),
      pink: remoteImage('https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80')
    }
  },
  hydrangeas: {
    main: flowerImg('hydrangeas.jpg')
  },
  lavender: {
    main: flowerImg('lavender.jpg')
  },
  gerberadaisies: {
    main: remoteImage('https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80')
  },
  chrysanthemums: {
    main: flowerImg('chrysanthemums.jpg')
  },
  daffodils: {
    main: flowerImg('daffodils.jpg')
  },
  poppies: {
    main: flowerImg('poppies.jpg')
  },
  jasmine: {
    main: flowerImg('jasmine.jpg')
  },
  magnolias: {
    main: flowerImg('magnolias.jpg')
  },
  anemones: {
    main: flowerImg('anemones.jpg')
  },
  gardenias: {
    main: flowerImg('gardenias.jpg')
  },
  freesias: {
    main: flowerImg('freesias.jpg')
  },
  ranunculus: {
    main: flowerImg('ranunculus.jpg')
  },
  callalilies: {
    main: flowerImg('calla-lilies.jpg')
  },
  zinnias: {
    main: flowerImg('zinnias.jpg')
  },
  dahlias: {
    main: flowerImg('dahlias.jpg')
  },
  sweetpeas: {
    main: flowerImg('sweet-peas.jpg')
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
