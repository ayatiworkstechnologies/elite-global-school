"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button"; // 🔁 adjust path if needed

export default function ActivitiesVideoSection() {
  return (
    <section className="relative bg-white py-5 overflow-hidden">
      <div className="text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-primary font-bold text-3xl sm:text-4xl text-brand-primary mb-10"
        >
          All about the school in a video
        </motion.h2>

        {/* VIDEO EMBED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-sm overflow-hidden shadow-lg"
        >
          <div className="relative w-full pt-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/lZtuwfWUn2Q?rel=0"
              title="Elite Global School – Glimpse of Activities 2023–24"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </motion.div>

        {/* CTA BUTTON (REUSABLE BUTTON) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Link href="https://www.youtube.com/channel/UCZpuYEecLKm6TAA-duHzSRQ/videos">
            <Button variant="primary">
              View more videos →
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
