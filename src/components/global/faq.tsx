"use client";
import React, { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Faq({ data }: { data: { id: number; que: string; ans: string }[] }) {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  function toggle(id: number) {
    setExpandedId(expandedId === id ? null : id);
  }

  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const isOpen = expandedId === item.id;

        return (
          <div
            key={item.id}
            className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden p-5 shadow-black/20 shadow-md
              ${isOpen
                ? "border-color2/50 bg-white shadow-lg"
                : "border-zinc-200 bg-white/70 hover:border-color2/30"
              }`}
          >
            {/* Left accent bar */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-300
                ${isOpen ? "bg-color2" : "bg-transparent group-hover:bg-color2/30"}`}
            />

            {/* Question row */}
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 text-left"
            >
              {/* Number + Question */}
              <div className="flex items-center gap-2">
                
                <h3
                  className={`text-base md:text-lg font-semibold transition-colors duration-300 leading-snug
                    ${isOpen ? "text-color2" : "text-zinc-800"}`}
                >
                                   0{index + 1}.{" "}
 {item.que}
                </h3>
              </div>

              {/* Icon */}
              <BsArrowUpRightCircleFill
                className={`text-xl shrink-0 transition-all duration-300
                  ${isOpen
                    ? "rotate-[135deg] text-color2"
                    : "text-zinc-300 group-hover:text-color2"
                  }`}
              />
            </button>

            {/* Answer — smooth grid expand */}
            <div
              className={`grid transition-all duration-500 ease-in-out
                ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className=" pt-3">
                  <div className="w-full h-px bg-color3" />
                  <p className="text-zinc-600 md:text-base mt-2 leading-relaxed">
                    {item.ans}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Faq;
