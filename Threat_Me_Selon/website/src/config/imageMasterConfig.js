/**
 * ==============================================================================
 * 📸 THREADME BEAUTY - WEBSITE MASTER MEDIA FILE
 * ==============================================================================
 * This is the CENTRAL MASTER FILE for all images and videos on the website.
 * 
 * TO CHANGE OR REPLACE ANY IMAGE/VIDEO ON THE WEBSITE:
 * 1. Find the section/component below where the image appears.
 * 2. Replace the file path or URL with your new image/video path or import.
 * 3. Save this file, and the website will automatically update!
 * ==============================================================================
 */

// Import static images so Vite bundles them reliably for GitHub Pages / Vercel
import logoImg from '../assets/images/logo.jpg';
import bgImg from '../assets/images/background.png';
import mainProfileImg from '../assets/images/Main_profile_image_1.png';
import founderImg from '../assets/images/founder.jpg';
import pmuImg from '../assets/images/PMU.jpeg';
import waxImg from '../assets/images/WAXING.jpeg';
import skinImg from '../assets/images/FACIAL.jpeg';
import makeupImg from '../assets/images/EVENTMAKEUP.jpeg';
import threadingImg from '../assets/images/Threding.jpeg';
import hairstylingImg from '../assets/images/hairstyling.jpeg'; 
import browsAndLashImg from '../assets/images/browsandlash.jpeg';
import spaImg from '../assets/images/spa.jpeg';


export const imageMasterConfig = {
  // ----------------------------------------------------------------------------
  // 1. BRANDING & LOGO
  // Appears in: Top Navigation Bar, Mobile Menu, Footer Header
  // ----------------------------------------------------------------------------
  logo: {
    location: "Navbar & Footer Branding Header",
    path: logoImg,
    alt: "ThreadMe Beauty & Style Logo"
  },

  // ----------------------------------------------------------------------------
  // 2. HERO SECTION
  // Appears in: Main Home Page Top Banner Overlay
  // ----------------------------------------------------------------------------
  heroBackground: {
    location: "Home Page Hero Banner Background Image",
    path: bgImg,
    alt: "ThreadMe Salon Background"
  },

  // ----------------------------------------------------------------------------
  // 3. ABOUT US SECTION
  // Appears in: Home Page About Section & Founder Profile Photo
  // ----------------------------------------------------------------------------
  aboutProfile: {
    location: "About Us Section - Founder Profile Image",
    path: mainProfileImg,
    alt: "Indy Kaur - Founder & CEO"
  },

  // ----------------------------------------------------------------------------
  // 4. SERVICES SECTION COVER IMAGES
  // Appears in: Home Page Services Preview & Dedicated /services Page Cards
  // ----------------------------------------------------------------------------
  services: {
    pmu: {
      location: "Service Card 1: PMU",
      path: pmuImg,
      alt: "PMU Services"
    },
    skincareFacials: {
      location: "Service Card 2: Skincare & Facials",
      path: skinImg,
      alt: "Skincare & Facials Services"
    },
    waxingTinting: {
      location: "Service Card 3: Waxing & Tinting",
      path: waxImg,
      alt: "Waxing & Tinting Services"
    },
    threading: {
      location: "Service Card 4: Threading",
      path: threadingImg,
      alt: "Threading Services"
    },
    makeupArtistry: {
      location: "Service Card 5: Beauty & Event Makeup",
      path: makeupImg,
      alt: "Beauty & Event Makeup Services"
    },
    browsAndLash: {
      location: "Service Card 6: Brows & Lash Lift Tint and Lamination",
      path : browsAndLashImg,
      alt: "Brows & Lash Lift Tint and Lamination Services"
    },
    spa: {
      location: "Service Card 7: Spa Services",
      path: spaImg,
      alt: "Spa Services"
    },
    hairstyling: {
      location: "Service Card 8: Hair Styling",
      path: hairstylingImg,
      alt: "Hair Styling Services"
    }
  },

  // ----------------------------------------------------------------------------
  // 5. GALLERY FOLDER PATH
  // Drop photos into subfolders inside: website/src/assets/Gallery/
  // Subfolders only create category tabs when they contain at least 1 image/video!
  // ----------------------------------------------------------------------------
  galleryFolder: "/src/assets/Gallery"
};

/**
 * Utility helper to dynamically load media files inside src/assets/Gallery/
 * Uses Vite's import.meta.glob to ensure all gallery photos/videos get bundled 100% reliably for GitHub!
 */
export const getGalleryData = () => {
  // Glob match valid image and video files inside /src/assets/Gallery/ recursively
  const mediaModules = import.meta.glob(
    '/src/assets/Gallery/**/*.{png,jpg,jpeg,webp,gif,mp4,webm,mov,PNG,JPG,JPEG,WEBP,MP4,WEBM,MOV}',
    { eager: true, import: 'default' }
  );

  const items = [];
  const categoriesSet = new Set();

  Object.entries(mediaModules).forEach(([filePath, src], index) => {
    const fileName = filePath.split('/').pop();
    const pathSegments = filePath.split('/');
    const galleryFolderIndex = pathSegments.findIndex(
      (s) => s.toLowerCase() === 'gallery'
    );

    // Extract subfolder category name if inside a subfolder
    let category = 'General';
    if (galleryFolderIndex !== -1 && pathSegments.length > galleryFolderIndex + 2) {
      const rawCategory = pathSegments[galleryFolderIndex + 1];
      if (rawCategory.toUpperCase() === 'PMU') {
        category = 'PMU';
      } else {
        category = rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1).toLowerCase();
      }
    }

    const ext = fileName.split('.').pop().toLowerCase();
    const isImage = ['png', 'jpg', 'jpeg', 'webp', 'gif'].includes(ext);
    const isVideo = ['mp4', 'webm', 'mov'].includes(ext);

    if (isImage || isVideo) {
      categoriesSet.add(category);

      items.push({
        id: `gallery-file-${index}`,
        type: isVideo ? 'video' : 'image',
        path: src,
        title: fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        category: category
      });
    }
  });

  const categories = ['All', ...Array.from(categoriesSet).sort()];

  return {
    items,
    categories
  };
};

/**
 * Backwards-compatible loader returning array of valid media items saved in Gallery
 */
export const loadGalleryMedia = () => {
  return getGalleryData().items;
};
