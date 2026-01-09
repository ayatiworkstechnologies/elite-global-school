import MainHero from "@/components/MainHero";
import ContactSection from "@/components/sections/ContactSection";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Contact Us | Elite Global School ",
  description: "A place where every learner is meant to be a star",
};

export default function ContactPage() {
  return (
    <>
    <MainHero
        title="Conact US"
        imageDesktop="/banner/contact-banner.png"
        imageMobile="/banner/contact-banner-mob.png"
      />
      <ContactSection />
    </>
  );
}
