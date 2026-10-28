"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WHATSAPP_NUMBER = '918826292951';
const WHATSAPP_MESSAGE = "Hi Freedom Air Services";

const SERVICES = [
  'Overfly and Landing Permit Assistance',
  'Airport Slots',
  'Ground Handling Arrangements',
  'Aviation Fuel Provision',
  'Crew Accommodation and Support',
  'On-site Gourmet Catering',
  'Customized Aviation Solutions',
];

const OPERATOR_TYPES = ['Private / Business Jet', 'Charter', 'Cargo', 'Commercial Airline', 'Other'];

const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20';
const labelClass = 'mb-1 block text-xs font-semibold text-gray-700';

export default function Popups() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const pathname = usePathname();

 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      // Replace with your real endpoint / email service
      const res = await fetch('/api/request-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, page: pathname }),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setStatus('idle');
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div>
      {/* WhatsApp floating button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-2 sm:w-16 sm:h-16 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white flex items-center justify-center shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.55)] transition-all z-40"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Side tab trigger */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed top-1/2 -right-[60px] -translate-y-1/2 -rotate-90 origin-center bg-orange-600 text-white font-semibold text-sm tracking-wide px-5 py-3 rounded-t-lg flex items-center gap-2 z-40 transition-all"
      >
        Request A Quote
      </button>

      {/* Popup Overlay */}
      {isFormOpen && (
        <div
          onClick={closeForm}
          className="fixed inset-0 bg-indigo-950/50 backdrop-blur-sm flex items-center justify-center z-[70] p-4"
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full p-6 sm:p-8 bg-gray-50">
              <button
                onClick={closeForm}
                aria-label="Close"
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
              >
                <FaTimes size={20} />
              </button>

              {status === 'success' ? (
                <div className="py-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Thank you!</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Our operations team will get back to you shortly. For urgent requests, call{' '}
                    <a href="tel:+918826292951" className="font-semibold text-red-600">
                      +91 88262 92951
                    </a>.
                  </p>
                  <button
                    onClick={closeForm}
                    className="mt-6 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900">Request A Quote</h3>
                  <p className="mt-1 mb-5 text-sm text-gray-600">
                    Tell us about your flight and we&apos;ll respond with a tailored quote.
                  </p>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="name">Full Name *</label>
                      <input id="name" name="name" required placeholder="Your name" className={inputClass} />
                    </div>

                    {/* <div>
                      <label className={labelClass} htmlFor="company">Company / Operator *</label>
                      <input id="company" name="company" required placeholder="Company name" className={inputClass} />
                    </div> */}

                    <div>
                      <label className={labelClass} htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="phone">Phone / WhatsApp *</label>
                      <input id="phone" name="phone" type="tel" required placeholder="+971 50 000 0000" className={inputClass} />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="service">Service Required *</label>
                      <select id="service" name="service" required defaultValue="" className={inputClass}>
                        <option value="" disabled>Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="operatorType">Operator Type</label>
                      <select id="operatorType" name="operatorType" defaultValue="" className={inputClass}>
                        <option value="">Select (optional)</option>
                        {OPERATOR_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="aircraftType">Aircraft Type</label>
                      <input id="aircraftType" name="aircraftType" placeholder="e.g. B737, G650 (optional)" className={inputClass} />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="route">Route / Airports</label>
                      <input id="route" name="route" placeholder="e.g. VIDP → OMDB (optional)" className={inputClass} />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="date">Date of Operation</label>
                      <input id="date" name="date" type="date" className={inputClass} />
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelClass} htmlFor="message">Message</label>
                      <textarea id="message" name="message" rows={3} placeholder="Any additional requirements (optional)" className={inputClass} />
                    </div>

                    {status === 'error' && (
                      <p className="sm:col-span-2 text-sm text-red-600">
                        Something went wrong. Please try again or contact us on WhatsApp.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="sm:col-span-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:opacity-60"
                    >
                      {status === 'sending' ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}