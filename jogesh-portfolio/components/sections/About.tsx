import { ABOUT, SKILLS, EDUCATION, CREDENTIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading eyebrow="About" title={ABOUT.heading} />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        {/* Bio + skills */}
        <Reveal>
          <div className="frost h-full rounded-3xl p-7 sm:p-9">
            <div className="grid gap-4">
              {ABOUT.body.map((p) => (
                <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-5">
              {SKILLS.map((g) => (
                <div key={g.key}>
                  <div className="mb-2 flex items-center gap-2">
                    <g.icon className="h-4 w-4 text-azure" />
                    <h3 className="font-display text-sm font-semibold text-ink">{g.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[rgb(var(--border)/0.15)] bg-frost/40 px-3 py-1 text-xs text-ink-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Education + credentials */}
        <div className="grid content-start gap-6">
          <Reveal delay={0.06}>
            <div className="frost rounded-3xl p-7">
              <p className="label mb-4">Education</p>
              <div className="grid gap-5">
                {EDUCATION.map((e) => (
                  <div key={e.id}>
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-[15px] font-semibold text-ink">{e.title}</h3>
                      <span className="shrink-0 font-mono text-xs text-ink-faint">{e.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-ink-muted">{e.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="frost rounded-3xl p-7">
              <p className="label mb-4">Certifications & awards</p>
              <div className="grid gap-4">
                {CREDENTIALS.map((c) => (
                  <div key={c.id} className="flex gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[rgb(var(--gold)/0.15)] text-gold">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold leading-snug text-ink">{c.name}</h3>
                      <p className="text-xs text-ink-faint">
                        {c.issuer} · {c.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
