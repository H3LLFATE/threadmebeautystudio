import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { loadGalleryMedia } from '../config/imageMasterConfig';
import { Sparkles, Camera, ArrowRight, Play } from 'lucide-react';

const MemoryPlace = () => {
  // Load media items and shuffle randomly for Memory Place carousel
  const shuffledItems = useMemo(() => {
    const rawItems = loadGalleryMedia();
    // Create a copy and shuffle using Fisher-Yates algorithm
    const items = [...rawItems];
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }, []);

  // Multiply array to ensure seamless infinite belt loop
  const beltItems = [...shuffledItems, ...shuffledItems, ...shuffledItems];

  return (
    <section id="gallery" className="section-padding bg-purple-dark text-cream relative overflow-hidden">
      {/* Decorative ambient lighting behind marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-12 text-center">
        <h2 className="text-sm font-sans font-semibold tracking-widest text-gold uppercase mb-3 flex items-center justify-center gap-2">
          <Sparkles size={16} /> Memory Place <Sparkles size={16} />
        </h2>
        <h3 className="text-3xl md:text-5xl font-serif text-cream mb-4">
          Moments & Transformations
        </h3>
        <p className="text-cream-300 font-light text-base md:text-lg max-w-2xl mx-auto">
          A continuous rotating showcase of client memories, artistry, and studio moments.
        </p>
      </div>

      {/* Infinite Rotating Belt Marquee */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Left & Right subtle shadow gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-purple-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-purple-dark to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee space-x-6 items-center">
          {beltItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-72 sm:w-80 h-96 sm:h-[420px] flex-shrink-0 relative border border-gold/30 rounded-none overflow-hidden group shadow-xl bg-purple-dark/80"
            >
              {/* Media rendering */}
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    src={item.path}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover filter brightness-90"
                  />
                  <div className="absolute top-3 right-3 bg-purple-dark/80 text-gold px-2.5 py-1 text-[10px] font-sans font-bold tracking-widest uppercase rounded-none border border-gold/40 flex items-center gap-1 z-10">
                    <Play size={10} className="fill-gold" /> Video
                  </div>
                </div>
              ) : (
                <img
                  src={item.path}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10">
                <span className="text-gold text-[11px] font-sans font-semibold tracking-widest uppercase block mb-1">
                  ✦ {item.category || 'Memory'}
                </span>
                <h4 className="text-cream text-lg font-serif font-bold line-clamp-1">
                  {item.title}
                </h4>
              </div>

              {/* Inner Blunt Frame Accent */}
              <div className="absolute inset-2 border border-gold/20 pointer-events-none group-hover:border-gold/60 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA to View Full Gallery Page */}
      <div className="mt-12 text-center relative z-10">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-3 bg-gold text-purple-dark px-8 py-3.5 rounded-none font-semibold text-xs tracking-widest uppercase hover:bg-cream transition-all duration-300 border border-gold shadow-lg"
        >
          <Camera size={16} />
          <span>Explore Full Gallery Page</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* CSS Animation for infinite marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MemoryPlace;
