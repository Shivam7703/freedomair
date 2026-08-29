"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";
import { logo2 as logo } from "@/assets";
import Buttonmain from "./global/button";
import { social } from "@/data/homeData";



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
                  href="https://wa.me/918826292951"
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
                  <a href="tel:+91 8826 2929 51" className="hover:text-color2 transition-colors duration-300">
                    +91 8826 2929 51
                  </a>
                </p>
                <p className="text-base text-gray-200 flex items-start gap-2">
                  <strong className="text-white/90 shrink-0">E-mail:</strong>
                  <a
                    href="mailto:admin@freedomair.aero "
                    className="hover:text-color2 transition-colors duration-300 break-all"
                  >
                    admin@freedomair.aero
                  </a>
                </p>
                <p className="text-base text-gray-200 flex items-start gap-2">
                  <strong className="text-white/90 shrink-0">Address:</strong>
                  <a
                    href="https://www.google.com/maps/place/Freedom+Air+Services/@28.5724888,77.2314122,15z/data=!4m10!1m2!2m1!1sC-49,+3rd+Floor,+Lajpat+nagar+%E2%80%93+II,+New+Delhi+%E2%80%93+110024!3m6!1s0x390ce30077e0858d:0xc798ac10cb1c9112!8m2!3d28.5714385!4d77.2383556!15sCjpDLTQ5LCAzcmQgRmxvb3IsIExhanBhdCBuYWdhciDigJMgSUksIE5ldyBEZWxoaSDigJMgMTEwMDI0kgETYXZpYXRpb25fY29uc3VsdGFudOABAA!16s%2Fg%2F11x6wn3qz3?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
                    className="hover:text-color2 transition-colors duration-300 capitalize leading-relaxed"
                  >
                    Third floor, C-49, Main Road, Block C, Lajpat Nagar II, Defence Colony, New Delhi, Delhi 110024 W Block Rd,
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