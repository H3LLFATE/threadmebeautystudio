import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, X, Send, Sparkles, ExternalLink, Bot, User, MessageSquareText, ChevronDown } from 'lucide-react';

// ─── Knowledge Base ───────────────────────────────────────────────────────────
const generateBotReply = (userQuery) => {
  const q = userQuery.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|hiya|good morning|good afternoon|good evening|howdy|salam|ola|bonjour)/.test(q)) {
    return `Hello! 👋 Welcome to ${siteConfig.business.name}! I'm your personal beauty assistant. I can help you with:\n\n✦ Services & Treatments\n✦ Booking an Appointment\n✦ Location & Hours\n✦ Pricing Information\n✦ About our Founder\n\nWhat can I help you with today?`;
  }

  // Thank you
  if (/thank|thanks|thx|ty\b|appreciate/.test(q)) {
    return `You're so welcome! 💛 It's our pleasure to help. If you have any more questions, I'm always here. Can't wait to see you at the studio!`;
  }

  // Bye / goodbye
  if (/\b(bye|goodbye|see you|cya|take care|ttyl)\b/.test(q)) {
    return `Goodbye! 🌸 We look forward to welcoming you to ${siteConfig.business.name}. Have a wonderful day!`;
  }

  // ── PMU ──
  if (/pmu|permanent makeup|powder brows|nano combo|nano brows|lip blush|lip blush tattoo|eyeliner tattoo|tattoo freckles|freckles/.test(q)) {
return `✨ **Permanent Makeup (PMU):**
• **Powder Brows** — Create softly shaded, defined brows with a polished powder-effect finish.

• **Nano Combo Brows** — Combine fine nano hair strokes with soft shading for natural-looking, defined brows.

• **Lip Blush Tattoos** — Enhance the natural shape, symmetry, and color of the lips with a soft, beautifully tinted finish.

• **Eyeliner Tattoos** — Define and enhance the eyes with professionally applied semi-permanent eyeliner.

• **Tattoo Freckles** — Add natural-looking freckles for a subtle, customized beauty enhancement.

Our PMU treatments are designed to enhance your natural features while creating a polished, long-lasting look. 💛

Want to book? Use our Request Booking form below.`;

}

  // ── Skincare & Facials ──
  if (/skin|facial|face|rejuvenat|pore|glow|cleansi|detox|hydrat|exfoliat|moisture|moisturizer|anti.?age|anti.?ageing|anti.?aging|acne|blackhead|whitehead/.test(q)) {
    return `🌿 **Skincare & Facial Treatments:**\n\n• **Customized Facial Treatments** — Targeted treatments tailored to your skin type and individual concerns.\n• **Deep Pore Cleansing & Detox** — Helps remove impurities and refine skin texture for a smoother, clearer complexion.\n• **Skin Rejuvenation & Repair** — Nourishing treatments focused on hydration, renewal, and a healthy, radiant appearance.\n\nTreatments are designed to refresh, nourish, and restore your skin's natural glow. 🌸`;
  }

  // ── Waxing ──
  if (/wax|lip wax|chin wax|eyebrow wax|full body|body wax|leg wax|arm wax|bikini|sideburn/.test(q)) {
    return `✦ **Waxing Services:**\n\n• **Professional Facial Waxing** — Gentle waxing for areas including the upper lip, chin, cheeks, and full face.\n• **Full Body Waxing Services** — Professional waxing treatments for smooth, silky skin.\n\nOur waxing services are designed to leave your skin smooth, clean, and beautifully groomed. 💕\n\nWant to book? Use our Request Booking form below.`;
  }

  // ── Threading ──
