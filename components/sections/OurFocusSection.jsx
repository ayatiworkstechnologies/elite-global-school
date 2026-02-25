"use client";

import { motion } from "framer-motion";
import { HiOutlineSquares2X2, HiOutlineLightBulb } from "react-icons/hi2";

export default function OurFocusSection() {
  return (
    <section
      className="relative section-lg overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/about-bg.svg')",
      }}
    >
      <div className="container-lg relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* SECTION TAG */}
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-10 h-0.5 bg-brand-secondary" />
            <span className="text-lg tracking-widest text-brand-secondary uppercase">
              Our Focus
            </span>
          </div>

          {/* TITLE */}
          <h2 className="font-primary font-bold text-4xl lg:text-5xl text-brand-primary leading-snug max-w-xl">
            Our Focus Is To Give
            <br />
            Excellence In Academics
          </h2>

          {/* DESC */}
          <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
            To provide international standards of quality education, and
            inculcate and improve the ability of our children to crack down even
            competitive exams, NEET, IIT, JEE, etc.
          </p>
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="relative grid sm:grid-cols-2 gap-6">
          <FocusCard
            Icon={HiOutlineSquares2X2}
            text="To facilitate our children with all the amenities and infrastructure of the School."
            delay={0.1}
          />
          <FocusCard
            Icon={HiOutlineLightBulb}
            text="To promote the process of exploring and discovering our children's inner talents."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

/* =========================
   REUSABLE CARD
========================= */

function FocusCard({ Icon, text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-white shadow-2xl rounded-sm p-6 border border-gray-100 transition"
    >
      <div className="w-15 h-15 rounded-md bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-4">
        <Icon size={30} />
      </div>

      <p className="text-xl text-text-secondary leading-relaxed">{text}</p>
    </motion.div>
  );
}
