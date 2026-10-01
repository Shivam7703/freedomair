"use client";
                          
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaRedo } from "react-icons/fa";

/**
 * Canvas scene ported 1:1 from the original HTML version.
 * Pure TypeScript, no React. Safe to import in Next.js (nothing touches `window` at import time).
 */

type SceneMode = "welcome" | "loop";

interface SceneFonts {
  sans?: string;
  serif?: string;
}

interface SceneOptions {
  mode: SceneMode;
  width: number; // CSS pixels
  height: number; // CSS pixels
  dpr?: number;
  fonts?: SceneFonts;
}

interface FlightScene {
  duration: number;
  render: (t: number) => void;
}

type Airport = { n: string; lat: number; lon: number; side: "l" | "r"; key?: 0 | 1; ext?: 1 };
type Geom = { x1: number; y1: number; x2: number; y2: number; cx: number; cy: number; L: number };
type RouteType = "over" | "in" | "dom";
type Route = { a: string; b: string; type: RouteType; g: Geom; off: number };
type Chip = { c: string; l: [string, string]; dx: number; dy: number };
type Beat = { t0: number; t1: number; n: string; title: string; sub: string; chips: Chip[] };

/* ---------------------------------- data ---------------------------------- */

const C = {
  bg0: "#0a1830", bg1: "#050b16",
  amber: "#f5a623", orange: "#ef7d22", gold: "#f7c948",
  text: "#e8eef7", muted: "#8ea3c0",
  grid: "rgba(142,163,192,0.2)", green: "#39d98a",
};

