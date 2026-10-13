import { ArrowUpRight, FileText } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden bg-ink text-ink-text">
      <div className="mx-auto grid max-w-page items-end gap-12 px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div className="rise">
          <p className="mb-8 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
            {profile.hero.eyebrow}
          </p>
          <h1 className="text-display">
            {profile.hero.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <span className="block italic text-ink-muted">{profile.hero.emphasis}</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {profile.hero.supporting}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink-text px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href="/cv"
              className="inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3 text-sm text-ink-text transition-colors hover:border-ink-text"
            >
              <FileText size={14} />
              View CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-3 text-sm text-ink-muted transition-colors hover:text-ink-text"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <figure className="rise relative mx-auto w-full max-w-sm [animation-delay:150ms] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              className="h-full w-full scale-[1.12] object-cover object-[50%_18%]"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
            <figcaption className="absolute inset-x-5 bottom-5 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/85">
              <span>{profile.name}</span>
              <span>{profile.locationShort}</span>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="border-t border-ink-line">
        <dl className="mx-auto grid max-w-page grid-cols-1 px-5 md:grid-cols-3 md:px-8">
          {profile.now.map((n, i) => (
            <div
              key={n.label}
              className={`py-5 md:py-6 ${i > 0 ? "border-t border-ink-line md:border-l md:border-t-0 md:pl-8" : ""}`}
            >
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-muted">
                {n.label}
              </dt>
              <dd className="mt-1 text-sm text-ink-text md:text-base">{n.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
