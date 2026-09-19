import React from 'react';
import Services from '../components/Services';
import BookingForm from '../components/BookingForm';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-cream">
      {/* Page Hero Header */}
      <div className="bg-purple-dark text-cream py-16 px-6 md:px-12 border-b-2 border-gold relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-sans tracking-widest uppercase mb-3">
            <Link to="/" className="hover:underline flex items-center gap-1">
              <ArrowLeft size={12} /> Home
            </Link>
            <span>/</span>
            <span>Services Menu</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-4">
            Our Treatment Menu
          </h1>
          <p className="text-cream-300 font-light text-lg max-w-2xl mx-auto">
            Explore our full range of eyebrow artistry, permanent makeup (PMU), skincare, waxing, and event makeup treatments.
          </p>
        </div>
      </div>

      {/* Services Cards Component */}
      <Services isPreview={false} />

      {/* Booking Form */}
      <BookingForm />
    </div>
  );
};

export default ServicesPage;
