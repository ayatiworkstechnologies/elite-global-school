"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SLIDES = [
  "/banner/elite.jpg",
  "/banner/elite.jpg",
  "/banner/elite.jpg",
];

export default function HeroSection({
  title = "Elite Global School",
  rightTitle = "Global Excellence",
  rightDesc = "Inspiring young minds with quality education and strong values.",
}) {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-[85vh] grid grid-cols-1 lg:grid-cols-[28%_44%_28%] overflow-hidden">

      {/* MOBILE IMAGE ONLY */}
      <div className="relative h-[60vh] lg:hidden overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={SLIDES[index]}
            alt="Elite Global School Students"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* LEFT PANEL */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          bg-brand-primary
          flex items-center justify-center
          px-6 py-12 lg:px-10
          order-2 lg:order-1
        "
      >
        <h1 className="font-primary text-white text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-wide text-center lg:text-left">
          {title.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </h1>
      </motion.div>

      {/* CENTER SLIDER – DESKTOP ONLY */}
      <div className="
        relative overflow-hidden
        hidden lg:block
        order-1 lg:order-2
      ">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={SLIDES[index]}
            alt="Elite Global School Students"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* RIGHT PANEL */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="
          bg-brand-secondary
          flex flex-col justify-center
          px-6 py-12 lg:px-10
          text-white
          order-3
        "
      >
        <h2 className="font-primary text-4xl sm:text-5xl lg:text-7xl mb-4 tracking-wide text-center lg:text-left">
          {rightTitle.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </h2>

        <p className="font-secondary text-sm lg:text-base text-white/80 max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
          {rightDesc}
        </p>
      </motion.div>
    </section>
  );
}
