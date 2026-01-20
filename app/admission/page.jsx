import MainHero from "@/components/MainHero";
import FeeStructure from "@/components/sections/FeeStructure";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Fee Structures | Elite Global School ",
  description: "A place where every learner is meant to be a star",
};

export default function FeeStructurePage() {
  return (
    <>
      <MainHero
        title="Admission & Fee Structure"
        imageDesktop="/banner/news-banner.png"
        imageMobile="/banner/news-banner-mob.png"
      />
      <FeeStructure />
    </>
  );
}
