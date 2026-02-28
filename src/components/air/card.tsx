"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineFlightTakeoff,
  MdOutlineBlock,
  MdOutlineLocationCity,
} from "react-icons/md";
import {
  FaClock,
  FaFire,
  FaGasPump,
  FaPassport,
  FaUtensils,
  FaChevronDown,
} from "react-icons/fa";
import { BsAirplane } from "react-icons/bs";

/* ──────────────────────────────────────────
   Premium Info Row
────────────────────────────────────────── */
function InfoRow({
  icon,
  label,
  value,
  isLink = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isLink?: boolean;
}) {
  return (
    <div className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-color2/10 to-yellow-400/10 
                      flex items-center justify-center text-color2 text-sm shadow-sm">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
          {label}
        </p>

        {isLink ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold font1 text-color2 hover:text-yellow-500 transition"
          >
            Click Here ↗
          </a>
        ) : (
          <p className="text-sm text-black font-semibold font1 leading-relaxed">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Premium Airport Card
────────────────────────────────────────── */
export function AirportCard({ airport }: { airport: any }) {
  const [expanded, setExpanded] = useState(false);

  const parts = airport.airportName.split(" / ");
  const icao = parts[0] || "";
  const iata = parts[1] || "";
  const name = parts.slice(2).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden
                 border border-gray-200 max-h-max
                 shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                 hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)]
                 transition-all duration-500 flex flex-col"
    >
      {/* IMAGE SECTION */}
      <div className="relative h-56">
        <Image
          src={airport.img}
          alt={name}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* ICAO / IATA */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1.5 bg-color2 text-white text-xs font-bold rounded-lg shadow-md">
            {icao}
          </span>
          <span className="px-3 py-1.5 bg-black/20 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/30">
            {iata}
          </span>
        </div>

        {/* Fire Category */}
        <div className="absolute top-4 right-4">
          <span className="flex items-center gap-1 px-3 py-1.5 bg-red-500/90 text-white text-xs font-bold rounded-lg shadow-md">
            <FaFire className="text-[10px]" />
            CAT {airport.airportFireCategory}
          </span>
        </div>

        {/* Airport Name */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-2 text-white/70 text-xs mb-1 uppercase tracking-widest">
            <MdOutlineLocationCity />
            {airport.city}
          </div>

          <h3 className="text-white text-lg font-bold leading-snug drop-shadow">
            {name}
          </h3>
        </div>
      </div>

      {/* STATUS STRIP */}
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex flex-wrap gap-3 text-xs">
        <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Operational
        </span>

        <span className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
          <FaPassport className="text-[10px]" />
          CIQ: {airport.customsImmigration}
        </span>

        <span className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">
          <BsAirplane className="text-[10px]" />
          Slots: {airport.slotsRequired}
        </span>
      </div>

      {/* MAIN INFO */}
      <div className="px-5 py-4">
        <InfoRow
          icon={<FaClock />}
          label="Operating Hours"
          value={airport.airportOperatingHours}
        />

        <InfoRow
          icon={<FaGasPump />}
          label="Fuel (Jet A1)"
          value={airport.fuelJetA1Availability}
        />

        <InfoRow
          icon={<FaUtensils />}
          label="Catering"
          value={airport.catering}
        />

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <InfoRow
                icon={<MdOutlineBlock />}
                label="Airport Restrictions"
                value={airport.airportRestrictions}
              />
              <InfoRow
  icon={<FaFire />}
  label="Airport Fire Category"
  value={`Category ${airport.airportFireCategory}`}
/>
<InfoRow
  icon={<FaPassport />}
  label="Customs / Immigration"
  value={airport.customsImmigration}
/>
              <InfoRow
                icon={<MdOutlineFlightTakeoff />}
                label="Slots Required"
                value={airport.slotsRequired}
              />

              <InfoRow
                icon={<FaPassport />}
                label="Visa Information"
                value={airport.visa}
                isLink
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mx-5 mb-5 mt-2 py-3 rounded-xl
                   bg-gradient-to-r from-color2 to-yellow-400
                   text-white text-sm font-semibold
                   shadow-md hover:opacity-90 transition"
      >
        <div className="flex items-center justify-center gap-2">
          {expanded ? "Show Less Details" : "View Full Airport Details"}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown />
          </motion.span>
        </div>
      </button>
    </motion.div>
  );
}