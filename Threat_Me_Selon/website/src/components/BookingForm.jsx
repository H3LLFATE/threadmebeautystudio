import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Phone, Mail, MapPin, CheckCircle2, Calendar, Sparkles, CalendarHeart, ExternalLink } from 'lucide-react';

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

    const formattedPhone = siteConfig.business.whatsapp.replace(/[^0-9]/g, '');
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

  // Booking locations data
  const bookingLocations = [
    {
      name: siteConfig.business.locations[0].name,
      area: siteConfig.business.locations[0].area,
      url: siteConfig.links.bookingDowntown,
      platform: 'Booksy',
    },
    {
      name: siteConfig.business.locations[1].name,
      area: siteConfig.business.locations[1].area,
      url: siteConfig.links.bookingTannersbourne,
      platform: 'Vagaro',
    },
  ];

  return (
    <section id="contact" className="section-padding scroll-mt-24 relative bg-cream border-t border-gold/20">
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

              {/* Locations */}
              <div className="space-y-5">
                {siteConfig.business.locations.map((location) => (
                  <div key={location.name} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-purple/20 bg-cream-50 flex items-center justify-center flex-shrink-0 text-purple shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-sans font-bold tracking-widest text-gold uppercase mb-1">
                        {location.name}
                      </span>
                      <p className="text-gray-500 text-xs font-medium mb-1">{location.area}</p>
                      <p className="text-gray-800 font-light leading-relaxed text-base">{location.address}</p>
                      <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center gap-1.5 mt-1.5 text-gray-900 font-medium hover:text-purple transition-colors">
                        <Phone size={14} className="text-purple" />
                        {location.phone}
                      </a>
                      <div className="mt-3 space-y-1 text-xs font-light text-gray-700">
                        <span className="block text-[10px] font-sans font-bold tracking-widest text-gold uppercase">Hours</span>
                        {location.hours.map((hours) => (
                          <div key={hours.day} className="flex justify-between gap-4 border-b border-cream-300 pb-1">
                            <span className="font-medium text-gray-800">{hours.day}</span>
                            <span className="text-gray-600 whitespace-nowrap">{hours.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Booking Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-cream-300 relative">

              {/* ── Dual-Location Booking Bubble Box ── */}
              <div className="bg-gradient-to-br from-purple-dark/[0.03] to-gold/[0.06] border border-gold/30 rounded-2xl p-5 sm:p-6 mb-2">
                <div className="text-center mb-5">
                  <div className="inline-flex items-center gap-2 bg-purple-dark/10 px-4 py-1.5 rounded-full mb-3">
                    <CalendarHeart size={15} className="text-purple" />
                    <span className="text-xs font-bold tracking-widest text-purple-dark uppercase">Online Booking</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif text-purple-dark font-semibold">
                    Click below to book at your preferred location
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-light">Please select the correct location to avoid any booking mix-ups</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bookingLocations.map((loc) => (
                    <div
                      key={loc.name}
                      className="bg-white rounded-xl border border-cream-300 p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-gold/50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-dark/10 border border-purple/20 flex items-center justify-center mb-3 group-hover:bg-purple-dark/15 transition-colors">
                        <MapPin size={18} className="text-purple" />
                      </div>
                      <p className="text-sm font-serif font-semibold text-purple-dark leading-snug">{loc.name}</p>
                      <p className="text-[11px] text-gray-400 font-medium mt-0.5 mb-4">{loc.area}</p>
                      <a
                        href={loc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-purple hover:bg-purple-light text-cream text-xs font-semibold tracking-wider uppercase px-4 py-3 rounded-xl border border-gold/30 hover:border-gold shadow-sm transition-all duration-300 hover:scale-[1.02] mt-auto"
                      >
                        <Calendar size={14} />
                        <span>Book Now</span>
                        <ExternalLink size={11} className="opacity-60" />
                      </a>
                      <span className="text-[10px] text-gray-400 mt-2 font-light">via {loc.platform}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 border-t border-gold/30" />
                <span className="text-[10px] font-sans font-semibold tracking-widest text-gold uppercase">or request a booking</span>
                <div className="flex-1 border-t border-gold/30" />
              </div>
              
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
