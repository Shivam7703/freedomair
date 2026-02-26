"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "@/data/homeData";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiOutlinePaperAirplane,
} from "react-icons/hi";

export default function Testimonials() {
  const uniqueId = "test123";
  // const [activeTab, setActiveTab] = useState<"Passenger" | "Cargo">(
  //   "Passenger"
  // );

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: { delay: 5000, disableOnInteraction: false },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
  };

  return (
    <section className="relative static-bg overflow-hidden">
      {/* ── Ambient background glows ── */}
      <div className="pointer-events-none absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full bg-color2/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-100px] left-1/3 w-[400px] h-[400px] rounded-full bg-color2/5 blur-[120px]" />

      {/* ── Subtle dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(200,169,110,0.8) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[680px]">
        {/* ══════════════════════════════════
            LEFT — TESTIMONIALS
        ══════════════════════════════════ */}
        <div className="lg:w-[58%] w-full flex flex-col justify-between px-8 sm:px-12 lg:px-16 py-14 lg:py-20">
          {/* Header row */}
          <div className="flex flex-wrap justify-between items-end gap-x-2 gap-y-5 mb-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-color2" />
                <span className="text-color2 text-sm tracking-[0.25em] uppercase font-semibold">
                  Testimonials
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-50 leading-tight max-w-2xl">
                Valued{" "}
                <span className="bg-gradient-to-r from-color2 to-yellow-500 bg-clip-text text-transparent">
                  Testimonials
                </span>{" "}
                from Our Clients
              </h2>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-2">
              <button
                className={`${uniqueId}-prev group w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-color2 hover:border-color2 text-white transition-all duration-300`}
              >
                <FaArrowLeftLong className="text-sm group-hover:scale-110 transition-transform" />
              </button>
              <button
                className={`${uniqueId}-next group w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-color2 hover:border-color2 text-white transition-all duration-300`}
              >
                <FaArrowRightLong className="text-sm group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            {...swiperOptions}
            className={`mySwiper w-full pb-5 ${uniqueId}`}
          >
            {testimonialData?.testimonials?.map((cards: any) => (
              <SwiperSlide key={cards.id}>
                <div className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-7 sm:p-8 hover:border-color2/30 hover:bg-white/8 transition-all duration-500 overflow-hidden">
                  {/* Card glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-color2/5 via-transparent to-transparent" />

                  <div className="relative z-10">
                    {/* Top: quote + stars */}
                    <div className="flex items-start justify-between mb-5">
                      <FaQuoteLeft className="text-color3/40 text-3xl group-hover:text-color2/60 transition-colors duration-300" />
                      <span className="text-color3 text-base tracking-widest">
                        ★★★★★
                      </span>
                    </div>

                    {/* Text */}
                    <p className="text-white leading-relaxed mb-6 transition-colors duration-300 line-clamp-4">
                      {cards.text}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-color2/30 via-white/10 to-transparent mb-5" />

                    {/* Client info */}
                    <div className="flex items-center gap-4">
                      <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-color2/30 group-hover:ring-color2/60 transition-all duration-300 shrink-0">
                        <Image
                          src={cards.img}
                          alt={cards.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h3 className="text-color3 font-bold text-lg font2 leading-tight">
                          {cards.title}
                        </h3>
                        <p className="text-white/80 text-sm mt-0.5 tracking-wide">
                          Happy Client
                        </p>
                      </div>
                      <FaQuoteRight className="ml-auto text-color3/30 text-2xl group-hover:text-color2/40 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ══════════════════════════════════
            RIGHT — BOOKING FORM  (like image)
        ══════════════════════════════════ */}
        <div className="lg:w-[42%] w-full flex items-center justify-center px-6 sm:px-12 lg:px-10 pb-14 lg:py-20">
          {/* Form card */}
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#13131a] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Tabs — exactly like image */}
            <div className="pl-8 py-3 relative ">
<h5 className="text-white text-2xl">Contact Us</h5>                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-color2/55 rounded-full" />

            </div>

            {/* Fields */}
            <div className="p-7 sm:p-8 space-y-5">
              {/* Departure */}
              <div className="space-y-2">
                <label className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                  Departure
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="USA"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-color2/60 focus:bg-white/8 transition-all duration-300 pr-10"
                  />
                  <HiOutlineLocationMarker className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 text-lg" />
                </div>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                  Destination
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Germany"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-color2/60 focus:bg-white/8 transition-all duration-300 pr-10"
                  />
                  <HiOutlineLocationMarker className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 text-lg" />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="01 February 2025"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-color2/60 focus:bg-white/8 transition-all duration-300 pr-10"
                  />
                  <HiOutlineCalendar className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 text-lg" />
                </div>
              </div>

              {/* Passengers */}
              <div className="space-y-2">
                <label className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                  Passengers
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/40 text-sm focus:outline-none focus:border-color2/60 focus:bg-white/8 transition-all duration-300 pr-10 cursor-pointer">
                    <option value="" className="bg-[#13131a] text-white/70">
                      Pax
                    </option>
                    <option value="1" className="bg-[#13131a] text-white">
                      1 Passenger
                    </option>
                    <option value="2" className="bg-[#13131a] text-white">
                      2 Passengers
                    </option>
                    <option value="3" className="bg-[#13131a] text-white">
                      3 Passengers
                    </option>
                    <option value="4" className="bg-[#13131a] text-white">
                      4 Passengers
                    </option>
                    <option value="5+" className="bg-[#13131a] text-white">
                      5+ Passengers
                    </option>
                  </select>
                  <HiOutlineUsers className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 text-lg pointer-events-none" />
                </div>
              </div>

              {/* CTA — red like the image */}
              <button
                type="button"
                className="group w-full flex items-center justify-center gap-3 bg-color2 hover:bg-color2/70 text-black font-bold text-sm tracking-[0.2em] uppercase py-4 rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(200,169,110,0.3)] hover:shadow-[0_12px_40px_rgba(200,169,110,0.45)] hover:-translate-y-0.5 mt-2"
              >
                <HiOutlinePaperAirplane className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
