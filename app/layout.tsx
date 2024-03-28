import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maid For Me | Professional Cleaning Services | SF Bay Area",
  description: "Maid For Me cleaning services are designed to meet the highest standards of hygiene and cleanliness. We understand that every space has unique cleaning needs, and we tailor our services to meet those needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
