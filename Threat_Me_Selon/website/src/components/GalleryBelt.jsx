import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadGalleryMedia } from '../config/imageMasterConfig';

const GalleryBelt = () => {
  const navigate = useNavigate();

  // Generate belt sequence where for every 5 items: 3 are images and 2 are videos
  const beltItems = useMemo(() => {
    const rawItems = loadGalleryMedia();
    const images = rawItems.filter((m) => m.type === 'image');
    const videos = rawItems.filter((m) => m.type === 'video');

    const getRandom = (arr, fallbackArr) => {
      if (arr.length > 0) {
        return arr[Math.floor(Math.random() * arr.length)];
      }
      if (fallbackArr.length > 0) {
        return fallbackArr[Math.floor(Math.random() * fallbackArr.length)];
      }
      return null;
    };

    // Pattern for 15 items (3 blocks of 5 items: [Image, Video, Image, Video, Image])
    const totalItems = 15;
    const sequence = [];

    for (let i = 0; i < totalItems; i++) {
      const pos = i % 5;
      // Positions 1 and 3 in every 5-item block are videos (2 out of 5)
      const isVideoSlot = pos === 1 || pos === 3;

      if (isVideoSlot) {
        const item = getRandom(videos, images);
        if (item) sequence.push({ ...item, uniqueKey: `video-${i}` });
      } else {
        const item = getRandom(images, videos);
        if (item) sequence.push({ ...item, uniqueKey: `image-${i}` });
      }
    }

    // Triple sequence for infinite smooth belt scrolling
    return [...sequence, ...sequence, ...sequence];
  }, []);

  const handleImageClick = (item) => {
    navigate('/gallery', { state: { openMediaId: item.id } });
  };

  return (
    <section id="gallery" className="py-12 bg-cream relative overflow-hidden z-10">
      {/* Infinite Rotating Belt - Only the belt of images touching side by side */}
      <div className="relative w-full overflow-hidden select-none">
        <div className="flex w-max animate-marquee space-x-0 items-center">
          {beltItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => handleImageClick(item)}
              className="w-72 sm:w-80 h-96 sm:h-[420px] flex-shrink-0 relative overflow-hidden cursor-pointer group bg-black"
            >
              {item.type === 'video' ? (
                <video
                  src={item.path}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.path}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation for smooth continuous belt marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GalleryBelt;
