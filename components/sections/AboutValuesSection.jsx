"use client";

import { motion } from "framer-motion";

const VALUES = [
  { no: "01", title: "Strong academics with personal attention" },
  { no: "02", title: "Safe, nurturing learning environment" },
  { no: "03", title: "Experienced and caring educators" },
  { no: "04", title: "Holistic development beyond textbooks" },
  { no: "05", title: "Modern facilities, traditional values" },
];

/* ANIMATION VARIANTS */

// Title: Bottom → Top
const titleVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Content: Left → Right
const contentVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.15 },
  },
};

// Cards container (stagger)
const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual card: Bottom → Top (one by one)
const cardItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutValuesSection() {
  return (
    <section
      className="
        relative
        py-20 sm:py-24 lg:py-32
        bg-center bg-no-repeat
      "
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP CONTENT */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start mb-16">
          {/* TITLE */}
          <motion.div
            variants={titleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="w-12 h-0.5 bg-brand-secondary" />
              <span className="text-sm tracking-widest text-brand-secondary uppercase">
                About
              </span>
            </div>

            <h2 className="mt-4 font-primary font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-brand-primary">
              A Place Where
              <br />
              Every Learner Is
              <br />
              Meant To Be A<br />
              Star
            </h2>
          </motion.div>

          {/* CONTENT */}
          <motion.p
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
          >
            Elite Global, a new born galaxy with billions of dreams to mould our
            children to make them understand and identify the Creator and to
            enlighten their knowledge beneficial for both worlds.
          </motion.p>
        </div>

        {/* VALUES STRIP */}
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            bg-white/90 shadow-lg
          "
        >
          {VALUES.map((item, index) => (
            <motion.div
              key={item.no}
              variants={cardItem}
              className="
                group relative
                px-6 py-10
                text-center lg:text-left
                cursor-pointer overflow-hidden
              "
            >
              {/* HOVER GLOW LAYER */}
              <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none lg:rounded-xl" />

              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="text-4xl lg:text-5xl font-bold text-brand-primary group-hover:text-white transition-colors duration-500 mb-4 font-primary">
                  {item.no}
                </div>

                <p className="text-lg text-text-secondary group-hover:text-white/90 transition-colors duration-500 leading-snug font-medium">
                  {item.title}
                </p>
              </div>

              {/* DIVIDER */}
              {index !== VALUES.length - 1 && (
                <span
                  className="
                    hidden lg:block
                    absolute top-1/2 right-0
                    -translate-y-1/2
                    h-[60%] w-px
                    bg-gray-200
                    group-hover:opacity-0 transition-opacity duration-300
                  "
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
