"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

type Props = {
  imgs: StaticImageData[];
};

function Gallery({ imgs }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lightboxSwiper, setLightboxSwiper] = useState<SwiperType | null>(null);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowLeft") {
        lightboxSwiper?.slidePrev();
      } else if (e.key === "ArrowRight") {
        lightboxSwiper?.slideNext();
      } else if (e.key === "Escape") {
        setLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxSwiper]);

  function openLightbox(index: number) {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }

  return (
    <div className="sm:py-10 w-full max-w-7xl mx-auto px-4">
      {/* Main Gallery Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
       
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="gallery-swiper"
      >
        {imgs.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 text-white drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>

              {/* Image Number Badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Lightbox Swiper */}
          <div
            className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, FreeMode]}
              spaceBetween={30}
              slidesPerView={1}
              initialSlide={currentIndex}
              navigation={{
                nextEl: ".lightbox-button-next",
                prevEl: ".lightbox-button-prev",
              }}
              onSwiper={setLightboxSwiper}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              className="w-full h-full"
            >
              {imgs.map((image, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <div className="relative w-full h-full max-w-6xl mx-auto max-h-[90vh]">
                    <Image
                      src={image}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-contain"
                      priority={index === currentIndex}
                      sizes="100vw"
                    />
                  </div>
                </SwiperSlide>
              ))}

              {/* Lightbox Navigation Buttons */}
              {imgs.length > 1 && (
                <>
                  <div className="lightbox-button-prev absolute top-1/2 left-2 md:left-6 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md cursor-pointer">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>

                  <div className="lightbox-button-next absolute top-1/2 right-2 md:right-6 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md cursor-pointer">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </>
              )}
            </Swiper>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium shadow-lg">
            {currentIndex + 1} / {imgs.length}
          </div>

          {/* Thumbnail Strip Swiper */}
          <div className="absolute bottom-16 md:bottom-20 left-0 right-0 z-50 px-4">
            <div className="max-w-max mx-auto">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={12}
                slidesPerView="auto"
                freeMode={true}
                watchSlidesProgress={true}
                className="thumbnail-swiper"
              >
                {imgs.map((image, index) => (
                  <SwiperSlide key={index} className="!w-16 md:!w-20">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        lightboxSwiper?.slideTo(index);
                      }}
                      className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                        currentIndex === index
                          ? "ring-3 ring-white scale-110 opacity-100"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .gallery-swiper .swiper-pagination {
          bottom: -40px !important;
        }

        .gallery-swiper .swiper-pagination-bullet {
          background: #9ca3af;
          opacity: 0.5;
        }

        .gallery-swiper .swiper-pagination-bullet-active {
          background: #4b5563;
          opacity: 1;
        }

        .thumbnail-swiper .swiper-wrapper {
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Gallery;