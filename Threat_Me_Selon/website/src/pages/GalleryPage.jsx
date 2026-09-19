import React, { useState, useMemo, useEffect } from 'react';
import { getGalleryData } from '../config/imageMasterConfig';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Play, X, Image as ImageIcon, FolderCheck } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeMedia, setActiveMedia] = useState(null);
  const location = useLocation();

  // Load gallery data (items and subfolder category names)
  const { items: allMedia, categories } = useMemo(() => getGalleryData(), []);

  // Auto-open media if clicked from Gallery Belt on home page
  useEffect(() => {
    if (location.state?.openMediaId) {
      const found = allMedia.find((m) => m.id === location.state.openMediaId);
      if (found) {
        setActiveMedia(found);
      }
    }
  }, [location.state, allMedia]);

  // Filter media based on selected category tab
  const filteredMedia = useMemo(() => {
    if (selectedCategory === 'All') return allMedia;
    return allMedia.filter((m) => m.category === selectedCategory);
  }, [selectedCategory, allMedia]);

  return (
    <div className="pt-24 min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-purple-dark text-cream py-16 px-6 md:px-12 border-b-2 border-gold relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-sans tracking-widest uppercase mb-3">
            <Link to="/" className="hover:underline flex items-center gap-1">
              <ArrowLeft size={12} /> Home
            </Link>
            <span>/</span>
            <span>Gallery</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-4">
            Studio Portfolio & Gallery
          </h1>
          <p className="text-cream-300 font-light text-lg max-w-2xl mx-auto">
            Select a category below to explore our beauty treatments and salon transformations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Dynamic Category Filter Tabs (Eyebrows, PMU, Studio, etc.) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-none text-xs uppercase tracking-widest font-semibold transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-purple text-cream border-gold shadow-md'
                  : 'bg-white text-gray-700 border-cream-300 hover:border-gold hover:text-purple'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (No text on images as requested) */}
        {filteredMedia.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMedia.map((item, index) => (
              <div
                key={item.id || index}
                onClick={() => setActiveMedia(item)}
                className="relative h-80 rounded-none overflow-hidden group border border-gold/30 bg-purple-dark cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                {item.type === 'video' ? (
                  <div className="relative w-full h-full">
                    <video
                      src={item.path}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover filter brightness-95 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-purple-dark/30 flex items-center justify-center group-hover:bg-purple-dark/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gold/90 text-purple-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={20} className="fill-purple-dark ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.path}
                    alt=""
                    className="w-full h-full object-cover filter brightness-95 transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Subtle Inner Blunt Frame */}
                <div className="absolute inset-2 border border-gold/20 pointer-events-none group-hover:border-gold/60 transition-colors"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-cream-300 rounded-none p-12 max-w-xl mx-auto">
            <ImageIcon size={48} className="mx-auto text-gold mb-4" />
            <h3 className="text-2xl font-serif text-purple-dark mb-2">No Images in "{selectedCategory}" Yet</h3>
            <p className="text-gray-600 font-light mb-4 text-sm leading-relaxed">
              Add your photos into the <code className="bg-cream-200 px-2 py-0.5 text-xs font-mono font-bold">Threat_Me_Selon\Gallery\{selectedCategory}</code> folder to automatically display them here!
            </p>
          </div>
        )}

        {/* Dynamic Folder Instructions Card */}
        <div className="mt-16 bg-cream-50 border border-gold/40 p-8 rounded-none max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-gold font-sans text-xs font-bold uppercase tracking-widest">
            <FolderCheck size={16} /> Automatic Subfolder Gallery
          </div>
          <h4 className="text-2xl font-serif text-purple-dark font-bold">
            How to Add Images by Category
          </h4>
          <p className="text-gray-600 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Place your photos or videos into the respective subfolders inside <code className="text-purple font-semibold bg-cream-200 px-2 py-0.5 font-mono">website/src/assets/Gallery/</code> (e.g. <code className="font-bold">EYEBROWS</code>, <code className="font-bold">PMU</code>, <code className="font-bold">STUDIO</code>). Any new folder you create automatically appears as a category tab above!
          </p>
        </div>
      </div>

      {/* Lightbox Modal when Image is Tapped */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-purple-dark border border-gold rounded-none overflow-hidden p-2 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 text-gold hover:text-white bg-black/60 p-2 rounded-none border border-gold/40 z-20"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="w-full flex justify-center items-center max-h-[85vh] overflow-hidden bg-black">
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.path}
                  controls
                  autoPlay
                  className="max-h-[85vh] w-auto max-w-full object-contain"
                />
              ) : (
                <img
                  src={activeMedia.path}
                  alt=""
                  className="max-h-[85vh] w-auto max-w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
