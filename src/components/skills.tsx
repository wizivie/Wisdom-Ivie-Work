import { skills } from "@/data/skills";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-page px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="A toolkit for dependable data and practical AI."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.name} className="bg-bg p-7 transition-colors hover:bg-surface">
              <h3 className="mb-5 font-serif text-2xl text-text">{g.name}</h3>
              <ul className="space-y-2.5">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-muted">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
