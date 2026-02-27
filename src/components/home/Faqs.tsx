import React from "react";
import Image from "next/image";
import { banner } from "@/assets";
import Faq from "../global/faq";

export default function Faqs() {
  const data = {
    img2: banner,
    title1: "Frequently Asked",
    title2: "Questions",
    faq: [
      {
        id: 1,
        que:
          "Leading innovative, sustainable infrastructure development supporting?",
        ans:
          "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We craft spaces that inspire, endure, and elevate communities for generations.",
      },
      {
        id: 2,
        que:
          "Leading innovative, sustainable infrastructure development supporting?",
        ans:
          "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We craft spaces that inspire, endure, and elevate communities for generations.",
      },
      {
        id: 3,
        que:
          "Leading innovative, sustainable infrastructure development supporting?",
        ans:
          "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We craft spaces that inspire, endure, and elevate communities for generations.",
      },
      {
        id: 4,
        que:
          "Leading innovative, sustainable infrastructure development supporting?",
        ans:
          "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We craft spaces that inspire, endure, and elevate communities for generations.",
      },
    ],
  };

  return (
    <section className="relative lg:px-28 md:px-24 sm:px-16 px-6 py-20 md:py-28 bg-color1 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-color2/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-color2/5 blur-[100px]" />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-wrap justify-between gap-y-16 items-start">
        {/* CONTENT COLUMN */}
        <div className="md:w-[50%] w-full space-y-6 md:space-y-8">
          {/* Eyebrow badge */}
          <div className="flex items-center md:-mb-3 gap-3">
            <div className="w-8 h-px bg-color2" />
            <span className="text-color2 text-sm  tracking-[0.25em] uppercase font-semibold">
              FAQ's
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            {data?.title1} <span className=" bg-gradient-to-r from-color2 to-yellow-500 bg-clip-text text-transparent">{data?.title2}</span>
          </h2>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-color2/70 via-color2/30 to-transparent" />

          {/* FAQ Accordion */}
          <Faq data={data?.faq} />
        </div>

        {/* IMAGE COLUMN */}
        <div className="md:w-[44%] w-full md:sticky md:top-28">
          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-color2/60 z-10" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-color2/60 z-10" />

            {/* Gold shimmer border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-color2/40 via-transparent to-color2/20 z-0" />

            {/* Main Image */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group z-10">
              <Image
                src={data.img2}
                alt="About"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute z-20 bottom-8 left-8">
              <div className="relative px-6 py-5 rounded-xl border border-white/20 bg-black/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                {/* inner top shine */}
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(200,169,110,0.2)] pointer-events-none" />
                <div className="text-5xl font-black leading-none tracking-tight bg-gradient-to-br from-[#C8A96E] via-[#E8D5A3] to-[#C8A96E] bg-clip-text text-transparent">
                  100+
                </div>
                <p className="text-xs text-color2 font-medium tracking-[0.15em] uppercase mt-1">
                  Satishfied Clients{" "}
                </p>
              </div>
            </div>

            {/* Floating stat pill */}
            <div className="absolute z-20 top-6 -right-4 md:-right-3 px-4 py-3 rounded-xl bg-color3 shadow-[0_8px_30px_rgba(200,169,110,0.4)]">
              <p className="text-black text-xs font-bold tracking-[0.12em] uppercase">
                500+ Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
