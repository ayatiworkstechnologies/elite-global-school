"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button"; // adjust path if needed

export default function HomeCTA() {
  return (
    <section className="pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-16 sm:mt-20 px-4"
      >
        <span className="block text-sm sm:text-lg tracking-widest text-brand-secondary uppercase">
          Have Some Questions?
        </span>

        <h4 className="mt-3 sm:mt-4 font-primary text-xl sm:text-2xl font-bold text-brand-primary">
          We would love to help you.
        </h4>

        {/* CTA BUTTON */}
        <div className="mt-8 flex justify-center">
          <Link href="/contact">
            <Button variant="primary">
              Know More →
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
