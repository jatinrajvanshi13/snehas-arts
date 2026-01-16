import { Metadata } from 'next';
import Link from 'next/link';
import { storeInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Story | Ananya Arts',
  description: 'Learn about the artist behind Ananya Arts and the cultural journey that inspires each handcrafted piece.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-cream-100 via-cream-50 to-burgundy-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[0, 20, 40, 60, 80].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-gold-600"
              />
            ))}
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-body text-gold-600 uppercase tracking-widest text-sm mb-4 block">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal-900 mb-6">
            Where Two Worlds<br />
            <span className="text-burgundy-600">Become One</span>
          </h1>
          <p className="font-body text-charcoal-600 text-lg leading-relaxed">
            A journey of art, heritage, and love that spans continents
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Artist Portrait Placeholder */}
            <div className="float-right ml-8 mb-8 w-72">
              <div className="ornate-border">
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-saffron-100 via-cream-100 to-forest-100 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-gold-400/50 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="font-accent text-charcoal-400 italic text-sm">The Artist</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-body text-charcoal-700 leading-relaxed mb-6">
              <span className="font-display text-4xl float-left mr-3 mt-1 text-burgundy-600">T</span>
              here&apos;s a certain magic that happens when two worlds collide &mdash; not with force,
              but with grace. {storeInfo.name} was born from such a collision: the vibrant,
              intricate artistic traditions of India meeting the serene, natural beauty of
              Vancouver&apos;s Pacific coast.
            </p>

            <p className="font-body text-charcoal-700 leading-relaxed mb-6">
              Growing up surrounded by the rich colors of Indian festivals, the delicate patterns
              of traditional mehndi, and the stories woven into every piece of inherited jewelry,
              art was never just decoration &mdash; it was heritage, identity, and connection.
            </p>

            <p className="font-body text-charcoal-700 leading-relaxed mb-6">
              Moving to Vancouver opened a new chapter. The misty mountains, the endless ocean
              horizons, the ancient forests &mdash; this landscape spoke a different language, yet
              somehow, it harmonized perfectly with the artistic roots already planted deep within.
            </p>

            <div className="clear-both"></div>

            <blockquote className="border-l-4 border-gold-500 pl-6 my-12 italic">
              <p className="font-accent text-2xl text-charcoal-800 mb-4">
                &ldquo;Every brushstroke carries the warmth of Indian sunsets. Every piece of
                jewelry holds the whisper of generations. And now, they all breathe the fresh
                Pacific air.&rdquo;
              </p>
            </blockquote>

            <h2 className="font-display text-3xl font-semibold text-charcoal-900 mt-16 mb-6">
              The Art of Fusion
            </h2>

            <p className="font-body text-charcoal-700 leading-relaxed mb-6">
              Each painting and piece of jewelry in this collection represents a bridge. The
              saffron and gold of Indian heritage blend seamlessly with the emerald greens and
              misty grays of the West Coast. Traditional motifs &mdash; lotus flowers, intricate
              mandalas, the elegant curves of temple architecture &mdash; find new expression
              alongside elements inspired by Vancouver&apos;s natural splendor.
            </p>

            <p className="font-body text-charcoal-700 leading-relaxed mb-6">
              The result is art that belongs to both worlds and neither, something entirely new
              yet deeply rooted. It&apos;s for those who understand that identity isn&apos;t about choosing
              one culture over another &mdash; it&apos;s about weaving them together into something
              beautiful and uniquely yours.
            </p>

            <h2 className="font-display text-3xl font-semibold text-charcoal-900 mt-16 mb-6">
              Handcrafted with Intention
            </h2>

            <p className="font-body text-charcoal-700 leading-relaxed mb-6">
              Every piece from {storeInfo.name} is created by hand, with intention and care.
              The paintings take shape slowly, layer by layer, allowing the colors to speak and
              the composition to evolve organically. The jewelry is crafted using techniques
              passed down through generations, each piece receiving the same attention whether
              it&apos;s a simple lotus stud or an elaborate chandelier earring.
            </p>

            <p className="font-body text-charcoal-700 leading-relaxed">
              This isn&apos;t mass production. This is art as meditation, as connection, as
              conversation between maker and material. When you bring one of these pieces into
              your home or wear it close to your heart, you carry a little piece of that
              intention with you.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-semibold text-charcoal-900 mb-4">
              Our Values
            </h2>
            <div className="elegant-divider max-w-xs mx-auto">
              <svg className="w-4 h-4 text-gold-500" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl premium-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-saffron-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-saffron-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal-900 mb-3">
                Made with Love
              </h3>
              <p className="font-body text-charcoal-600 text-sm">
                Every piece is created with genuine care and passion. We pour our heart into
                each creation, ensuring it carries positive energy into your life.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl premium-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-forest-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal-900 mb-3">
                Cultural Heritage
              </h3>
              <p className="font-body text-charcoal-600 text-sm">
                We honor and preserve artistic traditions while allowing them to evolve.
                Each piece is a bridge between generations and cultures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl premium-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal-900 mb-3">
                Authentic Quality
              </h3>
              <p className="font-body text-charcoal-600 text-sm">
                We use only quality materials and time-honored techniques. Each piece is
                crafted to become a treasured possession for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-charcoal-900 mb-4">
            Let&apos;s Create Together
          </h2>
          <p className="font-body text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re drawn to an existing piece or have a vision for something custom,
            I&apos;d love to hear from you. Every inquiry is a conversation, and every conversation
            is an opportunity to create something meaningful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/paintings"
              className="px-8 py-3 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white font-body font-medium rounded-full hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-300 shadow-lg"
            >
              Browse Collection
            </Link>
            <a
              href={`mailto:${storeInfo.email}`}
              className="px-8 py-3 bg-white text-charcoal-900 font-body font-medium rounded-full border-2 border-gold-400 hover:bg-gold-50 transition-all duration-300"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
