"use client";
import Link from "next/link";
import React from "react";
import { FaAngleDoubleDown, FaWpforms } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { MdOutlineEngineering, MdOutlineSettings } from "react-icons/md";

const data = [
  {
    icon: <FaWpforms />,
    heading: "Planning & Assessment",
    text: "Understanding project requirements, site conditions, timelines, and execution feasibility thoroughly.",
  },
  {
    icon: <MdOutlineSettings />,
    heading: "Design & Engineering",
    text: "Understanding project requirements, site conditions, timelines, and execution feasibility thoroughly.",
  },
  {
    icon: <MdOutlineEngineering />,
    heading: "Execution & Supervision",
    text: "Executing construction activities with strict supervision, safety compliance, and quality control.",
  },
  {
    icon: <LuHandshake />,
    heading: "Completion & Handover",
    text: "Final inspections, documentation, and smooth project handover within committed timelines.",
  },
];

export default function WorkProcess() {
  return (
    <div className="lg:px-20 sm:p-12 p-7 bg-color1">
      {/* Heading Section */}
      <div className="w-full text-center flex flex-col items-center gap-6 mb-6 ">
        <div className="relative overflow-hidden px-6 py-2.5 rounded-full border-2 text-color2">
          <h4 className=" text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
            Work Process
          </h4>
        </div>
        <h2 className="font-medium text-3xl text-black md:text-5xl max-w-3xl mx-auto">
          Clear process with expert execution and
        </h2>
      </div>

      {/* Timeline / Sticky Section */}
      <div className="relative mt-9 md:mt-16 max-w-6xl mx-auto">
        {/* Center Vertical Line */}
        <div className="absolute md:left-1/2 left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-color2/50 via-color2/90 to-color2/50 -translate-x-1/2" />

        {data.map((item, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <ProCard
              key={index}
              num={index + 1}
              pro={item}
              isOdd={isOdd}
            />
          );
        })}
      </div>
    </div>
  );
}

const ProCard = ({
  pro,
  isOdd,
  num,
}: {
  pro: any;
  isOdd: boolean;
  num: number;
}) => (
  <div
    className={`flex md:flex-row flex-row-reverse items-start gap-0 mb-0 md:mb-0 relative group ${
      isOdd ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Content Section */}
    <div className={`w-[90%] md:w-[48%] ${isOdd ? "md:pl-8 lg:pl-16" : "md:pr-8 lg:pr-16"} mb-7 md:mb-16`}>
      <Link
        href="/contact-us"
        className={`space-y-2 ${isOdd ? "md:text-left md:pl-4" : "md:text-right md:pr-4"}`}
      >
         <div className="relative bg-white border border-color2 rounded-2xl md:p-10 p-6 text-left h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 mx-auto">

              {/* Number Badge */}
              <div
                className={`absolute -top-6 left-10 max-sm:hidden w-14 h-14 flex items-center justify-center rounded-full text-lg font-semibold
                    border border-gray-300 text-gray-500 bg-white group-hover:text-white group-hover:bg-color2`}
              >
                0 {num}
              </div>

              {/* Icon */}
              <div className="text-4xl text-red-500 mb-6 sm:mt-6">{pro.icon}</div>

              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                {pro.heading}
              </h2>

              {/* Description */}
              <p
                className={`text-gray-500 text-base md:text-lg leading-relaxed duration-300 transition-allh-full`}
              >
                {pro.text}
              </p>
            </div>
      </Link>
    </div>

    {/* Sticky Number Section */}
    <div
      className={`w-[24%] md:w-[48%] sticky top-40 ${
        isOdd ? "sm:pr-[0.4%] " : " md:pl-8 lg:pl-[4.2%]"
      } pb-16 md:pb-8`}
    >
      <div
        className={`flex items-center max-sm:-ml-2 w-full gap-2 md:gap-14 ${
          isOdd ? "md:flex-row-reverse" : "md:justify-start md:-ml-11 "
        }`}
      >
        {/* Animated Dot */}
        <div className="relative">
          <div className="absolute inset-0 bg-color2 rounded-full animate-ping opacity-75" />
          <FaAngleDoubleDown className="relative text-color2 shadow-lg p-2 rounded-full bg-white text-4xl sm:text-4xl"/>

        </div>

        {/* Large Number */}
        <h4
          className="font-black text-3xl md:text-6xl lg:text-6xl text-black/60
                     leading-none select-none transition-all duration-500
                     group-hover:text-color2"
        >
     <span className="max-sm:hidden">STEP</span>  {" "}0{num}
        </h4>
      </div>
    </div>
  </div>
);