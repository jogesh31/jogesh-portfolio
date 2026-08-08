import { Download } from "lucide-react";
import { PROFILE, CONTACT_METHODS, METRICS, EDUCATION, CREDENTIALS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto">
      <Reveal>
        <div className="frost rounded-3xl p-6">
          {/* Photo — passport-style, GitHub-avatar framing */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/headshot.jpg"
            alt={PROFILE.name}
            className="aspect-square w-full max-w-[200px] rounded-2xl border border-[rgb(var(--border)/0.15)] object-cover shadow-[0_10px_30px_-16px_rgb(30_74_165/0.5)]"
          />

          <h1 className="mt-5 font-display text-xl font-bold text-ink">{PROFILE.name}</h1>
          <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{PROFILE.headline}</p>
          <p className="mt-3 font-mono text-xs text-ink-faint">
            {PROFILE.location} · {PROFILE.availability}
          </p>

          {PROFILE.resumeUrl && (
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-azure px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[0.98]"
            >
              <Download className="h-4 w-4" /> Résumé
            </a>
          )}

          {/* Contact */}
          <div className="mt-6 grid gap-2.5 border-t border-[rgb(var(--border)/0.12)] pt-5">
            {CONTACT_METHODS.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-glacier"
              >
                <m.icon className="h-4 w-4 shrink-0 text-azure" />
                <span className="truncate">{m.value}</span>
              </a>
            ))}
          </div>

          {/* Mini stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[rgb(var(--border)/0.12)] pt-5">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="font-display text-lg font-bold text-glacier">{m.value}</div>
                <div className="text-[11px] leading-tight text-ink-faint">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-6 border-t border-[rgb(var(--border)/0.12)] pt-5">
            <p className="label mb-3">Education</p>
            <div className="grid gap-3">
              {EDUCATION.map((e) => (
                <div key={e.id}>
                  <h3 className="text-[13px] font-semibold leading-snug text-ink">{e.title}</h3>
                  <p className="text-xs text-ink-faint">{e.org}</p>
                  <p className="font-mono text-[11px] text-ink-faint">{e.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & awards */}
          <div className="mt-6 border-t border-[rgb(var(--border)/0.12)] pt-5">
            <p className="label mb-3">Certifications & awards</p>
            <div className="grid gap-3">
              {CREDENTIALS.map((c) => (
                <div key={c.id} className="flex gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[rgb(var(--gold)/0.15)] text-gold">
                    <c.icon className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h3 className="text-[13px] font-semibold leading-snug text-ink">{c.name}</h3>
                    <p className="text-[11px] text-ink-faint">
                      {c.issuer} · {c.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </aside>
  );
}
