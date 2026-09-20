import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-transparent py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={siteConfig.assets.logo} 
            alt={siteConfig.business.name} 
            className="h-12 w-12 rounded-full border border-gold/30 group-hover:border-gold transition-colors object-cover"
          />
          <span className="font-serif text-xl font-medium tracking-wide text-white hidden sm:block">
            ThreadMe
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 relative pb-1 ${
                  isActive
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/#contact" className="btn-primary text-xs uppercase tracking-widest px-6 py-2.5 rounded-none">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-cream-400 shadow-lg py-4 px-6 flex flex-col gap-4 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name} 
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-medium py-2 border-b border-cream-300 last:border-0 hover:text-purple uppercase text-sm tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/#contact" 
            className="btn-primary text-center mt-4 rounded-none text-xs uppercase tracking-widest"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
