import { home, man } from "@/assets";
import React from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

function Latest() {
  return (
    <div className="lg:p-12 font1 text-white sm:p-16 p-6 
     lg:rounded-xl relative max-w-[1380px] bg-color2 mx-auto">
      {" "}
      <Image
        src={home}
        alt="omengg"
        className="absolute top-[15%] right-0 w-max h-[70%] max-lg:hidden object-contain "
      />
      <Image
        src={man}
        alt="omengg"
        className="absolute bottom-0 left-3  h-[115%] max-lg:hidden object-contain "
      />
      <div className="max-w-[500px] space-y-6 mx-auto w-full">
        <div className="max-w-40 overflow-hidden px-4 py-2 rounded-full border-2">
          <h4 className="animate-marquee-right text-xs min-w-max sm:text-sm">
            mail alerts
          </h4>
        </div>

        {/* Main Heading - Enhanced */}
        <h2 className=" font-semibold text-3xl md:text-5xl">
          Get The Latest News
        </h2>

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
                   transition hover:bg-black hover:text-white duration-200"
          >
            Subscribe Now
          </button>
        </div>

      <label className="flex items-center gap-3 text-sm text-white/90 cursor-pointer select-none">
  
  {/* Peer MUST be before the elements */}
  <input
    type="checkbox"
    className="peer sr-only"
  />
  {/* Checkbox Box */}
  <span
    className="relative w-4 h-4 border border-white rounded-sm
               flex items-center justify-center                  text-color2 peer-checked:text-white

               transition"
  >
    <FiCheck
      className=" text-sm
                 transition"
    />
  </span>
  <span>
    I accept the{" "}
    <Link href={"/privacy-policy"} className="underline underline-offset-4 hover:text-white transition">
      Terms & Conditions
    </Link>
  </span>
</label>
      </div>
    </div>
  );
}

export default Latest;
