"use client";
import React, { memo, useState } from "react";
import {
  MdOutlineBlock,
  MdOutlineLocationOn,
  MdOutlineFlightTakeoff,
  MdOutlineMap,
} from "react-icons/md";
import {
  FaClock,
  FaFire,
  FaPassport,
  FaUtensils,
  FaRulerHorizontal,
} from "react-icons/fa";
import { BsAirplane } from "react-icons/bs";

/* ───────── helpers ───────── */
const isEmpty = (v?: string) =>
  !v || v.trim() === "" || v.trim() === "-" || v.trim().toLowerCase() === "not listed";

type Tone = "default" | "good" | "bad" | "warn";

const toneClass: Record<Tone, string> = {
  default: "text-gray-900",
  good: "text-green-700",
  bad: "text-red-600",
  warn: "text-amber-600",
};

// YES / H24 -> good, NO / N/A -> bad
function yesNoTone(v?: string): Tone {
  const s = (v || "").trim().toLowerCase();
  if (s.startsWith("yes") || s.startsWith("h24")) return "good";
  if (s === "no" || s === "n/a" || s === "na" || s.startsWith("no,")) return "bad";
  return "default";
}

function prettyYesNo(v?: string) {
  const s = (v || "").trim();
  return s.toLowerCase() === "n/a" ? "Not Available" : s;
}

function fireLabel(v?: string) {
  if (isEmpty(v)) return "";
  const s = v!.trim();
  return /^[ivx]+$/i.test(s) ? `CAT ${s.toUpperCase()}` : `Fire: ${s}`;
}

/* ───────── Expandable text (long single text) ───────── */
function CollapsibleText({ text, limit = 90 }: { text: string; limit?: number }) {
  const [open, setOpen] = useState(false);
  const long = text.length > limit;

  return (
    <>
      <span className={!open && long ? "line-clamp-2" : ""}>{text}</span>
      {long && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-0.5 block text-[10px] font-semibold text-color2 hover:underline"
        >
          {open ? "Show less" : "Show more"}
        </button>
      )}
    </>
  );
}

/* ───────── Expandable list (hours split by ;) ───────── */
function CollapsibleList({ items, limit = 2 }: { items: string[]; limit?: number }) {
  const [open, setOpen] = useState(false);
  const list = open ? items : items.slice(0, limit);

  return (
    <>
      <ul className="space-y-0.5">
        {list.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
      {items.length > limit && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-0.5 block text-[10px] font-semibold text-color2 hover:underline"
        >
          {open ? "Show less" : `+${items.length - limit} more`}
        </button>
      )}
    </>
  );
}

