import MainHero from "@/components/MainHero";

import EliteSportsAcademySection from "@/components/sections/sports-academy/EliteSportsAcademySection";
import FacilitiesSection from "@/components/sections/sports-academy/FacilitiesSection";
import PhilosophySection from "@/components/sections/sports-academy/PhilosophySection";
import StudentAthleteSuccessSection from "@/components/sections/sports-academy/StudentAthleteSuccessSection";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Sprorts Acadaemy | Elite Global School ",
  description: "A place where every learner is meant to be a star",
};

export default function SportsAcademyPage() {
  return (
    <>
      <MainHero
        title="Sports Academy"
        imageDesktop="/banner/sports-banner.png"
        imageMobile="/banner/sports-banner-mob.png"
      />
      <PhilosophySection />
      <EliteSportsAcademySection />
      <FacilitiesSection />
      <StudentAthleteSuccessSection />
    </>
  );
}
