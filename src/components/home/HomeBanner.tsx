"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { sliderText } from "@/utils/motion";
import Buttonmain from "../global/button";

export default function HomeBanner() {
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-bg-player", {
        videoId: "FkALtPqEw0c",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          playsinline: 1,
          modestbranding: 1,
          start: 0,
        },
        events: {
          onReady: (e: any) => {
            e.target.playVideo();
            // Poll every 500ms — if time >= 20s, seek back to 0
            intervalRef.current = setInterval(() => {
              const player = playerRef.current;
              if (player && player.getCurrentTime) {
                if (player.getCurrentTime() >= 10) {
                  player.seekTo(0, true);
                  player.playVideo();
                }
              }
            }, 500);
          },
        },
      });
    };

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const data = {
    heading1: "Lorem Ipsum Dollar Conqiutes",
    heading2:" Hettrink",
    para:
      "Experience luxury and convenience like never before with Hyperfly, your premier private jet charter service. Whether you're traveling for business or leisure",
    points: [
      "Experience luxury and convenience like never before",
      "Premium comfort & world-class safety",
      "Seamless global connectivity",
    ],
  };

  return (
    <section className=" w-full xl:px-16 bg-color1">
      <div className="relative z-[1] w-full xl:rounded-[40px] overflow-hidden">
        {/* Background Video — controlled via YT IFrame API */}
        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          <div
            id="yt-bg-player"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "177.78vh",
              minWidth: "100%",
              height: "56.25vw",
              minHeight: "100%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70  to-transparent z-[3]" />

        {/* Content */}
        <div className="relative z-10 w-full md:h-[96vh] min-h-[580px] flex items-center justify-start xl:px-28 lg:px-20 sm:px-10 px-6">
          <motion.div
            variants={sliderText}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-[680px]"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-5 leading-tight">
              {data.heading1} <span className=" text-color3">{data.heading2}</span>
            </h1>

            <p className="text-gray-50 mb-7 leading-relaxed md:text-lg">
              {data.para}
            </p>

            <ul className="space-y-3 mb-8">
              {data.points.map((list: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-50"
                >
                  <FaCheckCircle className="text-yellow-400 mt-1 shrink-0 text-lg" />
                  <span className="text-sm md:text-base">{list}</span>
                </li>
              ))}
            </ul>

            <Buttonmain text="Discover More" href="/" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
