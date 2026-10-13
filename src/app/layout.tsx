import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const description =
  "Wisdom Ivie — Business Intelligence Developer and AI Engineer (secondment) at First Central. SAS, SQL and Power BI reporting, data governance, and agentic AI grounded in governed data.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description,
    url: "/",
    siteName: profile.name,
    type: "profile",
    images: [{ url: profile.portrait.src, width: 1600, height: 2000, alt: profile.portrait.alt }],
  },
  twitter: { card: "summary", title: `${profile.name} | ${profile.title}`, description },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f2" },
    { media: "(prefers-color-scheme: dark)", color: "#121214" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: ["Business Intelligence Developer", "AI Engineer"],
  address: { "@type": "PostalAddress", addressLocality: "Manchester", addressCountry: "GB" },
  worksFor: { "@type": "Organization", name: "First Central" },
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  image: `${SITE_URL}${profile.portrait.src}`,
  sameAs: [profile.linkedin],
  knowsAbout: ["Business Intelligence", "Power BI", "DAX", "SAS", "SQL", "Credit Risk", "Data Governance", "Agentic AI"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
