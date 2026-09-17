import type { Metadata } from "next";
import { quoteMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = quoteMetadata;

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
