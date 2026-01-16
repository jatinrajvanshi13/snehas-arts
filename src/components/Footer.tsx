import Link from 'next/link';
import { storeInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-100">
      {/* Decorative top border with Indian-inspired pattern */}
      <div className="h-2 bg-gradient-to-r from-saffron-500 via-gold-500 to-burgundy-600" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo mark */}
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-500" />
                  <circle cx="20" cy="20" r="6" fill="currentColor" className="text-gold-500" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <ellipse
                      key={angle}
                      cx="20"
                      cy="8"
                      rx="3"
                      ry="6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-gold-400/50"
                      transform={`rotate(${angle} 20 20)`}
                    />
                  ))}
                </svg>
              </div>
              <span className="font-display text-xl font-semibold text-cream-100">
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
            <h3 className="font-display text-lg font-semibold text-gold-400 mb-6">
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
            <h3 className="font-display text-lg font-semibold text-gold-400 mb-6">
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

            {/* Indian-inspired decorative element */}
            <div className="mt-8 flex gap-2">
              {['saffron', 'gold', 'burgundy', 'forest'].map((color, i) => (
                <div
                  key={color}
                  className={`w-2 h-2 rounded-full ${
                    i === 0 ? 'bg-saffron-500' :
                    i === 1 ? 'bg-gold-500' :
                    i === 2 ? 'bg-burgundy-500' :
                    'bg-forest-500'
                  }`}
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
