import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: DEFAULT_TITLE,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: absoluteUrl("/"),
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
