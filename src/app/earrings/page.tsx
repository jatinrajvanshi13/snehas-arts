import { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Handcrafted Earrings | Ananya Arts',
  description: 'Discover artisan jewelry inspired by Indian heritage. Each pair of earrings is handcrafted with traditional techniques and modern elegance.',
};

export default function EarringsPage() {
  const earrings = getProductsByCategory('earrings');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-cream-100 via-gold-50 to-cream-200 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="jewelry-pattern" patternUnits="userSpaceOnUse" width="15" height="15">
              <path d="M7.5 0L15 7.5 7.5 15 0 7.5z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-600" />
            </pattern>
            <rect width="100" height="100" fill="url(#jewelry-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-body text-gold-600 uppercase tracking-widest text-sm mb-4 block">
            Collection
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal-900 mb-6">
            Handcrafted Earrings
          </h1>
          <p className="max-w-2xl mx-auto font-body text-charcoal-600 text-lg leading-relaxed">
            Wearable art inspired by centuries of Indian jewelry-making tradition. Each pair is
            thoughtfully designed and meticulously crafted to bring elegance, culture, and
            individuality to your everyday moments.
          </p>

          {/* Elegant divider */}
          <div className="elegant-divider max-w-xs mx-auto mt-10">
            <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 bg-forest-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-cream-100">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-body text-sm">Handcrafted with Care</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-body text-sm">3-5 Days Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="font-body text-sm">Beautiful Gift Packaging</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {earrings.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Care Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-charcoal-900 mb-4">
              Jewelry Care
            </h2>
            <p className="font-body text-charcoal-600">
              Keep your pieces beautiful for years to come
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal-900 mb-2">Store Properly</h3>
              <p className="font-body text-sm text-charcoal-600">
                Keep in a cool, dry place away from direct sunlight. Use the provided pouch.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal-900 mb-2">Avoid Chemicals</h3>
              <p className="font-body text-sm text-charcoal-600">
                Remove before swimming, showering, or applying perfumes and lotions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-burgundy-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-burgundy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal-900 mb-2">Clean Gently</h3>
              <p className="font-body text-sm text-charcoal-600">
                Wipe with a soft cloth after wearing. Avoid harsh cleaning agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Commission CTA */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="ornate-border inline-block p-12 bg-white rounded-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Design Your Own Piece
            </h2>
            <p className="font-body text-charcoal-600 mb-8 max-w-xl mx-auto">
              Have a special design in mind? We love creating custom pieces for weddings, gifts,
              or simply to bring your unique vision to life.
            </p>
            <a
              href="mailto:hello@ananyaarts.ca?subject=Custom%20Earrings%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-forest-600 to-forest-700 text-white font-body font-medium rounded-full hover:from-forest-700 hover:to-forest-800 transition-all duration-300 shadow-lg"
            >
              Start a Custom Order
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
