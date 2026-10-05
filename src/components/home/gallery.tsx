'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiZoomIn,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

import {
  blog1,
  blog2,
  blog3,
  blog4,
  banner3,
  bhk,
  banner4,
  civil,
  horiculture,
  drainage,
  ser1,
  ser2,
  ser3,
} from '@/assets';

// Image collection list
const IMAGES: StaticImageData[] = [
  civil,
  horiculture,
  drainage,
  bhk,
  ser1,
  ser2,
  ser3,
  banner3,
  banner4,
  blog1,
  blog2,
  blog3,
  blog4,
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lightbox Navigation
  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === IMAGES.length - 1 ? 0 : (prevIndex as number) + 1
      );
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? IMAGES.length - 1 : (prevIndex as number) - 1
      );
    }
  }, [selectedIndex]);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Pure Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-900 aspect-square shadow-md border border-slate-800"
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                priority={index < 6}
              />

              {/* Minimal Dark Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <FiZoomIn className="text-xl" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 select-none"
            onClick={handleCloseLightbox}
          >
            {/* Top Bar (Counter & Close) */}
            <div
              className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex justify-between items-center z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs sm:text-sm font-medium text-slate-300 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                {selectedIndex + 1} / {IMAGES.length}
              </span>

              <button
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                aria-label="Close Lightbox"
              >
                <FiX className="text-xl sm:text-2xl" />
              </button>
            </div>

            {/* Left Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/10 backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
              aria-label="Previous Image"
            >
              <FiChevronLeft className="text-2xl sm:text-3xl" />
            </button>

            {/* Lightbox Image Display */}
            <div
              className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full rounded-2xl overflow-hidden"
              >
                <Image
                  src={IMAGES[selectedIndex]}
                  alt={`Full size view ${selectedIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Right Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/10 backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
              aria-label="Next Image"
            >
              <FiChevronRight className="text-2xl sm:text-3xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}