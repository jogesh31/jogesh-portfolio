import { ArrowUpRight, Github, Check } from "lucide-react";
import { TOOLS, type Tool } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const ACCENT: Record<Tool["accent"], string> = {
  azure: "var(--azure)",
  glacier: "var(--glacier)",
  gold: "var(--gold)",
};

function Links({ tool }: { tool: Tool }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {tool.links.demo && (
        <a
          href={tool.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-azure px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[0.98]"
        >
          Live demo <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      {tool.links.github && (
        <a
          href={tool.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border)/0.18)] bg-frost/50 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:text-glacier"
        >
          <Github className="h-4 w-4" /> Source
        </a>
      )}
    </div>
  );
}

export function Tools() {
  const flagship = TOOLS.find((t) => t.flagship) ?? TOOLS[0];
  const rest = TOOLS.filter((t) => t.id !== flagship.id);

  return (
    <section id="tools" className="scroll-mt-24">
      <SectionHeading eyebrow="Not just dashboards" title="AI-Powered Tools" />

      {/* Flagship */}
      <Reveal>
        <article
          className="frost lift mt-8 overflow-hidden rounded-[28px]"
          style={{ borderColor: `rgb(${ACCENT[flagship.accent]} / 0.25)` }}
        >
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ background: `rgb(${ACCENT[flagship.accent]} / 0.12)`, color: `rgb(${ACCENT[flagship.accent]})` }}
                >
                  <flagship.icon className="h-6 w-6" />
                </span>
                <span
                  className="label rounded-full px-3 py-1"
                  style={{ background: `rgb(${ACCENT[flagship.accent]} / 0.12)`, color: `rgb(${ACCENT[flagship.accent]})` }}
                >
                  Flagship tool
                </span>
              </div>

              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink">
                {flagship.name}
              </h3>
              <p className="mt-2 text-lg font-medium text-glacier">{flagship.tagline}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                {flagship.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {flagship.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[rgb(var(--border)/0.15)] bg-frost/40 px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Links tool={flagship} />
            </div>

            {/* Feature list */}
            <div className="rounded-3xl bg-[rgb(var(--frost)/0.4)] p-6 dark:bg-[rgb(var(--frost)/0.04)]">
              <p className="label mb-4">What it does</p>
              <ul className="grid gap-3">
                {flagship.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Reveal>

      {/* Other tools */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((tool, i) => (
          <Reveal key={tool.id} delay={i * 0.08}>
            <article
              className="frost lift flex h-full flex-col rounded-[26px] p-7"
              style={{ borderColor: `rgb(${ACCENT[tool.accent]} / 0.22)` }}
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-2xl"
                style={{ background: `rgb(${ACCENT[tool.accent]} / 0.12)`, color: `rgb(${ACCENT[tool.accent]})` }}
              >
                <tool.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{tool.name}</h3>
              <p className="mt-1 text-sm font-medium text-glacier">{tool.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{tool.description}</p>

              <ul className="mt-4 grid gap-2">
                {tool.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex gap-2 text-[13px] leading-relaxed text-ink-muted">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {tool.stack.map((s) => (
                  <span key={s} className="rounded-full border border-[rgb(var(--border)/0.15)] px-2.5 py-0.5 font-mono text-[11px] text-ink-faint">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <Links tool={tool} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
