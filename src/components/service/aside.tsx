import { banner, banner4 } from "@/assets";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Servicedata, blogData } from "@/data/homeData";
import Buttonmain, { Button } from "../global/button";
import { FiCalendar, FiArrowRight, FiDownload } from "react-icons/fi";

function Aside({ title }: { title: string }) {
  return (
    <div className="space-y-8 font1">
      {/* Contact Form Section - Enhanced */}
      <div className="bg-color1 p-5 rounded-3xl border shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font2 mb-2">
            Get In Touch
          </h3>
          <p className="text-gray-600 text-sm">
            Fill out the form and we'll be in touch soon!
          </p>
        </div>

        <form
          className="flex flex-wrap gap-4 text-black"
          method="POST"
          action={"/contact.php"}
        >
          <div className="w-full group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full py-2 rounded-full border-2 border-gray-200 placeholder:text-gray-400 px-5 focus:border-color2 focus:ring-2 focus:ring-color2/20 transition-all duration-300 outline-none bg-white hover:border-gray-300"
              required
            />
          </div>

          <div className="w-full group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full py-2 rounded-full border-2 border-gray-200 placeholder:text-gray-400 px-5 focus:border-color2 focus:ring-2 focus:ring-color2/20 transition-all duration-300 outline-none bg-white hover:border-gray-300"
              required
            />
          </div>

          <div className="w-full group">
            <input
              type="tel"
              name="phone"
              placeholder="Your Contact No."
              className="w-full py-2 rounded-full border-2 border-gray-200 placeholder:text-gray-400 px-5 focus:border-color2 focus:ring-2 focus:ring-color2/20 transition-all duration-300 outline-none bg-white hover:border-gray-300"
              required
            />
          </div>

          <div className="w-full group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full py-2 rounded-full border-2 border-gray-200 placeholder:text-gray-400 px-5 focus:border-color2 focus:ring-2 focus:ring-color2/20 transition-all duration-300 outline-none bg-white hover:border-gray-300"
              required
            />
          </div>

          <div className="w-full group">
            <textarea
              placeholder="Your Message"
              name="message"
              className="w-full py-2 rounded-3xl border-2 border-gray-200 placeholder:text-gray-400 px-5 h-32 md:h-36 resize-none focus:border-color2 focus:ring-2 focus:ring-color2/20 transition-all duration-300 outline-none bg-white hover:border-gray-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto group/btn transform hover:scale-[1.02] transition-transform duration-200"
          >
            <Button text="Submit Now" />
          </button>
        </form>
      </div>

      {/* Services Section - Enhanced */}
      <div className="bg-color1 border-2 border-color2/20 p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-color2/40">
        <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font2">
            Our Services
          </h3>
          <div className="w-10 h-10 rounded-full bg-color2/10 flex items-center justify-center">
            <FiArrowRight className="text-color2 w-5 h-5" />
          </div>
        </div>

        <ul className="space-y-3">
          {Servicedata?.service?.map((service, index) => (
            <li
              key={service?.title}
              className="group/item transform transition-all duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Link
                href={`/services/${service?.title
                  .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "")}`}
                className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  service?.title === title
                    ? "bg-color2 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-50 hover:text-color2 hover:pl-5"
                }`}
              >
                <span className="font-medium ">{service?.title}</span>
                <FiArrowRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    service?.title === title
                      ? "opacity-100"
                      : "opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Blog Section - Enhanced */}
 <div className="bg-color1 border hover:border-color2 p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold font2 mb-4">Latest Blogs</h3>

        <div className="space-y-4">
          {blogData?.blogs?.slice(0, 3).map((post, i) => (
            <Link
              key={i}
              href={`/blogs/${post.title
                .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "")}`}
              className="flex gap-3 group"
            >
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1 flex gap-2">
                  <span className="flex items-center gap-1">
                    <FiCalendar /> {post.date}
                  </span>
                </p>
                <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-color2">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Download Brochure Section - Enhanced */}
      <div className="relative lg:h-[420px] md:h-96 h-80 w-full group/brochure rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
        <Image
          src={banner4}
          alt="Download Brochure"
          className="w-full h-full object-cover absolute z-10 top-0 left-0 group-hover/brochure:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay with improved gradient */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/60 to-transparent group-hover/brochure:from-black/90 transition-all duration-500" />
        
        {/* Content */}
        <div className="absolute z-30 inset-0 p-8 flex flex-col justify-end">
          <div className="transform group-hover/brochure:translate-y-[-8px] transition-transform duration-500">
            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl  font-bold text-white mb-3 leading-tight">
              Download
              <br />
              <span className="text-color2">Brochure</span>
            </h2>

            {/* Description */}
            <p className="text-gray-200 text-sm md:text-base mb-6 max-w-md opacity-60 group-hover/brochure:opacity-100 transition-opacity duration-500 delay-100">
              Get detailed information about our services and offerings
            </p>

            {/* Button */}
            <div className="transform group-hover/brochure:scale-105 transition-transform duration-300 inline-block">
              <Buttonmain text={"Download now"} href={"/"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;