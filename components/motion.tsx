"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}

function leafWidthAt(t: number) {
  return Math.pow(Math.sin(Math.PI * t), 0.72) * (0.78 + 0.28 * t);
}

function createSerratedLeafPath(length: number, width: number, teeth: number) {
  const left: { x: number; y: number }[] = [{ x: 0, y: 0 }];

  for (let index = 0; index < teeth; index += 1) {
    const tipPosition = (index + 0.42) / teeth;
    const notchPosition = (index + 0.86) / teeth;
    left.push({
      x: -width * leafWidthAt(tipPosition),
      y: -length * tipPosition,
    });
    left.push({
      x: -width * 0.7 * leafWidthAt(notchPosition),
      y: -length * notchPosition,
    });
  }

  left.push({ x: 0, y: -length });
  const right = left
    .slice(1, -1)
    .reverse()
    .map(({ x, y }) => ({ x: -x, y }));
  const points = [...left, ...right];
  return `${points
    .map(({ x, y }, index) => `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ")} Z`;
}

const leaflets = [
  { rotation: -57, length: 103, width: 18, teeth: 8, reveal: 2.75, tone: "url(#leafSide)" },
  { rotation: -28, length: 148, width: 23, teeth: 11, reveal: 2.55, tone: "url(#leafMid)" },
  { rotation: 0, length: 181, width: 27, teeth: 13, reveal: 2.35, tone: "url(#leafMain)" },
  { rotation: 28, length: 148, width: 23, teeth: 11, reveal: 2.55, tone: "url(#leafMid)" },
  { rotation: 57, length: 103, width: 18, teeth: 8, reveal: 2.75, tone: "url(#leafSide)" },
];

