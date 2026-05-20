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
    content: "Operations through Indian Military/Defense based airports require approx. 12-15 working days. Complete passport details of all crew members and ATS Route over Indian airspace must be submitted to Defence authorities.",
  },
  {
    icon: <MdOutlineMedicalServices />,
    title: "Medical Evacuation",
    time: "No Time Frame",
    content: "No specific time frame is required for medical evacuation permits. However, Name of the Patient, Treating Doctor, Medical History, and the Treating Hospital with full address are mandatory.",
  },
  {
    icon: <MdOutlineWater />,
    title: "Territorial Waters",
    time: "No Clearance Required",
    content: "No flight clearances are required for aircraft operating outside Indian territory, including territorial waters, but within the Indian Flight Information Regions (FIRs).",
  },
  {
    icon: <BsAirplane />,
    title: "ITP – Tourist Charter Operations",
    time: "As per DGCA Guidelines",
    content: "Freedom Air provides complete assistance to operators and tour operators per DGCA India guidelines for ITP Tourist Charter Flights. Includes filing of slot requests and securing all necessary operating permissions.",
  },
];

export default function InfoRegulation() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <BsClipboardCheck className="text-gray-500 text-sm" />
            <span className="text-gray-400 text-xs font-medium tracking-wider uppercase">
              Operational Compliance
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light text-gray-800">
            Info &{" "}
            <span className="font-semibold text-gray-900">Regulations</span>
          </h1>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            Minimum time frames, clearance procedures, and compliance requirements for operations in Indian airspace.
          </p>
        </motion.div>

        {/* Section 01 - Clearance Timeframes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <FaClock className="text-gray-400 text-sm" />
            <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">Section 01</p>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Minimum Clearance Timeframes</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.id}
                custom={i}
                variants={fadeUp}
                className="border border-gray-100 rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gray-500 text-lg">{sec.icon}</div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      {sec.badge}
                    </span>
                    <h3 className="text-sm font-medium text-gray-700">{sec.title}</h3>
                  </div>
                </div>

                <div className="space-y-2">
                  {sec.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center py-2 border-b border-gray-50">
                      <div>
                        <p className="text-sm text-gray-600">{item.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                      </div>
                      <span className="text-sm font-medium text-gray-800 whitespace-nowrap ml-3">
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
          className="mb-12 border border-gray-100 rounded-xl bg-gray-50/30 p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaExclamationTriangle className="text-gray-400 text-sm" />
            <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">Section 02</p>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <h3 className="text-base font-medium text-gray-800 mb-1">Prior Reference Category (PRC) Countries</h3>
          <p className="text-xs text-gray-400 mb-4">Flights originating from these countries require extended clearance periods.</p>
          <div className="flex flex-wrap gap-2">
            {prcCountries.map((country, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600"
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
          className="mb-12 border border-gray-100 rounded-xl p-6"
        >
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2">
              <FaFileAlt className="text-gray-400 text-sm" />
              <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">Section 03</p>
            </div>
            <span className="text-xs font-medium text-gray-500 px-3 py-1 border border-gray-200 rounded-full">
              Min. 1 Month Notice Required
            </span>
          </div>
          <h3 className="text-base font-medium text-gray-800 mb-4">Seasonal Block Overfly Clearance</h3>
          <p className="text-xs text-gray-500 mb-4">Documents required by Indian CAA for processing Overfly / Landing Permit request:</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {seasonalDocs.map((doc, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-500 py-1">
                <span className="text-gray-300">•</span>
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
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <MdOutlineAssignment className="text-gray-400 text-sm" />
            <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">Section 04</p>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Special Operations</h2>

          <div className="space-y-3">
            {otherSections.map((sec, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-white"
              >
                <div className="text-gray-400 text-lg mt-0.5">{sec.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-medium text-gray-700">{sec.title}</h4>
                    <span className="text-xs font-medium text-gray-500 px-2 py-0.5 border border-gray-200 rounded-full">
                      {sec.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{sec.content}</p>
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
          className="mb-12 border border-gray-100 rounded-xl p-6 bg-gray-50/30"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaPassport className="text-gray-400 text-sm" />
            <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">Section 05</p>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <h3 className="text-base font-medium text-gray-800 mb-3">Crew & Passenger Visa</h3>
          <div className="bg-white border border-gray-100 rounded-lg px-4 py-3 mb-3">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="text-gray-400 text-xs">ⓘ</span>
              Visa on arrival is NOT available at any airport in India.
            </p>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Crew members, irrespective of nationality, must hold valid Indian Visas (Business category) — either pasted on their passports or holding granted copy of e-Business category visa.
          </p>
        </motion.div>

        {/* DGR Clearance Procedure */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="border border-gray-100 rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <BsClipboardCheck className="text-gray-400 text-sm" />
            <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">Section 06</p>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <h3 className="text-base font-medium text-gray-800 mb-3">DGR Clearance Procedure</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Submit an application online through the eGCA web portal, specifying type of Dangerous Goods under UN number and Class specification. Request needs to be submitted by Operating Airlines, Consigner, or Consignee — under the service:{" "}
            <span className="text-gray-700">"Permission for Carriage of Dangerous Goods by Air from/to/over India"</span>.
            CAA India requires approx. 15-20 days time to issue DGR Approval to carry DGR by Air to and through Indian Airspace.
          </p>
          <p className="text-xs text-gray-400 mb-3">
            <a href="https://dgca.gov.in/digigov-portal/jsp/dgca/common/login.jsp" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">
              https://dgca.gov.in/digigov-portal/jsp/dgca/common/login.jsp
            </a>
          </p>
          <p className="text-xs text-gray-400">
            Once submitted successfully, an e-Application ID will be generated to track and verify approval status.
          </p>
        </motion.div>
      </div>
    </div>
  );
}