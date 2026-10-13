import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Credentials } from "@/components/credentials";
import { WritingTeaser } from "@/components/writing-teaser";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation overDark />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Credentials />
        <WritingTeaser />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
