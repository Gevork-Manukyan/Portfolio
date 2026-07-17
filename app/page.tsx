import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

// Structured data — the strongest signal for the "site name" Google shows in
// search results (WebSite.name) and to describe the person the site is about.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: profile.name,
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      jobTitle: profile.title,
      description: profile.tagline,
      image: `${siteUrl}/headshot.jpg`,
      sameAs: [
        profile.socials.github,
        profile.socials.linkedin,
        profile.socials.devto,
        profile.socials.codepen,
        profile.socials.handshake,
      ].filter(Boolean),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
