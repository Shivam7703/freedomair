"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { logo2 as logo, logo as logo2 } from "@/assets";
import Buttonmain from "./global/button";

export const social = [
  {
    icon: <FaFacebookSquare />,
    href: "https://www.facebook.com/FreedomeAirServicesdelhi",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.facebook.com/FreedomeAirServicesdelhi",
  },
  {
    icon: <FaXTwitter />,
    href: "https://www.facebook.com/FreedomeAirServicesdelhi",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.facebook.com/FreedomeAirServicesdelhi",
  },
];

export default function Footer({ footer }: any) {
  return (
    <>
      <footer className="relative w-full z-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(160deg, #18181b 0%, #09090b 60%, #0f172a 100%)" }}
      >
        {/* Decorative top accent line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-color2 to-transparent opacity-80" />

        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full
                        bg-color2/5 blur-[120px] pointer-events-none" />

        <div className="md:px-20 sm:px-16 px-6 pt-14 pb-8">
          <div className="grid grid-cols-3 pb-5 sm:grid-cols-6 gap-8 lg:grid-cols-12">

            {/* Logo and About */}
            <div className="col-span-3 md:px-5 pb-4 flex flex-col">
              <Image
                src={logo}
                alt="logo"
                className="w-full max-w-[80vw] object-contain"
                width={150}
                height={50}
              />
              <p className="w-full text-base mt-4 text-gray-200 leading-relaxed">
                {footer?.text}
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">
                {social.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10
                               flex items-center justify-center text-gray-200
                               hover:bg-color2 hover:border-color2 hover:text-white
                               hover:scale-110 hover:-translate-y-0.5
                               transition-all duration-300 text-base"
                  >
                    {s.icon}
                  </a>
                ))}
                <a
                  href="https://wa.me/919667622285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10
                             flex items-center justify-center text-gray-200
                             hover:bg-green-500 hover:border-green-500 hover:text-white
                             hover:scale-110 hover:-translate-y-0.5
                             transition-all duration-300 text-base"
                >
                  <RiWhatsappFill />
                </a>
              </div>

              <div className="scale-[0.9] -ml-4 mt-6">
                <Buttonmain text={"Request consultation"} href={"/contact-us"} />
              </div>
            </div>

            {/* Link Sections */}
            {[footer?.list1, footer?.list2].map((list, idx) => (
              <div key={idx} className="col-span-3 md:px-5 flex flex-col gap-y-3">
                <h5 className="my-2 text-base md:text-lg capitalize font1 font-semibold
                               text-white relative pb-3
                               after:content-[''] after:absolute after:bottom-0 after:left-0
                               after:w-8 after:h-[2px] after:bg-color2 after:rounded-full">
                  {list?.title}
                </h5>
                <ul className="space-y-2 md:space-y-3 mt-1">
                  {list?.links?.map((d: any, i: number) => (
                    <li key={i}>
                      <Link
                        href={`/${d?.href?.replace(/^\/+/, "")}`}
                        className="text-base text-gray-200 hover:text-color2 duration-300
                                   flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-color2/50
                                         group-hover:bg-color2 group-hover:w-2
                                         transition-all duration-300 shrink-0" />
                        {d?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="col-span-3 md:px-5 flex flex-col space-y-3">
              <h5 className="my-2 text-base md:text-lg capitalize font1 font-semibold
                             text-white relative pb-3
                             after:content-[''] after:absolute after:bottom-0 after:left-0
                             after:w-8 after:h-[2px] after:bg-color2 after:rounded-full">
                Contact Us
              </h5>
              <div className="space-y-3 mt-1">
                <p className="text-base text-gray-200 flex items-start gap-2">
                  <strong className="text-white/90 shrink-0">Phone:</strong>
                  <a href="tel:+919667622285" className="hover:text-color2 transition-colors duration-300">
                    +91 9667622285
                  </a>
                </p>
                <p className="text-base text-gray-200 flex items-start gap-2">
                  <strong className="text-white/90 shrink-0">E-mail:</strong>
                  <a
                    href="mailto:info@FreedomeAirServices.construction"
                    className="hover:text-color2 transition-colors duration-300 break-all"
                  >
                    info@FreedomeAirServices.construction
                  </a>
                </p>
                <p className="text-base text-gray-200 flex items-start gap-2">
                  <strong className="text-white/90 shrink-0">Address:</strong>
                  <a
                    href="https://www.google.com/maps/place/FreedomeAirServices/@28.5330789,77.2413416,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1905d089649:0x1b43338513750efe!8m2!3d28.5330789!4d77.2413416!16s%2Fg%2F11wxqn0h78?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
                    className="hover:text-color2 transition-colors duration-300 capitalize leading-relaxed"
                  >
                    2nd Floor, M Block Market, Greater Kailash 2, M 32, W Block Rd,
                    New Delhi, Delhi 110048
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between
                          border-t border-white/10 max-sm:mt-4 sm:pt-7 pt-5 gap-3">
            <p className="text-xs text-gray-200 text-center">
              {footer?.copyrightText}{" "}
              <a
                href="https://skywarddigitalsolutions.com"
                className="hover:text-color2 transition-all font-semibold text-gray-50"
              >
                Skyward Digital Solutions
              </a>
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}