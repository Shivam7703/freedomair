"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Link from "next/link";

const servicesList = [
  "Overfly / landing permit",
  "Airport slots",
  "Ground handling",
  "Fuel",
  "Crew hotel & transport",
  "Catering",
  "Other",
];

const labelClass = "block text-sm md:text-[15px] font-semibold text-gray-900 mb-2";
const inputClass =
  "w-full px-4 py-3 text-base text-gray-900 placeholder:text-gray-500 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all";
const sectionTitleClass =
  "text-xs md:text-sm font-bold tracking-wider text-gray-600 uppercase block mb-4";

export default function RequestQuoteForm() {
  return (
    <div className="relative text-gray-900 bg-color1 px-4 py-8 sm:px-6 md:p-12 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={slideIn("right")}
        className="relative overflow-hidden max-w-6xl mx-auto bg-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
      >

        {/* Form header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-color2/30 bg-color2/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-color2 animate-pulse" />
            <span className="text-color2 text-xs font-bold tracking-[0.2em] uppercase">
              Let's Collaborate
            </span>
          </div>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight">
            Contact Us{" "}
            <span className="bg-gradient-to-r from-color2 to-yellow-500 bg-clip-text text-transparent">
              Today!
            </span>
          </h2>
          <div className="h-[3px] w-14 bg-gradient-to-r from-color2 to-yellow-400 rounded-full mt-3" />
        </div>

        <form className="space-y-8">
          {/* SECTION 1: ABOUT YOU */}
          <section>
            <span className={sectionTitleClass}>About You</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full name <span className="text-red-600">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                                    placeholder="your name"
                  required
                  autoComplete="name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="company" className={labelClass}>
                  Company / operator <span className="text-red-600">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"   
                placeholder="your company / operator"
                  required
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email address"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 92 000 0000"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* SECTION 2: ABOUT THE FLIGHT */}
          <section>
            <span className={sectionTitleClass}>About the Flight</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              <div>
                <label htmlFor="typeOfOperation" className={labelClass}>
                  Type of operation
                </label>
                <select
                  id="typeOfOperation"
                  name="typeOfOperation"
                  defaultValue="Private / business aviation"
                  className={inputClass}
                >
                  <option value="Private / business aviation">
                    Private / business aviation
                  </option>
                  <option value="Commercial charter">Commercial charter</option>
                  <option value="Cargo flight">Cargo flight</option>
                  <option value="Ambulance / Medevac">Ambulance / Medevac</option>
                </select>
              </div>

              <div>
                <label htmlFor="aircraftType" className={labelClass}>
                  Aircraft type & registration
                </label>
                <input
                  id="aircraftType"
                  name="aircraftType"
                  type="text"
                  placeholder="e.g. G650, N123AB"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="route" className={labelClass}>
                  Route
                </label>
                <input
                  id="route"
                  name="route"
                  type="text"
                  placeholder="OMDB → VIDP → VABB"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="dateOfOperation" className={labelClass}>
                  Date(s) of operation
                </label>
                <input
                  id="dateOfOperation"
                  name="dateOfOperation"
                  type="text"
                  placeholder="12–14 Nov 2026"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* SECTION 3: SERVICES NEEDED */}
          <fieldset>
            <legend className={labelClass}>Services needed</legend>
            <div className="flex flex-wrap gap-2.5">
              {servicesList.map((service) => (
                <label key={service} className="cursor-pointer">
                  <input
                    type="checkbox"
                    name="servicesNeeded"
                    value={service}
                    className="peer sr-only"
                  />
                  <span
                    className="inline-flex items-center px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm md:text-[15px] font-medium text-gray-800 transition-all
                               hover:bg-gray-100
                               peer-checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:text-white
                               peer-focus-visible:ring-2 peer-focus-visible:ring-gray-900 peer-focus-visible:ring-offset-2"
                  >
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* SECTION 4: MESSAGE */}
          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Passengers and crew numbers, special requests, anything else we should know"
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* SECTION 5: ATTACH DOCUMENTS */}
          <div>
            <span className={labelClass}>Attach documents (optional)</span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-amber-50 border border-amber-300 rounded-2xl text-sm text-gray-800">
              <input
                type="file"
                id="file-upload"
                name="file"
                className="sr-only peer"
              />
              <label
                htmlFor="file-upload"
                className="inline-flex justify-center px-4 py-2.5 bg-white border border-gray-400 hover:bg-gray-50 font-semibold text-gray-900 rounded-lg cursor-pointer shadow-sm transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-gray-900 shrink-0"
              >
                Choose file
              </label>
              <span className="text-gray-700 sm:ml-auto sm:text-right">
                AOC, C of R, C of A, schedule – PDF or image, up to 10 MB
              </span>
            </div>
          </div>

          {/* TERMS & PRIVACY */}
          <div className="flex items-start gap-3 text-sm md:text-[15px] text-gray-800">
            <input
              type="checkbox"
              id="terms"
              name="agreedToTerms"
              required
              className="mt-1 h-5 w-5 shrink-0 rounded border-gray-400 text-gray-900 focus:ring-gray-900"
            />
            <label htmlFor="terms" className="cursor-pointer leading-relaxed">
              I agree that Freedom Air Services may use these details to respond
              to my request, as described in the{" "}
              <Link href="/privacy-policy" className="underline font-bold text-gray-900">
                PRIVACY POLICY
              </Link>{" "}
              <span className="text-red-600">*</span>
            </label>
          </div>

          {/* SUBMIT ACTIONS */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p className="text-sm md:text-[15px] text-gray-700">
              Urgent? Call or WhatsApp{" "}
              <a
                href="https://wa.me/918826292951"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-900 hover:underline"
              >
                +91 88262 92951
              </a>{" "}
              instead.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 text-white font-semibold text-base rounded-xl shadow-lg hover:bg-slate-800 transition-colors text-center shrink-0"
            >
              Send request
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}