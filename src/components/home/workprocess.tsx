import Link from "next/link";
import React from "react";
import { FaAngleDoubleDown, FaWpforms } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { MdOutlineEngineering, MdOutlineSettings } from "react-icons/md";
import Heading from "../global/heading";

const data = [
  {
    icon: <FaWpforms />,
    heading: "Initial Consultation",
    text: "Understanding client requirements, aircraft details, and operational timelines clearly.",
  },
  {
    icon: <MdOutlineSettings />,
    heading: "Strategic Planning",
    text: "Preparing documentation, approvals, and coordination plans with authorities.",
  },
  {
    icon: <MdOutlineEngineering />,
    heading: "Execution & Coordination",
    text: "Managing permits, slots, handling, and services efficiently.",
  },
  {
    icon: <LuHandshake />,
    heading: "Final Confirmation",
    text: "Providing updates, confirmations, and ensuring smooth flight completion.",
  },
];

export default function WorkProcess() {
  return (
    <div className="relative lg:px-20 sm:p-12 p-7 bg-color1">
      {/* Heading Section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(var(--color2-rgb),0.06),transparent)]" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-color2/30 to-transparent" />
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
{/* Soft color blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-yellow-400/8 rounded-full blur-[100px] pointer-events-none" />
      <Heading title1={"Work Process"} title2={"Clear Work Process with "} title3={"Expert Execution"}  para={""} />

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