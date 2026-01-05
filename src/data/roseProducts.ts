// Product data structure for MongoDB/JSON seed data
// Import this to generate product listings with full SEO metadata

import { roseImages } from './images';

export interface RoseProduct {
  id: string;
  name: string;
  color: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  images: {
    closed: string;
    open: string;
    stem: string;
  };
  altText: {
    closed: string;
    open: string;
    stem: string;
  };
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
    slug: string;
  };
  availability: {
    inStock: boolean;
    subscriptionOnly: boolean;
  };
  care: {
    waterFrequency: string;
    sunlight: string;
    lifespan: string;
  };
  symbolism: string;
  occasions: string[];
}

// Generate product data from rose images
export const roseProducts: RoseProduct[] = [
  {
    id: 'rose-red-001',
    name: 'Classic Red Rose',
    color: 'Red',
    price: 49.99,
    description: 'Premium long-stem red roses symbolizing love and passion',
    longDescription: 'Our classic red roses are hand-selected for their vibrant color and perfect form. Each stem is carefully cultivated to ensure maximum vase life and beauty. Perfect for expressing deep love, celebrating anniversaries, or making romantic gestures.',
    category: 'Roses',
    images: {
      closed: roseImages.red.closed,
      open: roseImages.red.open,
      stem: roseImages.red.stem,
    },
    altText: roseImages.red.alt,
    seo: {
      title: roseImages.red.seo.title,
      metaDescription: roseImages.red.seo.description,
      keywords: roseImages.red.seo.keywords,
      slug: 'classic-red-rose-subscription',
    },
    availability: {
      inStock: true,
      subscriptionOnly: false,
    },
    care: {
      waterFrequency: 'Change water every 2-3 days',
      sunlight: 'Indirect sunlight',
      lifespan: '7-14 days with proper care',
    },
    symbolism: 'Love, Romance, Passion',
    occasions: ['Valentine\'s Day', 'Anniversary', 'Romantic Gestures', 'Apologies', 'Weddings'],
  },
  {
    id: 'rose-pink-002',
    name: 'Elegant Pink Rose',
    color: 'Pink',
    price: 44.99,
    description: 'Delicate pink roses symbolizing grace and admiration',
    longDescription: 'Our elegant pink roses showcase soft, romantic hues that convey admiration and appreciation. Each bloom is selected for its perfect petal formation and graceful appearance. Ideal for expressing gratitude, celebrating new beginnings, or brightening someone\'s day.',
    category: 'Roses',
    images: {
      closed: roseImages.pink.closed,
      open: roseImages.pink.open,
      stem: roseImages.pink.stem,
    },
    altText: roseImages.pink.alt,
    seo: {
      title: roseImages.pink.seo.title,
      metaDescription: roseImages.pink.seo.description,
      keywords: roseImages.pink.seo.keywords,
      slug: 'elegant-pink-rose-subscription',
    },
    availability: {
      inStock: true,
      subscriptionOnly: false,
    },
    care: {
      waterFrequency: 'Change water every 2-3 days',
      sunlight: 'Indirect sunlight',
      lifespan: '7-14 days with proper care',
    },
    symbolism: 'Grace, Admiration, Joy',
    occasions: ['Mother\'s Day', 'Thank You', 'New Baby', 'Get Well', 'Just Because'],
  },
  {
    id: 'rose-white-003',
    name: 'Pure White Rose',
    color: 'White',
    price: 54.99,
    description: 'Pristine white roses symbolizing purity and innocence',
    longDescription: 'Our pure white roses embody elegance and sophistication with their pristine petals and timeless beauty. Each stem represents purity, new beginnings, and reverence. Perfect for weddings, sympathy arrangements, or creating a serene atmosphere.',
    category: 'Roses',
    images: {
      closed: roseImages.white.closed,
      open: roseImages.white.open,
      stem: roseImages.white.stem,
    },
    altText: roseImages.white.alt,
    seo: {
      title: roseImages.white.seo.title,
      metaDescription: roseImages.white.seo.description,
      keywords: roseImages.white.seo.keywords,
      slug: 'pure-white-rose-subscription',
    },
    availability: {
      inStock: true,
      subscriptionOnly: false,
    },
    care: {
      waterFrequency: 'Change water every 2-3 days',
      sunlight: 'Indirect sunlight',
      lifespan: '7-14 days with proper care',
    },
    symbolism: 'Purity, Innocence, New Beginnings',
    occasions: ['Weddings', 'Sympathy', 'Baptisms', 'Graduations', 'Remembrance'],
  },
  {
    id: 'rose-yellow-004',
    name: 'Cheerful Yellow Rose',
    color: 'Yellow',
    price: 42.99,
    description: 'Bright yellow roses symbolizing friendship and joy',
    longDescription: 'Our cheerful yellow roses radiate warmth and happiness with their sunny disposition. Each bloom is carefully selected to bring joy and celebrate friendship. Excellent for uplifting spirits, celebrating achievements, or expressing platonic affection.',
    category: 'Roses',
    images: {
      closed: roseImages.yellow.closed,
      open: roseImages.yellow.open,
      stem: roseImages.yellow.stem,
    },
    altText: roseImages.yellow.alt,
    seo: {
      title: roseImages.yellow.seo.title,
      metaDescription: roseImages.yellow.seo.description,
      keywords: roseImages.yellow.seo.keywords,
      slug: 'cheerful-yellow-rose-subscription',
    },
    availability: {
      inStock: true,
      subscriptionOnly: false,
    },
    care: {
      waterFrequency: 'Change water every 2-3 days',
      sunlight: 'Indirect sunlight',
      lifespan: '7-14 days with proper care',
    },
    symbolism: 'Friendship, Joy, New Beginnings',
    occasions: ['Friendship Day', 'Congratulations', 'Get Well', 'Housewarming', 'Thank You'],
  },
  {
    id: 'rose-orange-005',
    name: 'Vibrant Orange Rose',
    color: 'Orange',
    price: 46.99,
    description: 'Bold orange roses symbolizing enthusiasm and desire',
    longDescription: 'Our vibrant orange roses burst with energy and passion, blending the enthusiasm of yellow with the intensity of red. Each bloom represents excitement and desire, making them perfect for expressing passionate feelings or celebrating bold achievements.',
    category: 'Roses',
    images: {
      closed: roseImages.orange.closed,
      open: roseImages.orange.open,
      stem: roseImages.orange.stem,
    },
    altText: roseImages.orange.alt,
    seo: {
      title: roseImages.orange.seo.title,
      metaDescription: roseImages.orange.seo.description,
      keywords: roseImages.orange.seo.keywords,
      slug: 'vibrant-orange-rose-subscription',
    },
    availability: {
      inStock: true,
      subscriptionOnly: false,
    },
    care: {
      waterFrequency: 'Change water every 2-3 days',
      sunlight: 'Indirect sunlight',
      lifespan: '7-14 days with proper care',
    },
    symbolism: 'Enthusiasm, Passion, Energy',
    occasions: ['Congratulations', 'Promotions', 'Graduations', 'Bold Gestures', 'Fall Celebrations'],
  },
  {
    id: 'rose-lavender-006',
    name: 'Enchanting Lavender Rose',
    color: 'Lavender',
    price: 59.99,
    description: 'Enchanting lavender roses symbolizing love at first sight',
    longDescription: 'Our enchanting lavender roses captivate with their unique purple hues and mystical beauty. Each rare bloom represents enchantment, wonder, and love at first sight. Perfect for expressing magical moments, unique love, or creating an ethereal atmosphere.',
    category: 'Roses',
    images: {
      closed: roseImages.lavender.closed,
      open: roseImages.lavender.open,
      stem: roseImages.lavender.stem,
    },
    altText: roseImages.lavender.alt,
    seo: {
      title: roseImages.lavender.seo.title,
      metaDescription: roseImages.lavender.seo.description,
      keywords: roseImages.lavender.seo.keywords,
      slug: 'enchanting-lavender-rose-subscription',
    },
    availability: {
      inStock: true,
      subscriptionOnly: false,
    },
    care: {
      waterFrequency: 'Change water every 2-3 days',
      sunlight: 'Indirect sunlight',
      lifespan: '7-14 days with proper care',
    },
    symbolism: 'Enchantment, Wonder, Love at First Sight',
    occasions: ['First Date', 'Unique Expressions', 'Enchanted Events', 'Mystical Celebrations', 'Rare Occasions'],
  },
];

// Helper function to get product by color
export const getRoseProductByColor = (color: string): RoseProduct | undefined => {
  return roseProducts.find(p => p.color.toLowerCase() === color.toLowerCase());
};

// Helper function to get all product slugs (for SEO/routing)
export const getAllRoseSlugs = (): string[] => {
  return roseProducts.map(p => p.seo.slug);
};

// MongoDB seed data generator
export const generateMongoDBSeed = () => {
  return {
    collection: 'products',
    data: roseProducts.map(product => ({
      ...product,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      featured: product.color === 'Red', // Feature red roses
      ratings: {
        average: 4.8,
        count: 0,
      },
      inventory: {
        quantity: 100,
        lowStockThreshold: 20,
      },
    })),
  };
};

// Generate sitemap URLs
export const generateSitemapUrls = (baseUrl: string = 'https://subscribeflowers.com') => {
  return roseProducts.map(product => ({
    url: `${baseUrl}/products/${product.seo.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
    images: [
      {
        url: `${baseUrl}${product.images.open}`,
        title: product.seo.title,
        caption: product.description,
      },
    ],
  }));
};
