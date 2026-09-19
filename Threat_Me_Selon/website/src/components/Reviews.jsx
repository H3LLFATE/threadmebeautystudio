import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding relative border-y border-cream-300">
      <div className="absolute inset-0 bg-cream/80 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-sans font-semibold tracking-widest text-gold uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-purple-dark mb-6">Client Love</h3>
          <p className="text-gray-600 font-light text-lg">
            What our clients are saying about their ThreadMe Beauty experience.
          </p>
        </div>
        
        {/* Placeholder for future Google Reviews integration */}
        <div className="max-w-4xl mx-auto py-12 px-6 border border-gold/20 bg-cream-50 rounded-sm text-center shadow-sm">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <p className="text-gray-700 font-light italic mb-6">
            "Client reviews will be synced here soon from our Google Business profile."
          </p>
          <a 
            href={siteConfig.links.googleReviews}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple font-medium hover:text-gold transition-colors inline-flex items-center gap-2"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
