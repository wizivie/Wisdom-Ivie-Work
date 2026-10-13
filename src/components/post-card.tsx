import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Post, formatDate } from "@/data/writing";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.35)]"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full bg-surface-raised px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-text">
          {post.category}
        </span>
        <ArrowUpRight
          size={16}
          className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <h3 className="font-serif text-[1.65rem] leading-[1.15] text-text">{post.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">{post.description}</p>
      <div className="text-label mt-8">
        {formatDate(post.date)} · {post.readingTime}
      </div>
    </Link>
  );
}
