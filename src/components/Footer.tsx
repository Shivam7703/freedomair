"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { RiWhatsappFill } from "react-icons/ri";
import { logo2 as logo, logo as logo2 } from "@/assets";
import Buttonmain from "./global/button";

export default function Footer({ footer }: any) {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        className="w-max fixed bottom-8 z-50 right-3 rounded-full bg-white"
        href="#"
      >
        <RiWhatsappFill className="text-5xl text-green-600" />
      </a>

     

      {/* Footer Section */}
      <footer className="md:px-20 sm:p-16 sm:pb-8 p-6 w-full z-20 text-white footer-bg relative">
        <div className="flex flex-wrap p-5 pb-3 mb-4 md:mb-12 border-b border-white gap-4 sm:py-9 justify-between w-full max-w-[1380px] mx-auto items-center">
          <div className="md:w-[45%] w-full">
            {" "}
            <h2 className=" font-semibold text-3xl md:text-5xl">
              Register our newsletter, And stay in touch
            </h2>
          </div>

          <div className="md:w-[45%] w-full">
            <div className="relative w-full mb-6">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full  rounded-full bg-transparent
                   border border-white/50
                   pl-6 py-4 pr-[190px] text-white placeholder-white/70
                   focus:outline-none focus:border-white
                   transition"
              />

              <button
                type="button"
                className="absolute top-1/2 right-1 -translate-y-1/2
                   py-4 px-8 rounded-full bg-white
                   text-color2 font-medium text-sm
                   transition hover:bg-color2 hover:text-white duration-200"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 pb-5 sm:grid-cols-6 gap-8 lg:grid-cols-12">
          {/* Logo and About */}
          <div className="col-span-3 md:px-5 pb-4">
            <Image
              src={logo}
              alt="logo"
              className="w-full max-w-[80vw] object-contain"
              width={150}
              height={50}
            />
            <p className="w-full text-base mt-3 text-white">{footer?.text}</p>
            <div className="scale-[0.9] -ml-4 mt-8">
              <Buttonmain text={"Request consultation"} href={"/contact-us"} />
            </div>
          </div>

          {/* Link Sections */}
          {[footer?.list1, footer?.list2].map((list, idx) => (
            <div key={idx} className="col-span-3 md:px-5 flex flex-col gap-y-3">
              <h5 className="my-2 text-base md:text-xl capitalize font1 pb-2 font-semibold">
                {list?.title}
              </h5>
              <ul className="space-y-2 md:space-y-4">
                {list?.links?.map((d: any, i: number) => (
                  <li key={i}>
                    <Link
                      href={`/${d?.href?.replace(/^\/+/, "")}`}
                      className="text-base text-white hover:text-color2 duration-300"
                    >
                      - {d?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="col-span-3 md:px-5 flex flex-col space-y-3">
            <h5 className="my-2 text-base md:text-xl capitalize font1 pb-2 font-semibold">
              Contact Us
            </h5>
            <p className="text-base text-white">
              <strong>Phone: </strong>{" "}
              <a href="tel:+919667622285">+91 9667622285</a>
            </p>
            <p className="text-base text-white">
              <strong>E-mail: </strong>{" "}
              <a href="mailto:info@FreedomeAirServices.construction">
                info@FreedomeAirServices.construction
              </a>
            </p>
            <p className="text-base text-white capitalize leading-relaxed">
              <strong>Address: </strong>
              <a href="https://www.google.com/maps/place/FreedomeAirServices/@28.5330789,77.2413416,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1905d089649:0x1b43338513750efe!8m2!3d28.5330789!4d77.2413416!16s%2Fg%2F11wxqn0h78?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">
                2nd Floor, M Block Market, Greater Kailash 2, M 32, W Block Rd,
                New Delhi, Delhi 110048
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex border-t max-sm:mt-4 border-white sm:pt-9 pt-5 text-center">
          <p className="w-max mx-auto text-sm">
            {footer?.copyrightText}{" "}
            <span className="hover:text-color2 transition-all font-semibold cursor-pointer">
              <a href="https://skywarddigitalsolutions.com">
                Skyward Digital Solutions
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
