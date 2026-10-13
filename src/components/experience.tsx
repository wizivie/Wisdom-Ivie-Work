import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience, siteBullets } from "@/data/experience";
import { profile } from "@/data/profile";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="scroll-mt-16 border-b border-line bg-surface">
      <div className="mx-auto max-w-page px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="A decade of turning operational data into decisions."
        />

        <dl className="mb-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {profile.highlights.map((h) => (
            <div key={h.label} className="bg-surface p-6 md:p-7">
              <dt className="sr-only">{h.label}</dt>
              <dd>
                <span className="block font-serif text-5xl leading-none text-text md:text-6xl">
                  {h.value}
                </span>
                <span className="mt-3 block text-sm leading-snug text-text-muted">{h.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <ol className="space-y-16">
          {experience.map((e) => (
            <li key={e.company} className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-10">
              <div className="md:pt-1">
                <div className="text-label">{e.period}</div>
                <div className="mt-2 text-xs text-text-muted">{e.location}</div>
              </div>
              <div>
                <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-serif text-4xl leading-tight text-text">{e.company}</h3>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-accent">
                    {e.sector}
                  </span>
                </div>
                <ol className="mt-6 border-l border-line">
                  {e.roles.map((r) => (
                    <li key={r.title} className="relative pb-8 pl-7 last:pb-0">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[4.5px] top-2 h-2 w-2 rounded-full border border-accent bg-surface"
                      />
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h4 className="text-lg font-medium text-text">{r.title}</h4>
                        {r.tag ? (
                          <span className="rounded-full border border-line bg-surface-raised px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-text">
                            {r.tag}
                          </span>
                        ) : null}
                      </div>
                      <div className="text-label mt-1">
                        {r.period}
                        {r.location ? ` · ${r.location}` : ""}
                      </div>
                      <ul className="mt-3 max-w-3xl space-y-2 text-[0.95rem] leading-relaxed text-text-muted">
                        {r.bullets.slice(0, siteBullets).map((b) => (
                          <li key={b} className="grid grid-cols-[1.25rem_1fr]">
                            <span aria-hidden="true" className="mt-[0.8em] h-px w-2.5 bg-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex justify-end">
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-text transition-colors hover:border-text"
          >
            Full detail in the CV
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
