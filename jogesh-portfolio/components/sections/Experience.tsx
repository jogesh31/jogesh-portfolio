import { EXPERIENCE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading eyebrow="Career" title="Experience" />

      <div className="relative mt-8">
        {/* vertical rail */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgb(var(--border)/0.2)] sm:left-[9px]" />

        <div className="grid gap-8">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.05}>
              <div className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border border-azure bg-snow">
                  <span className="h-2 w-2 rounded-full bg-azure" />
                </span>

                <div className="frost rounded-3xl p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {job.role} <span className="text-glacier">· {job.org}</span>
                    </h3>
                    <span className="font-mono text-xs text-ink-faint">{job.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-ink-faint">{job.location}</p>

                  <ul className="mt-4 grid gap-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[rgb(var(--azure)/0.10)] px-2.5 py-0.5 font-mono text-[11px] text-glacier"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
