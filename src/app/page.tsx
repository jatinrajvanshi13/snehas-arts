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
        {/* Vibrant gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 via-cream-50 to-burgundy-50">
          {/* Colorful floating orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-saffron-300/20 via-burgundy-300/20 to-forest-300/20 blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-forest-300/20 via-gold-300/20 to-saffron-300/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-burgundy-200/10 via-transparent to-forest-200/10 blur-3xl" />

          {/* Mandala-inspired decorative circles - now more colorful */}
          <div className="absolute top-20 right-20 w-96 h-96 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="95" fill="none" stroke="url(#grad1)" strokeWidth="1" />
              <circle cx="100" cy="100" r="75" fill="none" stroke="url(#grad2)" strokeWidth="1" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="url(#grad1)" strokeWidth="1" />
              <circle cx="100" cy="100" r="35" fill="none" stroke="url(#grad2)" strokeWidth="1" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f6a54b" />
                  <stop offset="100%" stopColor="#e05270" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e05270" />
                  <stop offset="100%" stopColor="#4d8776" />
                </linearGradient>
              </defs>
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                <line
                  key={angle}
                  x1="100"
                  y1="5"
                  x2="100"
                  y2="195"
                  stroke="url(#grad1)"
                  strokeWidth="0.5"
                  transform={`rotate(${angle} 100 100)`}
                />
              ))}
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 w-72 h-72 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {[0, 45, 90, 135].map((angle) => (
                <ellipse
                  key={angle}
                  cx="100"
                  cy="40"
                  rx="15"
                  ry="35"
                  fill="none"
                  stroke="url(#grad2)"
                  strokeWidth="1"
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
            <span className="block mt-2 font-semibold gradient-text-vibrant">Bridges Worlds</span>
          </h1>

          {/* Tagline */}
          <p className="font-accent text-xl md:text-2xl italic mb-4">
            <span className="gradient-text-sunset">{storeInfo.tagline}</span>
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
              className="px-8 py-4 bg-gradient-to-r from-saffron-500 via-burgundy-500 to-burgundy-600 text-white font-body font-medium rounded-full hover:from-saffron-600 hover:via-burgundy-600 hover:to-burgundy-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 glow-burgundy"
            >
              Explore Paintings
            </Link>
            <Link
              href="/earrings"
              className="px-8 py-4 bg-gradient-to-r from-forest-500 to-forest-600 text-white font-body font-medium rounded-full hover:from-forest-600 hover:to-forest-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 glow-forest"
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

      {/* Rainbow divider */}
      <div className="rainbow-divider" />

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-white via-forest-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body uppercase tracking-widest text-sm mb-4 block gradient-text-sunset font-semibold">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
                Where Heritage<br />
                <span className="gradient-text-vibrant">Meets Inspiration</span>
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

            {/* Artist Photo */}
            <div className="relative">
              <div className="ornate-border">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/paintings/snehastand.jpg"
                    alt="Sneha - The Artist"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rainbow divider */}
      <div className="rainbow-divider" />

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-br from-cream-50 via-saffron-50/30 to-burgundy-50/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-saffron-200/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-forest-200/20 to-transparent blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-body uppercase tracking-widest text-sm mb-4 block gradient-text-celebration font-semibold">
              Curated Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal-900 mb-4">
              Featured <span className="gradient-text-sunset">Pieces</span>
            </h2>
            <p className="max-w-2xl mx-auto font-body text-charcoal-500">
              Handpicked works that exemplify the fusion of Indian artistry and West Coast elegance
            </p>

            {/* Colorful divider */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-saffron-400 to-saffron-400" />
              <svg className="w-5 h-5" viewBox="0 0 16 16" fill="url(#starGrad)">
                <defs>
                  <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f6a54b" />
                    <stop offset="50%" stopColor="#e05270" />
                    <stop offset="100%" stopColor="#4d8776" />
                  </linearGradient>
                </defs>
                <path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
              </svg>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-burgundy-400 via-forest-400 to-transparent" />
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-saffron-500 via-burgundy-500 to-forest-500 text-white font-body font-medium rounded-full hover:from-saffron-600 hover:via-burgundy-600 hover:to-forest-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 glow-multi"
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
      <section className="py-24 bg-gradient-to-br from-white via-burgundy-50/20 to-forest-50/30">
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
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/80 via-burgundy-800/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/20 via-transparent to-burgundy-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="font-body text-saffron-300 uppercase tracking-widest text-xs mb-2 block">
                    Collection
                  </span>
                  <h3 className="font-display text-3xl font-semibold text-white mb-2">
                    Original Paintings
                  </h3>
                  <p className="font-body text-cream-200 text-sm mb-4">
                    Handcrafted canvases that capture the soul of two cultures
                  </p>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-saffron-500 to-burgundy-500 text-white font-body text-sm font-medium group-hover:gap-3 transition-all">
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
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-800/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-bl from-forest-500/20 via-transparent to-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-forest-500 to-gold-500 text-white font-body text-sm font-medium group-hover:gap-3 transition-all">
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
      <section className="py-24 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 gradient-animated opacity-90" />

        {/* Decorative colorful dots */}
        <div className="absolute inset-0 dots-colorful opacity-10" />

        {/* Floating orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-saffron-400/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-forest-400/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6 drop-shadow-lg">
            Commission a Custom Piece
          </h2>
          <p className="font-body text-white/90 text-lg mb-10 max-w-2xl mx-auto drop-shadow">
            Have a vision? Let&apos;s bring it to life together. Whether it&apos;s a personalized painting
            or custom jewelry piece, we&apos;d love to create something special just for you.
          </p>
          <a
            href={`mailto:${storeInfo.email}?subject=Custom%20Commission%20Inquiry`}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-charcoal-900 font-body font-semibold rounded-full hover:bg-cream-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
