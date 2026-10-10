"use client";
import React, { useState, useMemo, useEffect, useRef, useDeferredValue } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";

/* ───────────────────────── Types + data helpers ───────────────────────── */

type RawAirport = {
  img?: string;
  airportName: string; // "VIDP / DEL / Indira Gandhi International Airport"
  city?: string;
  airportOperatingHours?: string;
  airportRestrictions?: string;
  customsImmigration?: string;
  airportFireCategory?: string;
  visa?: string;
  catering?: string;
  ciqAvailability?: string;
  airportType?: string;
  address?: string;
  runwayDimensions?: string;
  latitude?: string;
  longitude?: string;
  remarks?: string;
};

type Tone = "green" | "amber" | "gray";

type Airport = {
  raw: RawAirport;
  icao: string;
  iata: string;
  name: string;
  city: string;
  fire: string;
  hours: string;
  isH24: boolean;
  customs: { label: string; tone: Tone };
  entry: { label: string; tone: Tone };
  isEntry: boolean;
  customsH24: boolean;
  isCivil: boolean;
  runways: { id: string; size: string }[];
  restrictions: string;
  catering: string;
  slots: string;
  type: string;
};

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function toFire(v?: string) {
  if (!v) return "—";
  const m = v.match(/CAT\s*(\d+)/i);
  return m ? `CAT ${ROMAN[+m[1]] ?? m[1]}` : v;
}

function toHours(v?: string) {
  if (!v) return "—";
  const clean = v.replace(/\s*UTC\s*$/i, "").trim();
  if (/^H24$/i.test(clean)) return "H24";
  if (/^\d{4}-\d{4}$/.test(clean)) return clean;
  return "Restricted";
}

function toCustoms(v?: string): { label: string; tone: Tone } {
  if (!v) return { label: "No", tone: "gray" };
  if (/not available/i.test(v)) return { label: "No", tone: "gray" };
  if (/H24/i.test(v)) return { label: "H24", tone: "green" };
  if (/prior notice|request/i.test(v)) return { label: "Ask", tone: "amber" };
  return { label: "Yes", tone: "green" };
}

function toEntry(v?: string): { label: string; tone: Tone } {
  if (!v) return { label: "No", tone: "gray" };
  if (/Airport of Entry:\s*No/i.test(v)) return { label: "No", tone: "gray" };
  if (/customs airport|limited/i.test(v)) return { label: "Confirm", tone: "amber" };
  return { label: "Entry", tone: "green" };
}

function toSlots(v?: string) {
  const m = v?.match(/Slots \/ PPR:\s*([^,]+)/i);
  if (!m) return "—";
  const s = m[1].trim();
  return /slots required/i.test(s) ? "Required" : s.charAt(0).toUpperCase() + s.slice(1);
}

function toRunways(v?: string) {
  if (!v) return [];
  return v
    .split(/,\s*(?=\d{2}[LRC]?\/)/)
    .map((r) => {
      const id = r.match(/^(\d{2}[LRC]?\/\d{2}[LRC]?)/)?.[1] ?? "RWY";
      const size = r.match(/[\d,]+\s*m\s*x\s*[\d,]+\s*m/i)?.[0].replace(/\s+/g, " ") ?? r;
      return { id, size: size.replace(/\sx\s/, " × ") };
    });
}

function guessCity(name: string) {
  const base = name.replace(/\(.*?\)/g, "").replace(/Airport|International/gi, "").trim();
  return base.split(" ").slice(0, 2).join(" ");
}

function parse(a: RawAirport): Airport {
  const [icao = "", iata = "", ...rest] = a.airportName.split(" / ");
  const name = rest.join(" / ").trim();
  const entry = toEntry(a.ciqAvailability);
  const hours = toHours(a.airportOperatingHours);
  const restrictions = a.airportRestrictions?.trim() || "Nil";
  return {
    raw: a,
    icao: icao.trim(),
    iata: iata.trim(),
    name,
    city: a.city ?? guessCity(name),
    fire: toFire(a.airportFireCategory),
    hours,
    isH24: hours === "H24",
    customs: toCustoms(a.customsImmigration),
    entry,
    isEntry: entry.label !== "No",
    customsH24: /H24/i.test(a.customsImmigration ?? ""),
    // "Closed to civil flights" is now treated as NOT civil
    isCivil: !/defen[cs]e|military|air force|closed to civil/i.test(`${a.airportType ?? ""} ${a.remarks ?? ""}`),
    runways: toRunways(a.runwayDimensions),
    restrictions,
    catering: /^available$/i.test(a.catering ?? "") ? "On airport" : a.catering ?? "—",
    slots: toSlots(a.ciqAvailability),
    type: a.airportType ?? "—",
  };
}

