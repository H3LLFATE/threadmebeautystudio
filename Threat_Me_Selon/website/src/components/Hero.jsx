import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles } from 'lucide-react';
import heroVideo from '../assets/images/hero_video.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Looping Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
      />

      {/* Blur + Dark Overlay so text is clearly readable */}
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-purple-dark/50"></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center">
        
        {/* Experience Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-cream/10 backdrop-blur-md">
          <Sparkles size={14} className="text-gold" />
          <span className="text-xs font-medium tracking-widest text-gold uppercase">
            {siteConfig.content.heroExperience}
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream mb-6 leading-tight max-w-4xl drop-shadow-lg">
          {siteConfig.content.heroTitle}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-cream/80 mb-10 tracking-widest font-light max-w-2xl">
          {siteConfig.content.heroSubtitle}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href={siteConfig.links.booking}
            className="inline-block bg-gold text-purple-dark px-8 py-3 tracking-wide font-semibold transition-all duration-300 hover:bg-cream border border-gold hover:border-gold text-sm uppercase"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="inline-block bg-transparent text-cream border border-cream/60 px-8 py-3 tracking-wide font-medium transition-all duration-300 hover:bg-cream/10 hover:border-gold text-sm uppercase"
          >
            Explore Services
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
