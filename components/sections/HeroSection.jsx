"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Separate assets for Desktop and Mobile for better performance/framing
const SLIDES = [
  { desktop: "/banner/banner-3.jpg", mobile: "/banner/banner-3-mob.jpg" },
  { desktop: "/banner/banner-2.jpg", mobile: "/banner/banner-2-mob.jpg" },
  { desktop: "/banner/banner-1.jpg", mobile: "/banner/banner-1-mob.jpg" },
];

/* --- MODERN TRANSITION VARIANTS --- */
const slideVariants = {
  enter: (direction) => ({
    clipPath: direction > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    scale: 1.2,
    filter: "blur(10px)",
  }),
  center: {
    clipPath: "inset(0 0 0 0%)",
    scale: 1,
    filter: "blur(0px)",
    transition: {
      clipPath: { duration: 1.1, ease: [0.77, 0, 0.175, 1] },
      scale: { duration: 1.8, ease: "easeOut" },
      filter: { duration: 1 },
    },
  },
  exit: (direction) => ({
    clipPath: direction < 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    scale: 1.1,
    transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] },
  }),
};

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  const index = Math.abs(page % SLIDES.length);

  // Handle Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-neutral-950">
      {/* 1. THE MAIN IMAGE CAROUSEL */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 6, ease: "linear" }}
            // Automatically switches source based on screen size
            src={isMobile ? SLIDES[index].mobile : SLIDES[index].desktop}
            className="w-full h-full"
            alt={`Banner ${index + 1}`}
            priority={index === 0} // SEO/LCP optimization
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. NAVIGATION OVERLAY (Click Sides to Navigate) */}
      <div className="absolute inset-0 z-20 flex">
        <div
          className="flex-1 cursor-none md:cursor-west-resize group relative"
          onClick={() => paginate(-1)}
        >
          {/* Subtle hover effect for desktop */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div
          className="flex-1 cursor-none md:cursor-east-resize group relative"
          onClick={() => paginate(1)}
        >
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* 3. MODERN PAGINATION (Slide Numbers + Bars) */}
      <div className="absolute bottom-10 left-6 right-6 md:left-12 md:right-12 z-30 flex items-end justify-between pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > index ? 1 : -1])}
              className="relative py-4"
            >
              <div
                className={`h-[2px] transition-all duration-700 ${
                  i === index ? "w-12 bg-white" : "w-6 bg-white/30"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Dynamic Slide Counter */}
        <div className="text-white font-light text-2xl md:text-4xl tracking-tighter tabular-nums">
          <span className="font-bold">0{index + 1}</span>
          <span className="text-white/30 mx-2">/</span>
          <span className="text-white/30 text-xl md:text-2xl">
            0{SLIDES.length}
          </span>
        </div>
      </div>

      {/* 4. TOP PROGRESS LOADER */}
      <div className="absolute top-0 left-0 w-full z-40 flex h-[2px]">
        <div className="flex-1 bg-white/5 relative">
          <motion.div
            key={page}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute inset-0 bg-white shadow-[0_0_15px_rgba(255,255,255,1)]"
          />
        </div>
      </div>
    </section>
  );
}
