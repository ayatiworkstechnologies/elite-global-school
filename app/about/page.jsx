import MainHero from "@/components/MainHero";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import PrincipalMessage from "@/components/sections/about/PrincipalMessage";
import StudentLifeSection from "@/components/sections/about/StudentLifeSection";
import VisionMissionSection from "@/components/sections/about/VisionMissionSection";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "About Us | Elite Global School ",
  description: "A place where every learner is meant to be a star",
};

export default function AboutPage() {
  return (
    <>
      <MainHero
        title="About"
        imageDesktop="/banner/about-banner.png"
        imageMobile="/banner/about-banner-mob.png"
      />
      <PrincipalMessage />
      <VisionMissionSection />
      <CoreValuesSection />
      <StudentLifeSection />
    </>
  );
}
