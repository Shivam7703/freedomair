"use client";
import React, { useState } from "react";
import Image from "next/image";
import { banner } from "@/assets";
import Buttonmain from "../global/button";

function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  const data = {
    img2: banner,
    title1: "Best Builders In ",
    title2:"Delhi NCR",
    para: "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We craft spaces that inspire, endure, and elevate communities for generations.",
    vision: [
      {
        heading: "Our Vision",
        icon: "◈",
        text: "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We envision a skyline that reflects our commitment to excellence.",
      },
      {
        heading: "Our Mission",
        icon: "◇",
        text: "Delivering safe, precise infrastructure through ethical practices and modern project management. Every project is a promise kept to our clients and communities.",
      },
    ],
  };

  return (
    <section className="relative lg:px-28 md:px-24 sm:px-16 px-6 py-20 md:py-28 bg-color1 overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-color2/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-color2/5 blur-[100px]" />

      <div className="relative z-10 flex flex-wrap justify-between gap-y-16 items-center">

        {/* IMAGE COLUMN */}
        <div className="md:w-[46%] w-full">
          <div className="relative">

            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-color2/60 z-10" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-color2/60 z-10" />

            {/* Main Image */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group">
              <Image
                src={data.img2}
                alt="About"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute z-20 bottom-8 left-8">
              <div className="relative px-6 py-5 rounded-xl border border-white/60 bg-[#0F0E0C]/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] before:absolute before:inset-0 before:rounded-xl before:shadow-[inset_0_1px_0_rgba(200,169,110,0.15)] before:pointer-events-none">

                <div className="text-5xl font-black leading-none tracking-tight bg-gradient-to-br from-[#C8A96E] via-[#E8D5A3] to-[#C8A96E] bg-clip-text text-transparent">
                  42+
                </div>

                <p className="text-xs text-color2 font-medium tracking-[0.15em] uppercase mt-1">
                  Years of Excellence
                </p>
              </div>
            </div>

            {/* Floating stat pill */}
            <div className="absolute z-20 top-6 bg-color3 -right-4 md:-right-3 px-4 py-3 rounded-xl shadow-[0_8px_30px_rgba(200,169,110,0.3)]">
              <p className="text-[#0F0E0C] text-xs font-bold tracking-[0.12em] uppercase">
                500+ Projects
              </p>
            </div>

          </div>
        </div>

        {/* CONTENT COLUMN */}
        <div className="md:w-[48%] w-full space-y-5 md:space-y-8">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-color2" />
            <span className="text-color2 text-xs tracking-[0.25em] uppercase font-semibold">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-black font-medium text-2xl md:text-5xl leading-[1.1] tracking-tight">
           {data?.title1} <span className="text-color2">{data?.title2}</span>
          </h2>

          {/* Paragraph */}
          <p className="text-black/90 text-base md:text-lg leading-relaxed">
            {data.para}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-color2/70 via-color2/30 to-transparent" />

          {/* Tabs */}
          <div>

            {/* Tab Buttons */}
            <div className="flex gap-1 mb-6 p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              {data.vision.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300
                    ${
                      activeTab === index
                        ? "bg-color3 text-black shadow-[0_4px_15px_rgba(200,169,110,0.3)]"
                        : "bg-transparen text-black font-bold"
                    }`}
                >
                  {item.heading}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 rounded-2xl transition-all bg-[#C8A96E]/5 border border-[#C8A96E]/30">
              <div className="flex gap-4 items-start">
                <span className="text-color2 text-2xl mt-0.5 flex-shrink-0">
                  {data.vision[activeTab].icon}
                </span>
                <p className="text-black/70 leading-relaxed md:text-lg font-medium">
                  {data.vision[activeTab].text}
                </p>
              </div>
            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "500+", label: "Projects Done" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "42+", label: "Years Active" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-br from-color2 to-yellow-600  bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-black text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Buttonmain text="Learn More" href="/about-us" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;