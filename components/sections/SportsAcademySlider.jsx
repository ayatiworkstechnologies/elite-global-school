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
    image: "/assets/img.jpg",
    label: "Football Training",
  },
  {
    tag: "Elite Sports Academy",
    title: "Building Strength, Focus & Team Spirit Through Sports",
    desc: `Our sports academy nurtures discipline, confidence, and leadership through structured training programs that develop both physical endurance and mental resilience.`,
    image: "/assets/img.jpg",
    label: "Athletics Training",
  },
];

export default function SportsAcademyCard() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const change = (d) => {
    setDir(d);
    setIndex((p) => (p + d + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="section-lg bg-white overflow-hidden">
      <div className="container-lg">

        {/* CARD */}
        <div className="relative md:p-6">

          {/* LEFT ARROW – NO BORDER */}
          <button
            onClick={() => change(-1)}
            className="
              absolute -left-6 top-1/2 -translate-y-1/2 z-20
              text-brand-secondary hover:text-brand-primary
              transition
            "
          >
            <HiChevronLeft size={28} />
          </button>

          {/* RIGHT ARROW – NO BORDER */}
          <button
            onClick={() => change(1)}
            className="
              absolute -right-6 top-1/2 -translate-y-1/2 z-20
              text-brand-secondary hover:text-brand-primary
              transition
            "
          >
            <HiChevronRight size={28} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start border border-brand-secondary"
            >

              {/* IMAGE */}
              <motion.div
                initial={{ scale: 1.05, x: dir > 0 ? 40 : -40 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative overflow-hidden"
              >
                <Image
                  src={SLIDES[index].image}
                  alt={SLIDES[index].title}
                  width={640}
                  height={440}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* LABEL */}
                <span className="absolute bottom-4 left-4 bg-black/70 text-white text-xs tracking-widest uppercase px-4 py-2">
                  {SLIDES[index].label}
                </span>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: dir > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className=" mt-5 px-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-10 h-0.5 bg-brand-secondary" />
                  <span className="text-lg tracking-widest text-brand-secondary uppercase">
                    {SLIDES[index].tag}
                  </span>
                </div>

                <h3 className="font-primary font-bold text-3xl lg:text-4xl text-brand-primary leading-snug max-w-xl">
                  {SLIDES[index].title}
                </h3>

                <p className="mt-6 text-xl text-text-secondary leading-relaxed max-w-xl">
                  {SLIDES[index].desc}
                </p>
              </motion.div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
