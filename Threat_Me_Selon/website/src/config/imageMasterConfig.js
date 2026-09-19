/**
 * ==============================================================================
 * 📸 THREADME BEAUTY - WEBSITE MASTER MEDIA FILE
 * ==============================================================================
 * This is the CENTRAL MASTER FILE for all images and videos on the website.
 * 
 * TO CHANGE OR REPLACE ANY IMAGE/VIDEO ON THE WEBSITE:
 * 1. Find the section/component below where the image appears.
 * 2. Replace the file path or URL with your new image/video path.
 * 3. Save this file, and the website will automatically update!
 * ==============================================================================
 */

export const imageMasterConfig = {
  // ----------------------------------------------------------------------------
  // 1. BRANDING & LOGO
  // Appears in: Top Navigation Bar, Mobile Menu, Footer Header
  // ----------------------------------------------------------------------------
  logo: {
    location: "Navbar & Footer Branding Header",
    path: "/src/assets/images/logo.jpg",
    alt: "ThreadMe Beauty & Style Logo"
  },

  // ----------------------------------------------------------------------------
  // 2. HERO SECTION
  // Appears in: Main Home Page Top Banner Overlay
  // ----------------------------------------------------------------------------
  heroBackground: {
    location: "Home Page Hero Banner Background Image",
    path: "/src/assets/images/background.png",
    alt: "ThreadMe Salon Background"
  },

  // ----------------------------------------------------------------------------
  // 3. ABOUT US SECTION
  // Appears in: Home Page About Section & Founder Profile Photo
  // ----------------------------------------------------------------------------
  aboutProfile: {
    location: "About Us Section - Founder Profile Image",
    path: "/src/assets/images/Main_profile_image_1.png",
    alt: "Indy Kaur - Founder & CEO"
  },

  // ----------------------------------------------------------------------------
  // 4. SERVICES SECTION COVER IMAGES
  // Appears in: Home Page Services Preview & Dedicated /services Page Cards
  // ----------------------------------------------------------------------------
  services: {
    eyebrowsPmu: {
      location: "Service Card 1: Eyebrows & PMU",
      path: "/src/assets/images/founder.jpg",
      alt: "Eyebrows & PMU Services"
    },
    skincareFacials: {
      location: "Service Card 2: Skincare & Facials",
      path: "/src/assets/images/founder.jpg",
      alt: "Skincare & Facials Services"
    },
    waxingTinting: {
      location: "Service Card 3: Waxing & Tinting",
      path: "/src/assets/images/founder.jpg",
      alt: "Waxing & Tinting Services"
    },
    makeupArtistry: {
      location: "Service Card 4: Beauty & Event Makeup",
      path: "/src/assets/images/founder.jpg",
      alt: "Beauty & Event Makeup Services"
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
 * ONLY creates category tabs for subfolders that actually contain image or video files.
 * Empty subfolders do NOT generate category tabs.
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
      // Only include category if it actually contains media!
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