if (/thread|threading|eyebrow thread|brow thread|upper lip thread|lip thread|chin thread|face thread|full face thread|forehead thread/.test(q)) {
  return `✨ **Threading Services:**\n\n• **Eyebrow Threading** — Professional shaping and clean-up to create balanced, well-defined eyebrows that complement your face.\n\n• **Upper Lip Threading** — Quick and precise removal of unwanted hair around the upper lip for a smooth, clean appearance.\n\n• **Chin Threading** — Gentle removal of unwanted chin hair with attention to detail and a smooth finish.\n\n• **Full Face Threading** — A complete facial threading service covering the eyebrows, upper lip, chin, cheeks, and other areas as required.\n\n• **Forehead Threading** — Removes unwanted hair around the forehead and hairline for a cleaner, more polished appearance.\n\nOur threading services provide precise hair removal and detailed shaping for a clean, polished appearance. 💛\n\nWant to book? Use our Request Booking form below.`;
}

  // ── Brows & Lashes ──
  if (/brow|brows|lash|lashes|lamination|henna|lash lift|brow tint|lash tint/.test(q)) {
    return `✨ **Brows & Lashes:**\n\n• **Lash Lift** — Lifts and curls your natural lashes for a beautifully opened and defined eye appearance.\n• **Brow Lamination** — Smooths, shapes, and sets brow hairs for a fuller, more defined look.\n• **Brow Tint** — Enhances brow definition and depth with a professionally applied tint.\n• **Henna Brow Tint** — Creates beautifully defined brows with a rich henna tint for added color and shape.\n• **Lash Tint** — Darkens and defines natural lashes for a more noticeable, polished appearance.\n\nWant to book? Use our Request Booking form below.`;
  }

  // ── Makeup & Beauty ──
  if (/makeup|make.?up|bridal|bride|wedding|event|gala|pageant|stage|prom|glam|contour|smokey|full.?glam|airbrush/.test(q)) {
    return `💄 **Beauty & Event Makeup:**\n\n• **Bridal Makeup Artistry** — Luxurious wedding makeup customized to bring your desired bridal look to life.\n• **Pageant & Stage Makeup** — High-impact, long-wear makeup designed for stage lighting and photography.\n• **Special Event Glam** — Radiant, polished makeup for galas, parties, photoshoots, and other special occasions.\n\nWant to book? Use our Request Booking form below.`;
  }

  // ── Haircut, Hair Styling & Hair Color ──
