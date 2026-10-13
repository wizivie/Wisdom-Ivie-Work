import type { Metadata } from "next";
import { Download, Mail, MapPin, Linkedin } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/footer";
import { PrintButton } from "@/components/print-button";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { certifications, education } from "@/data/credentials";
import { cvSkills, keyAchievements } from "@/data/cv";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV for Wisdom Ivie — Business Intelligence Developer and AI Engineer (secondment) at First Central.",
};

// Groups certifications by issuer so the list stays compact on the printed CV.
function certGroups() {
  const groups = new Map<string, typeof certifications>();
  for (const c of certifications) {
    const issuer = c.issuer.split(" · ")[0];
    const key = issuer === "Microsoft" || issuer === "LinkedIn Learning" ? issuer : "Other";
    groups.set(key, [...(groups.get(key) ?? []), c]);
  }
  return [...groups.entries()];
}

function CvHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-text">
      {children}
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </h2>
  );
}

export default function CvPage() {
  return (
    <>
      <div className="print:hidden">
        <Navigation />
      </div>
      <main id="main" className="bg-surface-raised/60 pb-20 pt-24 print:bg-white print:p-0">
        <div className="mx-auto mb-8 flex max-w-[210mm] flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center print:hidden">
          <div>
            <p className="text-eyebrow">Curriculum vitae</p>
            <p className="mt-1 text-sm text-text-muted">Two pages · A4 · Updated October 2026</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={profile.cvPdf}
              download
              className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              <Download size={14} /> Download PDF
            </a>
            <PrintButton />
          </div>
        </div>

        <article className="cv-sheet mx-auto max-w-[210mm] bg-white px-6 py-10 text-[#19191c] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:px-[16mm] sm:py-[14mm] print:max-w-none print:p-0 print:shadow-none">
          {/* Header */}
          <header className="grid gap-6 border-b border-[#19191c]/15 pb-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <h1 className="font-serif text-[2.9rem] leading-none tracking-[-0.01em]">{profile.name}</h1>
              <p className="mt-2 text-[0.95rem] font-medium text-[#3d3d44]">
                Business Intelligence Developer <span className="text-[#74747c]">·</span> AI Engineer (Secondment)
              </p>
            </div>
            <ul className="space-y-1 text-[0.78rem] text-[#3d3d44] sm:text-right">
              <li className="flex items-center gap-2 sm:justify-end">
                <MapPin size={12} className="text-[#74747c]" /> {profile.location} · Remote
              </li>
              <li className="flex items-center gap-2 sm:justify-end">
                <Mail size={12} className="text-[#74747c]" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li className="flex items-center gap-2 sm:justify-end">
                <Linkedin size={12} className="text-[#74747c]" />
                <a href={profile.linkedin}>linkedin.com/in/wisdom-ivie-10288577</a>
              </li>
            </ul>
          </header>

          {/* Profile */}
          <section className="mt-5">
            <CvHeading>Profile</CvHeading>
            <p className="text-[0.82rem] leading-[1.55] text-[#3d3d44]">{profile.summary}</p>
          </section>

          {/* Achievements + skills */}
          <div className="mt-5 grid gap-6 sm:grid-cols-[1.1fr_1fr] sm:gap-8">
            <section>
              <CvHeading>Key achievements</CvHeading>
              <ul className="space-y-1 text-[0.78rem] leading-[1.45] text-[#3d3d44]">
                {keyAchievements.map((a) => (
                  <li key={a} className="grid grid-cols-[0.9rem_1fr]">
                    <span aria-hidden="true" className="mt-[0.62em] h-[5px] w-[5px] bg-[#74747c]" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <CvHeading>Education</CvHeading>
                <ul className="space-y-1.5 text-[0.78rem] leading-[1.4]">
                  {education.map((e) => (
                    <li key={e.institution}>
                      <span className="font-semibold">
                        {e.qualification}
                        {e.detail ? `, ${e.detail}` : ""}
                      </span>
                      <span className="text-[#3d3d44]">
                        {" "}— {e.institution}
                        {e.period ? `, ${e.period}` : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section>
              <CvHeading>Core skills</CvHeading>
              <dl className="space-y-1.5 text-[0.78rem] leading-[1.45]">
                {cvSkills.map((s) => (
                  <div key={s.name}>
                    <dt className="inline font-semibold text-[#19191c]">{s.name}: </dt>
                    <dd className="inline text-[#3d3d44]">{s.items}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          {/* Experience */}
          <section className="mt-6">
            <CvHeading>Experience</CvHeading>
            <div className="space-y-3.5">
              {experience.map((e) => (
                <div key={e.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-[#19191c]/10 pb-1">
                    <h3 className="font-serif text-[1.45rem] leading-tight">
                      {e.company}{" "}
                      <span className="font-sans text-[0.72rem] text-[#74747c]">· {e.sector}</span>
                    </h3>
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-[#5c5c64]">
                      {e.period} · {e.location}
                    </span>
                  </div>
                  <div className="mt-2 space-y-2.5">
                    {e.roles.map((r) => (
                      <div key={r.title}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                          <h4 className="break-after-avoid text-[0.9rem] font-semibold">
                            {r.title}
                            {r.tag ? (
                              <span className="ml-2 rounded-full border border-[#19191c]/20 px-2 py-px align-middle font-mono text-[0.58rem] font-normal uppercase tracking-[0.1em] text-[#3d3d44]">
                                {r.tag}
                              </span>
                            ) : null}
                          </h4>
                          <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-[#5c5c64]">
                            {r.period}
                          </span>
                        </div>
                        <ul className="mt-1 space-y-0.5 text-[0.735rem] leading-[1.4] text-[#3d3d44]">
                          {r.bullets.map((b) => (
                            <li key={b} className="grid break-inside-avoid grid-cols-[0.9rem_1fr]">
                              <span aria-hidden="true" className="mt-[0.72em] h-px w-[7px] bg-[#74747c]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mt-4 break-inside-avoid">
            <CvHeading>Certifications</CvHeading>
            <dl className="space-y-0.5 text-[0.72rem] leading-[1.42]">
              {certGroups().map(([issuer, certs]) => (
                <div key={issuer} className="grid gap-x-4 sm:grid-cols-[6.25rem_1fr]">
                  <dt className="font-semibold text-[#19191c]">{issuer}</dt>
                  <dd className="text-[#3d3d44]">
                    {certs.map((c, i) => (
                      <span key={c.name}>
                        {c.name}
                        <span className="text-[#74747c]">
                          {issuer === "Other" ? `, ${c.issuer} (${c.issued})` : ` (${c.issued})`}
                        </span>
                        {i < certs.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </article>
      </main>
      <div className="print:hidden">
        <SiteFooter />
      </div>
    </>
  );
}
