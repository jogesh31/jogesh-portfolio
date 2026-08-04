import { ArrowUpRight } from "lucide-react";
import { WORK } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Dashboards() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Selected dashboards"
        title="Analytics that drove decisions"
        description="Government, enterprise and public-data projects — from 20M-record education programs to retail and operations. Each links to its GitHub repo."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WORK.map((w, i) => (
          <Reveal key={w.id} delay={(i % 3) * 0.06}>
            <a
              href={w.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="frost lift group flex h-full flex-col rounded-3xl p-6"
            >
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
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
