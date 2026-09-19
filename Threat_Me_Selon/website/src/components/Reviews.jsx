import React from 'react';
import { siteConfig } from '../config/siteConfig';

// Placeholder review cards — replace with real Google reviews when available
const placeholderReviews = [
  {
    name: 'Sarah M.',
    initials: 'SM',
    rating: 5,
    text: 'Indy is absolutely incredible! My brows have never looked better. The threading was precise and painless. Will never go anywhere else.',
    service: 'Eyebrow Threading',
  },
  {
    name: 'Priya K.',
    initials: 'PK',
    rating: 5,
    text: 'I got powder brows done and I am obsessed! The results look so natural and beautiful. Indy\'s technique is flawless — 20 years of experience really shows.',
    service: 'Powder Brows / PMU',
  },
  {
    name: 'Jessica L.',
    initials: 'JL',
    rating: 5,
    text: 'Best facial I\'ve ever had. My skin was glowing for weeks! The studio is so clean, calming, and professional. Highly recommend.',
    service: 'Customized Facial',
  },
];

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-cream/85 backdrop-blur-sm z-0" />

      {/* Decorative accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label">
            <span className="text-gold">✦</span> Testimonials <span className="text-gold">✦</span>
          </p>
          <span className="gold-divider" />
          <h2 className="text-3xl md:text-5xl font-serif text-purple-dark mb-4">Client Love</h2>
          <p className="text-gray-500 font-light">
            What our clients are saying about their ThreadMe Beauty experience.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {placeholderReviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-gold/20 p-7 flex flex-col gap-4 shadow-sm hover:shadow-[0_0_30px_rgba(201,168,76,0.12)] transition-shadow duration-300 card-glow"
            >
              {/* Top: Avatar + Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-dark flex items-center justify-center text-gold text-sm font-serif font-bold flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                  <p className="text-[10px] text-gold uppercase tracking-widest">{r.service}</p>
                </div>
              </div>

              {/* Stars */}
              <StarRating count={r.rating} />

              {/* Quote */}
              <p className="text-gray-600 font-light text-sm leading-relaxed italic flex-grow">
                "{r.text}"
              </p>

              {/* Verified badge */}
              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest border-t border-gray-100 pt-3 mt-auto">
                <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified Client
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center">
          <p className="text-gray-500 font-light text-sm mb-4">Loved your experience? Share it with others!</p>
          <a
            href={siteConfig.links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold/50 text-purple-dark text-sm px-6 py-3 hover:bg-gold hover:text-purple-dark transition-all duration-300 font-medium tracking-wide uppercase"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
            </svg>
            Leave a Google Review
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
