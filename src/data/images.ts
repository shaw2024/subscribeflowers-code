// Central image configuration for all flowers
// To use custom images, upload to /public folder and reference as '/filename.jpg'

// Rose image metadata with SEO optimization
export interface RoseImageSet {
  closed: string;
  open: string;
  stem: string;
  alt: {
    closed: string;
    open: string;
    stem: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const roseImages: Record<string, RoseImageSet> = {
  red: {
    closed: '/images/roses/rose-red-closed.png',
    open: '/images/roses/rose-red-open.png',
    stem: '/images/roses/rose-red-stem.png',
    alt: {
      closed: 'Red rose tight bud - premium quality flower subscription',
      open: 'Red rose in full bloom - fresh flower delivery',
      stem: 'Red rose with stem and leaves - luxury floral arrangement'
    },
    seo: {
      title: 'Premium Red Roses - Fresh Flower Subscription',
      description: 'Classic red roses symbolizing love and passion. Subscribe for weekly fresh flower delivery of premium long-stem red roses.',
      keywords: ['red roses', 'valentine roses', 'romantic flowers', 'rose subscription', 'fresh red roses']
    }
  },
  pink: {
    closed: '/images/roses/rose-pink-closed.png',
    open: '/images/roses/rose-pink-open.png',
    stem: '/images/roses/rose-pink-stem.png',
    alt: {
      closed: 'Pink rose tight bud - elegant flower subscription',
      open: 'Pink rose in full bloom - premium flower delivery',
      stem: 'Pink rose with stem and leaves - graceful floral arrangement'
    },
    seo: {
      title: 'Premium Pink Roses - Elegant Flower Subscription',
      description: 'Delicate pink roses symbolizing grace and admiration. Subscribe for weekly delivery of fresh premium pink roses.',
      keywords: ['pink roses', 'elegant flowers', 'graceful roses', 'rose subscription', 'fresh pink roses']
    }
  },
  white: {
    closed: '/images/roses/rose-white-closed.png',
    open: '/images/roses/rose-white-open.png',
    stem: '/images/roses/rose-white-stem.png',
    alt: {
      closed: 'White rose tight bud - pure flower subscription',
      open: 'White rose in full bloom - pristine flower delivery',
      stem: 'White rose with stem and leaves - elegant floral arrangement'
    },
    seo: {
      title: 'Premium White Roses - Pure Flower Subscription',
      description: 'Pristine white roses symbolizing purity and innocence. Subscribe for weekly delivery of fresh premium white roses.',
      keywords: ['white roses', 'wedding flowers', 'pure roses', 'rose subscription', 'fresh white roses']
    }
  },
  yellow: {
    closed: '/images/roses/rose-yellow-closed.png',
    open: '/images/roses/rose-yellow-open.png',
    stem: '/images/roses/rose-yellow-stem.png',
    alt: {
      closed: 'Yellow rose tight bud - cheerful flower subscription',
      open: 'Yellow rose in full bloom - bright flower delivery',
      stem: 'Yellow rose with stem and leaves - vibrant floral arrangement'
    },
    seo: {
      title: 'Premium Yellow Roses - Cheerful Flower Subscription',
      description: 'Bright yellow roses symbolizing friendship and joy. Subscribe for weekly delivery of fresh premium yellow roses.',
      keywords: ['yellow roses', 'friendship flowers', 'cheerful roses', 'rose subscription', 'fresh yellow roses']
    }
  },
  orange: {
    closed: '/images/roses/rose-orange-closed.png',
    open: '/images/roses/rose-orange-open.png',
    stem: '/images/roses/rose-orange-stem.png',
    alt: {
      closed: 'Orange rose tight bud - vibrant flower subscription',
      open: 'Orange rose in full bloom - energetic flower delivery',
      stem: 'Orange rose with stem and leaves - bold floral arrangement'
    },
    seo: {
      title: 'Premium Orange Roses - Vibrant Flower Subscription',
      description: 'Bold orange roses symbolizing enthusiasm and desire. Subscribe for weekly delivery of fresh premium orange roses.',
      keywords: ['orange roses', 'vibrant flowers', 'bold roses', 'rose subscription', 'fresh orange roses']
    }
  },
  lavender: {
    closed: '/images/roses/rose-lavender-closed.png',
    open: '/images/roses/rose-lavender-open.png',
    stem: '/images/roses/rose-lavender-stem.png',
    alt: {
      closed: 'Lavender rose tight bud - enchanting flower subscription',
      open: 'Lavender rose in full bloom - magical flower delivery',
      stem: 'Lavender rose with stem and leaves - mystical floral arrangement'
    },
    seo: {
      title: 'Premium Lavender Roses - Enchanting Flower Subscription',
      description: 'Enchanting lavender roses symbolizing love at first sight. Subscribe for weekly delivery of fresh premium lavender roses.',
      keywords: ['lavender roses', 'purple roses', 'enchanting flowers', 'rose subscription', 'fresh lavender roses']
    }
  }
};

export const productImages = {
  roses: {
    main: '/images/roses/rose-red-open.png',
    colors: {
      red: '/images/roses/rose-red-open.png',
      pink: '/images/roses/rose-pink-open.png',
      white: '/images/roses/rose-white-open.png',
      yellow: '/images/roses/rose-yellow-open.png',
      orange: '/images/roses/rose-orange-open.png',
      lavender: '/images/roses/rose-lavender-open.png'
    }
  },
  tulips: {
    main: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    main: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  lilies: {
    main: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  orchids: {
    main: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  peonies: {
    main: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  carnations: {
    main: 'https://images.pexels.com/photos/1458603/pexels-photo-1458603.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  daisies: {
    main: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  hydrangeas: {
    main: 'https://images.pexels.com/photos/1410225/pexels-photo-1410225.jpeg?auto=compress&cs=tinysrgb&w=400'
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
    main: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  magnolias: {
    main: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  anemones: {
    main: 'https://images.pexels.com/photos/931175/pexels-photo-931175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  gardenias: {
    main: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  freesias: {
    main: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  ranunculus: {
    main: 'https://images.pexels.com/photos/931175/pexels-photo-931175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  callaLilies: {
    main: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  zinnias: {
    main: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  dahlias: {
    main: 'https://images.pexels.com/photos/1301862/pexels-photo-1301862.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  sweetPeas: {
    main: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  }
}

// Helper function to get image by product name
export const getProductImage = (productName: string, color?: string): string => {
  const key = productName.toLowerCase().replace(/\s+/g, '')
  const product = productImages[key as keyof typeof productImages]
  
  if (!product) return productImages.roses.main // fallback
  
  if (color && 'colors' in product) {
    const colorKey = color.toLowerCase()
    return product.colors[colorKey as keyof typeof product.colors] || product.main
  }
  
  return product.main
}
