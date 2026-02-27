"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

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
    desc: `Our sports academy nurtures discipline, confidence, and leadership by integrating structured training programs that develop both physical endurance and mental resilience.`,
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

export default function SportsAcademySection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="section-lg bg-white overflow-hidden">
      <div className="container-lg relative">

        {/* SLIDER CARD */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction > 0 ? 120 : -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -120 : 120, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center"
            >

              {/* LEFT IMAGE */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-md">
                  <Image
                    src={SLIDES[index].image}
                    alt={SLIDES[index].title}
                    width={620}
                    height={420}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* LABEL */}
                <span className="absolute bottom-4 left-4 bg-black/70 text-white text-xs tracking-widest px-4 py-2 uppercase">
                  {SLIDES[index].label}
                </span>

                {/* ARROWS */}
                <button
                  onClick={() => paginate(-1)}
                  className="absolute left-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-brand-primary hover:text-white transition"
                >
                  <HiChevronLeft />
                </button>

                <button
                  onClick={() => paginate(1)}
                  className="absolute right-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-brand-primary hover:text-white transition"
                >
                  <HiChevronRight />
                </button>
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-10 h-0.5 bg-brand-secondary" />
                  <span className="text-xs tracking-widest text-brand-secondary uppercase">
                    {SLIDES[index].tag}
                  </span>
                </div>

                <h3 className="font-primary text-2xl lg:text-3xl text-brand-primary leading-snug max-w-xl">
                  {SLIDES[index].title}
                </h3>

                <p className="mt-6 text-sm text-text-secondary leading-relaxed max-w-xl">
                  {SLIDES[index].desc}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <span className="text-lg tracking-widest text-brand-secondary uppercase">
            Have Some Questions?
          </span>

          <h4 className="mt-4 font-primary text-2xl font-bold text-brand-primary">
            WE WOULD LOVE TO HELP YOU.
          </h4>

          <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white text-sm font-medium hover:bg-brand-accent transition">
            Know More →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
