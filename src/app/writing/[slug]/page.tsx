import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostLayout } from "@/components/post-layout";
import { posts } from "@/data/writing";
import { postBodies } from "@/content/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { type: "article", title: post.title, description: post.description },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const Body = postBodies[slug];
  if (!post || !Body) notFound();
  return (
    <PostLayout post={post}>
      <Body />
    </PostLayout>
  );
}