/* ───────────────────────── UI pieces ───────────────────────── */

const PAGE_SIZE = 24;

const FILTERS = [
  { key: "entry", label: "Airport of entry", test: (a: Airport) => a.isEntry },
  { key: "h24", label: "Open H24", test: (a: Airport) => a.isH24 },
  { key: "customs", label: "Customs H24", test: (a: Airport) => a.customsH24 },
  { key: "civil", label: "Civil airports only", test: (a: Airport) => a.isCivil },
] as const;

const TONE: Record<Tone, string> = {
  green: "bg-[#DDF3E4] text-[#1E6B3A]",
  amber: "bg-[#FDE9C4] text-[#8A5A00]",
  gray: "bg-[#ECE9E4] text-[#7A756D]",
};

function Pill({ label, tone }: { label: string; tone: Tone }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${TONE[tone]}`}>
      {label}
    </span>
  );
}

function Cell({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`rounded-lg bg-[#16264A] p-2 lg:p-3 ${wide ? "col-span-3 " : "col-span-1"}`}>
      <p className="text-[8px] font-bold uppercase leading-tight tracking-wide text-[#F2A33A] lg:text-[10px]">
        {label}
      </p>
      <p className="mt-1 break-words text-[11px] leading-snug text-white lg:mt-1.5 lg:text-sm">{value || "—"}</p>
    </div>
  );
}

