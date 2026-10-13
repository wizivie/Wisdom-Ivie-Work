import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-16 bg-ink text-ink-text">
      <div className="mx-auto max-w-page px-5 py-24 md:px-8 md:py-32">
        <p className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
          06 — Contact
        </p>
        <h2 className="text-hero max-w-4xl">{profile.contact.heading}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {profile.contact.body}
        </p>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line md:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between gap-4 bg-ink p-7 transition-colors hover:bg-white/[0.04]"
          >
            <span className="min-w-0">
              <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-muted">
                Email
              </span>
              <span className="mt-2 block break-all font-serif text-2xl lg:text-[1.7rem]">
                {profile.email}
              </span>
            </span>
            <Mail size={20} className="shrink-0 text-ink-muted transition-colors group-hover:text-ink-text" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 bg-ink p-7 transition-colors hover:bg-white/[0.04]"
          >
            <span className="min-w-0">
              <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-muted">
                LinkedIn
              </span>
              <span className="mt-2 block font-serif text-2xl md:text-3xl">
                {profile.linkedinHandle}
              </span>
            </span>
            <ArrowUpRight
              size={20}
              className="shrink-0 text-ink-muted transition-colors group-hover:text-ink-text"
            />
          </a>
          <a
            href={profile.cvPdf}
            download
            className="group flex items-center justify-between gap-4 bg-ink p-7 transition-colors hover:bg-white/[0.04]"
          >
            <span className="min-w-0">
              <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-muted">
                CV
              </span>
              <span className="mt-2 block font-serif text-2xl md:text-3xl">Download PDF</span>
            </span>
            <Download
              size={20}
              className="shrink-0 text-ink-muted transition-colors group-hover:text-ink-text"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
