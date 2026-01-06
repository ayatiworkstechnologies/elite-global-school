import { Teachers, Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Elite Global School",
  description: "A place where every learner is meant to be a star",
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
