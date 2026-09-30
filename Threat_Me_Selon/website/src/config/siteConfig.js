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
    googleReviews: "https://www.google.com/search?client=ms-android-nothing-terr1-reo3&hs=xL1V&sa=X&bih=783&hl=en-GB&cs=1&biw=411&sca_esv=76c3b7943658a61d&sxsrf=APpeQntLWllXiEZD5hiT8yzUetn9DjOPKg:1790193890245&kgmid=/g/11b6jgwwy7&q=Bollywood+Eyebrow+Threading+Salon+%26+Spa&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/4&kgs=168c441a112658bb&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/4#"
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
  id: "pmu",
  category: "Permanent Makeup (PMU)",
  subtitle: "Long-Lasting Beauty Enhancement",
  image: imageMasterConfig.services.pmu.path,
  description: "Professional permanent makeup treatments designed to enhance your natural features with beautifully defined, long-lasting results.",
  items: [
    {
      name: "Powder Brows",
      desc: "Create softly shaded, defined brows with a polished powder-effect finish."
    },
    {
      name: "Nano Combo Brows",
      desc: "Combine fine nano hair strokes with soft shading for natural-looking, defined brows."
    },
    {
      name: "Lip Blush Tattoos",
      desc: "Enhance the natural shape, symmetry, and color of the lips with a soft, beautifully tinted finish."
    },
    {
      name: "Eyeliner Tattoos",
      desc: "Define and enhance the eyes with professionally applied semi-permanent eyeliner."
    },
    {
      name: "Tattoo Freckles",
      desc: "Add natural-looking freckles for a subtle, customized beauty enhancement."
    }
  ]
},

{
  id: "threading",
  category: "Threading",
  subtitle: "Precise Facial Hair Removal & Brow Shaping",
  image: imageMasterConfig.services.threading.path,
  description: "Professional threading services designed to create clean, precise, and beautifully defined results with careful attention to detail.",
  items: [
    {
      name: "Eyebrow Threading",
      desc: "Professional shaping and clean-up to create balanced, well-defined eyebrows that complement your face."
    },
    {
      name: "Upper Lip Threading",
      desc: "Quick and precise removal of unwanted hair around the upper lip for a smooth, clean appearance."
    },
    {
      name: "Chin Threading",
      desc: "Gentle removal of unwanted chin hair with attention to detail and a smooth finish."
    },
    {
      name: "Full Face Threading",
      desc: "A complete facial threading service covering the eyebrows, upper lip, chin, cheeks, and other areas as required."
    },
    {
      name: "Forehead Threading",
      desc: "Removes unwanted hair around the forehead and hairline for a cleaner, more polished appearance."
    }
  ]
},

{
  id: "skincare-facials",
  category: "Skincare & Facials",
  subtitle: "Rejuvenation & Deep Skin Nourishment",
  image: imageMasterConfig.services.skincareFacials.path,
  description: "Customized skin treatments designed to refresh, hydrate, and restore a youthful, radiant glow.",
  items: [
    { name: "Customized Facial Treatments", desc: "Targeted deep cleansing, gentle exfoliation, and custom serum application tailored to your skin." },
    { name: "Skin Rejuvenation & Repair", desc: "Nourishing treatments focused on hydration, skin renewal, and a healthy, radiant appearance." },
    { name: "Deep Pore Cleansing & Detox", desc: "Helps remove impurities and refine skin texture for a smoother, clearer complexion." }
  ]
},

{
  id: "waxing-tinting",
  category: "Waxing & Tinting",
  subtitle: "Facial & Body Waxing",
  image: imageMasterConfig.services.waxingTinting.path,
  description: "Professional waxing treatments designed to leave the skin smooth, clean, and beautifully groomed.",
  items: [
    { name: "Professional Facial Waxing", desc: "Gentle waxing for areas including the upper lip, chin, cheeks, and full face." },
    { name: "Full Body Waxing Services", desc: "Professional waxing treatments for smooth, silky skin using suitable wax formulas." }
  ]
},

{
  id: "makeup-artistry",
  category: "Beauty & Event Makeup",
  subtitle: "Bridal, Pageant & Special Occasion",
  image: imageMasterConfig.services.makeupArtistry.path,
  description: "Stunning, camera-ready makeup artistry for weddings, pageants, and special occasions.",
  items: [
    { name: "Bridal Makeup Artistry", desc: "Luxurious wedding makeup customized to bring your desired bridal look to life." },
    { name: "Pageant & Stage Makeup", desc: "High-impact, long-wear makeup designed for stage lighting and photography." },
    { name: "Special Event Glam", desc: "Radiant, polished makeup application for galas, parties, photoshoots, and other special events." }
  ]
},

{
  id: "brows-and-lash",
  category: "Brows & Lashes",
  subtitle: "Lift, Tint & Define",
  image: imageMasterConfig.services.browsAndLash.path,
  description: "Professional brow and lash treatments designed to enhance definition, shape, lift, and natural beauty.",
  items: [
    { name: "Lash Lift", desc: "Lift and curl your natural lashes for a beautifully opened and defined eye appearance." },
    { name: "Brow Lamination", desc: "Smooth, shape, and set brow hairs into a fuller, more defined look." },
    { name: "Brow Tint", desc: "Enhance brow definition and depth with a professionally applied tint." },
    { name: "Henna Brow Tint", desc: "Create beautifully defined brows with a rich henna tint for added color and shape." },
    { name: "Lash Tint", desc: "Darken and define natural lashes for a more noticeable, polished appearance." }
  ]
},

{
  id: "hairstyling",
  category: "Haircut, Hairstyling & Hair Color",
  subtitle: "Professional Hair Transformation\nOnly Available at Threadme @bolloywoodbrows",
  image: imageMasterConfig.services.hairstyling.path,
  description: "Professional hair services tailored to your style, from precision haircuts and styling to beautiful color transformations.",
  items: [
    {
      name: "Haircuts",
      desc: "Professional haircuts tailored to your face shape, personal style, and desired look."
    },
    {
      name: "Hair Styling",
      desc: "Professional styling for everyday looks, special occasions, and events."
    },
    {
      name: "Hair Color",
      desc: "Customized hair color services designed to refresh, enhance, or completely transform your look."
    }
  ]
}
    
  ],
  gallery: [
    // The client will provide gallery images later.
    // Kept empty to display the placeholder message as per requirements.
  ]
};