const AP: Record<string, Airport> = {
  VIDP: { n: "Delhi", lat: 28.56, lon: 77.1, side: "r", key: 1 },
  VABB: { n: "Mumbai", lat: 19.09, lon: 72.87, side: "l", key: 1 },
  VOMM: { n: "Chennai", lat: 12.99, lon: 80.17, side: "r", key: 1 },
  VECC: { n: "Kolkata", lat: 22.65, lon: 88.45, side: "r", key: 1 },
  VOBL: { n: "Bengaluru", lat: 13.2, lon: 77.71, side: "l", key: 1 },
  VOHS: { n: "Hyderabad", lat: 17.24, lon: 78.43, side: "r", key: 1 },
  VAAH: { n: "Ahmedabad", lat: 23.08, lon: 72.63, side: "l", key: 0 },
  VIAR: { n: "Amritsar", lat: 31.71, lon: 74.8, side: "l", key: 0 },
  VEGT: { n: "Guwahati", lat: 26.11, lon: 91.59, side: "r", key: 0 },
  VOCI: { n: "Kochi", lat: 10.15, lon: 76.4, side: "l", key: 0 },
  VILK: { n: "Lucknow", lat: 26.76, lon: 80.89, side: "r", key: 0 },
  VOGO: { n: "Goa", lat: 15.38, lon: 73.83, side: "l", key: 0 },
  VAPO: { n: "Pune", lat: 18.58, lon: 73.92, side: "l", key: 0 },
  VOTV: { n: "Trivandrum", lat: 8.48, lon: 76.92, side: "r", key: 0 },
  VEBS: { n: "Bhubaneswar", lat: 20.24, lon: 85.82, side: "r", key: 0 },
  VIJP: { n: "Jaipur", lat: 26.82, lon: 75.81, side: "l", key: 0 },
  // international
  OMDB: { n: "Dubai", lat: 25.25, lon: 55.36, side: "l", ext: 1 },
  OTHH: { n: "Doha", lat: 25.27, lon: 51.61, side: "l", ext: 1 },
  WSSS: { n: "Singapore", lat: 1.36, lon: 103.99, side: "r", ext: 1 },
  VTBS: { n: "Bangkok", lat: 13.69, lon: 100.75, side: "r", ext: 1 },
  VCBI: { n: "Colombo", lat: 7.18, lon: 79.88, side: "r", ext: 1 },
  VNKT: { n: "Kathmandu", lat: 27.7, lon: 85.36, side: "r", ext: 1 },
  UTTT: { n: "Tashkent", lat: 41.26, lon: 69.28, side: "l", ext: 1 },
  HKJK: { n: "Nairobi", lat: -1.32, lon: 36.93, side: "l", ext: 1 },
  OOMS: { n: "Muscat", lat: 23.59, lon: 58.28, side: "l", ext: 1 },
  VHHH: { n: "Hong Kong", lat: 22.31, lon: 113.9, side: "r", ext: 1 },
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

const BEATS: Beat[] = [
  { t0: 4.4, t1: 6.8, n: "01", title: "Overfly & Landing Permits", sub: "Clearances for Indian airspace, arranged fast",
    chips: [{ c: "VIDP", l: ["Landing permit approved", "Doha → Delhi"], dx: -40, dy: -120 }] },
  { t0: 6.8, t1: 9.0, n: "02", title: "Airport Slots", sub: "Slot approvals coordinated with authorities",
    chips: [{ c: "VABB", l: ["Slot confirmed", "Arrival 14:25 UTC"], dx: -60, dy: -80 }] },
  { t0: 9.0, t1: 11.2, n: "03", title: "Ground Handling & Fuel", sub: "Ramp, parking, baggage and Jet A-1 uplift",
    chips: [{ c: "VOMM", l: ["Handling & fuel ready", "Jet A-1 uplift arranged"], dx: 60, dy: 40 }] },
  { t0: 11.2, t1: 13.4, n: "04", title: "Crew Support & Catering", sub: "Hotels, transport and inflight catering",
    chips: [{ c: "VOBL", l: ["Crew hotel booked", "Catering confirmed"], dx: -70, dy: 70 }] },
];

// [route index, start time, duration]
const WSCHED: [number, number, number][] = [
  [0, 3.2, 4.6], [1, 3.6, 3.4], [4, 4.6, 4.8], [2, 6.2, 2.4], [3, 5.4, 3.6], [6, 6.6, 4.4], [5, 7.8, 2.8],
  [7, 8.4, 5.0], [8, 9.6, 2.6], [9, 10.6, 2.2], [11, 10.2, 3.0], [10, 11.4, 2.6], [12, 12.0, 2.4], [13, 12.6, 2.4],
  [0, 11.8, 4.6], [1, 13.0, 3.4], [3, 13.4, 3.6],
];

/* --------------------------------- helpers -------------------------------- */

const clamp = (x: number, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeBack = (t: number) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
const win = (t: number, a: number, b: number, fi = 0.5, fo = 0.5) => clamp((t - a) / fi) * clamp((b - t) / fo);
const hash = (i: number) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

/* ---------------------------------- scene --------------------------------- */

function createFlightScene(cv: HTMLCanvasElement, opts: SceneOptions): FlightScene {
  const { mode, width: W, height: H, dpr = 1 } = opts;
  const SERIF = opts.fonts?.serif ?? '"Lora", Georgia, serif';
  const SANS = opts.fonts?.sans ?? '"Poppins", ui-sans-serif, system-ui, sans-serif';

  cv.width = Math.round(W * dpr);
  cv.height = Math.round(H * dpr);
  const ctx = cv.getContext("2d")!;

  const PORTRAIT = H > W;
  const baseU = Math.min(W, H) / 1080;
  const U = mode === "loop" ? Math.max(0.6, baseU) : baseU; // keep loop labels readable on phones

  // Projection: equirectangular around India
  const LAT0 = 21, LON0 = PORTRAIT ? 80 : 72.5, LATC = 21;
  const COSL = Math.cos((LAT0 * Math.PI) / 180);
  const SPAN_LON = PORTRAIT ? 30 : 54;
  const K = W / (SPAN_LON * COSL);
  const proj = (lat: number, lon: number): [number, number] => [W / 2 + (lon - LON0) * COSL * K, H / 2 - (lat - LATC) * K];

  const rr = (x: number, y: number, w: number, h: number, r: number) => {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  };

  const routeGeom = (a: string, b: string, bend = 0.22): Geom => {
    const [x1, y1] = proj(AP[a].lat, AP[a].lon), [x2, y2] = proj(AP[b].lat, AP[b].lon);
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
    let nx = -dy / L, ny = dx / L; if (ny > 0) { nx = -nx; ny = -ny; }
    return { x1, y1, x2, y2, cx: mx + nx * L * bend, cy: my + ny * L * bend, L };
  };
  const bz = (g: Geom, t: number): [number, number] => {
    const u = 1 - t;
    return [u * u * g.x1 + 2 * u * t * g.cx + t * t * g.x2, u * u * g.y1 + 2 * u * t * g.cy + t * t * g.y2];
  };
  const bzd = (g: Geom, t: number): [number, number] => [
    2 * (1 - t) * (g.cx - g.x1) + 2 * t * (g.x2 - g.cx),
    2 * (1 - t) * (g.cy - g.y1) + 2 * t * (g.y2 - g.cy),
  ];

  const ROUTES: Route[] = ROUTE_DEFS.map((r, i) => ({ ...r, g: routeGeom(r.a, r.b, r.type === "dom" ? 0.18 : 0.2), off: hash(i + 3) }));

  /* ---- primitives ---- */
  const drawBackground = () => {
    const g = ctx.createRadialGradient(W * 0.55, H * 0.45, 0, W * 0.55, H * 0.45, Math.max(W, H) * 0.8);
    g.addColorStop(0, C.bg0); g.addColorStop(1, C.bg1);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    const [ix, iy] = proj(21, 79);
    const gl = ctx.createRadialGradient(ix, iy, 0, ix, iy, K * 18);
    gl.addColorStop(0, "rgba(239,125,34,0.10)"); gl.addColorStop(1, "rgba(239,125,34,0)");
    ctx.fillStyle = gl; ctx.fillRect(0, 0, W, H);
  };

  const drawGrid = (alpha: number) => {
    if (alpha <= 0) return;
    ctx.save(); ctx.lineWidth = U;
    for (let lon = 20; lon <= 140; lon += 5) {
      ctx.strokeStyle = C.grid + alpha * (lon % 10 === 0 ? 0.1 : 0.04) + ")";
      const [x] = proj(0, lon); ctx.beginPath(); ctx.moveTo(x, -H); ctx.lineTo(x, 2 * H); ctx.stroke();
    }
    for (let lat = -30; lat <= 70; lat += 5) {
      ctx.strokeStyle = C.grid + alpha * (lat % 10 === 0 ? 0.1 : 0.04) + ")";
      const [, y] = proj(lat, 0); ctx.beginPath(); ctx.moveTo(-W, y); ctx.lineTo(2 * W, y); ctx.stroke();
    }
    ctx.fillStyle = C.grid + alpha * 0.25 + ")";
    for (let lon = 20; lon <= 140; lon += 10)
      for (let lat = -30; lat <= 70; lat += 10) { const [x, y] = proj(lat, lon); ctx.fillRect(x - 1.5 * U, y - 1.5 * U, 3 * U, 3 * U); }
    ctx.restore();
  };

  const drawStars = (t: number) => {
    ctx.save();
    for (let i = 0; i < 140; i++) {
      const x = hash(i) * W, y = hash(i + 500) * H, s = (hash(i + 900) * 1.4 + 0.4) * U;
      const tw = 0.25 + 0.25 * Math.sin((t * (1 + Math.floor(hash(i + 77) * 3)) * 2 * Math.PI) / 12 + i);
      ctx.fillStyle = `rgba(200,215,240,${tw * 0.5})`; ctx.fillRect(x, y, s, s);
    }
    ctx.restore();
  };

  const drawNode = (code: string, a: number, t: number, highlight = 0) => {
    if (a <= 0) return;
    const ap = AP[code]; const [x, y] = proj(ap.lat, ap.lon); const ext = !!ap.ext;
    const r = (ext ? 4 : 5.5) * U * (0.6 + 0.4 * a);
    ctx.save(); ctx.globalAlpha = a;
    const ph = (t / 3 + hash(code.length * 7 + code.charCodeAt(1))) % 1;
    ctx.strokeStyle = ext ? "rgba(142,163,192,.5)" : "rgba(245,166,35,.8)";
    ctx.lineWidth = 1.5 * U; ctx.globalAlpha = a * (1 - ph) * 0.7;
    ctx.beginPath(); ctx.arc(x, y, r + ph * 18 * U, 0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = a;
    if (highlight > 0) {
      ctx.globalAlpha = a * highlight * 0.5; ctx.fillStyle = "rgba(247,201,72,.35)";
      ctx.beginPath(); ctx.arc(x, y, r * 4.5, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = a;
    }
    ctx.shadowColor = ext ? "rgba(142,163,192,.8)" : "rgba(245,166,35,.9)"; ctx.shadowBlur = 12 * U;
    ctx.fillStyle = ext ? "#9fb3cf" : C.gold;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0; ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x, y, r * 0.45, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  };

  const drawLabel = (code: string, a: number) => {
    if (a <= 0) return;
    const ap = AP[code]; const [x, y] = proj(ap.lat, ap.lon);
    ctx.save(); ctx.globalAlpha = a;
    const dir = ap.side === "l" ? -1 : 1, ox = x + dir * 14 * U;
    ctx.textAlign = dir < 0 ? "right" : "left"; ctx.textBaseline = "middle";
    ctx.font = `500 ${17 * U}px ${SANS}`; ctx.fillStyle = ap.ext ? "rgba(190,205,228,.75)" : C.text;
    ctx.fillText(ap.n, ox, y - 8 * U);
    ctx.font = `500 ${12.5 * U}px ${SANS}`; ctx.fillStyle = ap.ext ? "rgba(142,163,192,.7)" : C.amber;
    ctx.fillText(code, ox, y + 10 * U);
    ctx.restore();
  };

  const drawPlane = (x: number, y: number, ang: number, s: number, a: number) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.scale(s, s); ctx.globalAlpha = a;
    ctx.shadowColor = "rgba(255,255,255,.9)"; ctx.shadowBlur = 10; ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(11, 0); ctx.quadraticCurveTo(9, -1.6, 4, -1.6); ctx.lineTo(-1, -1.6); ctx.lineTo(-5, -10); ctx.lineTo(-7.5, -10);
    ctx.lineTo(-4.5, -1.6); ctx.lineTo(-9, -1.6); ctx.lineTo(-11, -5); ctx.lineTo(-12.5, -5); ctx.lineTo(-11.2, 0);
    ctx.lineTo(-12.5, 5); ctx.lineTo(-11, 5); ctx.lineTo(-9, 1.6); ctx.lineTo(-4.5, 1.6); ctx.lineTo(-7.5, 10);
    ctx.lineTo(-5, 10); ctx.lineTo(-1, 1.6); ctx.lineTo(4, 1.6); ctx.quadraticCurveTo(9, 1.6, 11, 0); ctx.closePath();
    ctx.fill(); ctx.restore();
  };

  const drawRoute = (r: Route, p: number, a: number, ba = 0.16) => {
    if (a <= 0) return;
    const g = r.g, col = r.type === "dom" ? "247,201,72" : r.type === "over" ? "120,190,255" : "239,125,34";
    ctx.save();
    ctx.globalAlpha = a; ctx.setLineDash([2 * U, 7 * U]); ctx.lineWidth = 1.4 * U;
    ctx.strokeStyle = `rgba(${col},${ba * 1.6})`;
    ctx.beginPath(); ctx.moveTo(g.x1, g.y1); ctx.quadraticCurveTo(g.cx, g.cy, g.x2, g.y2); ctx.stroke();
    ctx.setLineDash([]);
    if (p > 0 && p < 1.25) {
      const pe = Math.min(p, 1), tl = 0.32, ps = Math.max(0, p - tl), N = 28;
      let prev = bz(g, ps);
      for (let i = 1; i <= N; i++) {
        const tt = ps + ((pe - ps) * i) / N; if (tt > 1) break; const pt = bz(g, tt);
        const k = i / N, fade = p > 1 ? clamp(1 - (p - 1) / 0.25) : 1;
        ctx.strokeStyle = `rgba(${col},${0.9 * k * fade})`; ctx.lineWidth = (1.2 + 2.2 * k) * U;
        ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(pt[0], pt[1]); ctx.stroke(); prev = pt;
      }
      if (p < 1) {
        const [x, y] = bz(g, p), [dx, dy] = bzd(g, p);
        const pa = clamp(p / 0.06) * clamp((1 - p) / 0.06);
        drawPlane(x, y, Math.atan2(dy, dx), 1.15 * U, a * pa);
      }
    }
    ctx.restore();
  };

  const drawChip = (code: string, lines: [string, string], a: number, dx: number, dy: number) => {
    if (a <= 0) return;
    const [x, y] = proj(AP[code].lat, AP[code].lon);
    const ea = easeBack(clamp(a)), cx = x + dx * U, cy = y + dy * U;
    ctx.save(); ctx.globalAlpha = clamp(a * 1.4);
    ctx.strokeStyle = "rgba(247,201,72,.7)"; ctx.lineWidth = 1.3 * U;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (cx - x) * ea, y + (cy - y) * ea); ctx.stroke();
    ctx.font = `600 ${19 * U}px ${SANS}`; const w1 = ctx.measureText(lines[0]).width;
    ctx.font = `400 ${15 * U}px ${SANS}`; const w2 = ctx.measureText(lines[1]).width;
    const bw = Math.max(w1, w2) + 74 * U, bh = 66 * U;
    const bx = dx < 0 ? cx - bw : cx, by = cy - bh / 2;
    ctx.translate(cx, cy); ctx.scale(0.85 + 0.15 * ea, 0.85 + 0.15 * ea); ctx.translate(-cx, -cy);
    ctx.shadowColor = "rgba(0,0,0,.5)"; ctx.shadowBlur = 24 * U;
    rr(bx, by, bw, bh, 12 * U); ctx.fillStyle = "rgba(10,22,42,.92)"; ctx.fill(); ctx.shadowBlur = 0;
    ctx.strokeStyle = "rgba(247,201,72,.55)"; ctx.lineWidth = 1.2 * U; ctx.stroke();
    const ix = bx + 30 * U, iy = by + bh / 2;
    ctx.fillStyle = "rgba(57,217,138,.16)"; ctx.beginPath(); ctx.arc(ix, iy, 15 * U, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = C.green; ctx.lineWidth = 2.6 * U; ctx.lineCap = "round"; ctx.lineJoin = "round";
    const ck = clamp((a - 0.25) / 0.4);
    ctx.beginPath(); ctx.moveTo(ix - 6 * U, iy); ctx.lineTo(ix - 6 * U + 4 * U * clamp(ck * 2), iy + 4 * U * clamp(ck * 2));
    if (ck > 0.5) ctx.lineTo(ix - 2 * U + 8 * U * clamp((ck - 0.5) * 2), iy + 4 * U - 9 * U * clamp((ck - 0.5) * 2));
    ctx.stroke();
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
    ctx.font = `600 ${19 * U}px ${SANS}`; ctx.fillStyle = "#fff"; ctx.fillText(lines[0], bx + 54 * U, by + 29 * U);
    ctx.font = `400 ${15 * U}px ${SANS}`; ctx.fillStyle = C.muted; ctx.fillText(lines[1], bx + 54 * U, by + 50 * U);
    ctx.restore();
  };

  const drawSpaced = (s: string, x: number, y: number, sp: number) => {
    const chars = [...s]; let tw = 0; chars.forEach((ch) => (tw += ctx.measureText(ch).width + sp)); tw -= sp;
    const al = ctx.textAlign; ctx.textAlign = "left"; let cx = x - tw / 2;
    chars.forEach((ch) => { ctx.fillText(ch, cx, y); cx += ctx.measureText(ch).width + sp; });
    ctx.textAlign = al;
  };

  const drawVignette = () => {
    const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.max(W, H) * 0.75);
    g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.55)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  };

  /* ---- WELCOME (17 s) ---- */
  const renderWelcome = (t: number) => {
    const T = 17;
    drawBackground(); drawStars(t);
    const cam = 1 + 0.1 * ease(clamp(t / T));
    const endDim = 1 - 0.72 * ease(clamp((t - 13.3) / 1.2));
    ctx.save();
    const [fx, fy] = proj(21, 79);
    ctx.translate(fx, fy); ctx.scale(cam, cam); ctx.translate(-fx, -fy);
    ctx.globalAlpha = endDim;
    drawGrid(ease(clamp((t - 0.2) / 1.8)));
    const codes = Object.keys(AP);
    const routeA = clamp((t - 3.1) / 1.0);
    const drawn = new Set<number>();
    WSCHED.forEach(([ri, s, d]) => { const p = (t - s) / d; if (p > -0.01 && p < 1.3) { drawRoute(ROUTES[ri], p, routeA); drawn.add(ri); } });
    ROUTES.forEach((r, i) => { if (!drawn.has(i)) drawRoute(r, -1, routeA * 0.8); });
    codes.forEach((c, i) => {
      const ap = AP[c]; const st = 2.9 + (ap.ext ? 0.9 : 0) + i * 0.05;
      const a = easeOut(clamp((t - st) / 0.5));
      let hl = 0; BEATS.forEach((b) => b.chips.forEach((ch) => { if (ch.c === c) hl = Math.max(hl, win(t, b.t0, b.t1, 0.4, 0.4)); }));
      drawNode(c, a, t, hl);
      const la = a * (ap.key || ap.ext ? 1 : 0);
      drawLabel(c, la * (ap.ext ? 0.85 : 1) * (1 - clamp((t - 13.3) / 0.8)));
    });
    BEATS.forEach((b) => b.chips.forEach((ch) => {
      const a = clamp((t - b.t0 - 0.35) / 0.55) * clamp((b.t1 + 0.2 - t) / 0.35);
      drawChip(ch.c, ch.l, a, ch.dx, ch.dy);
    }));
    ctx.restore();

    // intro title
    const ia = win(t, 0.35, 2.7, 0.8, 0.5);
    if (ia > 0) {
      ctx.save(); ctx.globalAlpha = ia; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      const rise = (1 - easeOut(clamp((t - 0.35) / 1.2))) * 20 * U;
      ctx.font = `500 ${22 * U}px ${SANS}`; ctx.fillStyle = C.amber;
      drawSpaced("WELCOME TO", W / 2, H / 2 - 70 * U + rise, 7 * U);
      ctx.font = `600 ${92 * U}px ${SERIF}`; ctx.fillStyle = "#fff";
      ctx.shadowColor = "rgba(0,0,0,.5)"; ctx.shadowBlur = 30 * U;
      ctx.fillText("Freedom Air Services", W / 2, H / 2 + 20 * U + rise);
      ctx.shadowBlur = 0;
      const lw = 260 * U * easeOut(clamp((t - 0.9) / 1));
      ctx.fillStyle = C.orange; ctx.fillRect(W / 2 - lw / 2, H / 2 + 95 * U + rise, lw, 3 * U);
      ctx.restore();
    }

    // service captions
    BEATS.forEach((b) => {
      const a = win(t, b.t0, b.t1, 0.45, 0.4); if (a <= 0) return;
      const slide = (1 - easeOut(clamp((t - b.t0) / 0.6))) * 30 * U;
      const x = (PORTRAIT ? 70 : 110) * U, y = H - (PORTRAIT ? 300 : 210) * U;
      ctx.save(); ctx.globalAlpha = a;
      ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
      ctx.font = `600 ${64 * U}px ${SERIF}`; ctx.fillStyle = C.orange; ctx.fillText(b.n, x + slide, y);
      ctx.fillStyle = "rgba(255,255,255,.25)"; ctx.fillRect(x + 92 * U + slide, y - 48 * U, 1.5 * U, 58 * U);
      ctx.font = `600 ${44 * U}px ${SERIF}`; ctx.fillStyle = "#fff"; ctx.fillText(b.title, x + 118 * U + slide, y - 12 * U);
      ctx.font = `400 ${22 * U}px ${SANS}`; ctx.fillStyle = C.muted; ctx.fillText(b.sub, x + 118 * U + slide, y + 26 * U);
      ctx.restore();
    });

    // progress dots
    const pa = win(t, 4.3, 13.4, 0.4, 0.4);
    if (pa > 0) {
      ctx.save(); ctx.globalAlpha = pa;
      const y = H - (PORTRAIT ? 220 : 130) * U; let cx = (PORTRAIT ? 70 : 110) * U;
      BEATS.forEach((b) => {
        const on = win(t, b.t0, b.t1, 0.35, 0.35), done = t >= b.t1;
        ctx.fillStyle = on > 0.5 ? C.orange : done ? "rgba(239,125,34,.55)" : "rgba(255,255,255,.2)";
        const w = (22 + 34 * on) * U; rr(cx, y, w, 5 * U, 2.5 * U); ctx.fill(); cx += w + 12 * U;
      });
      ctx.restore();
    }

    // end card
    const ea = clamp((t - 13.6) / 0.9);
    if (ea > 0) {
      ctx.save();
      const pg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.45);
      pg.addColorStop(0, `rgba(5,11,22,${0.75 * ea})`); pg.addColorStop(1, "rgba(5,11,22,0)");
      ctx.fillStyle = pg; ctx.fillRect(0, 0, W, H);
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      const e = easeOut(ea), rise = (1 - e) * 24 * U;
      ctx.globalAlpha = e;
      ctx.font = `500 ${21 * U}px ${SANS}`; ctx.fillStyle = C.amber;
      drawSpaced("SINCE 1997  ·  NEW DELHI", W / 2, H / 2 - 110 * U + rise, 6 * U);
      ctx.font = `600 ${(PORTRAIT ? 78 : 100) * U}px ${SERIF}`; ctx.fillStyle = "#fff";
      ctx.shadowColor = "rgba(0,0,0,.6)"; ctx.shadowBlur = 30 * U;
      if (PORTRAIT) { ctx.fillText("Freedom Air", W / 2, H / 2 - 30 * U + rise); ctx.fillText("Services", W / 2, H / 2 + 60 * U + rise); }
      else ctx.fillText("Freedom Air Services", W / 2, H / 2 - 15 * U + rise);
      ctx.shadowBlur = 0;
      const e2 = easeOut(clamp((t - 14.1) / 0.8));
      const lw = 320 * U * e2; ctx.fillStyle = C.orange; ctx.fillRect(W / 2 - lw / 2, H / 2 + (PORTRAIT ? 125 : 62) * U, lw, 3 * U);
      ctx.globalAlpha = e2;
      ctx.font = `400 ${(PORTRAIT ? 28 : 32) * U}px ${SANS}`; ctx.fillStyle = C.text;
      ctx.fillText(PORTRAIT ? "Flight permits & ground support" : "Flight permits & ground support across India", W / 2, H / 2 + (PORTRAIT ? 185 : 118) * U + rise * 0.5);
      if (PORTRAIT) ctx.fillText("across India", W / 2, H / 2 + 228 * U + rise * 0.5);
      const e3 = easeOut(clamp((t - 14.7) / 0.8)); ctx.globalAlpha = e3;
      ctx.font = `500 ${22 * U}px ${SANS}`; ctx.fillStyle = C.muted;
      drawSpaced("PERMITS  ·  SLOTS  ·  HANDLING  ·  FUEL  ·  CREW", W / 2, H / 2 + (PORTRAIT ? 300 : 190) * U, 3 * U);
      ctx.restore();
    }

    const fb = Math.max(1 - clamp(t / 0.6), clamp((t - 16.4) / 0.6));
    if (fb > 0) { ctx.fillStyle = `rgba(3,7,14,${fb})`; ctx.fillRect(0, 0, W, H); }
    drawVignette();
  };

  /* ---- LOOP (12 s, seamless, no text) ---- */
  const renderLoop = (t: number) => {
    const T = 12;
    drawBackground(); drawStars(t);
    ctx.save();
    drawGrid(1);
    ROUTES.forEach((r) => {
      const reps = r.type === "dom" ? 2 : 1;
      const cyc = ((t / T) * reps + r.off) % 1;
      drawRoute(r, cyc * 1.45 - 0.1, 1, 0.14);
    });
    Object.keys(AP).forEach((c) => drawNode(c, 1, t));
    Object.keys(AP).forEach((c) => { if (AP[c].key) drawLabel(c, 0.55); });
    ctx.restore();
    ctx.fillStyle = "rgba(4,9,18,.18)"; ctx.fillRect(0, 0, W, H);
    drawVignette();
  };

  return {
    duration: mode === "loop" ? 12 : 17,
    render: (t: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalAlpha = 1;
      (mode === "loop" ? renderLoop : renderWelcome)(t);
    },
  };
}

