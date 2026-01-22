import Link from 'next/link';
import { storeInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-100">
      {/* Decorative top border with vibrant rainbow gradient */}
      <div className="h-2 bg-gradient-to-r from-saffron-500 via-burgundy-500 to-forest-500" />
      <div className="h-1 bg-gradient-to-r from-forest-400 via-gold-400 to-saffron-400" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo mark with gradient */}
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f6a54b" />
                      <stop offset="50%" stopColor="#e05270" />
                      <stop offset="100%" stopColor="#4d8776" />
                    </linearGradient>
                    <linearGradient id="footerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e05270" />
                      <stop offset="100%" stopColor="#dcba39" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="none" stroke="url(#footerGrad1)" strokeWidth="1.5" />
                  <circle cx="20" cy="20" r="6" fill="url(#footerGrad1)" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <ellipse
                      key={angle}
                      cx="20"
                      cy="8"
                      rx="3"
                      ry="6"
                      fill="none"
                      stroke="url(#footerGrad2)"
                      strokeWidth="1"
                      transform={`rotate(${angle} 20 20)`}
                    />
                  ))}
                </svg>
              </div>
              <span className="font-display text-xl font-semibold gradient-text-celebration">
                {storeInfo.name}
              </span>
            </div>
            <p className="font-body text-cream-400 text-sm leading-relaxed">
              {storeInfo.description}
            </p>
            <p className="font-body text-cream-500 text-sm">
              Based in {storeInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 gradient-text-sunset">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/paintings" className="font-body text-cream-300 hover:text-gold-400 transition-colors text-sm">
                  Original Paintings
                </Link>
              </li>
              <li>
                <Link href="/earrings" className="font-body text-cream-300 hover:text-gold-400 transition-colors text-sm">
                  Handcrafted Earrings
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-body text-cream-300 hover:text-gold-400 transition-colors text-sm">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 gradient-text-vibrant">
              Connect
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${storeInfo.email}`}
                className="flex items-center gap-3 font-body text-cream-300 hover:text-gold-400 transition-colors text-sm group"
              >
                <svg className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {storeInfo.email}
              </a>
              <div className="flex items-center gap-3 font-body text-cream-400 text-sm">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {storeInfo.location}
              </div>
            </div>

            {/* Indian-inspired decorative element - larger and more vibrant */}
            <div className="mt-8 flex gap-3">
              {['saffron', 'gold', 'burgundy', 'forest'].map((color, i) => (
                <div
                  key={color}
                  className={`w-3 h-3 rounded-full animate-float ${
                    i === 0 ? 'bg-gradient-to-br from-saffron-400 to-saffron-600' :
                    i === 1 ? 'bg-gradient-to-br from-gold-400 to-gold-600' :
                    i === 2 ? 'bg-gradient-to-br from-burgundy-400 to-burgundy-600' :
                    'bg-gradient-to-br from-forest-400 to-forest-600'
                  }`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-cream-500 text-xs">
              &copy; {new Date().getFullYear()} {storeInfo.name}. All artwork and designs are original creations.
            </p>
            <p className="font-body text-cream-600 text-xs italic">
              Handcrafted with love in Vancouver
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
