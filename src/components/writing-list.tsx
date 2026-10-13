"use client";
import { useState } from "react";
import { type Category, categories, posts } from "@/data/writing";
import { PostCard } from "./post-card";

type Filter = "All" | Category;

export function WritingList() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? posts : posts.filter((p) => p.category === filter);
  const options: Filter[] = ["All", ...categories];

  return (
    <div className="mt-14">
      <div role="group" aria-label="Filter by topic" className="mb-8 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = o === filter;
          const count = o === "All" ? posts.length : posts.filter((p) => p.category === o).length;
          return (
            <button
              key={o}
              aria-pressed={active}
              onClick={() => setFilter(o)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active
                  ? "border-text bg-text text-bg"
                  : "border-line text-text-muted hover:border-text hover:text-text"
              }`}
            >
              {o}
              <span className={`ml-2 font-mono text-[0.7rem] ${active ? "opacity-70" : "text-accent"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <PostCard post={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
