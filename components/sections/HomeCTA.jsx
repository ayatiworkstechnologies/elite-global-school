"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeCTA() {
    return (
        <section className="section-lg ">
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

                <Link
                    href="/contact"
                    className="
          mt-6 inline-flex items-center gap-2
          px-6 py-3
          bg-brand-primary text-white
          text-sm sm:text-base font-medium
          rounded-md
          hover:bg-brand-accent
          transition-all duration-300
          focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary
        "
                >
                    Know More →
                </Link>
            </motion.div>
        </section>
    );
}
