import React, { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles } from 'lucide-react';
import heroVideo from '../assets/images/hero_video.mp4';

const Hero = () => {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToBookingForm = (event) => {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    let animationFrame;

    const updateScrollProgress = () => {
      const hero = heroRef.current;
      if (!hero) return;

      const { top, height } = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-top / height, 0), 1);
      setScrollProgress(progress);
      animationFrame = undefined;
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateScrollProgress);
      }
    };

    updateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const contentOpacity = Math.max(0, 1 - Math.max(0, scrollProgress - 0.55) / 0.45);

  return (
    <section ref={heroRef} id="home" className="relative h-[100svh] min-h-[100svh] flex items-center overflow-hidden">
      
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
      <div
        className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center transition-opacity duration-100"
        style={{ opacity: contentOpacity }}
      >
        
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
            onClick={scrollToBookingForm}
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
