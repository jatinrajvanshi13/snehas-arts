'use client';

import Link from 'next/link';
import { useState } from 'react';
import { storeInfo } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-100/95 backdrop-blur-md border-b border-gold-200/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Decorative element inspired by Indian motifs */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-500" />
                <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-400" />
                <circle cx="20" cy="20" r="6" fill="currentColor" className="text-gold-500" />
                {/* Lotus petals */}
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
                    className="text-gold-400"
                    transform={`rotate(${angle} 20 20)`}
                  />
                ))}
              </svg>
            </div>
            <div>
              <span className="font-display text-2xl font-semibold text-charcoal-900 tracking-wide">
                {storeInfo.name}
              </span>
              <span className="hidden sm:block text-xs text-charcoal-500 font-body tracking-widest uppercase">
                {storeInfo.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/paintings">Original Paintings</NavLink>
            <NavLink href="/earrings">Handcrafted Earrings</NavLink>
            <NavLink href="/about">About</NavLink>
            <Link
              href={`mailto:${storeInfo.email}`}
              className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-body text-sm font-medium rounded-full hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-charcoal-700 hover:text-gold-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gold-200/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/paintings" onClick={() => setIsMenuOpen(false)}>
                Original Paintings
              </MobileNavLink>
              <MobileNavLink href="/earrings" onClick={() => setIsMenuOpen(false)}>
                Handcrafted Earrings
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <Link
                href={`mailto:${storeInfo.email}`}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-body text-center font-medium rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-body text-sm font-medium text-charcoal-700 hover:text-gold-600 transition-colors duration-300 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-body text-lg text-charcoal-700 hover:text-gold-600 transition-colors py-2 border-b border-cream-300"
    >
      {children}
    </Link>
  );
}
