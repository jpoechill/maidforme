import type { Metadata } from "next";
import { hiringMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = hiringMetadata;

export default function HiringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
