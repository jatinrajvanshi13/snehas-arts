import { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Original Paintings | Ananya Arts',
  description: 'Discover handcrafted original paintings that blend Indian artistic traditions with West Coast inspiration. Each canvas tells a story of cultural fusion.',
};

export default function PaintingsPage() {
  const paintings = getProductsByCategory('paintings');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-cream-100 via-saffron-50 to-cream-200 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="paint-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-gold-600" />
            </pattern>
            <rect width="100" height="100" fill="url(#paint-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-body text-gold-600 uppercase tracking-widest text-sm mb-4 block">
            Collection
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal-900 mb-6">
            Original Paintings
          </h1>
          <p className="max-w-2xl mx-auto font-body text-charcoal-600 text-lg leading-relaxed">
            Each painting is a handcrafted journey where the vibrant soul of India meets the
            serene landscapes of the Pacific Northwest. These are not mere artworks &mdash; they are
            windows into a world where two cultures dance in beautiful harmony.
          </p>

          {/* Elegant divider */}
          <div className="elegant-divider max-w-xs mx-auto mt-10">
            <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 bg-burgundy-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-cream-100">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-body text-sm">100% Handmade</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-body text-sm">7-10 Days Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-body text-sm">Certificate of Authenticity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintings.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Commission CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="ornate-border inline-block p-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Looking for Something Unique?
            </h2>
            <p className="font-body text-charcoal-600 mb-8 max-w-xl mx-auto">
              Commission a custom painting that tells your story. Whether inspired by a cherished
              memory, a beloved place, or a cultural celebration, let&apos;s create something meaningful together.
            </p>
            <a
              href="mailto:hello@ananyaarts.ca?subject=Custom%20Painting%20Commission"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white font-body font-medium rounded-full hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-300 shadow-lg"
            >
              Discuss a Custom Piece
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
