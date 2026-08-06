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
    id: 'rose-pink-002',
    name: 'Closed Pink Rose',
    color: 'Pink',
    price: 52.99,
    description: 'Closed pink rosebuds symbolizing appreciation, joy, and admiration',
    longDescription: 'Our closed pink rosebuds bring a soft, joyful warmth to every arrangement. Each stem is selected at the bud stage so its refined color can gradually unfold, making it a thoughtful way to share gratitude, celebrate a friendship, or brighten an ordinary day.',
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
    occasions: ['Birthdays', 'Friendship', 'Thank You', 'Congratulations', 'Just Because'],
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
