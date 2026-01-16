'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, storeInfo } from '@/lib/data';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(product.defaultQuantity);

  const handleOrderClick = () => {
    const subject = encodeURIComponent(`Order Inquiry: ${product.name}`);
    const body = encodeURIComponent(
      `Hello,\n\nI would like to place an order:\n\n` +
      `Product: ${product.name}\n` +
      `Price: $${product.price} ${product.currency}\n` +
      `Quantity: ${quantity}\n` +
      `Total: $${product.price * quantity} ${product.currency}\n\n` +
      `Estimated Delivery: ${product.deliveryTime}\n\n` +
      `Please let me know the next steps to complete my order.\n\n` +
      `Thank you!`
    );
    window.location.href = `mailto:${storeInfo.email}?subject=${subject}&body=${body}`;
  };

  const categoryPath = product.category === 'paintings' ? '/paintings' : '/earrings';
  const categoryName = product.category === 'paintings' ? 'Original Paintings' : 'Handcrafted Earrings';

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <ol className="flex items-center gap-2 text-sm font-body text-charcoal-500">
          <li>
            <Link href="/" className="hover:text-gold-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <Link href={categoryPath} className="hover:text-gold-600 transition-colors">
              {categoryName}
            </Link>
          </li>
          <li>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="text-charcoal-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="ornate-border">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Featured badge */}
                {product.featured && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-2 bg-gold-500/90 backdrop-blur-sm text-white text-sm font-body font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="font-body text-gold-600 uppercase tracking-widest text-sm mb-3">
              {categoryName}
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              {product.name}
            </h1>

            <p className="font-body text-charcoal-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Product Info */}
            <div className="space-y-4 mb-8 pb-8 border-b border-cream-300">
              {product.dimensions && (
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span className="font-body text-charcoal-700">
                    <span className="text-charcoal-500">Dimensions:</span> {product.dimensions}
                  </span>
                </div>
              )}

              {product.materials && (
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span className="font-body text-charcoal-700">
                    <span className="text-charcoal-500">Materials:</span> {product.materials}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-body text-charcoal-700">
                  <span className="text-charcoal-500">Delivery:</span> {product.deliveryTime}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-body text-charcoal-700">
                  <span className={product.inStock ? 'text-forest-600' : 'text-burgundy-600'}>
                    {product.inStock ? 'In Stock' : 'Made to Order'}
                  </span>
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <span className="font-display text-4xl font-semibold text-charcoal-900">
                ${product.price}
              </span>
              <span className="text-lg text-charcoal-500 ml-2">{product.currency}</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6 mb-8">
              <span className="font-body text-charcoal-700">Quantity:</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-cream-300 flex items-center justify-center text-charcoal-600 hover:border-gold-400 hover:text-gold-600 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="font-display text-xl font-semibold text-charcoal-900 w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-cream-300 flex items-center justify-center text-charcoal-600 hover:border-gold-400 hover:text-gold-600 transition-colors"
                  aria-label="Increase quantity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderClick}
              className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white font-body text-lg font-medium rounded-full hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Place Order via Email
            </button>

            <p className="mt-4 font-body text-sm text-charcoal-500">
              Click to send an order inquiry. We&apos;ll respond within 24 hours with payment details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
