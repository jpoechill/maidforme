import type { Metadata } from "next";
import { ROUTES, absoluteUrl } from "@/lib/seo";

function pageMeta(path: string): Metadata {
  const route = ROUTES.find((r) => r.path === path);
  if (!route) return {};

  return {
    title: route.title.includes("|")
      ? { absolute: route.title }
      : route.title,
    description: route.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url: absoluteUrl(path),
      type: "website",
    },
  };
}

export const servicesMetadata = pageMeta("/services");
export const quoteMetadata = pageMeta("/quote");
export const ratesMetadata = pageMeta("/rates");
export const faqsMetadata = pageMeta("/faqs");
export const testimonialsMetadata = pageMeta("/testimonials");
export const galleryMetadata = pageMeta("/gallery");
export const hiringMetadata = pageMeta("/hiring");
