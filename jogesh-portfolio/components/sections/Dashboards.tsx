import { ArrowUpRight } from "lucide-react";
import { WORK } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Dashboards() {
  return (
    <section id="work" className="scroll-mt-24">
      <SectionHeading eyebrow="Selected work" title="Projects" />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {WORK.map((w, i) => (
          <Reveal key={w.id} delay={(i % 3) * 0.06}>
            <a
              href={w.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="frost lift group flex h-full flex-col overflow-hidden rounded-3xl"
            >
              {w.images && w.images.length > 0 && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[rgb(var(--frost)/0.6)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.images[0]}
                    alt={`${w.title} — dashboard preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {w.images.length > 1 && (
                    <span className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-sm">
                      +{w.images.length - 1} more
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[rgb(var(--azure)/0.12)] text-azure">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-faint transition-colors group-hover:text-azure" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{w.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[rgb(var(--border)/0.15)] px-2.5 py-0.5 font-mono text-[11px] text-ink-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
