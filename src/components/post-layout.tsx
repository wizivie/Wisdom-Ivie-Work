import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/footer";
import { type Post, formatDate, posts } from "@/data/writing";
import { profile } from "@/data/profile";

export function PostLayout({ post, children }: { post: Post; children: React.ReactNode }) {
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <Navigation />
      <main id="main">
        <article className="border-b border-line">
          <header className="border-b border-line">
            <div className="mx-auto max-w-4xl px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-40">
              <Link
                href="/writing"
                className="mb-10 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
              >
                <ArrowLeft size={14} />
                All writing
              </Link>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-surface-raised px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-text">
                  {post.category}
                </span>
                <span className="text-label">
                  {formatDate(post.date)} · {post.readingTime} read
                </span>
              </div>
              <h1 className="text-hero text-text">{post.title}</h1>
              <div className="mt-10 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.portrait.src}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover object-[50%_20%]"
                />
                <div className="leading-tight">
                  <div className="text-sm text-text">{profile.name}</div>
                  <div className="text-xs text-text-muted">{profile.title}</div>
                </div>
              </div>
            </div>
          </header>
          <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
            <div className="prose-post">{children}</div>
          </div>
        </article>

        {related.length > 0 ? (
          <aside aria-label="More writing" className="border-b border-line bg-surface">
            <div className="mx-auto max-w-4xl px-5 py-16 md:px-8">
              <div className="text-label mb-6">More on {post.category}</div>
              <ul className="border-t border-line">
                {related.map((p) => (
                  <li key={p.slug} className="border-b border-line">
                    <Link href={`/writing/${p.slug}`} className="group flex items-center justify-between gap-6 py-6">
                      <span className="font-serif text-2xl leading-tight text-text">{p.title}</span>
                      <ArrowRight
                        size={18}
                        className="shrink-0 text-accent transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
