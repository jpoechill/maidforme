import type { Metadata } from "next";
import { galleryMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = galleryMetadata;

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
