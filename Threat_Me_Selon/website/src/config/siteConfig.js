import { imageMasterConfig } from './imageMasterConfig';

export const siteConfig = {
  business: {
    name: "ThreadMe Beauty & Style",
    founder: "Indy Kaur",
    title: "Founder & CEO",
    phone: "(971) 447-5050",
    email: "info@threadmebeautystudio.com",
    website: "https://threadmebeautystudio.com",
    address: "1850 S River Dr, Portland, OR 97201, United States",
    hours: [
      { day: "Monday – Friday", time: "10:00 am – 7:00 pm" },
      { day: "Saturday", time: "10:00 am – 6:00 pm" },
      { day: "Sunday", time: "11:00 am – 5:00 pm" }
    ]
  },
  social: {
    instagram: "https://www.instagram.com/threadmebeauty_185th",
    facebook: "https://www.facebook.com/eyebrowthreadinghillsboro/"
  },
  assets: {
    logo: imageMasterConfig.logo.path,
    hero: imageMasterConfig.heroBackground.path,
    founder: imageMasterConfig.aboutProfile.path,
    background: imageMasterConfig.heroBackground.path
  },
  links: {
    booking: "#contact", // Smooth scroll to contact & booking section
    googleReviews: "#" // Placeholder
  },
  content: {
    heroTitle: "Elegant Beauty. Masterful Artistry.",
    heroSubtitle: "Eyebrows · PMU · Skincare · Makeup",
    heroExperience: "20+ Years of Beauty Industry Experience",
    aboutTitle: "About Me",
    aboutText: "I'm Indy Kaur, Founder & CEO of ThreadMe Beauty & Style. With over 20 years of experience in the beauty industry, my passion has always been helping people look and feel their best. From owning four successful beauty salons in Malaysia to building ThreadMe Beauty in the United States, my journey has been driven by dedication, creativity, and excellence.",
    aboutText2: "I specialize in makeup artistry, permanent makeup (PMU), eyebrow threading and shaping, skincare, and advanced beauty treatments. My mission is to create a welcoming experience where every client leaves feeling more confident, beautiful, and empowered."
  },
  services: [
    {
      id: "eyebrows-pmu",
      category: "Eyebrows & PMU",
      subtitle: "Threading, Shaping, Shading & PMU",
      image: "/src/assets/images/founder.jpg",
      description: "Master eyebrow shaping and long-lasting permanent makeup tailored to highlight your natural facial features.",
      items: [
        { name: "Eyebrow Threading & Shaping", desc: "Precise hair removal creating clean, defined arches tailored to your face shape." },
        { name: "Eyebrow Shading & Powder Brows", desc: "Soft, misty powder finish for fuller, naturally defined brows." },
        { name: "Permanent Makeup (PMU)", desc: "Expert cosmetic tattooing for effortlessly flawless, smudge-free brows." },
        { name: "Lip Blush", desc: "Enhance natural lip contour, symmetry, and long-lasting rosy color tint." }
      ]
    },
    {
      id: "skincare-facials",
      category: "Skincare & Facials",
      subtitle: "Rejuvenation & Deep Skin Nourishment",
      image: "/src/assets/images/founder.jpg",
      description: "Customized skin treatments designed to refresh, hydrate, and restore a youthful, radiant glow.",
      items: [
        { name: "Customized Facial Treatments", desc: "Targeted deep cleansing, gentle exfoliation, and custom serum application." },
        { name: "Skin Rejuvenation & Repair", desc: "Nourishing anti-aging and hydration therapies for healthy, glowing skin." },
        { name: "Deep Pore Cleansing & Detox", desc: "Clears impurities and refines skin texture for a smooth, clear canvas." }
      ]
    },
    {
      id: "waxing-tinting",
      category: "Waxing & Tinting",
      subtitle: "Facial/Body Waxing & Lash Enhancement",
      image: "/src/assets/images/founder.jpg",
      description: "Gentle, professional waxing for smooth skin, complemented by brow and lash tinting definition.",
      items: [
        { name: "Professional Facial Waxing", desc: "Gentle waxing for upper lip, chin, cheeks, and full face." },
        { name: "Full Body Waxing Services", desc: "Silky smooth skin using sensitive-skin friendly wax formulas." },
        { name: "Lash & Brow Tinting", desc: "Define and darken your brows and lashes naturally with custom-blended tints." }
      ]
    },
    {
      id: "makeup-artistry",
      category: "Beauty & Event Makeup",
      subtitle: "Bridal, Pageant & Special Occasion",
      image: "/src/assets/images/founder.jpg",
      description: "Stunning HD camera-ready makeup artistry for weddings, pageants, and high-profile special events.",
      items: [
        { name: "Bridal Makeup Artistry", desc: "Luxurious wedding glam customized to bring your dream bridal look to life." },
        { name: "Pageant & Stage Makeup", desc: "High-impact, long-wear makeup engineered for stage lights and photography." },
        { name: "Special Event Glam", desc: "Radiant, flawless makeup application for galas, parties, and photoshoots." }
      ]
    }
  ],
  gallery: [
    // The client will provide gallery images later.
    // Kept empty to display the placeholder message as per requirements.
  ]
};
