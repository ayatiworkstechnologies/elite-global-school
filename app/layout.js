import { Teachers, Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =========================
   METADATA
========================= */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://eliteglobalschools.com"; // Replace with actual production URL if different

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Islamic schools in Chennai, Elite Global School | Enlighten Knowledge",
    template: "%s | Elite Global School",
  },
  description:
    "A place where every learner is meant to be a star. Elite Global School in Chennai.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Elite Global School",
    description: "A place where every learner is meant to be a star",
    url: siteUrl,
    siteName: "Elite Global School",
    images: [
      {
        url: "/logo.png", // Assuming a logo or default og-image exists
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Global School",
    description: "A place where every learner is meant to be a star",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          "antialiased",
          "bg-[color:var(--color-background)]",
          "text-[color:var(--color-foreground)]",
        ].join(" ")}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
