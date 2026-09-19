import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, X, Send, Sparkles, Phone, ExternalLink, Bot, User, MessageSquareText } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! 👋 Welcome to ${siteConfig.business.name}. I'm your virtual beauty assistant. How can I help you today? Feel free to ask about our eyebrow threading, PMU, skincare, location, hours, or booking an appointment!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Direct WhatsApp link
  const formattedPhone = siteConfig.business.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone.length === 10 ? '1' + formattedPhone : formattedPhone}?text=${encodeURIComponent('Hi ThreadMe Beauty! I have a question regarding your services...')}`;

  // Knowledge Base Answer Generator
  const generateBotReply = (userQuery) => {
    const q = userQuery.toLowerCase();

    if (q.includes('eyebrow') || q.includes('pmu') || q.includes('threading') || q.includes('shading') || q.includes('lip') || q.includes('blush') || q.includes('brow')) {
      return `✨ **Eyebrows & PMU Services:**\nWe specialize in Eyebrow Threading & Shaping, Powder Brows/Shading, Permanent Makeup (PMU), and Lip Blush. Founder Indy Kaur has over 20 years of expert artistry!`;
    }

    if (q.includes('skincare') || q.includes('facial') || q.includes('skin') || q.includes('rejuvenat') || q.includes('pore')) {
      return `🌿 **Skincare & Facials:**\nWe offer Customized Facial Treatments, Deep Pore Cleansing & Detox, and Skin Rejuvenation therapies designed to give your skin a youthful, radiant glow.`;
    }

    if (q.includes('wax') || q.includes('tint') || q.includes('lash')) {
      return `✦ **Waxing & Tinting:**\nWe provide gentle Facial & Full Body Waxing for smooth skin, plus Lash & Brow Tinting to naturally define your eyes.`;
    }

    if (q.includes('makeup') || q.includes('bridal') || q.includes('event') || q.includes('pageant')) {
      return `💄 **Beauty & Event Makeup:**\nWe offer high-definition, camera-ready makeup for Weddings/Bridal glam, Pageant & Stage competitions, and Special Events.`;
    }

    if (q.includes('hour') || q.includes('open') || q.includes('schedule') || q.includes('time') || q.includes('day')) {
      const hoursText = siteConfig.business.hours
        ? siteConfig.business.hours.map(h => `${h.day}: ${h.time}`).join('\n')
        : 'Monday – Friday: 10:00 am – 7:00 pm\nSaturday: 10:00 am – 6:00 pm\nSunday: 11:00 am – 5:00 pm';
      return `⏰ **Business Hours:**\n${hoursText}`;
    }

    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('direction') || q.includes('portland')) {
      return `📍 **Our Location:**\nWe are located at:\n${siteConfig.business.address}`;
    }

    if (q.includes('phone') || q.includes('call') || q.includes('contact') || q.includes('email') || q.includes('reach')) {
      return `📞 **Contact Information:**\n• Phone: ${siteConfig.business.phone}\n• Email: ${siteConfig.business.email}\n• Address: ${siteConfig.business.address}`;
    }

    if (q.includes('who') || q.includes('founder') || q.includes('indy') || q.includes('owner') || q.includes('about')) {
      return `👑 **About Indy Kaur:**\nIndy Kaur is the Founder & CEO of ThreadMe Beauty & Style. With over 20 years of experience and formerly owning 4 successful beauty salons in Malaysia, she brings world-class beauty artistry to Portland, OR!`;
    }

    if (q.includes('book') || q.includes('appointment') || q.includes('reserve') || q.includes('price') || q.includes('cost')) {
      return `📅 **Booking an Appointment:**\nYou can request an appointment right on our website! Simply use the Request Booking form at the bottom of the Home page or Services page.`;
    }

    return `Thank you for your message! We offer Eyebrow Threading, PMU, Skincare, Waxing, and Event Makeup at our Portland studio. How else can I assist you?`;
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Simulate AI bot response with realistic typing delay
    setTimeout(() => {
      const botReplyText = generateBotReply(text);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const quickQuestions = [
    "What services do you offer?",
    "Opening hours?",
    "Where are you located?",
    "How do I book?"
  ];

  return (
    <>
      {/* Floating Launcher Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-purple-dark text-cream px-3.5 py-2 rounded-full border border-gold/40 shadow-xl text-xs font-medium animate-pulse">
            <Sparkles size={14} className="text-gold" />
            <span>Chat with us!</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-purple hover:bg-purple-light text-cream flex items-center justify-center shadow-2xl border-2 border-gold transition-all duration-300 transform hover:scale-110 relative"
          aria-label="Toggle Chatbot"
        >
          {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></span>
        </button>
      </div>

      {/* Chatbot Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[580px] max-h-[80vh] bg-cream border-2 border-gold/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-purple-dark text-cream p-4 border-b border-gold/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cream/10 border border-gold/40 flex items-center justify-center text-gold">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-cream flex items-center gap-1.5">
                  ThreadMe Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                </h3>
                <p className="text-[11px] text-cream-300 font-light">Online · Responds instantly</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-cream-300 hover:text-gold p-1.5 rounded-full hover:bg-cream/10 transition-colors"
              aria-label="Close Chatbot"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-cream/50">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                <div className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                      msg.sender === 'user' ? 'bg-purple text-cream' : 'bg-purple-dark text-gold border border-gold/30'
                    }`}
                  >
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  <div className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-purple text-cream rounded-tr-none'
                      : 'bg-white text-gray-800 border border-cream-300 rounded-tl-none whitespace-pre-line'
                  }`}>
                    {msg.text}
                    <span className={`block text-[9px] mt-1.5 ${msg.sender === 'user' ? 'text-cream/70' : 'text-gray-400'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Escalation Action Button under Bot Messages */}
                {msg.sender === 'bot' && (
                  <div className="ml-9 mt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] px-3.5 py-2 rounded-xl font-medium shadow-sm transition-all border border-emerald-500 hover:scale-[1.02]"
                    >
                      <MessageSquareText size={14} />
                      <span>Didn't answer your question? Talk on WhatsApp</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Option Chips */}
          <div className="px-3 py-2 bg-cream-100 border-t border-cream-300 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap text-[10px] font-medium bg-white hover:bg-gold/20 text-purple-dark border border-cream-300 hover:border-gold px-3 py-1.5 rounded-full transition-all flex-shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-cream-300 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 text-xs bg-cream-50 border border-cream-300 rounded-xl px-3.5 py-2.5 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="bg-purple hover:bg-purple-light disabled:opacity-50 text-cream p-2.5 rounded-xl border border-gold/30 transition-all flex-shrink-0"
              aria-label="Send Message"
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}
    </>
  );
};

export default Chatbot;
