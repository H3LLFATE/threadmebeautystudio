import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-dark text-cream pt-20 pb-10 relative z-10 border-t-4 border-gold">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl mb-4 tracking-wide text-gold">{siteConfig.business.name}</h3>
            <p className="text-cream-300 font-light mb-2">
              {siteConfig.business.founder} &mdash; {siteConfig.business.title}
            </p>
            <p className="text-cream-400 font-light text-sm">
              Elegant, premium beauty services in Portland, Oregon.
            </p>
          </div>
          
          {/* Contact Col */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-xl mb-6 text-cream">Contact</h4>
            <ul className="space-y-4 font-light text-cream-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gold flex-shrink-0" />
                <span>{siteConfig.business.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href={`tel:${siteConfig.business.phone.replace(/[^0-9]/g, '')}`} className="hover:text-gold transition-colors">
                  {siteConfig.business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href={`mailto:${siteConfig.business.email}`} className="hover:text-gold transition-colors">
                  {siteConfig.business.email}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Links Col */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-xl mb-6 text-cream">Quick Links</h4>
            <ul className="space-y-3 font-light text-cream-300">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/#about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/#contact" className="hover:text-gold transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>
          
          {/* Social Col */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-xl mb-6 text-cream">Connect</h4>
            <div className="flex gap-4">
              {siteConfig.social.instagram && (
                <a 
                  href={siteConfig.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-400 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-purple-dark transition-all"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              )}
              {siteConfig.social.facebook && (
                <a 
                  href={siteConfig.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-400 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-purple-dark transition-all"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              )}
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-purple-light/50 flex flex-col md:flex-row justify-between items-center gap-4 text-cream-400 font-light text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.</p>
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
