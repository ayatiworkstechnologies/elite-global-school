"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* DATA */
const ITEMS = [
  {
    no: "01",
    tag: "Future Ready",
    title: "Empower",
    desc: "As a committed 21st century learning organisation, Elite Global School is focusing on cultivating a diverse, effective program that empowers students with a global and local perspective.",
    image: "/assets/ethos-1.jpg",
  },
  {
    no: "02",
    tag: "Value Based",
    title: "Learn",
    desc: "We believe in a value-based education that accentuates Ethics, Empathy, Esteem and Collaboration in learning and life.",
    image: "/assets/ethos-2.jpg",
  },
  {
    no: "03",
    tag: "Creative Thinking",
    title: "Invoke",
    desc: "Enrich programs to support the teaching process and invoke the creativity and hidden skills of every student.",
    image: "/assets/ethos-3.jpg",
  },
  {
    no: "04",
    tag: "Hidden Potential",
    title: "Treasure",
    desc: "To kindle the rich treasures hidden inside every child and motivate them with inspiring facilitators and learning methods.",
    image: "/assets/ethos-4.jpg",
  },
  {
    no: "05",
    tag: "Social Responsibility",
    title: "Enrich",
    desc: "We foster social responsibility to help learners play an active role in the community while upholding inclusive values and principles.",
    image: "/assets/ethos-5.jpg",
  },
];

/* ANIMATION VARIANTS */
const textVariants = {
  hidden: (reverse) => ({
    opacity: 0,
    x: reverse ? 70 : -70,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants = {
  hidden: (reverse) => ({
    opacity: 0,
    x: reverse ? -70 : 70,
    scale: 0.94,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CoreEthosSection() {
  return (
    <section className="relative section-lg bg-white overflow-hidden">
      {/* BACKGROUND DOT PATTERN */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      <div className="container-lg relative space-y-20 lg:space-y-36">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm sm:text-lg font-semibold text-black/80 uppercase">
            Core Ethos of
          </span>
          <h2 className="mt-2 text-brand-primary font-bold font-primary text-3xl sm:text-4xl">
            Elite Global School
          </h2>
        </motion.div>

        {/* ITEMS */}
        {ITEMS.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={item.no}
              className="grid gap-10 items-center lg:grid-cols-2 lg:gap-14"
            >
              {/* TEXT */}
              <motion.div
                custom={isReverse}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className={`relative order-1 ${
                  isReverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* NUMBER WATERMARK */}
                <div className="absolute -top-6 left-0 text-7xl sm:text-8xl font-bold text-black/10 leading-none">
                  {item.no}
                </div>

                <div className="relative pt-12">
                  <div className="flex items-center gap-3">
                    <span className="block w-12 h-0.5 bg-brand-secondary" />
                    <span className="text-xs sm:text-sm tracking-widest text-brand-secondary uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-primary font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg">
                    {item.desc}
                  </p>

                  <Link
                    href="/about"
                    className="inline-block mt-4 text-base sm:text-lg text-brand-secondary"
                  >
                    Read more →
                  </Link>
                </div>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                custom={isReverse}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className={`relative overflow-hidden order-2 ${
                  isReverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={560}
                    height={400}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
