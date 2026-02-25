import { home } from "@/assets";
import { contactData } from "@/data/homeData";
import React from "react";
import Image from "next/image";
import {Button} from "../global/button";
function Contactform() {
  return (
    <>
 <section className="bg-color1 py-12 sm:py-20 font1 relative overflow-hidden">
  {/* Soft background glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20 pointer-events-none" />

  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-12">
    <div className="flex flex-wrap gap-8 sm:gap-12 justify-center">
      {contactData?.details?.map((counts: any, index: number) => (
        <div
          key={index}
          className="
            group relative w-full sm:w-[45%] lg:w-[30%]
            rounded-3xl p-[1px]
            bg-gradient-to-br from-color2/40 via-transparent to-purple-500/40
            transition-all duration-500
            hover:scale-[1.03]
          "
        >
          {/* Card */}
          <div
            className="
              relative h-full
              bg-white/95 backdrop-blur-xl
              rounded-3xl p-7 sm:p-9
              shadow-lg hover:shadow-2xl
              transition-all duration-500
              flex gap-6
              max-sm:flex-col max-sm:text-center max-sm:items-center
            "
          >
            {/* Icon with glow */}
            <div className="relative">
              <div
                className="
                  absolute inset-0 rounded-full
                  
                  group-hover:opacity-70
                  transition duration-500
                "
              />
              <div
                className="
                  relative min-w-16 h-16 rounded-full
                  flex items-center justify-center
                  bg-gradient-to-br from-color2 to-red-600 
                  text-white text-3xl
                  shadow-xl
                  transition-all duration-500
                  group-hover:rotate-6 group-hover:scale-110
                "
              >
                {counts?.icon}
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-black text-xl sm:text-[26px] font-semibold mb-3 tracking-tight">
                {counts?.para}
              </h3>

              <div className="space-y-1.5">
                {counts?.data?.map((detail: any, i: number) => (
                  <a
                    key={i}
                    href={detail?.slug}
                    className="
                      block text-zinc-600 text-[15.5px]
                      hover:text-blue1
                      transition-all duration-300
                      hover:translate-x-1
                    "
                  >
                    {detail?.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Hover shine */}
            <div
              className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                opacity-0 group-hover:opacity-100
                transition duration-700
                pointer-events-none
              "
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      
      <section className="lg:px-28 font1 md:p-20 sm:p-12 p-7 max-w-[1580px] mx-auto flex items-stretch bg-color1 flex-wrap justify-between gap-y-7">
        <div className="md:w-[49%] w-full space-y-5">
             <div className=" max-w-40 overflow-hidden py-2 rounded-full border-2">
              <h4 className=" animate-marquee-right text-color2 text-xs min-w-max sm:!text-sm ">
                Contact us
              </h4>
          </div>
          {contactData?.title && (
            <h2 className="text-black font-medium text-3xl md:text-5xl ">
              {contactData?.title}
            </h2>
          )}
          <p className="text-zinc-700">Backed by a strong engineering legacy, OM Engineers delivers precise execution, transparent processes, and dependable infrastructure solutions focused on quality, safety, and long-term client value.
</p>
         
         <Image src={home} alt="Home Image" className="w-full h-auto mt-4" />
        </div>
        <div className="md:w-[48%] rounded-2xl p-10 h-full  w-full shadow-lg bg-white">
             <div className=" max-w-40 overflow-hidden py-2 rounded-full border-2">
              <h4 className="animate-marquee-right text-color2 text-xs min-w-max sm:!text-sm ">
Lets corporate              </h4>
          </div>
          <h2 className="text-black mt-3 sm:mt-6 text-3xl md:text-6xl max-w-xl">
            Contact Us Today!
          </h2>
          <div className="w-full border  mt-3 mb-6"></div>
          <form
            className="flex flex-wrap gap-y-6 py-3 text-black justify-between"
            method="POST"
            action={"/contact.php"}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full py-3 rounded-full border-2 placeholder:text-zinc-500 px-4  sm:w-[48%] "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full py-3 placeholder:text-zinc-500 px-4 rounded-full border-2 sm:w-[48%] "
              required
            />
            <input
              type="phone"
              name="phone"
              placeholder="Your Contact No."
              className="w-full py-3 rounded-full border-2 placeholder:text-zinc-500 px-4  sm:w-[48%] "
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full py-3 placeholder:text-zinc-500 px-4 rounded-full border-2 sm:w-[48%] "
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="w-full py-3 placeholder:text-zinc-500 px-4 rounded-3xl border-2  h-28 md:h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-max inline-block group/btn"
            >
             <Button text="Submit Now"/>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contactform;
