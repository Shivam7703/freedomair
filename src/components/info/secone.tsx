"use client";
import React from "react";
import Image from "next/image";
import { banner } from "@/assets";
import { motion } from "framer-motion";
import {
  MdOutlineFlightTakeoff,
  MdOutlineAssignment,
  MdOutlineMedicalServices,
  MdOutlineWater,
} from "react-icons/md";
import {
  FaPassport,
  FaClock,
  FaShieldAlt,
  FaFileAlt,
  FaGlobeAsia,
  FaExclamationTriangle,
} from "react-icons/fa";
import { BsAirplane, BsClipboardCheck } from "react-icons/bs";
import { fadeUp } from "@/utils/motion";



const sections = [
  {
    id: "AA",
    icon: <MdOutlineFlightTakeoff />,
    color: "from-pink-500 to-color2",
    badge: "Non-PRC Country",
    title: "Origin from Non-PRC Country",
    items: [
      { label: "Overfly & Technical Landing", time: "1 Working Day", note: "Prior notice required" },
      { label: "Traffic Purpose Landing", time: "3 Working Days", note: "Prior notice required" },
    ],
  },
  {
    id: "BB",
    icon: <FaGlobeAsia />,
    color: "from-orange-500 to-red-500",
    badge: "PRC Country",
    title: "Origin from PRC Country",
    items: [
      { label: "Overfly & Technical Landing", time: "3 Working Days", note: "Prior notice required" },
      { label: "Traffic Purpose Landing", time: "7 Working Days", note: "Prior notice required" },
    ],
  },
];

const prcCountries = [
  "Afghanistan", "China", "Iran", "Iraq",
  "Nigeria", "North Korea", "Pakistan", "Somalia", "Sudan",
];

const seasonalDocs = [
  "Air Operator Certificate",
  "Certificate of Registration (C of R)",
  "Certificate of Airworthiness (C of A)",
  "Noise Certificate",
  "Complete Schedule with ETD/ETA, ATS Routes, Entry/Exit Points & Timings",
  "Authorization letter from Operator for local representation in India",
];

const otherSections = [
  {
    icon: <FaShieldAlt />,
    color: "from-purple-500 to-indigo-500",
    title: "Military / Defense Airports",
    time: "~15 Days",
    content: "Operations through Indian Military/Defense based airports require approx. fifteen days minimum. Complete passport details of all crew members and ATS Route over Indian airspace must be submitted to Defense authorities.",
  },
  {
    icon: <MdOutlineMedicalServices />,
    color: "from-green-500 to-teal-500",
    title: "Medical Evacuation",
    time: "No Time Frame",
    content: "No specific time frame is required for medical evacuation permits. However, Name of the Patient, Treating Doctor, and the Treating Hospital with full address are mandatory.",
  },
  {
    icon: <MdOutlineWater />,
    color: "from-cyan-500 to-blue-400",
    title: "Territorial Waters",
    time: "No Clearance Required",
    content: "No flight clearances are required for aircraft operating outside Indian territory, including territorial waters, but within the Indian Flight Information Regions (FIRs).",
  },
  {
    icon: <BsAirplane />,
    color: "from-yellow-500 to-orange-400",
    title: "ITP – Tourist Charter Operations",
    time: "As per DGCA Guidelines",
    content: "Freedom Air provides complete assistance to operators and tour operators per DGCA India guidelines for ITP Tourist Charter Flights. Includes filing of slot requests and securing all necessary operating permissions.",
  },
];

