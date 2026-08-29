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

export default function InfoRegulation() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
            <BsClipboardCheck className="text-orange-500 text-sm" />
            <span className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">
              Operational Compliance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
            Info &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Regulations
            </span>
          </h1>
          <p className="text-slate-500 text-base mt-4 max-w-2xl mx-auto">
            Minimum time frames, clearance procedures, and compliance requirements for operations in Indian airspace.
          </p>
        </motion.div>

        {/* SECTION AA - Minimum Clearance Timeframes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
              <FaClock className="text-orange-600 text-sm" />
            </div>
            <div>
              <p className="text-orange-500 text-sm font-bold uppercase tracking-[0.2em]">SECTION AA</p>
              <h2 className="text-2xl font-bold text-slate-800">Minimum Clearance Timeframes</h2>
            </div>
          </div>

          <div className="space-y-6">
            {/* Non-PRC Country */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MdOutlineFlightTakeoff className="text-slate-500 text-xl" />
                <h3 className="text-lg font-semibold text-slate-800">NON-PRC COUNTRY</h3>
                <span className="text-xs text-slate-400 ml-auto">Flights originating from Non-PRC Country</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Overfly & Technical Landing</span>
                  <span className="font-semibold text-slate-800">1 Working Day</span>
                  <span className="text-sm text-slate-400">Prior notice required</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Traffic Purpose Landing</span>
                  <span className="font-semibold text-slate-800">3 Working Days</span>
                  <span className="text-sm text-slate-400">Prior notice required</span>
                </div>
              </div>
            </div>

            {/* PRC Country */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaGlobeAsia className="text-slate-500 text-xl" />
                <h3 className="text-lg font-semibold text-slate-800">PRC COUNTRY</h3>
                <span className="text-xs text-slate-400 ml-auto">Flights originating from PRC Country</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Overfly & Technical Landing</span>
                  <span className="font-semibold text-slate-800">3 Working Days</span>
                  <span className="text-sm text-slate-400">Prior notice required</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600">Traffic Purpose Landing</span>
                  <span className="font-semibold text-slate-800">7 Working Days</span>
                  <span className="text-sm text-slate-400">Prior notice required</span>
                </div>
              </div>
            </div>

            {/* PRC Countries List */}
            <div className="bg-slate-100/50 rounded-2xl p-6">
              <p className="text-sm font-medium text-slate-700 mb-3">
                Prior Reference Category (PRC) Countries
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Flights originating from below countries require extended clearance periods.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Afghanistan", "China", "Iran", "Iraq", "Nigeria", "North Korea", "Pakistan", "Somalia", "Sudan"].map((country, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION BB - Seasonal Block Overfly Clearance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <FaFileAlt className="text-amber-600 text-sm" />
              </div>
              <p className="text-orange-500 text-sm font-bold uppercase tracking-[0.2em]">SECTION BB</p>
              <h2 className="text-xl font-bold text-slate-800">Seasonal Block Overfly Clearance</h2>
            </div>
            <span className="text-sm font-semibold text-orange-600 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full">
              Minimum 1 Month Notice Required
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-5">
            Documents required by Indian CAA for processing Overfly / Landing Permit request:
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Air Operator Certificate",
              "Certificate of Registration (C of R)",
              "Certificate of Airworthiness (C of A)",
              "Noise Certificate",
              "Complete flight Schedule with ETD/ETA, ATS Routes, Entry/Exit Points & Timings",
              "Authorization letter from Operator for local representation in India",
              "PIC Name and Nationaly",
              "Number of Crew and Passengers"
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600 py-1.5 border-b border-slate-50">
                <span className="text-orange-400">•</span>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION CC - Special Operations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center">
              <MdOutlineAssignment className="text-slate-600 text-sm" />
            </div>
            <p className="text-orange-500 text-sm font-bold uppercase tracking-[0.2em]">SECTION CC</p>
            <h2 className="text-xl font-bold text-slate-800">Special Operations</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Military / Defense Airports",
                time: "15 Days",
                content: "Operations through Indian Military/Defense based airports require approx. 12-15 working days. Complete passport details of all crew members and ATS Route over Indian airspace must be submitted to Defence authorities.",
                color: "text-orange-600",
                bg: "bg-orange-50",
                border: "border-orange-100"
              },
              {
                icon: <MdOutlineMedicalServices />,
                title: "Medical Evacuation",
                time: "No Time Frame required",
                content: "No specific time frame is required for medical evacuation permits. However, Name of the Patient, Treating Doctor, Medical History, and the Treating Hospital with full address are mandatory.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-100"
              },
              {
                icon: <MdOutlineWater />,
                title: "Territorial Waters",
                time: "No Clearance Required",
                content: "No flight clearances are required for aircraft operating outside Indian territory, including territorial waters, but within the Indian Flight Information Regions (FIRs).",
                color: "text-sky-600",
                bg: "bg-sky-50",
                border: "border-sky-100"
              },
              {
                icon: <BsAirplane />,
                title: "ITP – Tourist Charter Operations",
                time: "As per DGCA Guidelines",
                content: "Freedom Air provides complete assistance to operators and tour operators per DGCA India guidelines for ITP Tourist Charter Flights. Includes filing of slot requests and securing all necessary operating permissions.",
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                border: "border-indigo-100"
              }
            ].map((sec, i) => (
              <div key={i} className={`flex gap-4 p-5 rounded-xl border ${sec.border} ${sec.bg}`}>
                <div className={`text-xl ${sec.color} mt-0.5`}>{sec.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-semibold text-slate-700">{sec.title}</h4>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${sec.bg} ${sec.color} border ${sec.border}`}>
                      {sec.time}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{sec.content}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION DD - Crew & Passenger Visa */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
              <FaPassport className="text-emerald-600 text-sm" />
            </div>
            <p className="text-orange-500 text-sm font-bold uppercase tracking-[0.2em]">SECTION DD</p>
            <h2 className="text-xl font-bold text-slate-800">Crew & Passenger Visa</h2>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-4">
            <p className="text-slate-600 flex items-center gap-2">
              <span className="text-orange-500">⚠️</span>
              Visa on arrival is NOT available at Indian airport.
            </p>
          </div>
          <p className="text-slate-500 leading-relaxed">
            Crew members, irrespective of nationality, must hold valid Indian Visas (Business category) — either pasted on their passports or holding granted copy of e-Business category visa.
          </p>
        </motion.div>

        {/* SECTION EE - DGR Clearance Procedure */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
              <BsClipboardCheck className="text-purple-600 text-sm" />
            </div>
            <p className="text-orange-500 text-sm font-bold uppercase tracking-[0.2em]">SECTION EE</p>
            <h2 className="text-xl font-bold text-slate-800">DGR Clearance Procedure</h2>
          </div>
          <p className="text-slate-500 leading-relaxed mb-4">
            Submit an application online through the eGCA web portal, Specifying type of Dangerous Goods under UN number and Class specification. Request needs to be submitted by Operating Airlines, Consigner, or Consignee — under the service:{" "}
            <span className="text-slate-700 font-medium">"Permission for Carriage of Dangerous Goods by Air from/to/over India"</span>.
            CAA India requires approx. 15-20 days time to issue DGR Approval to carry DGR by Air to and through Indian Airspace.
          </p>
          <p className="text-sm text-slate-500 mb-3">
            🔗 <a href="https://www.dgca.gov.in/digigov-portal/?baseLocale=en_US?page=jsp/dgca/InventoryList/RegulationGuidance/Rules/CarriageDangerousGoods2003/CarriageDangerousGoods2026.pdf#:~:text=Dangerous%20Goods)%20Rules-,%2C,-2026" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
              https://www.dgca.gov.in/digigov-portal/?baseLocale=en_US?page=jsp/dgca/InventoryList/RegulationGuidance/Rules/CarriageDangerousGoods2003/CarriageDangerousGoods2026.pdf#:~:text=Dangerous%20Goods)%20Rules-,%2C,-2026
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