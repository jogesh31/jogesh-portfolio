import { NAV_LINKS, SOCIALS, PROFILE, BRAND } from "@/lib/data";

export function Footer() {
  const Mark = BRAND.mark;
  const year = "2026";
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-16">
      <div className="frost rounded-3xl px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-glacier">
              <Mark className="h-5 w-5 text-azure" /> {BRAND.wordmark}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {PROFILE.roles[0]} · {PROFILE.location}. {PROFILE.availability}.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            <div className="grid gap-2">
              <span className="label">Sitemap</span>
              {NAV_LINKS.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="text-sm text-ink-muted hover:text-glacier">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="grid gap-2">
              <span className="label">Elsewhere</span>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-glacier"
                >
                  <s.icon className="h-4 w-4" /> {s.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-[rgb(var(--border)/0.12)] pt-5 text-xs text-ink-faint sm:flex-row">
          <span>© {year} {PROFILE.name}</span>
          <span className="font-mono">Built with Next.js · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
