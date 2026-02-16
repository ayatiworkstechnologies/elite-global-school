"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Changed to Arrow icons

const programs = [
  {
    id: 1,
    title: "Football",
    image: "/assets/img-1.jpeg",
    description:
      "Comprehensive tactical and physical training for offensive and defensive positions.",
  },
  {
    id: 2,
    title: "KARATE TRAINING",
    image: "/assets/img-2.jpeg",
    description:
      "Focus on skill development, game IQ, and strength conditioning for all court positions.",
  },
  {
    id: 3,
    title: "SILAMBAM TRAINING",
    image: "/assets/img-3.jpg",
    description:
      "Clay and hard court training focused on technique, agility, and mental toughness.",
  },
  {
    id: 4,
    title: "CRICKET TRAINING",
    image: "/assets/img-4.jpg",
    description:
      "Comprehensive coaching covering batting stance, bowling action, and fielding drills to master the gentleman's game.",
  },
  {
    id: 5, // Unique ID
    title: "CHESS TRAINING",
    image: "/assets/img-5.jpg",
    description:
      "Strategic mental conditioning focused on opening theories, tactical patterns, and endgame proficiency.",
  },
  {
    id: 6, // Unique ID (changed from 5 to 6)
    title: "TABLE TENNIS TRAINING",
    image: "/assets/img-6.jpg",
    description:
      "High-speed training designed to improve hand-eye coordination, reflex speed, and advanced paddle spin techniques.",
  },
];

export default function EliteSportsAcademySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const containerRef = useRef(null);

  // Responsive handler to determine how many cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = programs.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const cardWidthPercentage = 100 / cardsPerView;

  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* --- BACKGROUND IMAGE SECTION --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/assets/about-bg.svg" // ⚠️ Make sure to add this image to public/images/
          alt="Grid Background"
          fill
          className="object-cover " // Adjust opacity to make text readable
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-secondary tracking-[0.4em] uppercase text-sm font-semibold block mb-4"
          >
            Elite Sports Academy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6 leading-tight"
          >
            Physical And Mental Ability Enhances A Child&apos;s Early Growth
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative px-2 md:px-12">
          {" "}
          {/* Added padding for arrow space */}
          {/* --- LEFT ARROW --- */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="absolute left-0 top-[40%] -translate-y-1/2 z-20 hidden md:flex items-center justify-center text-brand-secondary hover:text-brand-secondary transition-colors"
          >
            <ArrowLeft size={32} strokeWidth={1.5} /> {/* Thin arrow style */}
          </motion.button>
          {/* --- RIGHT ARROW --- */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute right-0 top-[40%] -translate-y-1/2 z-20 hidden md:flex items-center justify-center text-brand-secondary hover:text-brand-secondary transition-colors"
          >
            <ArrowRight size={32} strokeWidth={1.5} /> {/* Thin arrow style */}
          </motion.button>
          {/* Cards Track */}
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * cardWidthPercentage}%`,
              }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {programs.map((program) => (
                <div
                  key={program.id}
                  className={`shrink-0 px-4 box-border`}
                  style={{ width: `${cardWidthPercentage}%` }}
                >
                  <div className="h-full flex flex-col bg-white/50 backdrop-blur-sm p-2 rounded-xl">
                    {" "}
                    {/* Optional: slight backdrop for readability over grid */}
                    {/* Image */}
                    <div className="relative w-full h-64 mb-6 overflow-hidden group">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Content */}
                    <div className="grow flex flex-col justify-between px-2">
                      <div>
                        <h3 className="text-xl font-bold tracking-[0.3em] text-brand-primary uppercase mb-3">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {program.description}
                        </p>
                      </div>
                      {/* Bottom Border Line */}
                      <div className="w-full h-px bg-brand-secondary/50 mt-6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
