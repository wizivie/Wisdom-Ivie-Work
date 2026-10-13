import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/footer";
import { WritingList } from "@/components/writing-list";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays by Wisdom Ivie on BI development best practices and agentic AI.",
};

export default function WritingIndex() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section className="border-b border-line">
          <div className="mx-auto max-w-page px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
            <p className="text-eyebrow mb-6">Writing</p>
            <h1 className="text-display max-w-4xl text-text">
              Notes on BI craft <span className="italic text-accent">&amp;</span> agentic AI.
            </h1>
            <p className="text-body mt-8 text-lg">
              Practical essays from the day job: data modelling, DAX, shipping analytics like
              software — and what it takes to put AI agents on top of governed business data.
            </p>
            <WritingList />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
