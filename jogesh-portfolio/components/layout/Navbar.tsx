"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND, PROFILE } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const Mark = BRAND.mark;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between gap-2 rounded-full px-3 py-2 transition-[background-color,box-shadow] duration-500",
          scrolled ? "frost-strong shadow-[0_10px_30px_-18px_rgb(30_74_165/0.5)]" : "frost"
        )}
      >
        <a href="#home" className="flex items-center gap-2 pl-2 font-display text-lg font-semibold text-glacier">
          <Mark className="h-5 w-5 text-azure" />
          {BRAND.wordmark}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-muted transition-colors hover:bg-[rgb(var(--azure)/0.10)] hover:text-glacier"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-azure px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[0.97] sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[rgb(var(--border)/0.15)] text-ink-muted md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="frost-strong mx-auto mt-2 max-w-5xl rounded-3xl p-3 md:hidden">
          <ul className="grid gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-ink-muted hover:bg-[rgb(var(--azure)/0.10)] hover:text-glacier"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${PROFILE.email}`}
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-2xl bg-azure px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
