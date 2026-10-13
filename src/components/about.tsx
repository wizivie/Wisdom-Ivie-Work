import { profile } from "@/data/profile";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" aria-label="About" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-page px-5 py-24 md:px-8 md:py-32">
        <SectionHeading index="01" eyebrow="About" title={profile.about.heading} />
        <div className="grid gap-12 md:grid-cols-[10rem_1fr] md:gap-10">
          <div aria-hidden="true" />
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="space-y-6 text-lg leading-relaxed text-text-muted">
              {profile.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="rounded-2xl border border-line bg-surface p-7">
              <div className="text-label mb-5">Principles</div>
              <ol className="space-y-4">
                {profile.about.principles.map((t, i) => (
                  <li key={t} className="grid grid-cols-[2rem_1fr] gap-2 text-sm text-text">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
