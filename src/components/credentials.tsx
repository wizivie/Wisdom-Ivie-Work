import { certifications, education } from "@/data/credentials";
import { SectionHeading } from "./section-heading";

export function Credentials() {
  return (
    <section id="credentials" aria-label="Education and certifications" className="scroll-mt-16 border-b border-line bg-surface">
      <div className="mx-auto max-w-page px-5 py-24 md:px-8 md:py-32">
        <SectionHeading index="04" eyebrow="Credentials" title="Always learning, on the record." />
        <div className="grid gap-12 md:grid-cols-[10rem_1fr] md:gap-10">
          <div aria-hidden="true" />
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <div className="text-label mb-5">Education</div>
              <ul className="space-y-6">
                {education.map((e) => (
                  <li key={e.institution}>
                    <div className="font-serif text-2xl leading-tight text-text">{e.qualification}</div>
                    <div className="mt-1 text-sm text-text-muted">
                      {e.institution}
                      {e.detail ? ` · ${e.detail}` : ""}
                      {e.period ? ` · ${e.period}` : ""}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-label mb-5">Certifications</div>
              <ul className="border-t border-line">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-3.5"
                  >
                    <div>
                      <div className="text-[0.95rem] text-text">{c.name}</div>
                      <div className="text-xs text-text-muted">{c.issuer}</div>
                    </div>
                    <div className="text-label whitespace-nowrap">{c.issued}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
