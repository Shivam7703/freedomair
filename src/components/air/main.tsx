"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MdOutlineFlightTakeoff,
  MdOutlineBlock,
} from "react-icons/md";
import {
  FaClock, FaFire, FaGasPump,
  FaPassport, FaSearch, FaUtensils,
} from "react-icons/fa";
import { BsAirplane } from "react-icons/bs";

/* ── Replace with your actual import ── */
import { fadeUp } from "@/utils/motion";
import { AirportCard } from "./card";


/* ── Main component ── */
export default function AirportIndex({ airports }: { airports: any[] }) {
  const [search, setSearch] = useState("");

  const filtered = airports.filter((a) =>
    a.airportName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative bg-color1 lg:px-20 sm:p-12 p-6  overflow-hidden">

      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Heading ── */}
        <motion.div
          className="text-center flex flex-col items-center gap-4 mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                       border border-color2/30 bg-color2/8">
            <BsAirplane className="text-color2 text-xs" />
            <span className="text-color2 text-xs font-bold tracking-[0.2em] uppercase">Airport Directory</span>
          </motion.div>

          <motion.h2 variants={fadeUp} custom={1}
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Indian Airport{" "}
            <span className="bg-gradient-to-r from-color2 to-yellow-500 bg-clip-text text-transparent">
              Index
            </span>
          </motion.h2>

          <motion.div
            className="h-[3px] bg-gradient-to-r from-color2 to-yellow-400 rounded-full"
            initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <motion.p variants={fadeUp} custom={2}
            className="text-gray-600 font-medium max-w-xl leading-relaxed">
            Operational details, clearance requirements and handling information for major Indian airports.
          </motion.p>

          {/* Search */}
          <motion.div variants={fadeUp} custom={3} className="relative w-full max-w-md mt-2">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search by airport name or code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 rounded-2xl border border-gray-200 bg-white
                         text-gray-800 text-sm placeholder:text-gray-400
                         focus:outline-none focus:border-color2 focus:ring-2 focus:ring-color2/10
                         shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400
                           hover:text-gray-600 text-xs font-bold transition-colors"
              >
                ✕
              </button>
            )}
          </motion.div>
        </motion.div>

        {/* Results count */}
        {search && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-gray-600 mb-6 text-center"
          >
            {filtered.length} airport{filtered.length !== 1 ? "s" : ""} found for "{search}"
          </motion.p>
        )}

        {/* ── Grid ── */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((airport, i) => (
              <AirportCard key={i} airport={airport} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 flex flex-col items-center gap-3"
          >
            <BsAirplane className="text-5xl text-gray-400" />
            <p className="text-gray-700">No airports found for "{search}"</p>
            <button onClick={() => setSearch("")}
              className="text-color2  font-semibold hover:underline">
              Clear search
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}