import React from 'react';
import { siteConfig } from '../config/siteConfig';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '4', label: 'Salons Owned' },
  { value: '100%', label: 'Premium Service' },
  { value: '∞', label: 'Client Dedication' },
];

const credentials = [
  '20+ years in the beauty industry',
  'Former owner of 4 beauty salons in Malaysia',
  "Bachelor's Degree in Business Management",
  'Certified PMU & Skincare Specialist',
  'Expert in Bridal & Stage Makeup',
  'Now serving Portland, Oregon',
  'Master in Brow Threading & Shaping',
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-cream relative z-10 overflow-hidden">
      
      {/* Subtle decorative background accent */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple/4 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

          {/* ── Image Column ── */}
          <div className="w-full lg:w-5/12 relative flex-shrink-0">
            {/* Gold shadow offset card */}
            <div className="absolute inset-0 bg-gold/10 -translate-x-5 translate-y-5" />
            {/* Outer gold border offset */}
            <div className="absolute inset-0 border border-gold/35 translate-x-5 -translate-y-5" />
            
            <img
              src={siteConfig.assets.founder}
              alt={siteConfig.business.founder}
              className="relative z-10 w-full h-auto object-cover shadow-xl max-h-[620px]"
              style={{ aspectRatio: '4/5', objectPosition: 'top' }}
            />

            {/* Floating stats badge */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 grid grid-cols-2 gap-px bg-gold/30 border border-gold/30 shadow-xl">
              {stats.map((s) => (
                <div key={s.label} className="bg-purple-dark px-5 py-3.5 text-center">
                  <p className="font-serif text-gold text-xl font-bold leading-none">{s.value}</p>
                  <p className="text-cream/60 text-[9px] tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Text Column ── */}
          <div className="w-full lg:w-7/12 pt-12 lg:pt-0">
            <p className="section-label">
              <span className="text-gold">✦</span>
              {siteConfig.business.founder} &mdash; {siteConfig.business.title}
            </p>
            <span className="gold-divider" />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-purple-dark mb-8 leading-tight">
              {siteConfig.content.aboutTitle}
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed font-light text-[1.05rem]">
              <p>{siteConfig.content.aboutText}</p>
              <p>{siteConfig.content.aboutText2}</p>
            </div>

            {/* Credentials list */}
            <div className="mt-10 pt-8 border-t border-gold/20">
              <h4 className="font-serif text-lg text-purple mb-5 flex items-center gap-2">
                <span className="text-gold">✦</span> Credentials &amp; Experience
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="text-gold mt-0.5 flex-shrink-0 text-xs">✧</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={siteConfig.links.booking}
                className="btn-primary inline-flex items-center gap-2"
              >
                Book a Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
