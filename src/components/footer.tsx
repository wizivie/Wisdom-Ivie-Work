import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer aria-label="Site footer" className="border-t border-ink-line bg-ink text-ink-muted">
      <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-4 px-5 py-8 text-xs md:flex-row md:items-center md:px-8">
        <span className="font-serif text-lg text-ink-text">{profile.name}</span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/writing" className="hover:text-ink-text">
            Writing
          </Link>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink-text">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink-text">
            Email
          </a>
          <span>
            © {year} {profile.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
