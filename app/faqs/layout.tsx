import type { Metadata } from "next";
import { faqsMetadata } from "@/lib/pageMetadata";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = faqsMetadata;

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What cleaning services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a wide range of cleaning services for homes, including regular maintenance cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and specialized services like carpet cleaning and window washing.",
      },
    },
    {
      "@type": "Question",
      name: "Are your cleaners background-checked and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our cleaners undergo thorough background checks and are fully insured for your peace of mind.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide cleaning supplies and equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, we bring our own high-quality cleaning supplies and equipment to ensure the job is done efficiently and effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `We are Oakland-based and regularly serve Oakland, Piedmont, San Francisco, and nearby East Bay and Bay Area cities. If you're unsure whether we cover your ZIP, call us at ${SITE.phoneDisplay} or request a quote and we'll confirm.`,
      },
    },
  ],
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      {children}
    </>
  );
}
