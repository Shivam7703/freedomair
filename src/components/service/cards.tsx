import { Servicedata as data } from "@/data/homeData";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Servicecards() {
  return (
    <div className="lg:px-28 font1  md:p-20 sm:p-12 p-6 relative bg-color1">
      <div className="w-full text-center flex flex-col items-center gap-6 mb-16">
        {/* Badge with Animated Text */}
        <div className="relative overflow-hidden max-w-40 px-6 py-2.5 rounded-full border-2 text-color2">
          <h4 className="animate-marquee-right text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
            Service{" "}
          </h4>
        </div>

        {/* Main Heading */}
        <h2 className="font-bold text-3xl text-black md:text-5xl max-w-5xl mx-auto">
          Our Excellent Efforts
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Center Vertical Line */}
        <div className="absolute md:left-1/2 left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-color2/50 via-color2/90 to-color2/50 -translate-x-1/2 " />

        {/* Cards */}
        {data?.service?.map((pro, index) => {
          const isOdd = index % 2 !== 0;
          return <ProCard key={index} num={index + 1} pro={pro} isOdd={isOdd} />;
        })}
      </div>
    </div>
  );
}

const ProCard = ({ pro, isOdd, num }: any) => (
  <div
    className={`flex  md:flex-row flex-row-reverse items-start gap-0 mb-0 md:mb-0 relative group ${
      isOdd ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Image & Content Section */}
    <div className={`w-[74%] md:w-[48%] ${isOdd ? "md:pl-8 lg:pl-16" : "md:pr-8 lg:pr-16"} mb-10 md:mb-16`}>
      {/* Image Container */}
      <div className=" w-full md:rounded-3xl rounded-lg overflow-hidden shadow-lg mb-6">
        <Image
          src={pro?.img}
          alt={pro.title}
          className="w-full h-52 md:h-80  object-cover 
                     transition-all duration-700 ease-out
                     group-hover:scale-110 group-hover:rotate-0 group-hover:brightness-110"
        />
      </div>

      {/* Content Below Image */}
      <Link href={`/services/${pro.title.trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "")}`} className={`space-y-2 ${isOdd ? "md:text-left md:pl-4" : "md:text-right  md:pr-4"}`}>
        <h3 className="text-2xl md:text-3xl  font-medium text-black transition-colors duration-300 group-hover:text-color2">
          {pro.title}
        </h3>
        
        <p className={`text-zinc-700 text-base md:text-lg leading-relaxed`}>
          {pro.text}
        </p>

      </Link>
    </div>

    {/* Sticky Number Section */}
    <div className={`w-[24%] md:w-[48%] sticky top-40 ${
      isOdd ? "pr-4" : "md:pl-8 lg:pl-16"
    } pb-16 md:pb-8`}>
      <div className={`flex items-center w-full gap-3 md:gap-14 ${isOdd ? "md:flex-row-reverse " : "md:justify-start md:-ml-11"}`}>
        {/* Animated Dot with Pulse */}
        <div className="relative">
          <div className="absolute inset-0 bg-color2 rounded-full animate-ping opacity-75" />
          <div className="relative bg-color2 w-2 h-2 md:w-4 md:h-4 rounded-full shadow-lg" />
        </div>

        {/* Large Number */}
        <h4 className="font-black text-3xl md:text-8xl lg:text-9xl text-black/40 
                       leading-none select-none transition-all duration-500 
                       group-hover:text-color2">
          {num < 10 ? `0${num}` : num}
        </h4>
      </div>
    </div>
  </div>
);


export default Servicecards;