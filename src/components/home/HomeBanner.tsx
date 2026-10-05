"use client";

import { motion, type Variants } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Buttonmain from "../global/button";

/* -------------------------------------------------------------------------- */
/*  Config (edit these)                                                       */
/* -------------------------------------------------------------------------- */

const QUOTE_HREF = "#contact"; // Request a quote link
const WHATSAPP_HREF = "https://wa.me/918826292951?text="; // put your number

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

function HomeBanner() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useFlightCanvas(wrapRef, canvasRef);

  return (
    <section className="relative isolate flex min-h-[100svh] w-full overflow-hidden bg-[#050b16] text-[#e8eef7]">
      {/* Flight animation */}
      <div ref={wrapRef} className="absolute inset-0 -z-20" aria-hidden="true">
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>

      {/* Keeps the text readable over the map */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#050b16] via-[#050b16]/70 to-[#050b16]/60 lg:bg-gradient-to-r lg:from-[#050b16]/95 lg:via-[#050b16]/55 lg:to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-12"
      >
        <div className="max-w-2xl">
          <motion.h1
            variants={item}
            className="text-3xl font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]  sm:text-4xl lg:text-[3.5rem]"
          >
            Flight permits and ground support across India, since 1997
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-6 h-[3px] w-24 rounded bg-[#ef7d22] transition-all duration-500 hover:w-44"
          />

          <motion.p variants={item} className="mt-6 text-base leading-relaxed text-[#c3d0e3] sm:text-lg">
            Overfly and landing permits, airport slots, ground handling, fuel and crew support for operators flying
            into, out of and over India – arranged by one team in New Delhi.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                       <Buttonmain text="Explore More" href="/about-us" />
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-base font-medium text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#25d366] hover:bg-[#25d366]/15 hover:shadow-[0_14px_40px_-10px_rgba(37,211,102,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366] active:translate-y-0 active:scale-[0.98]"
            >
              <FaWhatsapp className="text-2xl text-[#25d366] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />
              WhatsApp us
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HomeBanner;

/* -------------------------------------------------------------------------- */
/*  Hook: canvas lifecycle                                                    */
/* -------------------------------------------------------------------------- */

function useFlightCanvas(
  wrapRef: React.RefObject<HTMLDivElement | null>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  useEffect(() => {
    const wrap = wrapRef.current;
    const cv = canvasRef.current;
    if (!wrap || !cv) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let scene: Scene | null = null;
    let raf = 0;
    let visible = true;
    const t0 = performance.now();

    const draw = () => scene?.render(reduce ? 5 : ((performance.now() - t0) / 1000) % LOOP);
    const frame = () => {
      draw();
      raf = requestAnimationFrame(frame);
    };
    const run = () => {
      if (reduce || raf || !visible || document.hidden) return;
      raf = requestAnimationFrame(frame);
    };
    const halt = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const build = () => {
      const r = wrap.getBoundingClientRect();
      if (!r.width || !r.height) return;
      scene = createScene(cv, r.width, r.height, Math.min(window.devicePixelRatio || 1, 2));
      draw();
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(wrap);
    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible) run();
      else halt();
    });
    io.observe(wrap);
    const onVis = () => (document.hidden ? halt() : run());
    document.addEventListener("visibilitychange", onVis);
    run();

    return () => {
      halt();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [wrapRef, canvasRef]);
}

/* -------------------------------------------------------------------------- */
/*  Canvas scene: flights + airport city labels (seamless 12 s loop)                   */
/* -------------------------------------------------------------------------- */

type Airport = { n: string; lat: number; lon: number; side: "l" | "r"; key?: boolean; ext?: boolean };
type Geom = { x1: number; y1: number; x2: number; y2: number; cx: number; cy: number };
type RouteType = "over" | "in" | "dom";
type Route = { type: RouteType; g: Geom; off: number };
type Scene = { render: (t: number) => void };

const LOOP = 12;

const C = {
  bg0: "#0a1830",
  bg1: "#050b16",
  gold: "#f7c948",
  grid: "rgba(142,163,192,",
};

const AP: Record<string, Airport> = {
  // India
  VIDP: { n: "New Delhi", lat: 28.56, lon: 77.1, side: "r", key: true },
  VABB: { n: "Mumbai", lat: 19.09, lon: 72.87, side: "l", key: true },
  VOMM: { n: "Chennai", lat: 12.99, lon: 80.17, side: "r", key: true },
  VECC: { n: "Kolkata", lat: 22.65, lon: 88.45, side: "r", key: true },
  VOBL: { n: "Bengaluru", lat: 13.2, lon: 77.71, side: "l", key: true },
  VOHS: { n: "Hyderabad", lat: 17.24, lon: 78.43, side: "r", key: true },
  VAAH: { n: "Ahmedabad", lat: 23.08, lon: 72.63, side: "l" },
  VIAR: { n: "Amritsar", lat: 31.71, lon: 74.8, side: "l" },
  VEGT: { n: "Guwahati", lat: 26.11, lon: 91.59, side: "r" },
  VOCI: { n: "Kochi", lat: 10.15, lon: 76.4, side: "l" },
  VILK: { n: "Lucknow", lat: 26.76, lon: 80.89, side: "r" },
  VOGO: { n: "Goa", lat: 15.38, lon: 73.83, side: "l" },
  VAPO: { n: "Pune", lat: 18.58, lon: 73.92, side: "l" },
  VOTV: { n: "Trivandrum", lat: 8.48, lon: 76.92, side: "r" },
  VEBS: { n: "Bhubaneswar", lat: 20.24, lon: 85.82, side: "r" },
  VIJP: { n: "Jaipur", lat: 26.82, lon: 75.81, side: "l" },
  // international
  OMDB: { n: "Dubai", lat: 25.25, lon: 55.36, side: "l", ext: true },
  OTHH: { n: "Doha", lat: 25.27, lon: 51.61, side: "l", ext: true },
  WSSS: { n: "Singapore", lat: 1.36, lon: 103.99, side: "r", ext: true },
  VTBS: { n: "Bangkok", lat: 13.69, lon: 100.75, side: "r", ext: true },
  VCBI: { n: "Colombo", lat: 7.18, lon: 79.88, side: "r", ext: true },
  VNKT: { n: "Kathmandu", lat: 27.7, lon: 85.36, side: "r", ext: true },
  UTTT: { n: "Tashkent", lat: 41.26, lon: 69.28, side: "l", ext: true },
  HKJK: { n: "Nairobi", lat: -1.32, lon: 36.93, side: "l", ext: true },
  OOMS: { n: "Muscat", lat: 23.59, lon: 58.28, side: "l", ext: true },
  VHHH: { n: "Hong Kong", lat: 22.31, lon: 113.9, side: "r", ext: true },
};

// over = overfly, in = landing in India, dom = domestic
const ROUTE_DEFS: { a: string; b: string; type: RouteType }[] = [
  { a: "OMDB", b: "WSSS", type: "over" },
  { a: "OTHH", b: "VIDP", type: "in" },
  { a: "VIDP", b: "VABB", type: "dom" },
  { a: "UTTT", b: "VIDP", type: "in" },
  { a: "VTBS", b: "OOMS", type: "over" },
  { a: "VECC", b: "VOBL", type: "dom" },
  { a: "HKJK", b: "VABB", type: "in" },
  { a: "VHHH", b: "OMDB", type: "over" },
  { a: "VOMM", b: "VIDP", type: "dom" },
  { a: "VABB", b: "VOCI", type: "dom" },
  { a: "VIDP", b: "VEGT", type: "dom" },
  { a: "VCBI", b: "VOMM", type: "in" },
  { a: "VNKT", b: "VECC", type: "in" },
  { a: "VAAH", b: "VOHS", type: "dom" },
];

const clamp = (x: number, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const hash = (i: number) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

function createScene(cv: HTMLCanvasElement, W: number, H: number, dpr: number): Scene {
  cv.width = Math.round(W * dpr);
  cv.height = Math.round(H * dpr);
  const ctx = cv.getContext("2d")!;

  const PORTRAIT = H > W;
  const U = Math.max(0.6, Math.min(W, H) / 1080);

  // Projection: equirectangular around India
  const LAT0 = 21, LATC = 21;
  const LON0 = PORTRAIT ? 80 : 72.5;
  const COSL = Math.cos((LAT0 * Math.PI) / 180);
  const K = W / ((PORTRAIT ? 30 : 54) * COSL);
  const proj = (lat: number, lon: number): [number, number] => [
    W / 2 + (lon - LON0) * COSL * K,
    H / 2 - (lat - LATC) * K,
  ];

  const bz = (g: Geom, t: number): [number, number] => {
    const u = 1 - t;
    return [u * u * g.x1 + 2 * u * t * g.cx + t * t * g.x2, u * u * g.y1 + 2 * u * t * g.cy + t * t * g.y2];
  };
  const bzd = (g: Geom, t: number): [number, number] => [
    2 * (1 - t) * (g.cx - g.x1) + 2 * t * (g.x2 - g.cx),
    2 * (1 - t) * (g.cy - g.y1) + 2 * t * (g.y2 - g.cy),
  ];
  const routeGeom = (a: string, b: string, bend: number): Geom => {
    const [x1, y1] = proj(AP[a].lat, AP[a].lon), [x2, y2] = proj(AP[b].lat, AP[b].lon);
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
    let nx = -dy / L, ny = dx / L;
    if (ny > 0) { nx = -nx; ny = -ny; } // always bulge upward
    return { x1, y1, x2, y2, cx: mx + nx * L * bend, cy: my + ny * L * bend };
  };

  const routes: Route[] = ROUTE_DEFS.map((r, i) => ({
    type: r.type,
    g: routeGeom(r.a, r.b, r.type === "dom" ? 0.18 : 0.2),
    off: hash(i + 3),
  }));

  const background = () => {
    const g = ctx.createRadialGradient(W * 0.55, H * 0.45, 0, W * 0.55, H * 0.45, Math.max(W, H) * 0.8);
    g.addColorStop(0, C.bg0); g.addColorStop(1, C.bg1);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    const [ix, iy] = proj(21, 79);
    const gl = ctx.createRadialGradient(ix, iy, 0, ix, iy, K * 18);
    gl.addColorStop(0, "rgba(239,125,34,0.10)"); gl.addColorStop(1, "rgba(239,125,34,0)");
    ctx.fillStyle = gl; ctx.fillRect(0, 0, W, H);
  };

  const grid = () => {
    ctx.save(); ctx.lineWidth = U;
    for (let lon = 20; lon <= 140; lon += 5) {
      ctx.strokeStyle = C.grid + (lon % 10 === 0 ? 0.1 : 0.04) + ")";
      const [x] = proj(0, lon); ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let lat = -30; lat <= 70; lat += 5) {
      ctx.strokeStyle = C.grid + (lat % 10 === 0 ? 0.1 : 0.04) + ")";
      const [, y] = proj(lat, 0); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.fillStyle = C.grid + "0.25)";
    for (let lon = 20; lon <= 140; lon += 10)
      for (let lat = -30; lat <= 70; lat += 10) {
        const [x, y] = proj(lat, lon); ctx.fillRect(x - 1.5 * U, y - 1.5 * U, 3 * U, 3 * U);
      }
    ctx.restore();
  };

  const stars = (t: number) => {
    const n = PORTRAIT ? 80 : 140;
    for (let i = 0; i < n; i++) {
      const s = (hash(i + 900) * 1.4 + 0.4) * U;
      const tw = 0.25 + 0.25 * Math.sin((t * (1 + Math.floor(hash(i + 77) * 3)) * 2 * Math.PI) / LOOP + i);
      ctx.fillStyle = `rgba(200,215,240,${tw * 0.5})`;
      ctx.fillRect(hash(i) * W, hash(i + 500) * H, s, s);
    }
  };

  const node = (code: string, t: number) => {
    const ap = AP[code]; const [x, y] = proj(ap.lat, ap.lon);
    const ext = !!ap.ext, r = (ext ? 4 : 5.5) * U;
    ctx.save();
    const ph = (t / 3 + hash(code.length * 7 + code.charCodeAt(1))) % 1;
    ctx.strokeStyle = ext ? "rgba(142,163,192,.5)" : "rgba(245,166,35,.8)";
    ctx.lineWidth = 1.5 * U; ctx.globalAlpha = (1 - ph) * 0.7;
    ctx.beginPath(); ctx.arc(x, y, r + ph * 18 * U, 0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.shadowColor = ext ? "rgba(142,163,192,.8)" : "rgba(245,166,35,.9)"; ctx.shadowBlur = 12 * U;
    ctx.fillStyle = ext ? "#9fb3cf" : C.gold;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0; ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.arc(x, y, r * 0.45, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  };

  const plane = (x: number, y: number, ang: number, s: number, a: number) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.scale(s, s); ctx.globalAlpha = a;
    ctx.shadowColor = "rgba(255,255,255,.9)"; ctx.shadowBlur = 10; ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(11, 0); ctx.quadraticCurveTo(9, -1.6, 4, -1.6); ctx.lineTo(-1, -1.6); ctx.lineTo(-5, -10); ctx.lineTo(-7.5, -10);
    ctx.lineTo(-4.5, -1.6); ctx.lineTo(-9, -1.6); ctx.lineTo(-11, -5); ctx.lineTo(-12.5, -5); ctx.lineTo(-11.2, 0);
    ctx.lineTo(-12.5, 5); ctx.lineTo(-11, 5); ctx.lineTo(-9, 1.6); ctx.lineTo(-4.5, 1.6); ctx.lineTo(-7.5, 10);
    ctx.lineTo(-5, 10); ctx.lineTo(-1, 1.6); ctx.lineTo(4, 1.6); ctx.quadraticCurveTo(9, 1.6, 11, 0); ctx.closePath();
    ctx.fill(); ctx.restore();
  };

  const route = (r: Route, p: number, ba: number) => {
    const g = r.g;
    const col = r.type === "dom" ? "247,201,72" : r.type === "over" ? "120,190,255" : "239,125,34";
    ctx.save();
    ctx.setLineDash([2 * U, 7 * U]); ctx.lineWidth = 1.4 * U;
    ctx.strokeStyle = `rgba(${col},${ba * 1.6})`;
    ctx.beginPath(); ctx.moveTo(g.x1, g.y1); ctx.quadraticCurveTo(g.cx, g.cy, g.x2, g.y2); ctx.stroke();
    ctx.setLineDash([]);
    if (p > 0 && p < 1.25) {
      const pe = Math.min(p, 1), ps = Math.max(0, p - 0.32), N = 28;
      const fade = p > 1 ? clamp(1 - (p - 1) / 0.25) : 1;
      let prev = bz(g, ps);
      for (let i = 1; i <= N; i++) {
        const tt = ps + ((pe - ps) * i) / N; const pt = bz(g, tt); const k = i / N;
        ctx.strokeStyle = `rgba(${col},${0.9 * k * fade})`; ctx.lineWidth = (1.2 + 2.2 * k) * U;
        ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(pt[0], pt[1]); ctx.stroke(); prev = pt;
      }
      if (p < 1) {
        const [x, y] = bz(g, p), [dx, dy] = bzd(g, p);
        plane(x, y, Math.atan2(dy, dx), 1.15 * U, clamp(p / 0.06) * clamp((1 - p) / 0.06));
      }
    }
    ctx.restore();
  };

  const label = (code: string) => {
    const ap = AP[code];
    if (PORTRAIT && !ap.key) return; // keep phones uncluttered
    const [x, y] = proj(ap.lat, ap.lon);
    const dir = ap.side === "l" ? -1 : 1;
    ctx.save();
    ctx.textAlign = dir < 0 ? "right" : "left";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0,0,0,.8)"; ctx.shadowBlur = 6 * U;
    ctx.font = `500 ${16 * U}px`;
    ctx.fillStyle = ap.ext ? "rgba(190,205,228,.85)" : "#e8eef7";
    ctx.fillText(ap.n, x + dir * 14 * U, y);
    ctx.restore();
  };

  const vignette = () => {
    const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.max(W, H) * 0.75);
    g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.55)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  };

  return {
    render: (t: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalAlpha = 1;
      background(); stars(t); grid();
      routes.forEach((r) => {
        const reps = r.type === "dom" ? 2 : 1;
        const cyc = ((t / LOOP) * reps + r.off) % 1;
        route(r, cyc * 1.45 - 0.1, 0.14);
      });
      Object.keys(AP).forEach((c) => node(c, t));
      Object.keys(AP).forEach((c) => label(c));
      ctx.fillStyle = "rgba(4,9,18,.18)"; ctx.fillRect(0, 0, W, H);
      vignette();
    },
  };
}