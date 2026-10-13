import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/writing";
import { SectionHeading } from "./section-heading";
import { PostCard } from "./post-card";

export function WritingTeaser() {
  return (
    <section id="writing" aria-label="Writing" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-page px-5 py-24 md:px-8 md:py-32">
        <SectionHeading index="05" eyebrow="Writing" title="Notes on BI craft and agentic AI.">
          Practical essays on modelling, DAX and analytics delivery — and what changes when AI
          agents start using the data we build.
        </SectionHeading>
        <ul className="grid gap-5 md:grid-cols-2">
          {posts.slice(0, 4).map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-end">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-text transition-colors hover:border-text"
          >
            All {posts.length} articles
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
