'use client';

import Image from 'next/image';
import { Product, storeInfo } from '@/lib/data';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const handleOrderClick = () => {
    const subject = encodeURIComponent(`Order Inquiry: ${product.name}`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in purchasing:\n\n` +
      `Product: ${product.name}\n` +
      `Price: $${product.price} ${product.currency}\n` +
      `Quantity: ${product.defaultQuantity}\n\n` +
      `Please let me know the next steps to complete my order.\n\n` +
      `Thank you!`
    );
    window.location.href = `mailto:${storeInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <article
      className="group card-hover bg-white rounded-2xl overflow-hidden premium-shadow relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Subtle dark overlay on hover for button visibility */}
        <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-500" />

        {/* Featured badge - now with gradient */}
        {product.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-saffron-500 to-burgundy-500 backdrop-blur-sm text-white text-xs font-body font-medium rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href={`/${product.category}/${product.id}`}
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-6 py-2.5 bg-gradient-to-r from-white/95 to-cream-100/95 backdrop-blur-sm text-charcoal-900 font-body text-sm font-medium rounded-full hover:from-white hover:to-white shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className={`text-xs font-body uppercase tracking-widest font-semibold ${
            product.category === 'paintings'
              ? 'gradient-text-sunset'
              : 'gradient-text-vibrant'
          }`}>
            {product.category === 'paintings' ? 'Original Painting' : 'Handcrafted Jewelry'}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold text-charcoal-900 mb-2 group-hover:gradient-text-vibrant transition-all duration-300">
          {product.name}
        </h3>

        <p className="font-body text-sm text-charcoal-600 line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Details */}
        <div className="space-y-2 mb-5">
          {product.dimensions && (
            <div className="flex items-center gap-2 text-xs text-charcoal-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span className="font-body">{product.dimensions}</span>
            </div>
          )}
          {product.materials && (
            <div className="flex items-center gap-2 text-xs text-charcoal-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span className="font-body">{product.materials}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-xs text-charcoal-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-body">{product.deliveryTime}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-cream-200">
          <div>
            <span className="font-display text-2xl font-semibold gradient-text-celebration">
              ${product.price}
            </span>
            <span className="text-sm text-charcoal-500 ml-1">{product.currency}</span>
          </div>

          <button
            onClick={handleOrderClick}
            className={`px-5 py-2.5 text-white font-body text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 ${
              product.category === 'paintings'
                ? 'bg-gradient-to-r from-saffron-500 via-burgundy-500 to-burgundy-600 hover:from-saffron-600 hover:via-burgundy-600 hover:to-burgundy-700'
                : 'bg-gradient-to-r from-forest-500 via-forest-600 to-gold-500 hover:from-forest-600 hover:via-forest-700 hover:to-gold-600'
            }`}
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
}
