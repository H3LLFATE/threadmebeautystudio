import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { Sparkles, X, Calendar, ArrowRight } from 'lucide-react';

const Services = ({ isPreview = false }) => {
  // Track flipped state for each service card
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="services" className="section-padding relative bg-cream">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-cream/90 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-sans font-semibold tracking-widest text-gold uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={16} /> Our Offerings <Sparkles size={16} />
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-purple-dark mb-6">
            Expert Beauty Services
          </h3>
          <p className="text-gray-600 font-light text-lg">
            Experience premium treatments tailored to enhance your natural beauty. <br className="hidden md:inline" />
            <span className="text-purple font-medium">Tap any service image below</span> to explore full details and menu options.
          </p>
        </div>
        
        <div className="text-center mb-6">
          <span className="inline-flex items-center px-4 py-1.5 border border-gold/50 text-xs font-sans font-semibold tracking-widest uppercase text-purple-dark bg-gold/10">
            Both Locations
          </span>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteConfig.services.map((serviceGroup, index) => {
            const isFlipped = flippedCards[index];

            return (
              <React.Fragment key={serviceGroup.id || index}>
                {index === 5 && (
                  <div className="md:col-span-2 py-4 sm:py-6 text-center">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 border-t border-gold/50" />
                      <span className="font-serif text-lg sm:text-xl text-purple-dark whitespace-nowrap">
                        Specially in Portland Only
                      </span>
                      <div className="flex-1 border-t border-gold/50" />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm font-sans tracking-wide text-gold font-semibold">
                      3280 NW 185th Ave, Portland
                    </p>
                  </div>
                )}
              <div 
                className="relative h-[440px] w-full rounded-none border border-gold/40 shadow-lg group overflow-hidden bg-purple-dark select-none cursor-pointer transition-all duration-300 hover:border-gold hover:shadow-xl"
                onClick={() => toggleCard(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(index);
                  }
                }}
                aria-expanded={isFlipped}
                aria-label={`${serviceGroup.category} service details`}
              >
                {/* --- COVER IMAGE VIEW --- */}
                <div 
                  className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
                    isFlipped ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                  }`}
                >
                  {/* Background Image */}
                  <img 
                    src={serviceGroup.image} 
                    alt={serviceGroup.category} 
                    className="w-full h-full object-cover object-center filter brightness-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Dark Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/95 via-purple-dark/65 to-purple-dark/40 group-hover:via-purple-dark/75 transition-all duration-300"></div>

                  {/* Corner Decorative Accent (Blunt Edge Frame) */}
                  <div className="absolute inset-3 border border-gold/30 pointer-events-none rounded-none group-hover:border-gold/60 transition-colors"></div>

                  {/* Center Text & Title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                    <span className="text-gold text-xl mb-3 tracking-widest font-serif">✧ ✦ ✧</span>
                    
                    <h4 className="text-2xl sm:text-3xl font-serif font-bold text-cream mb-2 tracking-wide drop-shadow-md">
                      {serviceGroup.category}
                    </h4>

                    <p className="text-gold text-xs sm:text-sm font-sans uppercase tracking-widest font-medium mb-6">
                      {serviceGroup.subtitle}
                    </p>

                    {/* Interactive Tap Badge */}
                    <div className="mt-2 inline-flex items-center gap-2 bg-purple/90 backdrop-blur-md text-cream text-xs px-5 py-2.5 rounded-none border border-gold/60 font-sans tracking-widest uppercase font-semibold shadow-md group-hover:bg-gold group-hover:text-purple-dark transition-all duration-300">
                      <span>Tap Image for Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* --- DETAILS OVERLAY VIEW (Revealed on Tap) --- */}
                <div 
                  className={`absolute inset-0 w-full h-full bg-[#80679b] text-cream p-6 sm:p-8 flex flex-col justify-between z-20 rounded-none transition-all duration-500 transform ${
                    isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  {/* Inner Blunt Border */}
                  <div className="absolute inset-3 border border-gold/40 pointer-events-none rounded-none"></div>

                  {/* Top Bar inside Details */}
                  <div className="relative z-10 flex justify-between items-start pb-4 border-b border-gold/30">
                    <div>
                      <span className="text-xs font-sans uppercase tracking-widest text-gold font-semibold">Service Details</span>
                      <h4 className="text-2xl font-serif text-cream font-bold">{serviceGroup.category}</h4>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(index);
                      }}
                      className="text-gold hover:text-white p-1 rounded-none border border-gold/30 hover:border-gold transition-colors"
                      aria-label="Close details"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Description & List of Items */}
                  <div className="relative z-10 flex-grow py-4 overflow-y-auto custom-scrollbar space-y-4">
                    <p className="text-cream-200 text-sm font-light italic border-l-2 border-gold pl-3">
                      "{serviceGroup.description}"
                    </p>

                    <ul className="space-y-3 pt-2">
                      {serviceGroup.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm">
                          <span className="text-gold mt-0.5 text-xs">✧</span>
                          <div>
                            <span className="font-semibold text-cream block">{item.name}</span>
                            <span className="text-gray-300 font-light text-xs leading-relaxed block">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Footer inside Details */}
                  <div className="relative z-10 pt-4 border-t border-gold/30 flex items-center justify-between gap-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(index);
                      }}
                      className="text-xs text-gold hover:underline uppercase tracking-wider font-medium"
                    >
                      ← Back to Cover
                    </button>

                    <a 
                      href={siteConfig.links.booking} 
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 bg-gold text-purple-dark text-xs px-4 py-2 rounded-none font-semibold uppercase tracking-wider hover:bg-cream hover:text-purple-dark transition-colors border border-gold"
                    >
                      <Calendar size={14} /> Book Now
                    </a>
                  </div>
                </div>
              </div>
              </React.Fragment>
            );
          })}
        </div>
        
        {/* View Full Menu CTA */}
        <div className="mt-16 text-center">
          {isPreview ? (
            <Link to="/services" className="btn-primary rounded-none shadow-md inline-flex items-center gap-2">
              <span>View Full Services Page</span>
              <ArrowRight size={16} />
            </Link>
          ) : (
            <a href={siteConfig.links.booking} className="btn-primary rounded-none shadow-md inline-flex items-center gap-2">
              <span>Book an Appointment</span>
              <Calendar size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
