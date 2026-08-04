import { METRICS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="mx-auto -mt-6 max-w-5xl px-6">
      <Reveal>
        <div className="frost grid grid-cols-2 gap-4 rounded-3xl px-6 py-7 sm:grid-cols-4 sm:px-10">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-display text-3xl font-bold text-glacier sm:text-4xl">
                {m.value}
              </div>
              <div className="mt-1 text-xs text-ink-muted sm:text-sm">{m.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
