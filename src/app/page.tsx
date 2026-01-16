import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts, storeInfo } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200">
          {/* Mandala-inspired decorative circles */}
          <div className="absolute top-20 right-20 w-96 h-96 opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-600" />
              <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-600" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-600" />
              <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-600" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                <line
                  key={angle}
                  x1="100"
                  y1="5"
                  x2="100"
                  y2="195"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-gold-600"
                  transform={`rotate(${angle} 100 100)`}
                />
              ))}
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 w-72 h-72 opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {[0, 45, 90, 135].map((angle) => (
                <ellipse
                  key={angle}
                  cx="100"
                  cy="40"
                  rx="15"
                  ry="35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-burgundy-600"
                  transform={`rotate(${angle} 100 100)`}
                />
              ))}
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          {/* Decorative top element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <svg className="w-6 h-6 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-charcoal-900 mb-6 leading-tight">
            <span className="block">Art That</span>
            <span className="block mt-2 font-semibold gold-gradient-text">Bridges Worlds</span>
          </h1>

          {/* Tagline */}
          <p className="font-accent text-xl md:text-2xl text-charcoal-600 italic mb-4">
            {storeInfo.tagline}
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto font-body text-charcoal-500 text-lg leading-relaxed mb-12">
            Discover handcrafted original paintings and artisan jewelry that weaves the rich traditions
            of India with the serene beauty of Vancouver&apos;s West Coast. Each piece tells a story
            of cultural fusion and artistic passion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/paintings"
              className="px-8 py-4 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white font-body font-medium rounded-full hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Paintings
            </Link>
            <Link
              href="/earrings"
              className="px-8 py-4 bg-white text-charcoal-900 font-body font-medium rounded-full border-2 border-gold-400 hover:bg-gold-50 hover:border-gold-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Jewelry
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-gold-600 uppercase tracking-widest text-sm mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
                Where Heritage<br />
                <span className="text-burgundy-600">Meets Inspiration</span>
              </h2>
              <div className="space-y-4 font-body text-charcoal-600 leading-relaxed">
                <p>
                  Born from a deep love for Indian artistic traditions and nurtured by the
                  breathtaking landscapes of British Columbia, {storeInfo.name} creates pieces
                  that honor the past while embracing the present.
                </p>
                <p>
                  Every brushstroke, every carefully crafted earring carries the essence of two
                  beautiful worlds &mdash; the vibrant colors and intricate patterns of India,
                  harmonized with the peaceful, natural elegance of Vancouver.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 font-body text-burgundy-600 font-medium hover:text-burgundy-700 transition-colors group"
              >
                Read Our Full Story
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Decorative image placeholder */}
            <div className="relative">
              <div className="ornate-border">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-saffron-100 via-cream-100 to-forest-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto text-gold-400/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className="font-accent text-charcoal-400 italic">Handcrafted with love</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-gold-600 uppercase tracking-widest text-sm mb-4 block">
              Curated Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal-900 mb-4">
              Featured Pieces
            </h2>
            <p className="max-w-2xl mx-auto font-body text-charcoal-500">
              Handpicked works that exemplify the fusion of Indian artistry and West Coast elegance
            </p>

            {/* Elegant divider */}
            <div className="elegant-divider max-w-xs mx-auto mt-8">
              <svg className="w-4 h-4 text-gold-500" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
              </svg>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/paintings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal-900 text-white font-body font-medium rounded-full hover:bg-charcoal-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Collections
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Paintings Category */}
            <Link href="/paintings" className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden premium-shadow card-hover">
                <Image
                  src="/paintings/painting-girl.jpg"
                  alt="Original Paintings Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="font-body text-gold-300 uppercase tracking-widest text-xs mb-2 block">
                    Collection
                  </span>
                  <h3 className="font-display text-3xl font-semibold text-white mb-2">
                    Original Paintings
                  </h3>
                  <p className="font-body text-cream-200 text-sm mb-4">
                    Handcrafted canvases that capture the soul of two cultures
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold-400 font-body text-sm font-medium group-hover:gap-3 transition-all">
                    Explore Collection
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Earrings Category */}
            <Link href="/earrings" className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden premium-shadow card-hover">
                <Image
                  src="/earrings/handcraft-girl.jpg"
                  alt="Handcrafted Earrings Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="font-body text-gold-300 uppercase tracking-widest text-xs mb-2 block">
                    Collection
                  </span>
                  <h3 className="font-display text-3xl font-semibold text-white mb-2">
                    Handcrafted Earrings
                  </h3>
                  <p className="font-body text-cream-200 text-sm mb-4">
                    Artisan jewelry inspired by Indian heritage
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold-400 font-body text-sm font-medium group-hover:gap-3 transition-all">
                    Explore Collection
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-burgundy-700 via-burgundy-800 to-charcoal-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="contact-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
              <circle cx="5" cy="5" r="1" fill="currentColor" className="text-gold-400" />
            </pattern>
            <rect width="100" height="100" fill="url(#contact-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
            Commission a Custom Piece
          </h2>
          <p className="font-body text-cream-200 text-lg mb-10 max-w-2xl mx-auto">
            Have a vision? Let&apos;s bring it to life together. Whether it&apos;s a personalized painting
            or custom jewelry piece, we&apos;d love to create something special just for you.
          </p>
          <a
            href={`mailto:${storeInfo.email}?subject=Custom%20Commission%20Inquiry`}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-charcoal-900 font-body font-semibold rounded-full hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
