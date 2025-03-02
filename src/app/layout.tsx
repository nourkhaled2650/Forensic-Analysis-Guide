import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://forensic-analysis.vercel.app/"),
  title: "Forensic Analysis Guide",
  description: "Step-by-step methods for analyzing trace evidence efficiently",
  openGraph: {
    title: "Forensic Analysis Guide",
    description:
      "Step-by-step methods for analyzing trace evidence efficiently",
    url: "https://forensic-analysis.vercel.app/",
    siteName: "Forensic Analysis Guide",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
