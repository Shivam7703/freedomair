"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectData } from "@/data/homeData";

type ProjectType = {
  id: number;
  title: string;
  text: string;
  imgs: any[]; // You can replace `any` with StaticImageData if using imported images
  para: string[];
  detail: { heading: string; info: string }[];
  cat: string;
};

export default function Project() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const data: ProjectType[] = projectData.projects;

  const categories: string[] = [
    "All",
    ...Array.from(new Set(data.map((item) => item.cat))),
  ];

  const filteredData =
    activeFilter === "All"
      ? data
      : data.filter((item) => item.cat === activeFilter);

  return (
    <div className="xl:px-28 md:px-20 font1 sm:p-16 bg-white p-6 relative">
      <div className="w-full text-center flex flex-col items-center gap-6 mb-10">
        <div className="relative overflow-hidden px-6 py-2.5 rounded-full border-2 text-color2">
          <h4 className="animate-marquee-right text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
            Projects
          </h4>
        </div>

        <h2 className="font-bold text-3xl text-black md:text-5xl max-w-5xl mx-auto">
          Our Excellent Efforts
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
              ${
                activeFilter === category
                  ? "bg-color2 text-white"
                  : "bg-transparent text-gray-700 hover:text-color2"
              }`}
          >
            {activeFilter !== category && (
              <span className="w-1.5 h-1.5 rounded-full bg-color2"></span>
            )}
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredData.map((item) => {
          const slug = item.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-");

          return (
            <Link
              key={item.id}
              href={`/projects/${slug}`}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer block"
            >
              <Image
                src={item.imgs[0]}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute opacity-0 group-hover:opacity-100 inset-0 bg-black/40 flex items-end p-6 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
