import React from "react";
import Image from "next/image";
import {blogData as data} from "@/data/homeData";
import Link from "next/link";
import { FiCalendar, FiUser } from "react-icons/fi";

export default function Blogs() {


  const featuredPost = data.blogs.find(post => post.featured);
  const regularPosts = data.blogs.filter(post => !post.featured);

  return (
    <section className="lg:px-28 md:px-20 sm:p-16 px-6 py-8 md:py-24 font1 bg-color1 mx-auto">
      
      {/* Header Section */}
      <div className="mb-12">
        {/* Marquee Badge */}
        <div className="max-w-fit overflow-hidden px-6 py-2.5 rounded-full border-2  mb-6">
          <h4 className="animate-marquee-right text-color2 text-xs min-w-max sm:text-sm font-semibold tracking-wider uppercase">
            {data.title1}
          </h4>
        </div>

        {/* Main Heading */}
        <h2 className="text-black font-bold text-3xl md:text-5xl">
          {data.title2}
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        
        {/* Featured Post - Left Side */}
        {featuredPost && (
          <div className="w-full lg:w-[48%] bg-white p-6 rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative w-full h-52 md:h-[300px] !mb-6 rounded-2xl overflow-hidden ">
              <Image
                src={featuredPost.img}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
<Link
                href={`/blogs/${featuredPost?.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="!mt-6"
              >              {/* Date and Author */}
              <div className="flex items-center gap-4 mb-4 mt-6 text-sm text-color2">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-black font-bold text-xl md:text-2xl mb-4">
                {featuredPost.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {featuredPost.text}
              </p>
            </Link>
          </div>
        )}

        {/* Regular Posts - Right Side */}
        <div className="w-full lg:w-[52%] flex flex-col gap-6 ">
          {regularPosts.map((post, index) => (
            <Link  
              key={index}
              href={`/blogs/${post?.title
                .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")  // remove punctuation
  .trim()
  .replace(/\s+/g, "-")}`}
              className="bg-white rounded-3xl p-6 lg:p-4 overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="relative w-full sm:w-52 h-48 sm:h-auto rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center flex-1">
                {/* Date and Author */}
                <div className="flex items-center gap-4 mb-3 text-xs md:text-sm text-color2">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiUser className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-black font-normal text-xl md:text-2xl">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}