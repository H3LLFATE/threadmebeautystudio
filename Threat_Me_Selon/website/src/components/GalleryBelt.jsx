import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadGalleryMedia } from '../config/imageMasterConfig';

const GalleryBelt = () => {
  const navigate = useNavigate();

  const beltItems = useMemo(() => {
    const rawItems = loadGalleryMedia();
    const images = rawItems.filter((m) => m.type === 'image');
    const videos = rawItems.filter((m) => m.type === 'video');

    const getRandom = (arr, fallbackArr) => {
      if (arr.length > 0) return arr[Math.floor(Math.random() * arr.length)];
      if (fallbackArr.length > 0) return fallbackArr[Math.floor(Math.random() * fallbackArr.length)];
      return null;
    };

    const totalItems = 15;
    const sequence = [];

    for (let i = 0; i < totalItems; i++) {
      const pos = i % 5;
      const isVideoSlot = pos === 1 || pos === 3;
      const item = isVideoSlot ? getRandom(videos, images) : getRandom(images, videos);
      if (item) sequence.push({ ...item, uniqueKey: `${isVideoSlot ? 'v' : 'i'}-${i}` });
    }

    return [...sequence, ...sequence, ...sequence];
  }, []);

  const handleImageClick = (item) => {
    navigate('/gallery', { state: { openMediaId: item.id } });
  };

  return (
    <section id="gallery-belt" className="py-0 bg-cream relative overflow-hidden z-10">

      {/* ── Gallery Belt label ── */}
      <div className="text-center pt-12 pb-6">
        <p className="section-label text-xs tracking-[0.25em] text-gold uppercase font-semibold">
          <span>✦</span> Gallery Belt <span>✦</span>
        </p>
        <span className="gold-divider" />
      </div>

      {/* ── Scrolling Belt ── */}
      <div className="relative w-full overflow-hidden select-none">

        {/* Left fade mask */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-cream to-transparent" />
        {/* Right fade mask */}
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-cream to-transparent" />

        <div className="flex w-max animate-marquee items-stretch">
          {beltItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => handleImageClick(item)}
              className="w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[420px] flex-shrink-0 relative overflow-hidden cursor-pointer group bg-black"
              style={{ borderRight: '1px solid rgba(201,168,76,0.15)' }}
            >
              {item.type === 'video' ? (
                <video
                  src={item.path}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.path}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-purple-dark/0 group-hover:bg-purple-dark/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cream/90 text-purple-dark text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 border border-gold/50">
                  View in Gallery
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-12" />
    </section>
  );
};

export default GalleryBelt;
