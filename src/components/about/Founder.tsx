"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";
import { BsAward } from "react-icons/bs";
import { ceo } from "@/assets";

export default function CEOMessage() {
  return (
    <section className="relative md:px-20 sm:p-16 p-3 py-12 md:py-28 overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto relative z-10">


        {/* ── Main Card ── */}
        <div className="relative rounded-3xl overflow-hidden
                        shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
          style={{ background: "linear-gradient(135deg, #161616 0%, #111111 100%)" }}
        >
          {/* Inner top accent */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-color2/50 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-0">

            {/* ── Left: Image Panel ── */}
            <div className="lg:col-span-2 relative">
              <div className="relative h-full min-h-[420px] lg:min-h-[680px]">
                <Image
                  src={ceo}
                  alt="Founder"
                  fill
                  className="object-cover object-top"
                />

                {/* Layered gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/20" />

                {/* Quote icon badge */}
                <div className="absolute top-7 left-7 w-12 h-12 rounded-2xl bg-color2
                                flex items-center justify-center shadow-lg shadow-color2/30">
                  <FaQuoteLeft className="text-white text-lg" />
                </div>

                {/* Experience badge — upgraded with gradient text & backdrop */}
                <div className="absolute top-7 right-7 border border-color2/30 bg-black/60 backdrop-blur-md
                                rounded-2xl px-4 py-3 text-center shadow-lg shadow-black/40">
                  <p className="text-2xl font-black bg-gradient-to-br from-color2 to-color3 bg-clip-text text-transparent leading-none">30+</p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-0.5">Years</p>
                </div>

                {/* Founder info bottom overlay — deeper gradient base */}
                <div className="absolute bottom-0 left-0 right-0 p-7
                                bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-16">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-color2/20 border border-color2/40
                                    flex items-center justify-center">
                      <BsAward className="text-color2 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        Jonathan A. Mercer
                      </h3>
                      <p className="text-zinc-400 text-xs tracking-widest uppercase">
                        Founder & Chairman
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-color2/40 to-transparent mb-4" />

                  <div className="flex gap-2.5">
                    {[
                      { icon: <FaLinkedin />, href: "#" },
                      { icon: <FaInstagram />, href: "https://www.instagram.com/cityspace.contracts?igsh=MXh6Y2Q5dWJ6c3pzOA==" },
                      { icon: <HiOutlineMail />, href: "mailto:admin@freedomair.aero " },
                    ].map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        className="w-9 h-9 rounded-xl bg-white/15 border border-white/30
                                   flex items-center justify-center text-zinc-400 text-sm
                                   hover:bg-color2 hover:border-color2 hover:text-white
                                   hover:-translate-y-0.5 hover:shadow-lg hover:shadow-color2/30
                                   transition-all duration-300"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Message Panel ── */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">

              <span className="inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase
                               tracking-[0.2em] text-color2 border border-color2/30 bg-color2/10
                               px-4 py-1.5 rounded-full mb-7">
                A Message from Our Founder
              </span>

              <p className="text-xl font1  md:text-2xl font-semibold text-white leading-snug mb-7">
                "At Freedom Air Services, we started with one simple belief—aviation support should be safe, reliable, and accessible. Our journey is built on dedication, discipline, and a commitment to delivering excellence every single operations."
              </p>

              <div className="space-y-5 text-zinc-200 leading-relaxed">
                <p>
                  Our goal is not just to assist flights, but to build trust in every operations. We aim to grow responsibly, innovate continuously, and create opportunities while maintaining the highest standards of safety and service.
                </p>

              </div>

              {/* Stats row — added hover glow + animated divider line */}
              <div className="grid grid-cols-3 gap-3 my-8">
                {[
                  { value: "150+", label: "Projects" },
                  { value: "30+", label: "Years" },
                  { value: "98%", label: "Satisfaction" },
                ].map((s, i) => (
                  <div key={i}
                    className="relative text-center rounded-2xl py-5 px-3 overflow-hidden
                               border border-white/5 bg-white/[0.03]
                               hover:border-color2/40 hover:bg-color2/5
                               transition-all duration-300 group"
                  >
                    {/* Radial hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                    bg-[radial-gradient(ellipse_80%_80%_at_50%_110%,rgba(139,90,43,0.15),transparent)]" />
                    <p className="text-2xl font-black bg-gradient-to-br from-color2 to-color3
                                  bg-clip-text text-transparent relative z-10">
                      {s.value}
                    </p>
                    {/* Animated underline */}
                    <div className="h-px w-6 mx-auto bg-color2/30 my-1.5 group-hover:w-10 transition-all duration-300 rounded-full" />
                    <p className="text-[10px] text-zinc-300 uppercase tracking-widest relative z-10">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-color2 pl-5 py-1 mb-8 bg-color2/[0.03] rounded-r-xl">
                <p className="text-white/80 text-sm italic leading-relaxed">
                  “Connecting skies with trust, safety, and excellence in every journey we deliver.”

                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="h-[2px] w-16 bg-gradient-to-r from-color2 to-transparent rounded-full" />
                <div>
                  <p className="text-white font-bold text-xl font2 leading-tight">
                    Jonathan A. Mercer
                  </p>
                  <p className="text-zinc-500 text-[11px] uppercase tracking-[0.2em] mt-0.5">
                    Founder & Chairman
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}