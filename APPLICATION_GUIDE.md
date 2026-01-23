# Subscribe Flowers - Complete Application Guide

A modern flower subscription service web application built with React, TypeScript, and Vite.

---

## 🌸 Application Overview

**Subscribe Flowers** is a full-featured e-commerce platform for flower subscriptions. Customers can browse flowers, subscribe to delivery plans, manage their accounts, and checkout with a shopping cart.

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework with hooks |
| **TypeScript** | Type-safe development |
| **Vite** | Fast build tool & dev server |
| **React Router v6** | Client-side routing |
| **Firebase** | Backend services (authentication, database) |
| **CSS3** | Modern styling with animations |
| **Vitest** | Unit testing framework |

---

## 📱 Application Features & Pages

### 🏠 Home Page (`/`)
The landing page featuring:
- **Hero Section** - Welcome banner with animated floating flowers
- **Subscription Plans** - Three pricing tiers:
  - *Blossom Starter* - $549/year (50 flowers/quarter)
  - *Floral Enthusiast* - $899/year (100 flowers/quarter)
  - *Botanical Bliss* - $1,599/year (200 flowers/quarter)
- **Customer Testimonials** - Reviews from subscribers
- **Call-to-Action** - Navigate to subscription signup

### 🛍️ Shop Page (`/shop`)
Browse and explore flowers:
- **Product Grid** - 25 flower varieties including:
  - Roses, Tulips, Sunflowers, Lilies, Orchids
  - Peonies, Carnations, Daisies, Hydrangeas
  - Lavender, Gerbera Daisies, Irises, Chrysanthemums
  - Daffodils, Poppies, Jasmine, Magnolias
  - Anemones, Gardenias, Freesias, Ranunculus
  - Calla Lilies, Zinnias, Dahlias, Sweet Peas
- **Product Cards** - Image, name, and "View Flowers" button
- Click any product to view details

### 🌹 Product Detail Page (`/product/:id`)
Individual flower details:
- High-quality flower images
- Product description
- Pricing information
- Add to cart functionality
- Quantity selection

### 📋 Subscribe Page (`/subscribe`)
Subscription signup form with:
- **Plan Selection** - Choose from available subscription tiers
- **Personal Information** - First name, last name, email, phone
- **Shipping Address** - Street, city, state, ZIP code
- **Payment Details** - Card number, expiry, CVC, cardholder name
- **Form Validation** - Real-time error checking
- **Processing State** - Loading indicator during submission

### ✅ Subscription Success (`/subscribe/success`)
Confirmation page after successful subscription signup

### 🛒 Checkout Page (`/checkout`)
Complete purchase flow:
- Cart item summary
- Shipping information
- Payment processing
- Order confirmation

### 👤 Login Page (`/login`)
User authentication:
- Email and password login
- Demo account available: `demo@example.com` / `password123`
- Redirect to account page after login

### 📊 Account Page (`/account`)
Logged-in user dashboard:
- **Subscription Details** - Current plan and pricing
- **Usage Tracking** - Flowers used this quarter vs. limit
- **Shipping Address** - View and update delivery address
- **Account Management** - Logout functionality

### ℹ️ About Page (`/about`)
Company information and story

### 📞 Contact Page (`/contact`)
Contact form and business information

### ❓ FAQ Page (`/faq`)
Frequently asked questions and answers

---

## 🧩 Core Components

### Header (`src/components/Header.tsx`)
- Site logo and navigation
- Shopping cart icon with item count
- Responsive mobile menu

### Footer (`src/components/Footer.tsx`)
- Site links and navigation
- Social media links
- Copyright information

### Chatbot (`src/components/Chatbot.tsx`)
- **Floating Chat Button** - Toggle chat window
- **Message Interface** - User and bot messages
- **Typing Indicator** - Shows when bot is responding
- **AI Ready** - Prepared for AI integration

### Cart (`src/components/Cart.tsx`)
- Cart sidebar/modal
- Item list with quantities
- Price totals
- Proceed to checkout

