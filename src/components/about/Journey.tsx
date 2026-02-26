"use client";
import { banner, banner2, banner3, banner4 } from "@/assets";
import React from "react";
import { FaAngleDoubleDown, FaWpforms } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { MdOutlineEngineering, MdOutlineSettings } from "react-icons/md";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { fadeUp, nodePop, slideIn } from "@/utils/motion";

const data = [
  {
    img: banner,
    icon: <FaWpforms />,
    heading: "Planning & Assessment",
    year: "2012",
    text: "Understanding project requirements, site conditions, timelines, and execution feasibility thoroughly.",
  },
  {
    img: banner2,
    icon: <MdOutlineSettings />,
    heading: "Design & Engineering",
    year: "2015",
    text: "Understanding project requirements, site conditions, timelines, and execution feasibility thoroughly.",
  },
  {
    img: banner3,
    icon: <MdOutlineEngineering />,
    heading: "Execution & Supervision",
    year: "2018",
    text: "Executing construction activities with strict supervision, safety compliance, and quality control.",
  },
  {
    img: banner4,
    icon: <LuHandshake />,
    heading: "Completion & Handover",
    year: "2024",
    text: "Final inspections, documentation, and smooth project handover within committed timelines.",
  },
];


/* ── Scroll-driven timeline line ── */
function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px]">
      {/* Ghost track */}
      <div className="absolute inset-0 bg-white/5" />
      {/* Animated fill — origin top */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full origin-top
                   bg-gradient-to-b from-color2 via-yellow-400 to-color2"
        style={{ scaleY }}
      />
    </div>
  );
}

/* ── Single row ── */
function TimelineRow({ item, i }: { item: (typeof data)[0]; i: number }) {
  const isLeft = i % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto lg:gap-0 items-center mb-12 lg:mb-20">

      {/* Center node */}
      <motion.div
        className="hidden lg:flex absolute left-[46.5%] -translate-x-1/2 flex-col items-center z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={nodePop}
      >
        <div className="w-16 h-16 rounded-full border-2 border-color2 bg-[#0a0a0a]
                        flex items-center justify-center
                        shadow-[0_0_40px_rgba(var(--color2-rgb),0.45)]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-color2 to-yellow-500
                          flex items-center justify-center text-white text-base shadow-lg">
            {item.icon}
          </div>
        </div>
        <motion.div
          className="mt-2 px-3 py-0.5 rounded-full bg-color2/10 border border-color2/30"
          variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.4 } } }}
        >
          <span className="text-color2 text-lg font-bold tracking-widest">{item.year}</span>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        className={`${isLeft ? "lg:pr-20" : "lg:order-last lg:pl-20"}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideIn(isLeft ? "left" : "right")}
      >
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72 group
                        border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <motion.img
            src={typeof item.img === "object" ? (item.img as any).src : item.img}
            alt={item.heading}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-color2/15 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Mobile badge */}
          <div className="lg:hidden absolute bottom-4 left-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-color2 to-yellow-500
                            flex items-center justify-center text-white shadow-lg">
              {item.icon}
            </div>
            <span className="text-white/90 text-xs font-bold tracking-widest border border-white/20
                             bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
              {item.year}
            </span>
          </div>

          {/* Corner glow on hover */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-color2/25 blur-2xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className={`${isLeft ? "lg:pl-20" : "lg:pr-20"} flex flex-col justify-center relative`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideIn(isLeft ? "right" : "left")}
      >
        {/* Ghost number */}
        <span className="hidden lg:block text-[110px] font-black leading-none select-none pointer-events-none
                         absolute -top-10 -left-4 text-white/[0.04]">
          0{i + 1}
        </span>

        <div className="space-y-4 relative z-10">
          <motion.p
            className="text-color2 text-[10px] font-bold uppercase tracking-[0.3em]"
            variants={fadeUp}
            custom={0}
          >
            Step {String(i + 1).padStart(2, "0")}
          </motion.p>

          <motion.h3
            className="text-white text-2xl md:text-3xl font-bold leading-tight"
            variants={fadeUp}
            custom={1}
          >
            {item.heading}
          </motion.h3>

          <motion.div
            className="h-[2px] bg-gradient-to-r from-color2 to-yellow-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          />

          <motion.p
            className="text-zinc-300 text-sm leading-relaxed max-w-sm"
            variants={fadeUp}
            custom={2}
          >
            {item.text}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default function WorkProcess() {
  return (
    <div
      className="lg:px-20 sm:px-12 px-6 py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #050505 0%, #0a0a14 35%, #08080f 70%, #050505 100%)",
      }}
    >
      {/* ── Layered background gradients ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px]
                      rounded-full bg-color2/8 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[700px]
                      bg-yellow-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[700px]
                      bg-color2/6 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px]
                      bg-color2/7 blur-[120px] pointer-events-none" />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-color2/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-color2/20 to-transparent" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.028]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Heading ── */}
        <motion.div
          className="w-full text-center flex flex-col items-center gap-5 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-color2/30 bg-color2/10"
            variants={fadeUp}
            custom={0}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-color2 animate-pulse" />
            <h4 className="text-color2 text-xs font-bold tracking-[0.2em] uppercase">
              Our Journey
            </h4>
          </motion.div>

          <motion.h2
            className="font-bold text-3xl text-white md:text-5xl max-w-3xl mx-auto leading-tight"
            variants={fadeUp}
            custom={1}
          >
            Redefining Luxury Aviation{" "}
            <span className="bg-gradient-to-r from-color2 via-yellow-400 to-color2 bg-clip-text text-transparent">
              Our Path to Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-zinc-400 text-sm max-w-xl text-center leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            A decade-long journey of precision, passion, and pioneering aviation standards that set us apart.
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            className="flex flex-col items-center gap-1 mt-2 opacity-50"
            variants={fadeUp}
            custom={3}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[1px] h-8 bg-gradient-to-b from-color2 to-transparent" />
            <FaAngleDoubleDown className="text-color2 text-xs" />
          </motion.div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          <TimelineLine />
          <div className="flex flex-col gap-0">
            {data.map((item, i) => (
              <TimelineRow key={i} item={item} i={i} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}