if (/haircut|hair cut|hair style|hairstyle|hair styling|styling|hair color|hair colour|coloring|colouring|hair dye|dye/.test(q)) {
  return `💇 **Haircut, Hairstyling & Hair Color:**

• **Haircuts** — Professional haircuts tailored to your face shape, personal style, and desired look.

• **Hair Styling** — Professional styling for everyday looks, special occasions, and events.

• **Hair Color** — Customized hair color services designed to refresh, enhance, or transform your look.

Whether you're looking for a fresh haircut, a styled look, or a new hair color, our services are tailored to your desired result. 💛

Want to book? Use our Request Booking form below.`;
}

  // ── Hours ──
  if (/hour|open|close|schedule|time|day|when|available|availability|weekend|weekday|monday|tuesday|wednesday|thursday|friday|saturday|sunday/.test(q)) {
    const hoursText = siteConfig.business.hours
      ? siteConfig.business.hours.map(h => `• ${h.day}: ${h.time}`).join('\n')
      : '• Monday – Friday: 10:00 am – 7:00 pm\n• Saturday: 10:00 am – 6:00 pm\n• Sunday: 11:00 am – 5:00 pm';
    return `⏰ **Business Hours:**\n\n${hoursText}\n\n📅 Appointments are recommended — walk-ins welcome based on availability!`;
  }

  // ── Location / Address ──
  if (/location|address|where|direction|map|find you|portland|studio|salon|shop|place/.test(q)) {
    return `📍 **Our Studio Location:**\n\n${siteConfig.business.address}\n\nWe're conveniently located in Portland, Oregon — a welcoming, intimate studio space designed for your comfort and privacy.\n\nNeed directions? Drop us a message on WhatsApp and we'll guide you right to us! 🗺️`;
  }

  // ── Contact ──
  if (/phone|call|contact|email|reach|whatsapp|message|text|dm|direct/.test(q)) {
    return `📞 **Get In Touch:**\n\n• 📱 Phone / WhatsApp: ${siteConfig.business.phone}\n• 📧 Email: ${siteConfig.business.email}\n• 📍 Address: ${siteConfig.business.address}\n\nThe quickest way to reach us is via **WhatsApp** — tap the green button below to start a chat right now!`;
  }

  // ── About Founder / Business ──
  if (/who|founder|indy|kaur|owner|about|background|experience|story|history|credential|qualify|qualif/.test(q)) {
    return `👑 **About Indy Kaur — Founder & CEO:**\n\nIndy Kaur is a world-class beauty artist with **over 20 years of industry experience**. Before bringing her artistry to Portland, Oregon, she owned and operated **4 successful beauty salons in Malaysia**.\n\nShe holds a **Bachelor's Degree in Business Management** and is a certified expert in:\n✦ Permanent Makeup (PMU)\n✦ Advanced Skincare\n✦ Eyebrow Artistry\n✦ Bridal & Event Makeup\n\nHer mission: to give every client an experience that celebrates their natural beauty. 💛`;
  }

  // ── Booking & Pricing ──
  if (/book|appointment|reserv|price|cost|how much|rate|fee|pay|deposit|cancell|reschedul|slot|session/.test(q)) {
    return `📅 **Booking an Appointment:**\n\nYou can book in 3 easy ways:\n\n1. **Website Form** — Fill out the Request Booking form at the bottom of this page\n2. **WhatsApp** — Tap the green button below for instant messaging\n3. **Phone** — Call us at ${siteConfig.business.phone}\n\n💡 **Tips:**\n• We recommend booking at least 2–3 days in advance\n• PMU & Bridal packages may require a consultation first\n• Deposits may be required for certain treatments\n\nWe'll confirm your appointment within 24 hours!`;
  }

  // ── Parking ──
  if (/park|parking|drive|car|uber|lyft|transit|bus/.test(q)) {
    return `🚗 **Getting Here:**\n\nWe're located at ${siteConfig.business.address}.\n\nParking is available nearby. For specific directions or if you have trouble finding us, just send us a WhatsApp message — we'll guide you right to the studio! 🗺️`;
  }

  // ── Aftercare ──
  if (/aftercare|after care|heal|recover|touch.?up|touch up|fading|last|how long|longevity|result/.test(q)) {
    return `💊 **Aftercare & Results:**\n\n**PMU & Powder Brows:**\n✦ Results last 1–3 years with proper care\n✦ Avoid direct sun, swimming, and heavy sweating for 2 weeks post-treatment\n✦ A touch-up session is recommended after 4–6 weeks\n\n**Waxing:**\n✦ Keep the area clean and moisturized for 24 hours\n✦ Avoid direct sun exposure for 24 hours\n\n**Facials:**\n✦ Avoid heavy makeup for 24 hours after treatment\n✦ Stay hydrated and use SPF daily!\n\nWe'll provide full aftercare instructions after every treatment 🌸`;
  }

  // ── Social Media ──
  if (/instagram|facebook|social|follow|ig|fb|tiktok/.test(q)) {
    return `📱 **Follow Us on Social Media:**\n\nStay up to date with our latest transformations, tips, and promotions!\n\n${siteConfig.social.instagram ? `• Instagram: ${siteConfig.social.instagram}` : ''}\n${siteConfig.social.facebook ? `• Facebook: ${siteConfig.social.facebook}` : ''}\n\nWe love seeing our clients' before & afters — tag us in your photos! 💛`;
  }

  // ── Safety & Hygiene ──
  if (/safe|hygiene|clean|sterile|allergic|allergy|reaction|sensitive|covid|saniti/.test(q)) {
    return `🛡️ **Safety & Hygiene Standards:**\n\nYour health and safety are our top priority:\n\n✦ All tools are sanitized or single-use\n✦ Our studio follows strict hygiene protocols\n✦ We use hypoallergenic, premium-grade products\n✦ Patch tests are available upon request for sensitive clients\n✦ Please let us know of any allergies during booking\n\nWe want your experience to be completely safe and comfortable 💕`;
  }

  // ── Fallback ──
  return `Thank you for your message! 🌸 I'm here to help with questions about:\n\n✦ Services (Eyebrows, PMU, Skincare, Waxing, Makeup)\n✦ Booking & Appointments\n✦ Location & Business Hours\n✦ Aftercare & Results\n✦ About Indy Kaur\n\nCould you rephrase your question, or tap the green button below to chat directly with a real person on WhatsApp? We'd love to help! 💛`;
};


