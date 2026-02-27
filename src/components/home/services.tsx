"use client";

import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Servicedata as data } from "@/data/homeData";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { ProCard } from "../service/cards";

export default function ServiceSlider() {
  return (
    <section className="lg:p-24 xl:px-28 md:p-20 sm:p-16 px-3 py-8 plane-bg relative overflow-hidden">
      {/* Background Decorative Elements */}

      {/* Heading Section */}
      <div className="w-full text-white text-center flex flex-col items-center gap-6 mb-6 px-5 md:mb-16">
        {/* Main Heading */}
        <h2 className="font-bold text-2xl md:text-5xl max-w-2xl mx-auto ">
          {data.title}
        </h2>
        <p className="sm:text-lg max-w-4xl text-center">{data.para}</p>
      </div>

      {/* Slider Container */}
      <div className="relative pb-9 md:pb-7">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".service-prev",
            nextEl: ".service-next",
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={32}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className=""
        >
          {data?.service?.map((services, index) => (
            <SwiperSlide key={index}>
            <ProCard service={services} index={index}/>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="service-prev absolute md:top-1/2 top-[99%] left-4 md:-left-14 shadow-lg transform -translate-y-1/2 bg-color1 hover:bg-color2 text-black hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full z-30 transition-all duration-300 text-3xl flex items-center justify-center"
          aria-label="Previous slide"
        >
          <IoIosArrowRoundBack />
        </button>

        <button
          className="service-next absolute md:top-1/2 top-[99%] max-md:left-14 md:-right-14 shadow-lg transform -translate-y-1/2 bg-color1 hover:bg-color2 text-black hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full z-30 transition-all duration-300 text-3xl flex items-center justify-center"
          aria-label="Next slide"
        >
          <IoIosArrowRoundForward />
        </button>
      </div>
      {/* <div className="w-max mx-auto">
        {" "}
        <Buttonmain text={"All Services"} href={"/services"} />
      </div> */}
    </section>
  );
}