export function AnimatedPlant() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[3rem] border border-forest/5 bg-gradient-to-br from-sage/25 via-sand/60 to-amber/20 shadow-soft">
      <div className="absolute -right-12 -top-12 size-56 rounded-full bg-cream/50 blur-2xl" />
      <div className="absolute inset-x-12 bottom-8 h-16 rounded-[50%] bg-earth/15 blur-xl" />

      <svg
        className="relative size-full"
        viewBox="0 0 400 400"
        role="img"
        aria-labelledby="plant-animation-title plant-animation-description"
      >
        <title id="plant-animation-title">Vom Samen zum fünfblättrigen Cannabisblatt</title>
        <desc id="plant-animation-description">
          Ein Samen öffnet sich, ein Trieb wächst und entfaltet fünf grüne Blattfinger.
        </desc>
        <defs>
          <linearGradient id="seedShell" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9a7253" />
            <stop offset="1" stopColor="#4d392d" />
          </linearGradient>
          <linearGradient id="leafMain" x1="0" y1="1" x2="0.65" y2="0">
            <stop offset="0" stopColor="#285244" />
            <stop offset="1" stopColor="#6f956f" />
          </linearGradient>
          <linearGradient id="leafMid" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#345c49" />
            <stop offset="1" stopColor="#86a983" />
          </linearGradient>
          <linearGradient id="leafSide" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#426b52" />
            <stop offset="1" stopColor="#9ab596" />
          </linearGradient>
          <filter id="leafShadow" x="-40%" y="-30%" width="180%" height="180%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#173f35" floodOpacity="0.18" />
          </filter>
        </defs>

        <motion.ellipse
          cx="200"
          cy="323"
          rx="65"
          ry="13"
          fill="#6e5140"
          animate={reduced ? { opacity: 0.16 } : { opacity: [0.16, 0.22, 0.12] }}
          transition={{ duration: 3.2, times: [0, 0.5, 1] }}
        />

        <motion.g
          style={{ transformOrigin: "200px 284px" }}
          animate={
            reduced
              ? { opacity: 0, scale: 0.85 }
              : {
                  opacity: [1, 1, 1, 0],
                  scale: [1, 1.04, 1.08, 0.86],
                  y: [0, -2, -7, -12],
                }
          }
          transition={{ duration: 2.9, times: [0, 0.4, 0.72, 1] }}
        >
          <motion.path
            d="M200 306 C178 326 148 310 151 282 C154 256 177 239 200 248 Z"
            fill="url(#seedShell)"
            animate={reduced ? {} : { x: [0, 0, -10, -16], rotate: [0, 0, -7, -13] }}
            transition={{ duration: 2.75, times: [0, 0.46, 0.75, 1] }}
          />
          <motion.path
            d="M200 306 C222 326 252 310 249 282 C246 256 223 239 200 248 Z"
            fill="url(#seedShell)"
            animate={reduced ? {} : { x: [0, 0, 10, 16], rotate: [0, 0, 7, 13] }}
            transition={{ duration: 2.75, times: [0, 0.46, 0.75, 1] }}
          />
          <motion.path
            d="M200 250 L194 267 L202 276 L195 292 L202 304"
            fill="none"
            stroke="#d8bd8c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
            animate={reduced ? { pathLength: 1 } : { pathLength: [0, 0, 1, 1] }}
            transition={{ duration: 2.1, times: [0, 0.34, 0.76, 1] }}
          />
          <ellipse cx="181" cy="270" rx="8" ry="18" fill="#b99770" opacity="0.35" transform="rotate(38 181 270)" />
        </motion.g>

        <motion.path
          d="M200 296 C196 278 203 258 200 242"
          fill="none"
          stroke="#426b52"
          strokeLinecap="round"
          strokeWidth="8"
          initial={reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={
            reduced
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: [0, 0, 1], opacity: [0, 0, 1] }
          }
          transition={{ duration: 3.15, times: [0, 0.56, 1] }}
        />

        <g filter="url(#leafShadow)">
          {leaflets.map((leaf, index) => (
            <g key={leaf.rotation} transform={`translate(200 246) rotate(${leaf.rotation})`}>
              <motion.g
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: reduced ? 0 : leaf.reveal,
                  duration: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <path
                  d={createSerratedLeafPath(leaf.length, leaf.width, leaf.teeth)}
                  fill={leaf.tone}
                  stroke="#315846"
                  strokeLinejoin="round"
                  strokeWidth="0.8"
                />
                <motion.path
                  d={`M0 -2 C0 ${(-leaf.length * 0.34).toFixed(1)} 0 ${(-leaf.length * 0.7).toFixed(1)} 0 ${(-leaf.length + 8).toFixed(1)}`}
                  fill="none"
                  stroke="#d7e3cb"
                  strokeLinecap="round"
                  strokeWidth={index === 2 ? 1.65 : 1.3}
                  opacity="0.62"
                  initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: reduced ? 0 : leaf.reveal + 0.24, duration: 0.65 }}
                />
                {[0.3, 0.48, 0.66, 0.82].map((position) => {
                  const veinWidth = leaf.width * leafWidthAt(position) * 0.78;
                  const veinY = -leaf.length * position;
                  return (
                    <g key={position} stroke="#d7e3cb" strokeLinecap="round" strokeWidth="0.85" opacity="0.4">
                      <path d={`M0 ${veinY.toFixed(1)} L${(-veinWidth).toFixed(1)} ${(-leaf.length * (position + 0.055)).toFixed(1)}`} />
                      <path d={`M0 ${veinY.toFixed(1)} L${veinWidth.toFixed(1)} ${(-leaf.length * (position + 0.055)).toFixed(1)}`} />
                    </g>
                  );
                })}
              </motion.g>
            </g>
          ))}
        </g>
      </svg>

      <div className="absolute right-5 top-5 rounded-full border border-white/40 bg-cream/80 px-3 py-2 text-xs font-bold shadow-sm backdrop-blur">
        Samen · Keimung · Blatt
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-forest/90 px-4 py-2 text-[11px] font-bold tracking-wide text-cream">
        Wachstum braucht Zeit
      </div>
    </div>
  );
}
