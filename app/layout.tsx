import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE,
  absoluteUrl,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Maid For Me",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "home cleaning",
  keywords: [
    "Maid For Me",
    "home cleaning Oakland",
    "house cleaning Bay Area",
    "deep cleaning Oakland",
    "move out cleaning Oakland",
    "Piedmont house cleaning",
    "San Francisco Bay Area cleaners",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: absoluteUrl("/cover_03.jpg"),
        width: 1200,
        height: 630,
        alt: "Maid For Me — professional home cleaning in Oakland and the Bay Area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl("/cover_03.jpg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    url: SITE.url,
    image: absoluteUrl("/maidforme.png"),
    logo: absoluteUrl("/maidforme.png"),
    telephone: SITE.phoneE164,
    email: SITE.email,
    description: DEFAULT_DESCRIPTION,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oakland",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Oakland" },
      { "@type": "City", name: "Piedmont" },
      { "@type": "City", name: "San Francisco" },
      { "@type": "AdministrativeArea", name: "San Francisco Bay Area" },
    ],
    sameAs: [SITE.facebook, SITE.instagram],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maintenance Clean",
          description:
            "For homes that have already had a thorough cleaning and need consistent upkeep.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Signature Clean",
          description:
            "A more thorough reset for homes that need additional attention.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Clean",
          description:
            "Detailed, top-to-bottom cleaning for buildup, overdue areas, and first-time clients.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Move-In / Move-Out Cleaning",
          description: "An empty-home reset designed for moving day.",
        },
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneE164,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
