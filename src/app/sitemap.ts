import type { MetadataRoute } from "next";
import { posts } from "@/data/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/cv`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/writing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...posts.map((p) => ({
      url: `${base}/writing/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
