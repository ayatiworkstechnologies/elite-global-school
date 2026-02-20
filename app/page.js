import AboutValuesSection from "@/components/sections/AboutValuesSection";
import ActivitiesVideoSection from "@/components/sections/ActivitiesVideoSection";
import CoreEthosSection from "@/components/sections/CoreEthosSection";
import HeroSection from "@/components/sections/HeroSection";
import HomeCTA from "@/components/sections/HomeCTA";
import InnerStorySection from "@/components/sections/InnerStorySection";
import OurFocusSection from "@/components/sections/OurFocusSection";
import SportsAcademySection from "@/components/sections/SportsAcademySection";
import SportsAcademySlider from "@/components/sections/SportsAcademySlider";
import UniquenessSection from "@/components/sections/UniquenessSection";
import VisionSection from "@/components/sections/VisionSection";
import Image from "next/image";

export const metadata = {
  title:
    "Islamic schools in Chennai, Elite Global School | Enlighten Knowledge",
  description: "A place where every learner is meant to be a star",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Elite Global School",
  url: "https://eliteglobalschools.com",
  logo: "https://eliteglobalschools.com/logo.png",
  description: "A place where every learner is meant to be a star",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutValuesSection />
      <ActivitiesVideoSection />
      <VisionSection />
      <CoreEthosSection />
      <InnerStorySection />
      <OurFocusSection />
      <UniquenessSection />
      <SportsAcademySlider />
      <HomeCTA />
    </>
  );
}
