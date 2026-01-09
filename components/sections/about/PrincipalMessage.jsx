"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="relative section-lg overflow-hidden py-16 lg:py-28">

      {/* --- BACKGROUND SPLIT (60% Dark / 40% White) --- */}
      <div className="absolute inset-0 z-0">
        <div className="h-[75%] bg-brand-accent" /> {/* Dark Navy Top */}
        <div className="h-[25%] bg-white" />      {/* White Bottom */}
      </div>

      {/* --- "WELCOME" WATERMARK TEXT --- */}
      <div className="absolute top-0 lg:-top-10 left-0 right-0 overflow-hidden pointer-events-none z-0 flex justify-center">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-primary font-bold text-white text-[18vw] lg:text-[14vw] tracking-widest leading-none select-none"
        >
          Welcome
        </motion.span>
      </div>

      {/* --- MAIN CONTAINER --- */}
      {/* Everything is strictly inside this container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* === CONTENT COLUMN === */}
          {/* Mobile: Order 1 (First) | Desktop: Order 2 (Right Side) */}
          <div className="text-white order-1 lg:order-2">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-8 lg:w-12 h-0.5 bg-brand-secondary" />
              <span className="text-lg font-bold tracking-[0.4em] text-brand-secondary uppercase">
                Get Started
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-primary font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-primary mb-6 lg:mb-8 leading-tight"
            >
              Welcome from principal
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg leading-relaxed text-gray-200 lg:text-gray-300 font-light max-w-xl"
            >
              Welcome to Springfield Academy. We are dedicated to fostering a nurturing environment where every student can thrive academically and socially. Our commitment to excellence drives everything we do, ensuring that each child is prepared not just for higher education, but for life. We invite you to explore our community and see what makes us unique.
            </motion.p>

            {/* Signature Block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 lg:mt-10"
            >
              <h4 className="text-lg font-bold tracking-[0.4em] text-white uppercase">
                Dr. Eleanor Vance.
              </h4>
              <span className="text-sm font-medium tracking-[0.4em] text-ehite uppercase ">
                Principal
              </span>
            </motion.div>
          </div>

          {/* === IMAGE CARD COLUMN === */}
          {/* Mobile: Order 2 (Second) | Desktop: Order 1 (Left Side) */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1 mt-8 lg:mt-0">
            {/* The Image Card Container - strictly inside the grid column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 bg-[#fba953] p-0 w-full md:mt-20 max-w-[340px] sm:max-w-[400px] h-[450px] sm:h-[500px] shadow-2xl overflow-hidden rounded-sm"
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/principal.jpg"
                    alt="Principal Dr. Eleanor Vance"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>
                {/* Gradient for depth */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" /> */}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}