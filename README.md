# Subscribe Flowers - Modern React App

A modern flower subscription service web application built with React, TypeScript, and Vite.

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **CSS3** - Modern styling with animations

## 📦 Installation

Install dependencies:

```bash
npm install
```

## 🏃 Running the Application

For Firebase authentication, customer profiles, and order storage, copy `.env.example` to `.env.local` and fill in the values from your Firebase project settings. The storefront can still be viewed without Firebase configuration, but account and checkout data features will be unavailable.

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 🏗️ Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── *.css
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Shop.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── *.css
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## ✨ Features

- 🌸 Beautiful, modern UI with gradient backgrounds
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions
- 🛒 Shopping cart functionality
- 📝 Contact form with validation
- 🔄 Client-side routing with React Router
- 💪 Type-safe with TypeScript
- ⚡ Fast development with Vite

## 🎯 Pages

- **Home** - Hero section, about info, subscription plans, and testimonials
- **Shop** - Product catalog with buy functionality
- **About** - Company information and mission
- **Contact** - Contact form and business information

## 🛠️ Development

Lint the code:

```bash
npm run lint
```

## 📝 License

This project is open source and available under the MIT License.
