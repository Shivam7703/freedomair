import { Servicedata as data } from "@/data/homeData";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Heading from "../global/heading";

function Servicecards() {
  return (
    <div className="lg:px-28 md:p-20 sm:p-12 p-6 relative bg-white">
           <Heading title1={"Our Services"} title2={"Clear process with expert"} title3={"execution and"}  para={""} />


      {/* Timeline Container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:gap-9 lg:gap-12">
        {/* Cards */}
        {data?.service?.map((pro:any, index:number) => {
         return <ProCard
         service={pro} index={index} />
        })}
      </div>
    </div>
  );
}

export const ProCard = ({ service, index }: any) => (
  <Link
    href={`/services/${service?.title
      ?.trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`}
    className="group block h-full py-4"
  >
    {/* Card with Thick White Border */}
    <div className="relative h-full bg-white rounded-2xl overflow-hidden p-6 shadow-2xl transition-all duration-500  hover:-translate-y-2">
      {/* Content Section */}

      <div className="absolute rounded-full h-44 w-44 bottom-[73%] left-[78%] bg-color2 z-10" />
      <div className="absolute text-white top-3 right-3 text-4xl font-extrabold z-20">
        0{index + 1}
      </div>

      <div className=" text-3xl rounded-lg p-4 bg-color1 group-hover:bg-color2 w-max group-hover:text-white transition-all shadow-lg text-color2 mb-3 md:mb-4">
        {service?.icon}
      </div>
      <h3 className="text-xl md:text-2xl font-medium text-zinc-900 group-hover:text-color2 transition-colors duration-300">
        {service?.title}
      </h3>
      <div className="bg-color2 h-px w-full my-3 md:my-4"></div>
      <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-5 md:mb-6 line-clamp-3">
        {service?.text}
      </p>

      {/* View Details Button */}
      <div className="inline-flex items-center gap-2 text-black group-hover:text-color2 font-semibold text-sm md:text-base transition-all duration-300">
        <span>View Details</span>
        <div className="w-8 h-8 md:w-9 md:h-9 text-white text-2xl rounded-full bg-black group-hover:bg-color2 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
          <IoIosArrowRoundForward />
        </div>
      </div>
    </div>
  </Link>
);

export default Servicecards;
