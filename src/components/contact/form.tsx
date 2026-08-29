"use client";
import { contactData, social } from "@/data/homeData";
import React from "react";
import Image from "next/image";
import { Button } from "../global/button";
import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeUp, slideIn } from "@/utils/motion";

function Contactform() {
  return (
    <section className="relative font1 bg-color1  lg:p-20 sm:p-12 p-3 py-8 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ── Left: Info ── */}
          <motion.div
            className="flex flex-col gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={slideIn("left")}
          >
            {/* Title block */}
            <div>
              {contactData?.title && (
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3">
Why should you consider Freedom Air Services?
                </h3>
              )}
              <p className="text-gray-800 text-lg  leading-relaxed">
               We provide reliable, seamless, and safe aviation solutions with transparent processes, personalized support, and a commitment to operational excellence for every client.
              </p>
            </div>

            {/* Contact detail cards */}
            <div className="grid sm:grid-cols-2 gap-4">
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
                  className="group relative bg-white rounded-2xl p-5
                             border border-gray-100
                             shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                             hover:border-color2/20 transition-colors duration-300
                             overflow-hidden"
                >
                  {/* Hover shine */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-color2/4 to-transparent
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
                      <h4 className="text-gray-900 font-bold text-sm mb-2 leading-tight">
                        {counts?.para}
                      </h4>
                      <div className="space-y-1">
                        {counts?.data?.map((detail: any, i: number) => (
                          <a
                            key={i}
                            href={detail?.slug}
                            className="block text-gray-700  hover:text-color2 break-words 
                                       hover:translate-x-1 transition-all duration-300"
                          >
                            {detail?.text}
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
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200
                             flex items-center justify-center text-gray-500 text-base
                             hover:bg-color2 hover:border-color2 hover:text-white
                             shadow-sm transition-colors duration-300"
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
                className="w-10 h-10 rounded-xl bg-white border border-gray-200
                           flex items-center justify-center text-gray-500 text-base
                           hover:bg-green-500 hover:border-green-500 hover:text-white 
                           shadow-sm transition-colors duration-300"
              >
                <RiWhatsappFill />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={slideIn("right")}
            className="bg-white rounded-3xl p-8 md:p-10
                       border border-gray-100
                       shadow-[0_8px_40px_rgba(0,0,0,0.08)]
                       relative overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-color2 via-yellow-400 to-color2" />

            {/* Form header */}
            <div className="mb-7">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                              border border-color2/25 bg-color2/6 mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-color2 animate-pulse" />
                <span className="text-color2 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Let's Collaborate
                </span>
              </div>
              <h2 className="text-gray-900 text-2xl md:text-4xl font-bold leading-tight">
                Contact Us{" "}
                <span className="bg-gradient-to-r from-color2 to-yellow-500 bg-clip-text text-transparent">
                  Today!
                </span>
              </h2>
              <div className="h-[2px] w-12 bg-gradient-to-r from-color2 to-yellow-400 rounded-full mt-3" />
            </div>

            <form
              className="flex flex-wrap gap-y-4 text-black justify-between"
              method="POST"
              action="/contact.php"
            >
              {/* Name */}
              <div className="w-full sm:w-[48%] group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full py-3.5 px-5 rounded-xl border border-gray-200
                             bg-gray-50 placeholder:text-gray-400 text-gray-900 text-sm
                             focus:outline-none focus:border-color2 focus:bg-white focus:ring-2 focus:ring-color2/10
                             transition-all duration-300"
                />
              </div>
              {/* Email */}
              <div className="w-full sm:w-[48%]">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full py-3.5 px-5 rounded-xl border border-gray-200
                             bg-gray-50 placeholder:text-gray-400 text-gray-900 text-sm
                             focus:outline-none focus:border-color2 focus:bg-white focus:ring-2 focus:ring-color2/10
                             transition-all duration-300"
                />
              </div>
              {/* Phone */}
              <div className="w-full sm:w-[48%]">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Contact No."
                  required
                  className="w-full py-3.5 px-5 rounded-xl border border-gray-200
                             bg-gray-50 placeholder:text-gray-400 text-gray-900 text-sm
                             focus:outline-none focus:border-color2 focus:bg-white focus:ring-2 focus:ring-color2/10
                             transition-all duration-300"
                />
              </div>
              {/* Subject */}
              <div className="w-full sm:w-[48%]">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full py-3.5 px-5 rounded-xl border border-gray-200
                             bg-gray-50 placeholder:text-gray-400 text-gray-900 text-sm
                             focus:outline-none focus:border-color2 focus:bg-white focus:ring-2 focus:ring-color2/10
                             transition-all duration-300"
                />
              </div>
              {/* Message */}
              <div className="w-full">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full py-3.5 px-5 rounded-xl border border-gray-200
                             bg-gray-50 placeholder:text-gray-400 text-gray-900 text-sm
                             focus:outline-none focus:border-color2 focus:bg-white focus:ring-2 focus:ring-color2/10
                             transition-all duration-300 h-28 md:h-32 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-max inline-block group/btn"
              >
                <Button text="Submit Now" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contactform;
