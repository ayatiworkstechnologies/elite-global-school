"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function VisionSection() {
  return (
    <section className="section-lg bg-white overflow-hidden">
      <div className="container-lg relative">

        {/* IMAGE BLOCK (RIGHT – 70%) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full lg:ml-auto lg:w-[70%]"
        >
          {/* IMAGE FRAME – DESKTOP ONLY */}
          <div className="hidden lg:block absolute -right-4 -bottom-4 w-full h-full border border-brand-secondary pointer-events-none" />

          <Image
            src="/assets/vission.png"
            alt="Students in classroom"
            width={900}
            height={560}
            className="relative z-10 w-full h-auto object-cover rounded-sm"
            priority
          />
        </motion.div>

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
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
          {/* SECTION TAG */}
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-12 h-0.5 bg-brand-secondary" />
          </div>

          <h3 className="font-primary text-2xl sm:text-3xl lg:text-4xl text-brand-primary mb-4">
            Our Vision
          </h3>

          <p className="text-base sm:text-lg text-black leading-relaxed">
            Our vision is to build a sturdy and highly educated citizen who are
            articulate, thoughtful, trustworthy and creative leaders and
            actively contribute to their own and others’ growth and uphold a
            learning community that produces leaders through knowledge and
            inspiration.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-5 text-lg sm:text-xl font-medium text-brand-secondary hover:underline"
          >
            Read more →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
