import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Additional subtle botanical background specific to hero if needed, 
          though App.js handles the global background. We'll use a soft gradient here to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100/80 via-transparent to-cream/90 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-cream/50 backdrop-blur-sm">
          <Sparkles size={14} className="text-gold" />
          <span className="text-xs font-medium tracking-widest text-purple uppercase">
            {siteConfig.content.heroExperience}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-purple-dark mb-6 leading-tight max-w-4xl">
          {siteConfig.content.heroTitle}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-10 tracking-wide font-light max-w-2xl">
          {siteConfig.content.heroSubtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href={siteConfig.links.booking} className="btn-primary flex justify-center items-center">
            Book an Appointment
          </a>
          <a href="#services" className="btn-secondary flex justify-center items-center">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
