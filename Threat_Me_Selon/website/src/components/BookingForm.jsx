import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Calendar, Sparkles } from 'lucide-react';

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  postcode: '',
  preferredDate: '',
  preferredTime: '',
  treatment: 'Eyebrow Threading & Shaping',
  message: ''
};

const BookingForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedPhone = siteConfig.business.phone.replace(/[^0-9]/g, '');
    const whatsappNumber = formattedPhone.length === 10 ? `1${formattedPhone}` : formattedPhone;
    const bookingMessage = [
      `Hello ${siteConfig.business.name}! I would like to request an appointment.`,
      '',
      `Name: ${formData.fullName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Postcode: ${formData.postcode || 'Not provided'}`,
      `Preferred date: ${formData.preferredDate || 'Not specified'}`,
      `Preferred time: ${formData.preferredTime}`,
      `Service: ${formData.treatment}`,
      `Message: ${formData.message || 'None'}`
    ].join('\n');

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  // Flatten service items for the treatment select dropdown
  const allTreatments = siteConfig.services.flatMap((group) =>
    group.items.map((item) => `${group.category} — ${item.name}`)
  );

  return (
    <section id="contact" className="section-padding relative bg-cream border-t border-gold/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Business Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-purple-dark mb-4 leading-tight">
                Begin your <span className="italic text-purple font-serif">journey</span>
              </h2>
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                Reach out to schedule an appointment or to learn more about our specialized treatments. 
                Our team is ready to welcome you.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-purple/20 bg-cream-50 flex items-center justify-center flex-shrink-0 text-purple shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xs font-sans font-bold tracking-widest text-gold uppercase mb-1">
                    PHONE
                  </span>
                  <a 
                    href={`tel:${siteConfig.business.phone.replace(/[^0-9]/g, '')}`} 
                    className="text-gray-900 font-medium text-lg hover:text-purple transition-colors"
                  >
                    {siteConfig.business.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-purple/20 bg-cream-50 flex items-center justify-center flex-shrink-0 text-purple shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs font-sans font-bold tracking-widest text-gold uppercase mb-1">
                    EMAIL
                  </span>
                  <a 
                    href={`mailto:${siteConfig.business.email}`} 
                    className="text-gray-900 font-medium text-base md:text-lg hover:text-purple transition-colors break-all"
                  >
                    {siteConfig.business.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-purple/20 bg-cream-50 flex items-center justify-center flex-shrink-0 text-purple shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs font-sans font-bold tracking-widest text-gold uppercase mb-1">
                    LOCATION
                  </span>
                  <p className="text-gray-800 font-light leading-relaxed text-base">
                    {siteConfig.business.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-purple/20 bg-cream-50 flex items-center justify-center flex-shrink-0 text-purple shadow-sm">
                  <Clock size={20} />
                </div>
                <div className="w-full">
                  <span className="block text-xs font-sans font-bold tracking-widest text-gold uppercase mb-2">
                    HOURS
                  </span>
                  <div className="space-y-1.5 text-sm font-light text-gray-700 max-w-xs">
                    {siteConfig.business.hours ? (
                      siteConfig.business.hours.map((h, i) => (
                        <div key={i} className="flex justify-between border-b border-cream-300 pb-1">
                          <span className="font-medium text-gray-800">{h.day}</span>
                          <span className="text-gray-600">{h.time}</span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex justify-between border-b border-cream-300 pb-1">
                          <span>Monday – Saturday</span>
                          <span>10:00 am – 7:00 pm</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>11:00 am – 5:00 pm</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Booking Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-cream-300 relative">
              
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/40">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-3xl font-serif text-purple-dark font-bold">Booking Request Sent!</h3>
                  <p className="text-gray-600 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-purple-dark">{formData.fullName}</strong>. We have received your appointment request and will contact you shortly to confirm your booking.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData(initialFormData);
                    }}
                    className="btn-secondary text-xs uppercase tracking-widest mt-6"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-2">
                      FULL NAME *
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-cream-50/70 border border-cream-300 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-2">
                        PHONE NUMBER *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-cream-50/70 border border-cream-300 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full bg-cream-50/70 border border-cream-300 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Postcode & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-2">
                        POSTCODE
                      </label>
                      <input 
                        type="text" 
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="e.g. 97201"
                        className="w-full bg-cream-50/70 border border-cream-300 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-2">
                        PREFERRED DATE
                      </label>
                      <input 
                        type="date" 
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full bg-cream-50/70 border border-cream-300 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Preferred Time & Treatment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-2">
                        PREFERRED TIME *
                      </label>
                      <input
                        type="text"
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        placeholder="e.g. 2:30 PM"
                        className="w-full bg-cream-50/70 border border-cream-300 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-2">
                        TREATMENT / SERVICE *
                      </label>
                      <select 
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        required
                        className="w-full bg-cream-50/70 border border-cream-300 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm cursor-pointer truncate"
                      >
                        {allTreatments.map((t, i) => (
                          <option key={i} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label className="block text-xs font-sans font-bold tracking-widest text-gray-500 uppercase mb-2">
                      MESSAGE (OPTIONAL)
                    </label>
                    <textarea 
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your beauty goals or specific preferences..."
                      className="w-full bg-cream-50/70 border border-cream-300 rounded-xl px-4 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-purple hover:bg-purple-light text-cream font-medium tracking-widest uppercase py-4 rounded-xl shadow-lg border border-gold/30 hover:border-gold transition-all duration-300 text-sm flex items-center justify-center gap-2"
                  >
                    <span>REQUEST BOOKING</span>
                    <Sparkles size={16} />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;
