"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SLIDES = [
  "/banner/elite.jpg",
  "/banner/elite.jpg",
  "/banner/elite.jpg",
];

/* --- ANIMATION VARIANTS --- */

// 1. The Panel Slide Animation (Curtain Effect)
const panelVariants = {
  hiddenTop: { y: "-100%" },
  hiddenBottom: { y: "100%" },
  visible: { 
    y: "0%",
    transition: { 
      duration: 1.2, 
      ease: [0.76, 0, 0.24, 1], // Premium "ease-in-out" feel
    }
  }
};

// 2. Container for text to control staggering
const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      delayChildren: 0.6, // Wait for panel to slide in halfway
      staggerChildren: 0.1, // Time between each word appearing
    }
  }
};

// 3. Individual Word Animation
const wordVariants = {
  hidden: { y: 50, opacity: 0, rotateX: 45 },
  visible: { 
    y: 0, 
    opacity: 1, 
    rotateX: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

// 4. Image Slider Animation (Zoom Out Effect)
const imageVariants = {
  enter: { scale: 1.2, opacity: 0 },
  center: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.2, ease: "easeOut" } 
  },
  exit: { 
    scale: 1, 
    opacity: 0, 
    transition: { duration: 0.8 } 
  }
};

export default function HeroSection({
  title = "Elite Global School",
  rightTitle = "Global Excellence",
  rightDesc = "Inspiring young minds with quality education and strong values.",
}) {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    // 'h-[85vh]' ensures it takes up most of the screen but leaves room for content below
    <section className="w-full h-auto lg:h-[88vh] grid grid-cols-1 lg:grid-cols-[28%_44%_28%] overflow-hidden bg-white">

      {/* ================= LEFT PANEL (Top -> Bottom) ================= */}
      <motion.div
        variants={panelVariants}
        initial="hiddenTop"
        animate="visible"
        className="relative bg-brand-primary flex flex-col justify-center px-6 py-12 lg:px-10 order-2 lg:order-1 z-10"
      >
        <motion.div 
            variants={contentContainerVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="font-primary text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-center lg:text-left">
            {title.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3 lg:mr-0 lg:block mb-2">
                    <motion.span
                        variants={wordVariants}
                        className="block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
            </h1>
        </motion.div>
      </motion.div>

      {/* ================= CENTER IMAGE (Slider) ================= */}
      <div className="relative h-[50vh] lg:h-full overflow-hidden order-1 lg:order-2 bg-gray-900">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            src={SLIDES[index]}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Banner"
          />
        </AnimatePresence>
        
        {/* Subtle Overlay for better contrast if needed */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* ================= RIGHT PANEL (Bottom -> Top) ================= */}
      <motion.div
        variants={panelVariants}
        initial="hiddenBottom"
        animate="visible"
        className="relative bg-brand-secondary flex flex-col justify-center px-6 py-12 lg:px-8 text-white order-3 z-10"
      >
        <motion.div 
            variants={contentContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start"
        >
            {/* Decorative Line */}
            <motion.span variants={wordVariants} className="w-12 h-1.5 mb-6 bg-white block" />

            {/* Title */}
            <h2 className="font-primary font-light text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 tracking-wide leading-[1.1] text-center lg:text-left">
                {rightTitle.split(" ").map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden mr-2">
                        <motion.span variants={wordVariants} className="block">
                            {word}
                        </motion.span>
                    </span>
                ))}
            </h2>

            {/* Description */}
            <motion.p
                variants={wordVariants}
                className="font-secondary text-sm lg:text-base text-white/90 max-w-xs leading-relaxed text-center lg:text-left"
            >
                {rightDesc}
            </motion.p>

        </motion.div>
      </motion.div>

    </section>
  );
}