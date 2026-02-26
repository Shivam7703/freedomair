"use client";
import { ceo } from "@/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { fadeUp } from "@/utils/motion";

const data = {
  title1: "Meet Our Team",
  title2: "Our Team is Our Speciality",
  title3: "and Proud",
  members: [
    { img: ceo, name: "Raman Kartik",  designation: "Graphic Designer"   },
    { img: ceo, name: "Priya Sharma",  designation: "Lead Engineer"       },
    { img: ceo, name: "Arjun Mehta",   designation: "Aviation Specialist" },
    { img: ceo, name: "Neha Kapoor",   designation: "Operations Head"     },
  ],
};


const cardVariant = {
  hidden:  { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Team() {
  return (
    <section className="relative lg:p-20 sm:p-12 px-6 py-8  overflow-hidden bg-color1">

      {/* ── Subtle background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(var(--color2-rgb),0.06),transparent)]" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-color2/30 to-transparent" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Soft color blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-yellow-400/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Heading ── */}
        <motion.div
          className="text-center flex flex-col items-center gap-4 mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                       border border-color2/30 bg-color2/8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-color2 animate-pulse" />
            <span className="text-color2 text-xs font-bold tracking-[0.2em] uppercase">
              {data.title1}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp} custom={1}
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl"
          >
            {data.title2}{" "}
            <span className="bg-gradient-to-r from-color2 to-yellow-500 bg-clip-text text-transparent">
              {data.title3}
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp} custom={2}
            className="h-[3px] w-16 rounded-full bg-gradient-to-r from-color2 to-yellow-400"
          />

          <motion.p
            variants={fadeUp} custom={3}
            className="text-gray-700 text-base  max-w-2xl leading-relaxed"
          >
            The passionate individuals behind our excellence — each bringing unique expertise and dedication to every project.
          </motion.p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.members.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-3xl overflow-hidden
                         border border-gray-100
                         shadow-[0_4px_24px_rgba(0,0,0,0.07)]
                         hover:shadow-[0_24px_60px_rgba(0,0,0,0.13)]
                         transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Social icons — slide up on hover */}
                <motion.div
                  className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5"
                  initial={{ opacity: 1, y: 0 }}
                  whileHover={{ opacity: 1, y: 10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, j) => (
                    <motion.a
                      key={j}
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/30
                                 flex items-center justify-center text-white text-xs
                                 hover:bg-color2 hover:border-color2
                                 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* ── Card bottom accent line ── */}
              <motion.div
                className="h-[3px] bg-gradient-to-r from-color2 to-yellow-400 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              />

              {/* Content */}
              <div className="p-5 text-center relative">
               

                <p className="text-color2 text-[10px] font-bold uppercase tracking-[0.22em] mb-1.5">
                  {member.designation}
                </p>
                <h3 className="text-gray-900 text-lg font-bold leading-tight">
                  {member.name}
                </h3>

                {/* Animated underline on hover */}
                <motion.div
                  className="h-[2px] bg-gradient-to-r from-color2 to-yellow-400 rounded-full mx-auto mt-3"
                  initial={{ width: 0 }}
                  whileHover={{ width: "40%" }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}