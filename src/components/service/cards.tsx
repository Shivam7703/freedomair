import { Servicedata as data } from "@/data/homeData";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Heading from "../global/heading";

function Servicecards() {
  return (
    <div className="lg:px-28 md:p-20 sm:p-12 p-6 relative bg-white">
      <Heading
        title1={"Our Services"}
        title2={"Clear process with expert"}
        title3={"execution and"}
        para={""}
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:gap-9 lg:gap-12">
        {data?.service?.map((pro: any, index: number) => (
          <ProCard key={index} service={pro} index={index} />
        ))}
      </div>
    </div>
  );
}

export const ProCard = ({ service, index }: any) => {
  const slug = service?.title
    ?.trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  // service.points (array) ho to wo use hoga, warna text se 4 points bana lega
  const points: string[] = service?.points?.length
    ? service.points
    : (service?.text || "")
        .split(/[.\n]/)
        .map((s: string) => s.trim())
        .filter(Boolean)
        .slice(0, 4);

  return (
    <Link href={`/services/${slug}`} className="group block h-full py-4">
      <div className="relative  aspect-square w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:-translate-y-2">
        {/* Background image */}
        <Image
          src={service?.img}
          alt={service?.title || "service"}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Red gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14193E] via-[#14193E]/70 to-transparent" />

        {/* Thin white inner border */}
        <div className="pointer-events-none absolute inset-3 rounded-2xl border border-white/70" />

        {/* Content */}
        <div className="absolute inset-3 flex flex-col p-5 md:p-6">
          <h3 className="text-2xl font-bold text-white">
            {service?.title}
          </h3>

         <p className="text-white/90 mt-3 text-lg leading-tight line-clamp-5">    {service?.text}</p>

          {/* Bottom */}
          <div className="mt-auto flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs md:text-sm font-semibold text-zinc-800 shadow-md transition-all group-hover:bg-white">
              <span>{service?.tagline || "View Details"}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-color2 text-lg text-white transition-transform group-hover:translate-x-1">
                <IoIosArrowRoundForward />
              </span>
            </div>
           
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Servicecards;