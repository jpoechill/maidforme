import type { Metadata } from "next";
import { testimonialsMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = testimonialsMetadata;

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
