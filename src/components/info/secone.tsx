"use client";
import React from "react";
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
    badge: "Non-PRC Country",
    title: "Flights originating from Non-PRC Country",
    items: [
      { label: "Overfly & Technical Landing", time: "1 Working Day", note: "Prior notice required" },
      { label: "Traffic Purpose Landing", time: "3 Working Days", note: "Prior notice required" },
    ],
  },
  {
    id: "BB",
    icon: <FaGlobeAsia />,
    badge: "PRC Country",
    title: "Flights originating from PRC Country",
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
  "Complete flight Schedule with ETD/ETA, ATS Routes, Entry/Exit Points & Timings",
  "Authorization letter from Operator for local representation in India",
  "PIC Name and Nationality",
  "Number of Crew and Passengers",
];

const otherSections = [
  {
    icon: <FaShieldAlt />,
    title: "Military / Defense Airports",
    time: "15 Days",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    content: "Operations through Indian Military/Defense based airports require approx. 12-15 working days. Complete passport details of all crew members and ATS Route over Indian airspace must be submitted to Defence authorities.",
  },
  {
    icon: <MdOutlineMedicalServices />,
    title: "Medical Evacuation",
    time: "No Time Frame",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    content: "No specific time frame is required for medical evacuation permits. However, Name of the Patient, Treating Doctor, Medical History, and the Treating Hospital with full address are mandatory.",
  },
  {
    icon: <MdOutlineWater />,
    title: "Territorial Waters",
    time: "No Clearance Required",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    content: "No flight clearances are required for aircraft operating outside Indian territory, including territorial waters, but within the Indian Flight Information Regions (FIRs).",
  },
  {
    icon: <BsAirplane />,
    title: "ITP – Tourist Charter Operations",
    time: "As per DGCA Guidelines",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    content: "Freedom Air provides complete assistance to operators and tour operators per DGCA India guidelines for ITP Tourist Charter Flights. Includes filing of slot requests and securing all necessary operating permissions.",
  },
];

export default function InfoRegulation() {
  return (
    <div className="bg-white min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
         
          <h1 className="text-4xl sm:text-5xl font-light text-slate-800">
            Info &{" "}
            <span className="font-semibold text-slate-900">Regulations</span>
          </h1>
          
        </motion.div>

        {/* Section 01 - Clearance Timeframes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
              <FaClock className="text-slate-600 text-sm" />
            </div>
            <p className="text-slate-400 text-sm font-medium tracking-wider uppercase">Section 01</p>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-8">Minimum Clearance Timeframes</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.id}
                custom={i}
                variants={fadeUp}
                className="border border-slate-200 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 text-xl">
                    {sec.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {sec.badge}
                    </span>
                    <h3 className="text-base font-medium text-slate-700">{sec.title}</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {sec.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                      <div>
                        <p className="text-base text-slate-700 font-medium">{item.label}</p>
                        <p className="text-sm text-slate-400 mt-0.5">{item.note}</p>
                      </div>
                      <span className="text-base font-semibold text-slate-800 whitespace-nowrap ml-4">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PRC Countries */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16 border border-slate-200 rounded-2xl bg-slate-50/30 p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <FaExclamationTriangle className="text-amber-600 text-sm" />
            </div>
            <p className="text-slate-400 text-sm font-medium tracking-wider uppercase">Section 02</p>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-2">Prior Reference Category (PRC) Countries</h3>
          <p className="text-sm text-slate-500 mb-6">Flights originating from these countries require extended clearance periods.</p>
          <div className="flex flex-wrap gap-2">
            {prcCountries.map((country, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600"
              >
                {country}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Seasonal Block Overfly Clearance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16 border border-slate-200 rounded-2xl p-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <FaFileAlt className="text-blue-600 text-sm" />
              </div>
              <p className="text-slate-400 text-sm font-medium tracking-wider uppercase">Section 03</p>
            </div>
            <span className="text-sm font-medium text-blue-600 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              Min. 1 Month Notice Required
            </span>
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-4">Seasonal Block Overfly Clearance</h3>
          <p className="text-sm text-slate-500 mb-5">Documents required by Indian CAA for processing Overfly / Landing Permit request:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {seasonalDocs.map((doc, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-600 py-2 border-b border-slate-100">
                <span className="text-blue-400 text-base">•</span>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Special Operations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
              <MdOutlineAssignment className="text-slate-600 text-sm" />
            </div>
            <p className="text-slate-400 text-sm font-medium tracking-wider uppercase">Section 04</p>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-8">Special Operations</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {otherSections.map((sec, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className={`flex gap-4 p-5 rounded-xl border ${sec.border} ${sec.bg} transition-all hover:shadow-sm`}
              >
                <div className={`text-xl ${sec.color} mt-0.5`}>{sec.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-medium text-slate-700">{sec.title}</h4>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${sec.bg} ${sec.color} border ${sec.border}`}>
                      {sec.time}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{sec.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Crew & Passenger Visa */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16 border border-slate-200 rounded-2xl p-8 bg-slate-50/30"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
              <FaPassport className="text-emerald-600 text-sm" />
            </div>
            <p className="text-slate-400 text-sm font-medium tracking-wider uppercase">Section 05</p>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-4">Crew & Passenger Visa</h3>
          <div className="bg-white border border-slate-200 rounded-xl px-5 py-3 mb-4">
            <p className="text-base text-slate-600 flex items-center gap-2">
              <span className="text-amber-500 text-sm">⚠️</span>
              Visa on arrival is NOT available at any airport in India.
            </p>
          </div>
          <p className="text-base text-slate-500 leading-relaxed">
            Crew members, irrespective of nationality, must hold valid Indian Visas (Business category) — either pasted on their passports or holding granted copy of e-Business category visa.
          </p>
        </motion.div>

        {/* DGR Clearance Procedure */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="border border-slate-200 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
              <BsClipboardCheck className="text-purple-600 text-sm" />
            </div>
            <p className="text-slate-400 text-sm font-medium tracking-wider uppercase">Section 06</p>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-4">DGR Clearance Procedure</h3>
          <p className="text-base text-slate-500 leading-relaxed mb-4">
            Submit an application online through the eGCA web portal, specifying type of Dangerous Goods under UN number and Class specification. Request needs to be submitted by Operating Airlines, Consigner, or Consignee — under the service:{" "}
            <span className="text-slate-700 font-medium">"Permission for Carriage of Dangerous Goods by Air from/to/over India"</span>.
            CAA India requires approx. 15-20 days time to issue DGR Approval to carry DGR by Air to and through Indian Airspace.
          </p>
          <p className="text-sm text-slate-500 mb-4">
            🔗 <a href="https://dgca.gov.in/digigov-portal/jsp/dgca/common/login.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://dgca.gov.in/digigov-portal/jsp/dgca/common/login.jsp
            </a>
          </p>
          <p className="text-sm text-slate-400">
            Once submitted successfully, an e-Application ID will be generated to track and verify approval status.
          </p>
        </motion.div>
      </div>
    </div>
  );
}