import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const formattedPhone = siteConfig.business.whatsapp.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone.length === 10 ? '1' + formattedPhone : formattedPhone}?text=${encodeURIComponent('Hi ThreadMe Beauty! I have a question...')}`;

  return (
    <footer className="bg-purple-dark text-cream pt-20 pb-10 relative z-10 overflow-hidden">

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Subtle glow orbs */}
      <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-purple/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 right-1/4 w-60 h-60 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl mb-1 text-gold tracking-wide">{siteConfig.business.name}</h3>
            <p className="text-cream/50 text-xs tracking-widest uppercase mb-4">{siteConfig.business.tagline || 'Elegant Beauty. Masterful Artistry.'}</p>
            <div className="w-10 h-px bg-gold/40 mb-5" />
            <p className="text-cream/50 font-light text-sm leading-relaxed">
              {siteConfig.business.founder} &mdash; {siteConfig.business.title}.<br />
              Premium beauty services in Portland, Oregon.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-4 py-2.5 rounded-full font-semibold tracking-wide transition-all shadow-lg hover:shadow-emerald-600/30"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-base mb-6 text-cream tracking-wide">Contact</h4>
            <ul className="space-y-4 text-cream/55 text-sm font-light">
              {siteConfig.business.locations.map((location) => (
                <li key={location.name} className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 text-gold flex-shrink-0" />
                  <span className="leading-snug">
                    <span className="block text-cream font-medium">{location.name}</span>
                    <span className="block text-cream/45 text-xs mb-1">{location.area}</span>
                    <span className="block">{location.address}</span>
                    <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center gap-1.5 mt-1 hover:text-gold transition-colors">
                      <Phone size={13} className="text-gold" />
                      {location.phone}
                    </a>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold flex-shrink-0" />
                <a href={`mailto:${siteConfig.business.email}`} className="hover:text-gold transition-colors break-all">
                  {siteConfig.business.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-base mb-6 text-cream tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-cream/55 text-sm font-light">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/#about' },
                { label: 'Services', to: '/services' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Contact & Booking', to: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-gold transition-colors hover:translate-x-1 inline-block transition-transform duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-base mb-6 text-cream tracking-wide">Connect</h4>
            <div className="flex gap-3 mb-6">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-purple-dark text-cream/60 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-purple-dark text-cream/60 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Hours snippet */}
            <div className="text-cream/45 text-xs space-y-1.5 border-t border-cream/10 pt-5">
              <p className="text-gold text-[10px] uppercase tracking-widest mb-2">Studio Hours</p>
              <p>Mon – Fri: 10am – 7pm</p>
              <p>Saturday: 10am – 6pm</p>
              <p>Sunday: 11am – 5pm</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-cream/35 text-xs">
          <p className="flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} {siteConfig.business.name}. Made with
            <Heart size={11} className="text-gold fill-gold" />
            in Portland, OR.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
