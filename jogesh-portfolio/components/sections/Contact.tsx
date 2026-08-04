import { ArrowUpRight } from "lucide-react";
import { CONTACT, CONTACT_METHODS, PROFILE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <div className="frost-strong relative overflow-hidden rounded-[32px] px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[rgb(var(--azure)/0.16)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[rgb(var(--gold)/0.16)] blur-3xl" />

          <p className="label mb-3">Contact</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-glacier sm:text-4xl">
            {CONTACT.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            {CONTACT.blurb}
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-azure px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-[0.98]"
          >
            Email me <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {CONTACT_METHODS.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="frost lift flex items-center gap-3 rounded-2xl px-4 py-3 text-left"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[rgb(var(--azure)/0.12)] text-azure">
                  <m.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="label !text-[10px]">{m.label}</span>
                  <span className="block truncate text-sm font-medium text-ink">{m.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
