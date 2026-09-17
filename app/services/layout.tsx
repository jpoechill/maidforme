import type { Metadata } from "next";
import { servicesMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = servicesMetadata;

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
