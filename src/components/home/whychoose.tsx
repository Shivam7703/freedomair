"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { civil } from "@/assets";
import { HiOutlineBriefcase, HiOutlineClock, HiOutlineCurrencyDollar, HiOutlineFlag, HiOutlineLightBulb, HiOutlineUsers } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const data = {
  img: civil,
  title1: "Why Choose Us",
  title2: "Choose Excellence. Choose",
  title3: " Freedom Air",
  choose: [
    {
      icon: HiOutlineBriefcase,  // Changed from LightBulb to Briefcase for "Industry Expertise"
      heading: "Deep Industry Expertise",
      para:
        "With extensive aviation experience, we understand regulatory frameworks and operational procedures, ensuring every flight requirement is handled efficiently and without unnecessary delays.",
      gradient: "from-indigo-500 to-purple-600",
      hoverGradient: "from-indigo-600 to-purple-700",
      glowColor: "bg-indigo-500/30",
    },
    {
      icon: HiOutlineUsers,  // Changed from Flag to Users for "Network"
      heading: "Strategic Industry Network",
      para:
        "Our strong relationships with aviation authorities and key stakeholders allow us to streamline approvals and facilitate faster coordination for our clients.",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "from-emerald-600 to-teal-700",
      glowColor: "bg-emerald-500/30",
    },
    {
      icon: HiOutlineClock,  // Changed from LightBulb to Clock for "24/7 Support"
      heading: "24/7 Operational Assistance",
      para:
        "We provide continuous support to address urgent requests, last-minute changes, and operational challenges with prompt and professional solutions.",
      gradient: "from-pink-500 to-rose-600",
      hoverGradient: "from-pink-600 to-rose-700",
      glowColor: "bg-pink-500/30",
    },
    {
      icon: HiOutlineCurrencyDollar,  // Changed from Flag to CurrencyDollar for "Cost-Effective"
      heading: "Cost-Effective Service Model",
      para:
        "Our pricing structure is competitive and transparent, delivering high-quality aviation solutions while maintaining cost efficiency for international operators.",
      gradient: "from-amber-500 to-orange-600",
      hoverGradient: "from-amber-600 to-orange-700",
      glowColor: "bg-amber-500/30",
    },
  ]
};

export default function WhyChoose() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-28 lg:px-24 md:p-20 sm:p-12 p-7 py-11 bg-white overflow-hidden"
    >
      <div className="relative flex flex-col md:items-end gap-6 sm:gap-10">
        {/* Background Image */}
        {data?.img && (
          <Image
            title="Best immigration consultants in Delhi"
            src={data?.img}
            alt="Best immigration consultants in Delhi"
            className="absolute top-0 left-0 md:h-[100%] h-0 w-full -z-0 sm:w-[40%] max-w-[500px] object-cover"
          />
        )}

        {/* Heading */}
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="z-10 sm:space-y-8 space-y-6 max-w-2xl"
        >
          {data?.title1 && (
            <div className="flex items-center md:-mb-3 gap-3">
            <div className="w-8 h-px bg-color2" />
            <span className="text-color2 text-sm  tracking-[0.25em] uppercase font-semibold">
{data?.title1}            </span>
          </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            {data?.title2}
            <span className="bg-gradient-to-r from-color2 to-yellow-500 bg-clip-text text-transparent">
              {data?.title3}
            </span>
          </h2>
        </motion.div>

        {/* Swiper Slider */}
        <div className="w-full z-10 mt-6">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {data?.choose?.map((item, index) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={index} className="p-3">
                  <div
                    className="group relative w-full bg-white rounded-3xl shadow-md 
                               hover:shadow-xl transition-all duration-500
                               overflow-hidden "
                  >
                    {/* Top gradient bar */}
                    <div
                      className={`h-2 w-full bg-gradient-to-r ${item.gradient}`}
                    />

                    <div className="p-6 sm:p-8 space-y-6">
                      {/* Icon + Heading Row */}
                      <div className="flex items-center justify-between gap-5">
                        {/* Icon */}
                        <div className="relative">
                          <div
                            className={`absolute inset-0 ${item.glowColor} blur-2xl rounded-xl group-hover:blur-3xl transition-all duration-500`}
                          />
                          <div
                            className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center
                                        bg-gradient-to-br ${item.gradient} text-white shadow-lg
                                        group-hover:scale-125 transition-all duration-500`}
                          >
                            <Icon
                              size={20}
                              className="sm:w-6 sm:h-6"
                              strokeWidth={2}
                            />
                          </div>
                        </div>

                        {/* Heading */}
                        <h3
                          className="text-2xl sm:text-3xl font-medium text-zinc-900
                                     group-hover:text-zinc-500 transition-colors duration-500"
                        >
                          {item.heading}  
                          <div
                          className={`w-14 group-hover:w-28 h-[2px] mt-2 duration-300 bg-gradient-to-r ${item.gradient} rounded-full`}
                        />
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-700 font-medium leading-relaxed">
                        {item.para}
                      </p>

                      {/* Bottom accent */}
                     
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Bottom decorative dots */}
        <div className="mt-4 sm:mt-6 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 animate-pulse delay-75" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 animate-pulse delay-150" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse delay-150" />
        </div>
      </div>
    </motion.div>
  );
}