export default function InfoRegulation() {
  return (
    <div className="bg-color1 sm:p-12 py-6  min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden">
        
        <motion.div
          className="flex flex-col justify-center items-center text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          border border-color2/50  bg-color2/10 backdrop-blur-sm mb-5">
            <BsClipboardCheck className="text-color2 text-base" />
            <span className="text-color2 text-[11px] font-bold tracking-[0.2em] uppercase">
              Operational Compliance
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
            Info &{" "}
            <span className="bg-gradient-to-r from-color2 to-yellow-400 bg-clip-text text-transparent">
              Regulations
            </span>
          </h1>
          <p className="text-black/70 text-base max-w-xl leading-relaxed">
            Minimum time frames, clearance procedures, and compliance requirements for operations in Indian airspace.
          </p>
        </motion.div>

      </div>

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-0 py-14 md:py-20 flex flex-col gap-14">

        {/* ── 1. Clearance Timeframes ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-color2 to-yellow-500
                            flex items-center justify-center text-white text-lg shadow-md">
              <FaClock />
            </div>
            <div>
              <p className="text-color2 text-base font-bold uppercase tracking-[0.22em]">Section 01</p>
              <h2 className="text-gray-900 text-xl md:text-2xl font-bold leading-tight">
                Minimum Clearance Timeframes
              </h2>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.id}
                custom={i} variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="bg-white rounded-2xl border border-gray-100
                           shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                           hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]
                           overflow-hidden transition-shadow duration-300"
              >
                {/* Card top accent */}
                <div className={`h-[3px] bg-gradient-to-r ${sec.color}`} />
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sec.color}
                                    flex items-center justify-center text-white text-lg shadow-sm`}>
                      {sec.icon}
                    </div>
                    <div>
                      <span className="text-base font-bold uppercase tracking-widest text-gray-400">
                        {sec.badge}
                      </span>
                      <h3 className="text-gray-900 font-bold text-base leading-tight">{sec.title}</h3>
                    </div>
                  </div>

                  {/* Time items */}
                  <div className="flex flex-col gap-3">
                    {sec.items.map((item, j) => (
                      <div key={j} className="flex items-center justify-between
                                               bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                        <div>
                          <p className="text-gray-700 text-sm font-semibold">{item.label}</p>
                          <p className="text-gray-400 text-sm mt-0.5">{item.note}</p>
                        </div>
                        <div className="text-right shrink-0 ml-3">
                          <span className={`text-base font-black bg-gradient-to-br ${sec.color}
                                           bg-clip-text text-transparent whitespace-nowrap`}>
                            {item.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── PRC Countries ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="h-[3px] bg-gradient-to-r from-red-500 to-orange-400" />
          <div className="p-6 md:p-8">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-400
                              flex items-center justify-center text-white shadow-sm">
                <FaExclamationTriangle className="text-base" />
              </div>
              <div>
                <p className="text-red-400 text-sm font-bold uppercase tracking-[0.22em]">Section CC</p>
                <h2 className="text-gray-900 text-lg md:text-xl font-bold">Prior Reference Category (PRC) Countries</h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-gray-400 text-sm mb-5 ml-[52px]">
              Flights originating from these countries require extended clearance periods.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-2">
              {prcCountries.map((country, i) => (
                <span key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             bg-red-50 border border-red-100 text-red-600
                             text-sm font-semibold">
                  <span className="w-1 h-1 rounded-full bg-red-400" />
                  {country}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Seasonal Overfly Block Permit ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="h-[3px] bg-gradient-to-r from-color2 to-yellow-400" />
          <div className="p-6 md:p-8">
            <motion.div variants={fadeUp} custom={0} className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-color2 to-yellow-500
                                flex items-center justify-center text-white shadow-sm">
                  <FaFileAlt />
                </div>
                <div>
                  <p className="text-color2 text-sm font-bold uppercase tracking-[0.22em]">Section DD</p>
                  <h2 className="text-gray-900 text-lg md:text-xl font-bold">Seasonal Overfly Block Permit</h2>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-color2/8 border border-color2/20
                               text-color2 text-sm font-bold uppercase tracking-wider">
                Min. 1 Month
              </span>
            </motion.div>
            <motion.p variants={fadeUp} custom={1}
              className="text-gray-500 text-base mb-5 leading-relaxed">
              The following documents are required by DGCA India for Seasonal Overfly Block Permit:
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {seasonalDocs.map((doc, i) => (
                <motion.div key={i} custom={i} variants={fadeUp}
                  className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-color2 to-yellow-400
                                  flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-[9px] font-black">✓</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{doc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Other Sections ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}>
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900
                            flex items-center justify-center text-white text-lg shadow-md">
              <MdOutlineAssignment />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.22em]">Sections EE – HH</p>
              <h2 className="text-gray-900 text-xl md:text-2xl font-bold">Special Operations</h2>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {otherSections.map((sec, i) => (
              <motion.div
                key={i} custom={i} variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-white rounded-2xl border border-gray-100
                           shadow-[0_2px_12px_rgba(0,0,0,0.05)]
                           hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)]
                           hover:border-gray-200 overflow-hidden
                           transition-all duration-300 flex"
              >
                {/* Left color bar */}
                <div className={`w-1 shrink-0 bg-gradient-to-b ${sec.color}`} />

                <div className="flex items-start gap-4 p-5 flex-1">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${sec.color}
                                  flex items-center justify-center text-white text-xl
                                  shadow-sm shrink-0 group-hover:scale-110
                                  transition-transform duration-300`}>
                    {sec.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
                      <h3 className="text-gray-900 font-bold text-base">{sec.title}</h3>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full
                                        bg-gradient-to-br ${sec.color} text-white shrink-0`}>
                        {sec.time}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{sec.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Crew & Visa ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500" />
          <div className="p-6 md:p-8">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500
                              flex items-center justify-center text-white shadow-sm">
                <FaPassport />
              </div>
              <div>
                <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.22em]">Section 04</p>
                <h2 className="text-gray-900 text-lg md:text-xl font-bold">Crew & Passenger Visa</h2>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}
              className="bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-4 mb-4">
              <p className="text-indigo-700 text-sm font-bold flex items-center gap-2">
                <FaExclamationTriangle className="shrink-0" />
                Visa on arrival is NOT available at any airport in India.
              </p>
            </motion.div>
            <motion.p variants={fadeUp} custom={2} className="text-gray-500 text-base leading-relaxed">
              Crew members, irrespective of nationality, must hold valid Indian Visas (Business category) — either pasted on their passports or as e-Business category visa. The E-visa is generally valid for <strong className="text-gray-700">1 year</strong> from date of issue with multiple entry facility.
            </motion.p>
          </div>
        </motion.div>

        {/* ── DGR ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="h-[3px] bg-gradient-to-r from-amber-500 to-yellow-400" />
          <div className="p-6 md:p-8">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-400
                              flex items-center justify-center text-white shadow-sm">
                <BsClipboardCheck />
              </div>
              <div>
                <p className="text-amber-500 text-sm font-bold uppercase tracking-[0.22em]">Section 03</p>
                <h2 className="text-gray-900 text-lg md:text-xl font-bold">DGR Clearance Procedure</h2>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-gray-500 text-base leading-relaxed mb-4">
              Submit an application online through the EGCA web portal — by the Airlines, Consigner, or Consignee — under the service:
            </motion.p>
            <motion.div variants={fadeUp} custom={2}
              className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4 mb-4">
              <p className="text-amber-700 text-sm font-semibold italic">
                "Permission for Carriage of Dangerous Goods by Air from/to/over India"
              </p>
            </motion.div>
            <motion.p variants={fadeUp} custom={3} className="text-gray-500 text-base leading-relaxed">
              Once submitted successfully, an <strong className="text-gray-700">e-Application ID</strong> will be generated to track and verify the approval status.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}