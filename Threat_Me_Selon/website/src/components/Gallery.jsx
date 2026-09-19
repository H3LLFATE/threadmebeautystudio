import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-cream relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-sans font-semibold tracking-widest text-gold uppercase mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-purple-dark">Our Work</h3>
          </div>
          <div className="mt-4 md:mt-0">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-purple hover:text-gold transition-colors font-medium underline underline-offset-4">
              View more on Instagram
            </a>
          </div>
        </div>
        
        {siteConfig.gallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {siteConfig.gallery.map((item, index) => (
              <div 
                key={index} 
                className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-300"
              >
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-purple-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-gold/50 rounded-sm bg-cream-50">
            <p className="text-gray-500 font-light italic">Gallery images will be added soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
