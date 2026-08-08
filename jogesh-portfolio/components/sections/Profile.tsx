import { SUMMARY, SKILLS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Profile() {
  return (
    <Reveal>
      <div className="frost rounded-3xl p-6 sm:p-8">
        <p className="text-[15px] leading-relaxed text-ink-muted">{SUMMARY}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
                    className="rounded-full border border-[rgb(var(--border)/0.15)] bg-frost/40 px-2.5 py-1 text-xs text-ink-muted"
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
  );
}
