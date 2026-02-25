"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Servicedata as data } from "@/data/homeData";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Buttonmain from "../global/button";

export default function ServiceSlider() {
  return (
    <section className="lg:p-24 xl:px-28 md:p-20 sm:p-16 px-3 py-8 plane-bg relative overflow-hidden">
      {/* Background Decorative Elements */}

      {/* Heading Section */}
      <div className="w-full text-white text-center flex flex-col items-center gap-6 mb-6 px-5 md:mb-16">
        {/* Main Heading */}
        <h2 className="font-medium text-2xl md:text-5xl max-w-2xl mx-auto ">
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
          {data?.service?.map((service, index) => (
            <SwiperSlide key={index}>
              <Link
                href={`/services/${service?.title
                  ?.trim()
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, "")}`}
                className="group block h-full py-4"
              >
                {/* Card with Thick White Border */}
                <div className="relative h-full bg-white rounded-2xl overflow-hidden p-6 shadow-2xl transition-all duration-500  hover:-translate-y-2">
                  {/* Content Section */}

<div className="absolute rounded-full h-44 w-44 bottom-[73%] left-[78%] bg-red-500 z-10"/>
<div className="absolute text-white top-3 right-3 text-4xl font-extrabold z-20">0{index + 1}</div>

                  <div className=" text-3xl rounded-lg p-4 bg-color1 group-hover:bg-color3 w-max group-hover:text-black transition-all shadow-lg text-color2 mb-3 md:mb-4">
                    {service?.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-zinc-900 group-hover:text-color2 transition-colors duration-300">
                    {service?.title}
                  </h3>
                  <div className="bg-color2 h-px w-full my-3 md:my-4"></div>
                  <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-5 md:mb-6 line-clamp-3">
                    {service?.text}
                  </p>

                  {/* View Details Button */}
                  <div className="inline-flex items-center gap-2 text-black group-hover:text-color2 font-semibold text-sm md:text-base transition-all duration-300">
                    <span>View Details</span>
                    <div className="w-8 h-8 md:w-9 md:h-9 text-white text-2xl rounded-full bg-black group-hover:bg-color2 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                      <IoIosArrowRoundForward />
                    </div>
                  </div>
                </div>
              </Link>
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
