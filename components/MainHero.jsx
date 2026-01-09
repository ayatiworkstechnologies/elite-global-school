"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";

export default function MainHero({
  title = "About",
  image = "/assets/about-hero.jpg",
}) {
  return (
    <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">

      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY (optional but recommended) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CENTER TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 h-full flex items-center justify-center text-center"
      >
        <h1 className="font-primary text-white text-4xl lg:text-5xl">
          {title}
        </h1>
      </motion.div>

      {/* BREADCRUMB – BOTTOM LEFT */}
      <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 text-sm text-white/90">
        <Link
          href="/"
          className="flex items-center gap-1 hover:underline"
        >
          <HiHome className="text-lg" />
          Home
        </Link>
        <span>/</span>
        <span className="text-white">{title}</span>
      </div>

    </section>
  );
}