function DetailPanel({ a, onClose }: { a: Airport; onClose?: () => void }) {
  const [showAll, setShowAll] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  useEffect(() => {
    setShowAll(false);
    setImgOk(true);
  }, [a.icao]);

  const runways = showAll ? a.runways : a.runways.slice(0, 1);
  const extra = a.runways.length - 1;
  const hasRestriction = !/^nil$/i.test(a.restrictions);
  const r = a.raw;
  const { latitude, longitude, visa } = r;

  return (
    <aside className="relative rounded-2xl bg-[#0B1730] p-3 text-white lg:sticky lg:top-6 lg:p-6">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-1.5 text-white hover:bg-white/20"
          aria-label="Close panel"
        >
          <FaTimes className="text-xs" />
        </button>
      )}

    

      <div className="flex flex-wrap gap-1.5 pr-8">
        {a.isEntry && (
          <span className="rounded-full bg-[#F2A33A] px-2 py-0.5 text-[9px] font-bold uppercase text-[#0B1730] lg:px-3 lg:py-1 lg:text-[10px]">
            Airport of entry
          </span>
        )}
        {a.isH24 && (
          <span className="rounded-full bg-[#F2A33A] px-2 py-0.5 text-[9px] font-bold uppercase text-[#0B1730] lg:px-3 lg:py-1 lg:text-[10px]">
            Open H24
          </span>
        )}
      </div>

      <h2 className="mt-3 font-mono text-xl font-bold text-[#F2A33A] lg:mt-5 lg:text-2xl">
        {a.icao} <span className="text-sm font-medium text-white/60 lg:text-lg">/ {a.iata}</span>
      </h2>
      <h3 className="mt-1 font-serif text-lg font-bold leading-tight lg:mt-2 lg:text-3xl">{a.name}</h3>
      <p className="mt-1 text-[11px] text-white/70 lg:text-sm">
        {a.city} · {a.type}
      </p>

      <div className="mt-3 grid grid-cols-3 gap-1.5 lg:mt-5  lg:gap-2.5">
        <Cell label="Fire category" value={r.airportFireCategory ?? "—"} />
        <Cell label="Airport of entry" value={a.isEntry ? (a.entry.label === "Confirm" ? "Limited" : "Yes") : "No"} />
        <Cell label="Slots / PPR" value={a.slots} />
        <Cell label="Customs & immigration" value={r.customsImmigration ?? "—"} />
        <Cell label="Catering" value={r.catering ?? "—"} />
        <Cell label="Airport type" value={r.airportType ?? "—"} />
        <Cell label="CIQ availability" value={r.ciqAvailability ?? "—"} wide />
        <Cell label="Address" value={r.address ?? "—"} wide />
        <Cell label="Latitude" value={latitude ?? "—"} />
        <Cell label="Longitude" value={longitude ?? "—"} />
        <Cell label="Operating hours (UTC)" value={r.airportOperatingHours ?? "—"} />
      </div>

      <p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-[#F2A33A] lg:mt-6 lg:text-[11px]">
        Runways
      </p>
      <ul className="mt-1">
        {runways.map((rw, i) => (
          <li
            key={i}
            className="flex items-baseline justify-between gap-2 border-b border-white/10 py-1.5 text-[11px] lg:py-2 lg:text-sm"
          >
            <span className="font-mono font-bold">{rw.id}</span>
            <span className="text-right text-white/80">{rw.size}</span>
          </li>
        ))}
      </ul>
      {extra > 0 && (
        <button
          onClick={() => setShowAll((s) => !s)}
          className="mt-1.5 flex w-full items-center justify-between text-[11px] font-bold text-white lg:text-xs"
        >
          <span>{showAll ? "Show less" : `+ ${extra} more runway${extra > 1 ? "s" : ""}`}</span>
          <span className="font-medium text-white/60">{showAll ? "" : "See AIP"}</span>
        </button>
      )}
      {r.runwayDimensions && <p className="mt-1 text-[10px] text-white/50 lg:text-xs">Raw: {r.runwayDimensions}</p>}

      <div className="mt-3 flex gap-2 rounded-lg bg-[#16264A] px-3 py-2 lg:mt-5 lg:gap-3 lg:px-4 lg:py-3">
        <FiAlertTriangle className={`mt-0.5 shrink-0 ${hasRestriction ? "text-[#F2A33A]" : "text-white/60"}`} />
        <div>
          <p className="text-[9px] font-bold uppercase tracking-wide text-[#F2A33A] lg:text-[10px]">Restrictions</p>
          <p className="mt-0.5 text-[11px] text-white lg:mt-1 lg:text-sm">{a.restrictions}</p>
        </div>
      </div>

      {r.remarks && (
        <div className="mt-2 rounded-lg bg-[#16264A] px-3 py-2 lg:mt-3 lg:px-4 lg:py-3">
          <p className="text-[9px] font-bold uppercase tracking-wide text-[#F2A33A] lg:text-[10px]">Remarks</p>
          <p className="mt-0.5 text-[11px] text-white lg:mt-1 lg:text-sm">{r.remarks}</p>
        </div>
      )}

      <div className="mt-3 grid grid-cols-2 gap-2 lg:mt-5 lg:gap-2.5">
       
        <a
          href={`https://www.google.com/maps?q=${latitude},${longitude}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/30 px-3 py-2 text-center text-xs font-bold transition hover:bg-orange-600 lg:px-4 lg:py-3 lg:text-sm"
        >
          View map
        </a>
        <a
          href={visa}
          target="_blank"
          rel="noreferrer"
          className=" rounded-xl border border-white/30 px-3 py-2 text-center text-xs font-bold transition hover:bg-orange-600 lg:px-4 lg:py-3 lg:text-sm"
        >
          Crew visa info
        </a>
      </div>

      <p className="mt-3 text-[10px] leading-relaxed text-white/55 lg:mt-5 lg:text-xs">
        For guidance only. Airport data changes often — confirm with Freedom Air and current NOTAMs before operating.
      </p>
    </aside>
  );
}

/* ───────────────────────── Main component ───────────────────────── */

export default function AirportIndex({
  airports,
}: {
  airports: RawAirport[];
  lastChecked?: string;
}) {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [mobilePopupOpen, setMobilePopupOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const deferredSearch = useDeferredValue(search);

  const all = useMemo(() => airports.map(parse), [airports]);

  const filtered = useMemo(() => {
    const q = deferredSearch.trim().toLowerCase();
    const tests = FILTERS.filter((f) => active.includes(f.key)).map((f) => f.test);
    return all.filter((a) => {
      if (!tests.every((t) => t(a))) return false;
      if (!q) return true;
      return `${a.icao} ${a.iata} ${a.city} ${a.name} ${a.raw.address ?? ""}`.toLowerCase().includes(q);
    });
  }, [all, deferredSearch, active]);

  useEffect(() => setVisible(PAGE_SIZE), [deferredSearch, active]);

  const hasMore = visible < filtered.length;

  // Desktop infinite scroll (page scroll)
  useEffect(() => {
    if (!hasMore) return;
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (e) => e[0].isIntersecting && setVisible((v) => v + PAGE_SIZE),
      { rootMargin: "400px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasMore, visible]);

  // Mobile infinite scroll (inner scroll container)
  const onMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (hasMore && el.scrollTop + el.clientHeight >= el.scrollHeight - 300) {
      setVisible((v) => v + PAGE_SIZE);
    }
  };

  const shown = useMemo(() => filtered.slice(0, visible), [filtered, visible]);
  const current = filtered.find((a) => a.icao === selected) ?? filtered[0];

  const toggle = (k: string) =>
    setActive((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]));

  return (
    <main className="min-h-screen bg-[#FDF8F0] text-[#0B1730] lg:px-24 md:p-12 sm:p-8 py-7 px-4">
      <div className="mx-auto max-w-[1500px] ">
        {/* heading */}
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-start">
          <div>
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl">Indian Airport Index</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4A4F5C]">
              Operating hours, customs, fire category, runways and restrictions for Indian airports, kept by our New
              Delhi operations team. Pick an airport to see full details.
            </p>
          </div>
        </div>

        {/* search + filters (mobile: 20vh, scrollable) */}
        <div className="mt-8 flex h-[20vh] flex-col gap-3 overflow-auto rounded-2xl border border-[#EAE3D6] bg-white p-3 lg:h-auto lg:flex-row lg:items-center lg:overflow-visible">
          <label className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#4A4F5C]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by city, airport name, ICAO or IATA code"
              className="w-full rounded-xl border border-[#D9D2A8] bg-[#FBF9EC] py-3 pl-10 pr-4 text-sm placeholder:text-[#6B6F7B] focus:border-[#F28A1E] focus:outline-none focus:ring-2 focus:ring-[#F28A1E]/20"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const on = active.includes(f.key);
              return (
                <button
                  key={f.key}
                  onClick={() => toggle(f.key)}
                  aria-pressed={on}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                    on
                      ? "border-[#0B1730] bg-[#0B1730] text-white"
                      : "border-[#0B1730]/70 bg-white text-[#0B1730] hover:bg-[#F6F0E3]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* count row */}
        <div className="mt-5 flex items-center justify-between text-xs text-[#4A4F5C]">
          <p>
            <span className="font-bold text-[#0B1730]">{filtered.length}</span> airport
            {filtered.length !== 1 && "s"} shown
          </p>
          <p className="hidden sm:block">Tap a row for runways, restrictions and services</p>
        </div>

        {/* DESKTOP VIEW */}
        <div className="mt-3 hidden items-start gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_460px]">
          <div className="overflow-hidden rounded-2xl  border border-[#EAE3D6] bg-white">
            <div className="overflow-x-auto">
              <div className="min-w-[640px] ">
                <div className="grid grid-cols-[84px_1fr_80px_90px_80px_80px] items-center bg-[#F4EBDD] px-4 py-3 text-[10px] font-bold uppercase tracking-wide text-[#4A4F5C]">
                  <span>Code</span>
                  <span>Airport</span>
                  <span>Fire</span>
                  <span>Hours (UTC)</span>
                  <span>Customs</span>
                  <span>Entry</span>
                </div>

                {shown.map((a) => {
                  const on = current?.icao === a.icao;
                  return (
                    <button
                      key={a.icao}
                      onClick={() => setSelected(a.icao)}
                      aria-current={on}
                      className={`grid w-full grid-cols-[84px_1fr_80px_90px_80px_80px] items-center border-b border-l-[3px] border-b-[#F0EADF] px-4 py-3 text-left transition-colors ${
                        on ? "border-l-[#F28A1E] bg-[#FDEBD6]" : "border-l-transparent hover:bg-[#FBF6EC]"
                      }`}
                    >
                      <span>
                        <span className="block font-mono text-xs font-bold">{a.icao}</span>
                        <span className="block font-mono text-[11px] text-[#4A4F5C]">{a.iata}</span>
                      </span>
                      <span className="min-w-0 pr-3">
                        <span className="block text-sm font-bold">{a.city}</span>
                        <span className="block truncate text-xs text-[#4A4F5C]">
                          {a.name.replace(/\s*Airport$/i, "")}
                        </span>
                      </span>
                      <span className="text-xs font-bold">{a.fire}</span>
                      <span className="text-xs">{a.hours}</span>
                      <span>
                        <Pill {...a.customs} />
                      </span>
                      <span>
                        <Pill {...a.entry} />
                      </span>
                    </button>
                  );
                })}

                {hasMore && (
                  <div ref={sentinelRef} className="py-6 text-center text-xs text-[#4A4F5C]">
                    Loading more airports…
                  </div>
                )}

                {filtered.length === 0 && (
                  <div className="py-16 text-center">
                    <p className="text-sm">No airports match your search or filters.</p>
                    <button
                      onClick={() => {
                        setSearch("");
                        setActive([]);
                      }}
                      className="mt-2 text-sm font-bold text-[#F28A1E] hover:underline"
                    >
                      Clear search and filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {current && <DetailPanel a={current} />}
        </div>

        {/* MOBILE VIEW (list 80vh, x & y scroll; popup from top-16) */}
        <div className="mt-3 block lg:hidden">
          <div
            onScroll={onMobileScroll}
            className="h-[75vh] overflow-x-auto overflow-y-auto rounded-2xl border border-[#EAE3D6] bg-white"
          >
            <div className="min-w-[640px]">
              <div className="sticky top-0 z-10 grid grid-cols-[84px_1fr_80px_90px_80px_80px] items-center bg-[#F4EBDD] px-4 py-3 text-[10px] font-bold uppercase tracking-wide text-[#4A4F5C]">
                <span>Code</span>
                <span>Airport</span>
                <span>Fire</span>
                <span>Hours (UTC)</span>
                <span>Customs</span>
                <span>Entry</span>
              </div>

              {shown.map((a) => (
                <button
                  key={a.icao}
                  onClick={() => {
                    setSelected(a.icao);
                    setMobilePopupOpen(true);
                  }}
                  className="grid w-full grid-cols-[84px_1fr_80px_90px_80px_80px] items-center border-b border-[#F0EADF] px-4 py-3 text-left transition-colors hover:bg-[#FBF6EC]"
                >
                  <span>
                    <span className="block font-mono text-xs font-bold">{a.icao}</span>
                    <span className="block font-mono text-[11px] text-[#4A4F5C]">{a.iata}</span>
                  </span>
                  <span className="min-w-0 pr-3">
                    <span className="block text-sm font-bold">{a.city}</span>
                    <span className="block truncate text-xs text-[#4A4F5C]">
                      {a.name.replace(/\s*Airport$/i, "")}
                    </span>
                  </span>
                  <span className="text-xs font-bold">{a.fire}</span>
                  <span className="text-xs">{a.hours}</span>
                  <span>
                    <Pill {...a.customs} />
                  </span>
                  <span>
                    <Pill {...a.entry} />
                  </span>
                </button>
              ))}

              {hasMore && <div className="py-4 text-center text-xs text-[#4A4F5C]">Loading more airports…</div>}

              {filtered.length === 0 && (
                <div className="py-8 text-center text-xs">
                  <p>No airports match your search.</p>
                </div>
              )}
            </div>
          </div>

          {/* Popup: starts at top-16, fills down to bottom */}
          {mobilePopupOpen && current && (
            <div
              className="fixed inset-x-0 bottom-0 top-0 z-50 flex items-center bg-black/60 backdrop-blur-sm"
              onClick={() => setMobilePopupOpen(false)}
            >
              <div
                className="h-max w-full overflow-y-auto rounded-2xl bg-[#0B1730] p-2 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <DetailPanel a={current} onClose={() => setMobilePopupOpen(false)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}