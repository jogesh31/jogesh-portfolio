"use client";

import { useEffect, useRef } from "react";

/**
 * Gentle falling snow on a canvas. Drifts sideways, wraps at edges,
 * pauses when off-screen, and honors prefers-reduced-motion (draws one
 * still frame). Colour adapts to the active theme via --ink.
 */
export function SnowField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const context = el.getContext("2d");
    if (!context) return;
    const canvas: HTMLCanvasElement = el;
    const ctx: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDark = () => document.documentElement.classList.contains("dark");

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    type Flake = { x: number; y: number; r: number; sp: number; drift: number; ph: number };
    let flakes: Flake[] = [];

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((w * h) / 14000));
      flakes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.8 + Math.random() * 2.2,
        sp: 0.25 + Math.random() * 0.7,
        drift: 0.3 + Math.random() * 0.7,
        ph: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const dark = isDark();
      ctx.fillStyle = dark ? "rgba(210,225,255,0.85)" : "rgba(255,255,255,0.95)";
      for (const f of flakes) {
        ctx.globalAlpha = dark ? 0.55 : 0.8;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function step() {
      for (const f of flakes) {
        f.ph += 0.01;
        f.y += f.sp;
        f.x += Math.sin(f.ph) * f.drift * 0.5;
        if (f.y - f.r > h) { f.y = -f.r; f.x = Math.random() * w; }
        if (f.x > w + 4) f.x = -4;
        if (f.x < -4) f.x = w + 4;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf);
      if (e.isIntersecting && !reduce) raf = requestAnimationFrame(step);
    }, { threshold: 0 });

    resize();
    draw();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className={className ?? "snow-canvas"} aria-hidden />;
}
