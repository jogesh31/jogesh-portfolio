"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { HERO, PROFILE } from "@/lib/data";
import { SnowField } from "@/components/ui/SnowField";
import { easeOutExpo } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-16"
    >
      {/* Misty winter wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_-10%,rgb(var(--frost)/0.9),transparent_60%)] dark:bg-[radial-gradient(90%_60%_at_50%_-10%,rgb(var(--frost)/0.06),transparent_60%)]" />
        <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-[rgb(var(--azure)/0.16)] blur-3xl" />
        <div className="absolute -right-16 top-16 h-72 w-72 rounded-full bg-[rgb(var(--gold)/0.18)] blur-3xl" />
      </div>

      <SnowField />

      {/* Foot ridge — snowy hills with a couple of golden birches */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[38%] w-full"
        viewBox="0 0 1440 300"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden
      >
        <path d="M0 210 Q 360 150 720 200 T 1440 190 V300 H0 Z" fill="rgb(var(--frost)/0.5)" />
        <path d="M0 250 Q 300 210 640 245 T 1440 240 V300 H0 Z" fill="rgb(var(--frost)/0.7)" />
        {/* golden birch cluster */}
        <g stroke="rgb(var(--gold))" strokeWidth="3" opacity="0.7" strokeLinecap="round">
          <line x1="250" y1="245" x2="250" y2="188" />
          <line x1="268" y1="248" x2="268" y2="200" />
          <line x1="234" y1="250" x2="234" y2="205" />
        </g>
        {/* distant blue firs */}
        <g fill="rgb(var(--glacier)/0.28)">
          <path d="M1120 250 l16 -46 16 46 z" />
          <path d="M1160 252 l12 -34 12 34 z" />
          <path d="M300 258 l10 -26 10 26 z" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="label mb-5 rounded-full border border-[rgb(var(--border)/0.15)] bg-frost/50 px-4 py-1.5"
        >
          {HERO.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOutExpo, delay: 0.05 }}
          className="font-display text-[clamp(2.6rem,7vw,4.75rem)] font-bold leading-[1.03] tracking-tight text-glacier"
        >
          {HERO.titleTop}
          <br />
          <span className="ink-gradient">{HERO.titleBottom}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.15 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {HERO.subtitle}
        </motion.p>

        {/* Filter bar — the Glacia booking bar, reimagined */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.25 }}
          className="frost-strong mt-9 flex w-full flex-col gap-2 rounded-[26px] p-2 sm:flex-row sm:items-stretch sm:rounded-full"
        >
          {HERO.filters.map((f) => (
            <div
              key={f.label}
              className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-2.5 text-left sm:rounded-full"
            >
              <f.icon className="h-5 w-5 shrink-0 text-azure" />
              <div className="min-w-0">
                <div className="label !text-[10px] !tracking-[0.14em]">{f.label}</div>
                <div className="truncate text-sm font-semibold text-ink">{f.value}</div>
              </div>
            </div>
          ))}
          <a
            href={HERO.cta.href}
            className="flex items-center justify-center gap-2 rounded-2xl bg-azure px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[0.98] sm:rounded-full"
          >
            <Search className="h-4 w-4" />
            <span className="sm:hidden">{HERO.cta.label}</span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5 font-mono text-xs text-ink-faint"
        >
          {PROFILE.location} · {PROFILE.availability}
        </motion.p>
      </div>
    </section>
  );
}
