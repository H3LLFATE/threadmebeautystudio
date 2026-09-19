import React from 'react';
import { siteConfig } from '../config/siteConfig';

const About = () => {
  return (
    <section id="about" className="section-padding bg-cream relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gold/10 -translate-x-4 translate-y-4 rounded-sm"></div>
            <div className="absolute inset-0 border border-gold/40 translate-x-4 -translate-y-4 rounded-sm"></div>
            <img 
              src={siteConfig.assets.founder} 
              alt={siteConfig.business.founder} 
              className="relative z-10 w-full h-auto object-cover rounded-sm shadow-lg max-h-[600px]"
            />
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple/5 border border-gold rounded-full -z-10"></div>
          </div>
          
          {/* Text Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-sans font-semibold tracking-widest text-gold uppercase mb-3">
              {siteConfig.business.founder} &mdash; {siteConfig.business.title}
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-purple-dark mb-8 leading-tight">
              {siteConfig.content.aboutTitle}
            </h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <p>{siteConfig.content.aboutText}</p>
              <p>{siteConfig.content.aboutText2}</p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-cream-300">
              <h4 className="font-serif text-xl text-purple mb-4">Credentials & Experience</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✦</span> 20+ years industry experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✦</span> Former owner of 4 salons
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✦</span> Bachelor's in Business Management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✦</span> Expert in PMU & Skincare
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
