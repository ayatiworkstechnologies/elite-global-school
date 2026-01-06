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

const SLIDES = [
  {
    tag: "Elite Sports Academy",
    title: "Physical And Mental Ability Enhances A Child’s Early Growth",
    desc: `Understanding the long gap of generation which had not experienced the value of sports academy in a school campus due to space constraints in city limits. We thought of filling this gap by giving our children the opportunity for them to explore their talents in sports and make them physically fit and healthy. This evolved us to dedicate a stretch of 6000 Sq.ft. of carpet area for the sports academy comprising a Football Turf and a wide area for physical training our children with different kinds of Martial arts to be taught by well experienced trainers.`,
    image: "/assets/sports-1.jpg",
    label: "Football Training",
  },
  {
    tag: "Elite Sports Academy",
    title: "Building Strength, Focus & Team Spirit Through Sports",
    desc: `Our sports academy nurtures discipline, confidence, and leadership through structured training programs that develop both physical endurance and mental resilience.`,
    image: "/assets/sports-2.jpg",
    label: "Athletics Training",
  },
  {
    tag: "Elite Sports Academy",
    title: "Encouraging Talent Beyond Academics",
    desc: `We believe sports play a crucial role in shaping a child’s overall personality and well-being through continuous exposure and professional guidance.`,
    image: "/assets/sports-3.jpg",
    label: "Martial Arts",
  },
];
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
