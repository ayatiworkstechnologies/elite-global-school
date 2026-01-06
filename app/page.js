import AboutValuesSection from "@/components/sections/AboutValuesSection";
import CoreEthosSection from "@/components/sections/CoreEthosSection";
import HeroSection from "@/components/sections/HeroSection";
import HomeCTA from "@/components/sections/HomeCTA";
import OurFocusSection from "@/components/sections/OurFocusSection";
import SportsAcademySection from "@/components/sections/SportsAcademySection";
import SportsAcademySlider from "@/components/sections/SportsAcademySlider";
import UniquenessSection from "@/components/sections/UniquenessSection";
import VisionSection from "@/components/sections/VisionSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutValuesSection />
    <VisionSection/>
    <CoreEthosSection/>
    <OurFocusSection />
    <UniquenessSection />
    <SportsAcademySlider />
    <HomeCTA />
    </>
  );
}
