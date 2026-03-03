import { Teachers, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SitePopup from "@/components/ui/SitePopup";

/* =========================
   METADATA
========================= */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://eliteglobalschools.com"; // Replace with actual production URL if different

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Elite Global School – Top CBSE School in Chennai | Academics, Sports & Character Building",
    template: "%s | Elite Global School",
  },
  description:
    "Elite Global School is a leading CBSE School in Chennai offering academic excellence, structured CBSE curriculum, advanced learning methods, sports training, and strong character building. We focus on holistic development to shape confident, disciplined, and future-ready students.",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PS63W3XC');`}
        </Script>
      </head>
      <body
        className={[
          "antialiased",
          "bg-[color:var(--color-background)]",
          "text-[color:var(--color-foreground)]",
        ].join(" ")}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PS63W3XC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <SitePopup />
      </body>
    </html>
  );
}
