import React from "react";
import { blogData as data } from "@/data/homeData";
import Image from "next/image";
import {
  FaArrowRight,
  FaUser,
} from "react-icons/fa6";
import Link from "next/link";

export default function Blogs({ isHome }:any) {
  return (
    <section className={`${isHome ? "lg:px-20 md:px-16 sm:p-12 p-6 " : "px-3 pb-5"} bg-color1 text-center relative w-full`}>
      {data?.title1 && isHome && (
      <div className="relative overflow-hidden px-6 py-2.5 rounded-full w-max mx-auto border-2 text-color2">
          <h4 className=" text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
{data.title1}          </h4>
        </div>
      )}
{isHome && <h2 className="font-medium text-3xl md:my-8 my-6 mb-12 text-black md:text-5xl max-w-3xl mx-auto">
        {data.title2} <span className="text-color2">{data?.title3}</span>
      </h2>}

      <div className={`grid ${!isHome? "" : "lg:grid-cols-3"} sm:grid-cols-2  gap-8 max-w-7xl py-7 mx-auto}`}>
  {(isHome ? data?.blogs?.slice(0, 3) : data?.blogs)?.map((blogs: any, index: number) => (
 <div
  key={index}
  className="group blg relative bg-white rounded-2xl overflow-hidden
             border border-gray-100
             shadow-[0_4px_20px_rgba(0,0,0,0.06)]
             hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
             hover:-translate-y-2
             transition-all duration-500 ease-out"
>
  {/* Image Section */}
  <div className="relative h-56 sm:h-64 overflow-hidden">
    <Image
      src={blogs.img}
      alt={blogs.title}
      width={500}
      height={350}
      className="w-full h-full object-cover
                 group-hover:scale-110 transition-transform duration-700 ease-out"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent
                    opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

    {/* Date Badge */}
    {blogs?.date && (
      <div className="absolute bottom-4 left-4">
        <div className="bg-white/95 backdrop-blur-sm text-center px-3 py-2 rounded-xl
                        shadow-lg border border-white/60
                        group-hover:bg-color2 group-hover:text-white
                        transition-all duration-300">
          <p className="text-2xl font-black leading-none text-color2 group-hover:text-white transition-colors duration-300">
            {blogs.date.split(" ")[0]}
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500 group-hover:text-white/80 transition-colors duration-300">
            {blogs.date.split(" ")[1]}
          </p>
        </div>
      </div>
    )}

    {/* Category Pill on image */}
    <div className="absolute top-4 right-4">
      <span className="bg-color2/90 backdrop-blur-sm text-white text-[10px] font-bold
                       uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
        Airline
      </span>
    </div>
  </div>

  {/* Thin accent line */}
  <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-color2 via-blue-500 to-purple-500
                  transition-all duration-500 ease-out" />

  {/* Content */}
  <div className="p-5 sm:p-6 space-y-3 text-left">

    {/* Meta */}
    <div className="flex items-center justify-between text-xs text-gray-400">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-color2 to-blue-500
                        flex items-center justify-center shadow-sm">
          <FaUser className="text-white text-[10px]" />
        </div>
        <span>
          By <span className="font-semibold text-gray-700">admin</span>
        </span>
      </div>
      <span className="w-1.5 h-1.5 rounded-full bg-color2/40" />
    </div>

    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />

    {/* Title */}
    <Link
      href={`/blogs/${encodeURIComponent(
        blogs.title.toLowerCase().replace(/\s+/g, "-")
      )}`}
    >
      <h2
        className="text-base sm:text-lg font-extrabold leading-snug text-gray-900
                   group-hover:text-color2
                   transition-colors duration-300 line-clamp-2 cursor-pointer"
      >
        {blogs.title}
      </h2>
    </Link>

    {/* Description */}
    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
      {blogs?.text.slice(0, 150)}...
    </p>

    {/* Read More */}
    <Link
      href={`/blogs/${encodeURIComponent(
        blogs.title.toLowerCase().replace(/\s+/g, "-")
      )}`}
      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest
                 text-color2 relative pb-0.5 mt-1
                 transition-all duration-300"
    >
      Read more
      <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300 text-[10px]" />
    </Link>
  </div>
</div>
))}

      </div>
    </section>
  );
}
