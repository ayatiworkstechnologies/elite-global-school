"use client";

import { motion } from "framer-motion";

export default function HomeCTA() {
  return (
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
  );
}
