import type { Metadata } from "next";
import { ratesMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = ratesMetadata;

export default function RatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