### ScrollToTop (`src/components/ScrollToTop.tsx`)
- Automatically scrolls to top on page navigation

---

## 🔧 Context Providers (State Management)

### CartContext (`src/context/CartContext.tsx`)
Global shopping cart state:
- `cartItems` - Array of items in cart
- `addToCart()` - Add item with quantity
- `removeFromCart()` - Remove item by ID
- `updateQuantity()` - Change item quantity
- `clearCart()` - Empty the cart
- `getCartTotal()` - Calculate total price
- `getCartCount()` - Count total items
- **Persistence** - Saves to localStorage

### AuthContext (`src/context/AuthContext.tsx`)
User authentication and subscription state:
- `customer` - Current logged-in user data
- `isAuthenticated` - Login status
- `login()` - Authenticate user
- `logout()` - Sign out user
- `updateUsage()` - Track flower usage
- `getRemainingFlowers()` - Calculate available quota
- `canPurchase()` - Check if purchase is allowed
- `updateAddress()` - Update shipping address
- **Persistence** - Saves to localStorage

---

## 🖼️ Image Management

### Local Images (Bundled by Vite)
Located in `src/assets/images/`:
- Red rose images imported directly
- Optimized during build
- Cache busting via content hash

### CDN Images (Pexels)
External URLs for other flower varieties:
- Fast global CDN delivery
- No local storage needed

### Image Configuration
Centralized in `src/data/images.ts`:
- `RoseImageSet` interface for image metadata
- SEO optimization (alt text, titles, keywords)
- `getProductImage()` helper function

---

## 📁 Project Structure

```
subscribeflowers-code/
├── public/                 # Static assets
│   ├── 404.html           # 404 error page
│   ├── test-images.html   # Image testing page
│   └── images/            # Static images
├── src/
│   ├── assets/images/     # Bundled images (Vite)
│   ├── components/        # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Cart.tsx
│   │   ├── Chatbot.tsx
│   │   └── ScrollToTop.tsx
│   ├── context/           # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── CartContext.tsx
│   ├── data/              # Data and configuration
│   │   ├── images.ts
│   │   └── roseProducts.ts
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Subscribe.tsx
│   │   ├── SubscribeSuccess.tsx
│   │   ├── Checkout.tsx
│   │   ├── Login.tsx
│   │   ├── Account.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── FAQ.tsx
│   ├── test/              # Test utilities
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies & scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config
└── vitest.config.ts       # Test configuration
```

---

## 🏃 Running the Application

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Opens at `http://localhost:3000`

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Run Tests
```bash
npm test           # Watch mode
npm run test:run   # Single run
npm run test:ui    # UI mode
npm run test:coverage  # With coverage
```

### Linting
```bash
npm run lint
```

---

## 🔐 Demo Credentials

For testing the login functionality:
- **Email:** `demo@example.com`
- **Password:** `password123`

---

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:ui` | Open Vitest UI |
| `npm run test:coverage` | Run tests with coverage |

---

## 🌐 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page with plans |
| `/shop` | Shop | Browse all flowers |
| `/product/:id` | ProductDetail | Individual flower page |
| `/checkout` | Checkout | Purchase flow |
| `/subscribe` | Subscribe | Subscription signup |
| `/subscribe/success` | SubscribeSuccess | Confirmation page |
| `/login` | Login | User authentication |
| `/account` | Account | User dashboard |
| `/about` | About | Company info |
| `/contact` | Contact | Contact form |
| `/faq` | FAQ | Help & questions |
| `*` | Home | Fallback route |

---

## 🎨 Styling

Each component and page has its own CSS file:
- `Component.css` for component-specific styles
- `Page.css` for page-specific styles
- `index.css` for global styles
- `App.css` for app-level layout

---

## 🔮 Future Enhancements

- [ ] AI-powered chatbot integration
- [ ] Real payment processing (Stripe)
- [ ] Firebase authentication
- [ ] Order history tracking
- [ ] Email notifications
- [ ] Admin dashboard
