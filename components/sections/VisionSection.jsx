"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";

const CONTENT = {
  vision: {
    title: "Our Vision",
    text: `Our vision is to build a sturdy and highly educated citizen who are articulate, thoughtful, trusts to express and debate ideas and actively contributes to their own and others growth and also to uphold a learning community that produces leaders through faith, knowledge and inspiration.`,
    image: "/assets/vision.png",
  },
  mission: {
    title: "Our Mission",
    text: `Elite Global is dedicated to build an enriched learning environment using modern-day teaching pedagogy to cultivate an innovative and rigorous academic program streamed with CBSE Curriculum.`,
    image: "/assets/mission.png",
  },
};

export default function VisionSection() {
  const triggerRef = useRef(null);

  const showMission = useInView(triggerRef, {
    margin: "-60% 0px -40% 0px",
  });

  const data = showMission ? CONTENT.mission : CONTENT.vision;

  return (
    <section className="section-lg bg-white overflow-hidden">
      <div className="container-lg relative">

        {/* IMAGE BLOCK (RIGHT – 70%) */}
        <div className="relative w-full lg:ml-auto lg:w-[70%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={data.image}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              {/* <div className="hidden lg:block absolute -right-4 -bottom-4 w-full h-full border border-brand-secondary pointer-events-none" /> */}

              <Image
                src={data.image}
                alt={data.title}
                width={800}
                height={360}
                className="relative z-10 w-full h-auto object-cover rounded-sm"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* GLASS CARD (SAME POSITION & STYLE) */}
        <motion.div ref={triggerRef} 
          className="
            relative
            mt-8
            bg-white
            border border-gray-200
            shadow-lg
            rounded-xl
            p-6

            lg:absolute
            lg:top-1/2
            lg:right-[55%]
            lg:-translate-y-1/2
            lg:mt-0
            lg:max-w-xl
            lg:bg-white/5
            lg:backdrop-blur-lg
            lg:border-white/40
            lg:shadow-xl
            lg:p-10
            z-20
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={data.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-12 h-0.5 bg-brand-secondary" />
              </div>

              <h3 className="font-primary text-2xl sm:text-3xl lg:text-4xl text-brand-primary mb-4">
                {data.title}
              </h3>

              <p className="text-base sm:text-lg text-black leading-relaxed">
                {data.text}
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-5 text-lg sm:text-xl font-medium text-brand-secondary hover:underline"
              >
                Read more →
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* SCROLL TRIGGER */}
        {/* <div ref={triggerRef} className="h-[60vh]" /> */}
      </div>
    </section>
  );
}