// ─── Chatbot Component ─────────────────────────────────────────────────────────
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! 👋 Welcome to ${siteConfig.business.name}. I'm your personal beauty assistant — ask me anything about our services, hours, booking, or how to find us! ✨`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const formattedPhone = siteConfig.business.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone.length === 10 ? '1' + formattedPhone : formattedPhone}?text=${encodeURIComponent("Hi ThreadMe Beauty! I'd like to get in touch with a real person 💛")}`;

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate realistic typing delay (600–1200ms)
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
      const reply = generateBotReply(text);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, delay);
  };

  const quickQuestions = [
    "What services do you offer?",
    "How do I book?",
    "Opening hours?",
    "Where are you located?",
    "About Indy Kaur",
    "Aftercare tips?",
  ];

  return (
    <>
      {/* Floating Launcher */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-purple-dark text-cream px-4 py-2 rounded-full border border-gold/50 shadow-xl text-xs font-medium">
            <Sparkles size={13} className="text-gold" />
            <span>Ask us anything!</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-purple-dark hover:bg-purple text-cream flex items-center justify-center shadow-2xl border-2 border-gold transition-all duration-300 hover:scale-110 relative"
          aria-label="Toggle Chatbot"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={26} />}
          {/* Online indicator */}
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[600px] max-h-[82vh] bg-white border border-gold/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">

          {/* ── Header ── */}
          <div className="bg-purple-dark px-4 py-3.5 flex items-center justify-between border-b border-gold/20 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center">
                <Bot size={18} className="text-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-sm font-semibold text-cream">ThreadMe Assistant</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                </div>
                <p className="text-[10px] text-cream/60 tracking-wide">Online · Responds instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-cream/50 hover:text-gold p-1.5 rounded-full hover:bg-cream/10 transition-colors"
              aria-label="Close chat"
            >
              <ChevronDown size={20} />
            </button>
          </div>

          {/* ── Messages ── */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-4 py-4 space-y-4 bg-[#fdf9f4]">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-1.5">
                {/* Avatar + Bubble */}
                <div className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs ${
                    msg.sender === 'user'
                      ? 'bg-purple text-cream'
                      : 'bg-purple-dark text-gold border border-gold/30'
                  }`}>
                    {msg.sender === 'user' ? <User size={13} /> : <Bot size={13} />}
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[78%] px-3.5 py-2.5 text-[12.5px] leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-purple text-cream rounded-2xl rounded-br-sm'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-bl-sm whitespace-pre-line'
                  }`}>
                    {msg.text}
                    <span className={`block text-[9px] mt-1.5 ${msg.sender === 'user' ? 'text-cream/60 text-right' : 'text-gray-400'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>

                {/* WhatsApp escalation under every bot message */}
                {msg.sender === 'bot' && (
                  <div className="ml-9">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[10.5px] px-3 py-1.5 rounded-full font-medium shadow-sm transition-all hover:scale-[1.02] border border-emerald-400"
                    >
                      <MessageSquareText size={12} />
                      <span>Didn't get your answer? Chat with us on WhatsApp</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-purple-dark text-gold border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Bot size={13} />
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5 items-center">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Quick Questions ── */}
          <div className="px-3 py-2 bg-[#fdf9f4] border-t border-gray-100 flex gap-2 overflow-x-auto no-scrollbar flex-shrink-0">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap text-[10px] font-medium bg-white hover:bg-gold/15 text-purple-dark border border-gray-200 hover:border-gold/60 px-3 py-1.5 rounded-full transition-all flex-shrink-0 shadow-sm"
              >
                {q}
              </button>
            ))}
          </div>

          {/* ── Input Bar ── */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="px-3 py-3 bg-white border-t border-gray-100 flex items-center gap-2 flex-shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 text-xs bg-[#fdf9f4] border border-gray-200 focus:border-gold/60 rounded-full px-4 py-2.5 text-gray-800 focus:outline-none transition-colors placeholder:text-gray-400"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-dark hover:bg-purple disabled:opacity-40 text-cream border border-gold/30 transition-all flex-shrink-0 hover:scale-110"
              aria-label="Send"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
