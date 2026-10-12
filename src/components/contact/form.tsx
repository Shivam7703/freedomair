"use client";
import { contactData, social } from "@/data/homeData";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeUp, slideIn } from "@/utils/motion";

function Contactform() {
  return (
    <section className="relative font1 bg-color1  lg:px-20 pb-0 sm:p-12 p-3 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section heading ── */}
        <motion.div
          className="text-center mb-14 flex flex-col items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-color2/30 bg-color2/8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-color2 animate-pulse" />
            <span className="text-color2 text-xs font-bold tracking-[0.2em] uppercase">
              Contact Us
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto"
          >
            Let’s Elevate Your Aviation{" "}
            <span className="bg-gradient-to-r from-color2 to-yellow-500 bg-clip-text text-transparent">
              Operations Together
            </span>
          </motion.h2>
          <motion.div
            className="h-[3px] bg-gradient-to-r from-color2 to-yellow-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* ── Two column layout ── */}
          <motion.div
            className="flex flex-col gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={slideIn("left")}
          >
          

           {/* Contact detail cards */}
<div className="grid sm:grid-cols-3 gap-4">
  {contactData?.details?.map((counts: any, index: number) => (
    <motion.div
      key={index}
      custom={index}
      variants={fadeUp}
      whileHover={{
        y: -4,
        boxShadow: "0 20px 50px rgba(0,0,0,0.10)",
      }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className="group relative bg-white rounded-2xl px-3 py-5 
                 border
                 shadow-sm hover:shadow-lg
                  transition-colors duration-300
                 overflow-hidden"
    >
      {/* Hover shine */}
      <div
        className="absolute inset-0 bg-[#0B1730]
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      <div className="flex gap-4 items-start relative z-10">
        {/* Icon */}
        <div
          className="shrink-0 w-12 h-12 rounded-xl
                     bg-gradient-to-br from-color2 to-red-500
                     flex items-center justify-center text-white text-xl
                     shadow-lg group-hover:scale-110 group-hover:rotate-3
                     transition-transform duration-300"
        >
          {counts?.icon}
        </div>
        {/* Content */}
        <div>
          <h4 className="text-gray-900 group-hover:text-white font-bold text-sm mb-2 leading-tight">
            {counts?.para}
          </h4>
          <div className=" text-sm flex gap-2 flex-wrap text-gray-700 group-hover:text-white/80">
            {counts?.data?.map((detail: any, i: number) => (
              <a
                key={i}
                href={detail?.slug}
                target={detail?.slug?.startsWith("http") ? "_blank" : "_self"}
                rel={detail?.slug?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block hover:text-color2  break-words text-sm  sm:text-base
                            transition-all duration-300"
              >
               {detail?.text},
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-color2 to-yellow-400 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      />
    </motion.div>
  ))}
</div>

            {/* Social icons */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex items-center gap-3"
            >
              {social.map((s: any, i: number) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white 
                             flex items-center justify-center text-gray-900 text-base
                             hover:bg-color2 hover:border-color2 hover:text-white
                             shadow-sm shadow-black/40 transition-colors duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/918826292951"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-white shadow-sm shadow-black/40
                           flex items-center justify-center text-gray-900 text-base
                           hover:bg-green-500 hover:border-green-500 hover:text-white 
                            transition-colors duration-300"
              >
                <RiWhatsappFill />
              </motion.a>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}

export default Contactform;
