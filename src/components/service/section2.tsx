import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function Servicesec2({ data }: any) {
  return (
    <section className="relative py-6 sm:py-9 font1">
      {/* Section header */}
      <div className=" max-w-3xl">
        <h2 className="text-4xl font-semibold text-black md:text-6xl">
          How We Work
        </h2>
        <p className=" text-lg sm:text-xl text-zinc-600">
          A simple, transparent process designed to deliver results efficiently.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-7  md:grid-cols-2 mt-8 sm:mt-14">
        {data.map((card: any, index: number) => (
          <div
            key={card.id}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-color1 p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Hover gradient glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-color2/20 blur-3xl" />
            </div>

            {/* Icon */}
            <div className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-color2/20 text-2xl text-color2 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
              <FaCircleCheck />
            </div>

            {/* Step number */}
            <span className="absolute right-6 top-6 z-0 text-7xl font-bold text-color2/20 select-none">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <h3 className="relative z-10 text-xl font-semibold text-black md:text-2xl">
              {card.heading}
            </h3>

            <p className="relative z-10 mt-4 text-lg leading-relaxed text-zinc-600">
              {card.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
