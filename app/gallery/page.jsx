import MainHero from "@/components/MainHero";
import GallerySection from "@/components/sections/GallerySection";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Gallery | Elite Global School ",
  description: "A place where every learner is meant to be a star",
};

export default function GalleryPage() {
  return (
    <>
      <MainHero
        title="Gallery"
        imageDesktop="/banner/gallery-banner.png"
        imageMobile="/banner/gallery-banner-mob.png"
      />
      <GallerySection />
    </>
  );
}
