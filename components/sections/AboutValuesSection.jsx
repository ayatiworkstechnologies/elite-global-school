"use client";

import { motion } from "framer-motion";

const VALUES = [
  { no: "01", title: "Strong academics", desc: "with personal attention" },
  { no: "02", title: "Safe, nurturing", desc: "learning environment" },
  { no: "03", title: "Experienced and", desc: "caring educators" },
  { no: "04", title: "Holistic development", desc: "beyond textbooks" },
  { no: "05", title: "Modern facilities,", desc: "traditional values" },
];

/* ANIMATION VARIANTS */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function AboutValuesSection() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 sm:py-24 lg:py-32
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: "url('/assets/about-bg.svg')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* CONTENT */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* TOP CONTENT */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* LEFT TITLE */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3">
              <span className="w-12 h-0.5 bg-brand-secondary" />
              <span className="text-sm sm:text-base tracking-widest text-brand-secondary uppercase">
                About
              </span>
            </div>

            <h2 className="mt-4 font-primary font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-brand-primary">
              A Place Where<br />
              Every Learner Is<br />
              Meant To Be A<br />
              Star
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
          >
            Elite Global, a new born galaxy with billions of dreams to mould our
            children to make them understand and identify the Creator and to
            enlighten their knowledge beneficial for both worlds.
          </motion.p>
        </div>

        {/* VALUES STRIP */}
        <motion.div
          variants={stagger}
          className="
            mt-14 sm:mt-16
            grid grid-cols-12
            gap-6
            items-stretch
          "
        >
          {VALUES.map((item, index) => (
            <motion.div
              key={item.no}
              variants={fadeUp}
              className={`
                col-span-12
                sm:col-span-6
                lg:col-span-2
                ${index === 4 ? "sm:col-span-12 flex justify-center" : ""}
              `}
            >
              <div
                className="
                  bg-white
                  rounded-xl
                  shadow-lg
                  px-6 py-8
                  text-center lg:text-left
                  w-full
                  
                  h-full
                  flex flex-col justify-between
                "
              >
                <div className="text-5xl font-extrabold text-black/40">
                  {item.no}
                </div>

                <p className="mt-4 text-xl font-semibold text-text-primary">
                  <span className="">
                    {item.title}
                  </span>
                  
                  
                </p>
                <p className="mt-4 text-xl leading-snug text-text-secondary">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
