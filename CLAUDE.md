# Sneha's Arts - Project Documentation

> **START HERE:** For session continuity and changelog, see `PROJECT_HISTORY.md` first. That file tracks all changes across sessions and must be updated whenever code is pushed to production.

## Project Overview

**Sneha's Arts** is a premium online art store built for showcasing and selling handcrafted paintings and jewelry. The store blends Indian artistic heritage with Vancouver's West Coast aesthetic, creating a unique cultural fusion experience.

**Live Store**: Will be deployed on Vercel
**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS

## Design Philosophy

- **Premium & Luxury**: Elegant typography, subtle animations, gold accents
- **Cultural Fusion**: Indian roots (Pichwai art, polymer clay jewelry) + Vancouver vibes
- **Fast Performance**: Static site generation, optimized images
- **Mobile Responsive**: Works beautifully on all devices

## Color Palette (defined in `tailwind.config.ts`)

- **Saffron**: Warm Indian orange tones
- **Burgundy**: Deep traditional Indian maroon
- **Forest**: Vancouver-inspired greens
- **Gold**: Accent color for premium feel
- **Cream**: Elegant off-white backgrounds
- **Charcoal**: Text and dark elements

## Typography

- **Display Font**: Cormorant Garamond (headings)
- **Accent Font**: Playfair Display (artistic elements)
- **Body Font**: Raleway (clean, readable body text)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles, custom CSS classes
│   ├── about/
│   │   └── page.tsx        # About/Story page
│   ├── paintings/
│   │   ├── page.tsx        # Paintings category listing
│   │   └── [id]/
│   │       └── page.tsx    # Individual painting detail
│   └── earrings/
│       ├── page.tsx        # Earrings category listing
│       └── [id]/
│           └── page.tsx    # Individual earring detail
├── components/
│   ├── Header.tsx          # Navigation with logo, links, mobile menu
│   ├── Footer.tsx          # Footer with contact, links, branding
│   ├── ProductCard.tsx     # Product card for listings (image, price, order button)
│   └── ProductDetail.tsx   # Full product page component
├── lib/
│   └── data.ts             # Product data, store info, helper functions
public/
├── paintings/              # Painting images
│   ├── cow-yellow.jpg
│   ├── girl-coffee.jpg
│   ├── auto-rik.jpg
│   └── painting-girl.jpg   # Category banner image
└── earrings/               # Earring images
    ├── triangle-clay.jpg
    ├── blue-semi.jpg
    ├── three-leg.jpg
    └── handcraft-girl.jpg  # Category banner image
```

## Key Files

### `src/lib/data.ts`
Central data file containing:
- `Product` interface definition
- `products` array with all paintings and earrings
- `storeInfo` object (name, email, tagline, location)
- Helper functions: `getProductsByCategory()`, `getFeaturedProducts()`, `getProductById()`

### Store Configuration
To update store details, edit `storeInfo` in `src/lib/data.ts`:
```typescript
export const storeInfo = {
  name: "Sneha's Arts",
  tagline: 'Where Heritage Meets the Pacific',
  email: 'hello@snehasarts.ca',
  location: 'Vancouver, British Columbia',
  description: '...',
};
```

## Current Products

### Paintings (3 items)
1. **Sacred Lotus Cows** - Pichwai-style art (`cow-yellow.jpg`) - $1,200 CAD
2. **Cozy Tunes & Morning Brew** - Retro vibes canvas (`girl-coffee.jpg`) - $950 CAD
3. **Urban Rhythms** - Auto-rickshaw line drawing (`auto-rik.jpg`) - $850 CAD

### Earrings (3 items)
1. **Blushing Petal** - Pink polymer clay (`triangle-clay.jpg`) - $145 CAD
2. **Midnight Meadow** - Blue polymer clay (`blue-semi.jpg`) - $125 CAD
3. **Matte Burgundy Geometric** - Wine-red clay dangles (`three-leg.jpg`) - $195 CAD

## Features

### Order System
- No payment integration (by design)
- "Order Now" button opens email client with pre-filled order details
- Email includes: product name, price, quantity, delivery time

### Product Properties
Each product has:
- `id`: Unique identifier
- `name`: Product title
- `description`: Detailed description
- `price`: Number in CAD
- `category`: 'paintings' | 'earrings'
- `image`: Path to image in public folder
- `deliveryTime`: e.g., "7-10 business days"
- `defaultQuantity`: Starting quantity (usually 1)
- `inStock`: Boolean
- `featured`: Boolean (shows on homepage)
- `dimensions`: Optional, for paintings
- `materials`: Optional, materials used

## Adding New Products

1. Add image to `public/paintings/` or `public/earrings/`
2. Add product object to `products` array in `src/lib/data.ts`:

```typescript
{
  id: 'painting-4',
  name: 'New Painting Name',
  description: 'Description here...',
  price: 1000,
  currency: 'CAD',
  category: 'paintings',
  image: '/paintings/new-image.jpg',
  deliveryTime: '7-10 business days',
  defaultQuantity: 1,
  inStock: true,
  featured: true, // Set to true to show on homepage
  dimensions: '24" x 36"',
  materials: 'Acrylic on canvas',
},
```

## Custom CSS Classes (in `globals.css`)

- `.ornate-border` - Decorative corner borders (Indian-inspired)
- `.gold-gradient-text` - Gold gradient text effect
- `.premium-shadow` - Elegant box shadow
- `.premium-shadow-hover` - Enhanced shadow on hover
- `.elegant-divider` - Centered divider with decorative element
- `.card-hover` - Smooth lift animation on hover

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment Notes

- Ready for Vercel deployment
- All images should be optimized before upload
- Static generation enabled for fast performance
- No environment variables required

## Future Enhancements (Not Yet Implemented)

- Payment integration (Stripe)
- Shopping cart functionality
- Customer reviews
- Instagram feed integration
- Newsletter signup
- Search functionality
- Product filtering/sorting

## Contact

- Store Email: hello@snehasarts.ca
- Location: Vancouver, British Columbia
