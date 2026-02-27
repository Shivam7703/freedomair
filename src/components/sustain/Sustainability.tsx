"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { banner } from "@/assets";
import { FaLeaf, FaRecycle, FaWind, FaSolarPanel } from "react-icons/fa";
import { MdOutlineWaterDrop, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { fadeUp, slideIn } from "@/utils/motion";

const data = {
  badge: "Sustainability",
  title: "Committed to a",
  titleHighlight: "Greener Future",
  description:
    "We integrate sustainable practices into every stage of our operations — from fuel-efficient aviation to carbon-neutral ground services — because the sky we fly is the sky we protect.",
  image: banner,
  features: [
    {
      icon: <FaLeaf />,
      title: "Carbon Neutral Goals",
      text: "Actively offsetting emissions through certified green programs and reforestation partnerships.",
    },
    {
      icon: <FaWind />,
      title: "Fuel Efficiency",
      text: "Modern fleet optimized for maximum fuel efficiency, reducing our carbon footprint per flight.",
    },
    {
      icon: <MdOutlineWaterDrop />,
      title: "Water Conservation",
      text: "Smart water management across all ground operations, targeting 40% reduction by 2030.",
    },
    {
      icon: <MdOutlineEnergySavingsLeaf />,
      title: "Green Energy",
      text: "Transitioning all ground facilities to 100% renewable energy sources by 2027.",
    },
  ],
};


export default function Sustainability() {
  return (
    <section className="relative lg:p-20 sm:p-12 p-6 overflow-hidden bg-white">

     
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideIn("left")}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden
                            shadow-[0_24px_80px_rgba(0,0,0,0.12)]
                            border border-gray-100">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative h-[420px] sm:h-[500px]"
              >
                <Image
                  src={data.image}
                  alt="Sustainability"
                  fill
                  className="object-cover"
                />
                {/* Subtle green tint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md
                           rounded-2xl px-5 py-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <p className="text-3xl font-black bg-gradient-to-br from-green-500 to-color2 bg-clip-text text-transparent leading-none">
                  60%
                </p>
                <div className="h-px w-8 bg-gradient-to-r from-green-400 to-color2 my-1.5 rounded-full" />
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold">
                  Emission Reduced
                </p>
              </motion.div>

              {/* Top-right badge */}
              <motion.div
                className="absolute top-6 right-6 bg-green-500/90 backdrop-blur-sm
                           text-white text-[10px] font-bold uppercase tracking-widest
                           px-3 py-1.5 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                🌿 Eco Certified
              </motion.div>
            </div>

            {/* Decorative blob behind image */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-green-100 rounded-full blur-3xl -z-10 opacity-60" />
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideIn("right")}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp} custom={0}
              className="inline-flex w-fit items-center gap-2 px-5 py-2 rounded-full
                         border border-green-200 bg-green-50"
            >
              <FaRecycle className="text-green-500 text-xs" />
              <span className="text-green-600 text-xs font-bold tracking-[0.2em] uppercase">
                {data.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeUp} custom={1}
              className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              {data.title}{" "}
              <span className="bg-gradient-to-r from-green-500 via-color2 to-yellow-500 bg-clip-text text-transparent">
                {data.titleHighlight}
              </span>
            </motion.h2>

            {/* Accent line */}
            <motion.div
              className="h-[3px] w-0 bg-gradient-to-r from-green-400 to-color2 rounded-full"
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            />

            {/* Description */}
            <motion.p
              variants={fadeUp} custom={2}
              className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg"
            >
              {data.description}
            </motion.p>

            {/* ── Feature cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {data.features.map((f, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="group flex gap-4 p-4 rounded-2xl bg-gray-50
                             border border-gray-100 hover:border-green-200
                             hover:bg-green-50/50 transition-colors duration-300
                             cursor-default"
                >
                  {/* Icon */}
                  <div className="shrink-0 w-10 h-10 rounded-xl
                                  bg-gradient-to-br from-green-400 to-color2
                                  flex items-center justify-center text-white text-base
                                  shadow-md group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-gray-900 text-sm font-bold mb-1 leading-tight">
                      {f.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}