/* ------------------------- hook: canvas lifecycle ------------------------- */



interface Options {
  mode?: SceneMode;
  fonts?: SceneFonts;
}

/**
 * Owns the canvas lifecycle:
 *  - sizes the canvas to its wrapper (ResizeObserver) with DPR support
 *  - runs the requestAnimationFrame loop
 *  - pauses when off-screen or the tab is hidden
 *  - respects prefers-reduced-motion (renders one still frame)
 *  - exposes restart + pause controls
 */
function useFlightCanvas({ mode = "welcome", fonts }: Options = {}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);
  const pausedRef = useRef(false);
  const redrawRef = useRef<() => void>(() => {});
  const [paused, setPaused] = useState(false);

  const fontKey = `${fonts?.sans ?? ""}|${fonts?.serif ?? ""}`;

  useEffect(() => {
    const wrap = wrapRef.current;
    const cv = canvasRef.current;
    if (!wrap || !cv) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let scene: FlightScene | null = null;
    let raf = 0;
    let last = 0;
    let visible = true;

    const draw = () => {
      if (!scene) return;
      const t = reduce ? (mode === "loop" ? 5 : 15.9) : timeRef.current % scene.duration;
      scene.render(t);
    };
    redrawRef.current = draw;

    const build = () => {
      const r = wrap.getBoundingClientRect();
      if (!r.width || !r.height) return;
      scene = createFlightScene(cv, {
        mode,
        width: r.width,
        height: r.height,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
        fonts,
      });
      draw();
    };

    const frame = (now: number) => {
      const dt = last ? (now - last) / 1000 : 0;
      last = now;
      if (!pausedRef.current) timeRef.current += Math.min(dt, 0.1);
      draw();
      raf = requestAnimationFrame(frame);
    };
    const run = () => {
      if (reduce || raf || !visible || document.hidden) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const halt = () => {
      cancelAnimationFrame(raf);
      raf = 0;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, fontKey]);

  const restart = useCallback(() => {
    timeRef.current = 0;
    pausedRef.current = false;
    setPaused(false);
    redrawRef.current();
  }, []);

  const togglePause = useCallback(() => {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
  }, []);

  return { wrapRef, canvasRef, paused, restart, togglePause };
}

/* -------------------------------- component -------------------------------- */

interface AboutBannerProps {
  /** "welcome" = 17s intro with captions. "loop" = seamless 12s background, no text. */
  mode?: SceneMode;
  /** Optional overlay (your own headline and buttons). Works best with mode="loop". */
  children?: React.ReactNode;
  className?: string;
}

function AboutBanner({ mode = "welcome", children, className = "" }: AboutBannerProps) {
  const { wrapRef, canvasRef, paused, restart, togglePause } = useFlightCanvas({ mode });

  const ctrl =
    "grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-[#0a162a]/80 text-sm text-white backdrop-blur " +
    "transition duration-300 hover:scale-110 hover:border-[#f7c948] hover:bg-[#ef7d22] " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7c948] active:scale-95";

  return (
    <section className={`group relative isolate h-[100svh] min-h-[420px] w-full overflow-hidden bg-[#050b16] ${className}`}>
      <div ref={wrapRef} className="absolute inset-0" aria-hidden="true">
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>

      {children && <div className="relative z-10 h-full w-full">{children}</div>}

      {/* Controls: show on hover/focus, always visible on touch devices */}
      <div
        className="absolute bottom-4 right-4 z-20 flex translate-y-2 gap-2 opacity-0 transition duration-300
                   focus-within:translate-y-0 focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100
                   [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100"
      >
        <button type="button" onClick={togglePause} aria-label={paused ? "Play animation" : "Pause animation"} className={ctrl}>
          {paused ? <FaPlay /> : <FaPause />}
        </button>
        <button type="button" onClick={restart} aria-label="Replay animation" className={ctrl}>
          <FaRedo />
        </button>
      </div>
    </section>
  );
}

export default AboutBanner; 