/* ───────── Fact tile ───────── */
function Fact({
  icon,
  label,
  full = false,
  empty = false,
  tone = "default",
  children,
}: {
  icon: React.ReactNode;
  label: string;
  full?: boolean;
  empty?: boolean;
  tone?: Tone;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-lg bg-gray-50 border border-gray-100 px-2.5 py-2 ${
        full ? "col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-0.5">
        <span className="text-color2 text-[11px]">{icon}</span>
        {label}
      </div>
      <div
        className={`text-xs leading-snug break-words font1 ${
          empty ? "text-gray-400 font-medium" : `${toneClass[tone]} font-semibold`
        }`}
      >
        {empty ? "Not Listed" : children}
      </div>
    </div>
  );
}

/* ───────── Airport Card ───────── */
function AirportCardBase({ airport }: { airport: any }) {
  const parts = (airport.airportName || "").split(" / ");
  const icao = parts[0] || "";
  const iata = parts[1] || "";
  const name = parts.slice(2).join(" ") || airport.airportName;

  const fire = fireLabel(airport.airportFireCategory);

  const hoursItems = isEmpty(airport.airportOperatingHours)
    ? []
    : String(airport.airportOperatingHours)
        .split(";")
        .map((s) => s.trim())
        .filter(Boolean);

  const restriction = String(airport.airportRestrictions || "").trim();
  const restrictionTone: Tone = /^nil$/i.test(restriction)
    ? "good"
    : /^(available on request|nil \(as per ats\))$/i.test(restriction)
    ? "default"
    : "warn";

  const ciq = String(airport.ciqAvailability || "");

  const mapUrl = airport.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${name} ${airport.address}`
      )}`
    : "";

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-gray-200
                 shadow-sm hover:shadow-lg hover:-translate-y-1
                 transition-[transform,box-shadow] duration-300 flex flex-col
                 [content-visibility:auto] [contain-intrinsic-size:auto_460px]"
    >
      {/* HEADER */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-color2/80 md:h-52 h-36 p-2 flex flex-col justify-between relative">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex gap-1.5">
            <span className="px-2 py-1 bg-color2 text-white text-[10px] font-bold rounded-md">
              {icao}
            </span>
            {iata && (
              <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded-md border border-white/25">
                {iata}
              </span>
            )}
          </div>

          {fire && (
            <span className="flex items-center gap-1 px-2 py-1 bg-red-500/90 text-white text-[10px] font-bold rounded-md">
              <FaFire className="text-[9px]" />
              {fire}
            </span>
          )}
        </div>

        <h3 className="text-white text-sm font-bold leading-snug line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>
</div><div>
        {airport.airportType && (
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-yellow-300/90">
            {airport.airportType}
          </p>
        )}

        {airport.address && (
          <p className="mt-1 flex items-start gap-1 text-white text-[11px] leading-snug line-clamp-2">
            <MdOutlineLocationOn className="mt-[1px] shrink-0 text-xs" />
            {airport.address}
          </p>
        )}
        </div>
      </div>

      {/* FACTS */}
      <div className="p-3 grid grid-cols-2 gap-2">
        <Fact
          icon={<FaClock />}
          label="Operating Hours"
          full
          empty={hoursItems.length === 0}
        >
          <CollapsibleList items={hoursItems} />
        </Fact>

        {/* 2 per row */}
        <Fact
          icon={<FaPassport />}
          label="Customs / Immig."
          empty={isEmpty(airport.customsImmigration)}
          tone={yesNoTone(airport.customsImmigration)}
        >
          {prettyYesNo(airport.customsImmigration)}
        </Fact>

        <Fact
          icon={<FaUtensils />}
          label="Catering"
          empty={isEmpty(airport.catering)}
          tone={yesNoTone(airport.catering)}
        >
          {airport.catering}
        </Fact>

        <Fact
          icon={<BsAirplane />}
          label="Entry / CIQ & Slots"
          full
          empty={isEmpty(ciq)}
          tone={yesNoTone(ciq)}
        >
          <CollapsibleText text={ciq} />
        </Fact>

        <Fact
          icon={<FaRulerHorizontal />}
          label="Runway"
          full
          empty={isEmpty(airport.runwayDimensions)}
        >
          <CollapsibleText text={String(airport.runwayDimensions || "")} />
        </Fact>

        <Fact
          icon={<MdOutlineBlock />}
          label="Restrictions"
          full
          empty={isEmpty(restriction)}
          tone={restrictionTone}
        >
          <CollapsibleText text={restriction} />
        </Fact>

        {airport.remarks && (
          <p className="col-span-2 text-[10px] italic text-gray-500 px-1">
            Note: {airport.remarks}
          </p>
        )}
      </div>

      {/* ACTIONS */}
      <div className="mt-auto px-3 pb-3 grid grid-cols-2 gap-2">
        {airport.visa ? (
          <a
            href={airport.visa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 rounded-lg
                       bg-gradient-to-r from-color2 to-yellow-400 text-white
                       text-xs font-semibold hover:opacity-90 transition"
          >
            <MdOutlineFlightTakeoff className="text-sm" />
            Visa Info
          </a>
        ) : (
          <span />
        )}

        {mapUrl ? (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 rounded-lg
                       border border-gray-300 text-gray-700 text-xs font-semibold
                       hover:bg-gray-50 transition"
          >
            <MdOutlineMap className="text-sm" />
            View Map
          </a>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

export const AirportCard = memo(AirportCardBase);