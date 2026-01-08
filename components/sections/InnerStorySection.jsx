"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function InnerStorySection() {
  const sectionRef = useRef(null);

  /* SUBTLE PARALLAX */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* BACKGROUND IMAGE WRAPPER */}
      <motion.div
        style={{ y: bgY }}
        className="relative w-full min-h-[70vh]"
      >
        {/* DESKTOP IMAGE */}
        <Image
          src="/assets/inner-bg.jpg"            // desktop image
          alt="Elite Global School Vision"
          fill
          priority
          className="hidden md:block object-cover"
        />

        {/* MOBILE IMAGE */}
        <Image
          src="/assets/inner-bg-mob.jpg"     // mobile image
          alt="Elite Global School Vision Mobile"
          fill
          priority
          className="block md:hidden object-cover"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="absolute inset-0 z-10 container-lg flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl text-left"
        >
          {/* TITLE */}
          <h2 className="text-brand-primary font-primary font-bold text-4xl sm:text-5xl leading-tight">
            Elite Global School
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 text-white/80 text-xl">
            A Place Where Every Learner Is Meant To
          </p>

          <span className="block mt-2 text-white uppercase font-bold tracking-widest text-lg">
            Be a Star
          </span>

          {/* CTA → PDF */}
          <div className="mt-7">
            <a
              href="/files/Prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-lg items-center gap-2 text-brand-secondary font-semibold hover:underline transition"
            >
              Prospectus →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
