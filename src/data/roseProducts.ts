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
  image: string;
  altText: string;
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
    image: roseImages.red.path,
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
    name: 'Closed Pink Rose',
    color: 'Pink',
    price: 44.99,
    description: 'Closed pink rosebuds symbolizing appreciation, joy, and admiration',
    longDescription: 'Our elegant pink roses showcase soft, romantic hues that convey admiration and appreciation. Each bloom is selected for its perfect petal formation and graceful appearance. Ideal for expressing gratitude, celebrating new beginnings, or brightening someone\'s day.',
    category: 'Roses',
    image: roseImages.pink.path,
    altText: roseImages.pink.alt,
    seo: {
      title: roseImages.pink.seo.title,
      metaDescription: roseImages.pink.seo.description,
      keywords: roseImages.pink.seo.keywords,
      slug: 'closed-pink-rose-subscription',
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
    symbolism: 'Appreciation, Joy, Admiration',
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
    image: roseImages.white.path,
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
    id: 'rose-lavender-004',
    name: 'Enchanting Lavender Rose',
    color: 'Lavender',
    price: 56.99,
    description: 'Enchanting lavender roses symbolizing love at first sight',
    longDescription: 'Our enchanting lavender roses feature a captivating purple hue that speaks to the mystery and magic of love at first sight. Each bloom is carefully selected for its unique color and perfect form. Ideal for expressing enchantment, wonder, or making a memorable impression.',
    category: 'Roses',
    image: roseImages.lavender.path,
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
    symbolism: 'Enchantment, Mystery, Love at First Sight',
    occasions: ['First Date', 'Enchantment', 'Wonder', 'Unique Expressions', 'Special Occasions'],
  },
];

// Helper function to get a rose product by color
export const getRoseByColor = (color: string): RoseProduct | undefined => {
  return roseProducts.find(
    (product) => product.color.toLowerCase() === color.toLowerCase()
  );
};

// Helper function to get all available rose colors
export const getAvailableColors = (): string[] => {
  return roseProducts.map((product) => product.color);
};

// Generate SEO-friendly product listing for all roses
export const generateProductListingSEO = () => {
  return roseProducts.map((product) => ({
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.id,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: product.availability.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
    category: product.category,
  }));
};
