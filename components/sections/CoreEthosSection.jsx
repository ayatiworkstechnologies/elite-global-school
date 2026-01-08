"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* DATA */
const ITEMS = [
  {
    no: "01",
    tag: "Future Ready",
    title: "Empower",
    desc: "As a committed 21st century learning organisation, Elite Global School is focusing on cultivating a diverse, effective program.",
    image: "/assets/ethos-1.png",
    color: "#FF6B6B",
  },
  {
    no: "02",
    tag: "Value Based",
    title: "Learn",
    desc: "We believe in a value-based education that accentuates Ethics, Empathy, Esteem and Collaboration in learning and life.",
    image: "/assets/ethos-2.png",
    color: "#4ECDC4",
  },
  {
    no: "03",
    tag: "Creative Thinking",
    title: "Invoke",
    desc: "Enrich programs to support the teaching process and invoke the creativity and hidden skills of every student.",
    image: "/assets/ethos-3.png",
    color: "#FFE66D",
  },
  {
    no: "04",
    tag: "Hidden Potential",
    title: "Treasure",
    desc: "To kindle the rich treasures hidden inside every child and motivate them with inspiring facilitators and learning methods.",
    image: "/assets/ethos-4.png",
    color: "#1A535C",
  },
  {
    no: "05",
    tag: "Social Responsibility",
    title: "Enrich",
    desc: "We foster social responsibility to help learners play an active role in the community while upholding inclusive values and principles.",
    image: "/assets/ethos-5.png",
    color: "#FF6B6B",
  },
];

/* --- ANIMATION VARIANTS --- */
const maskTextVariants = {
  hidden: { y: "100%" },
  visible: { 
    y: "0%", 
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } 
  },
};

const curtainVariants = {
  hidden: { scaleX: 1, originX: 0 },
  visible: { 
    scaleX: 0, 
    originX: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } 
  },
};

const imageScaleVariants = {
  hidden: { scale: 1.4 },
  visible: { 
    scale: 1, 
    transition: { duration: 1.2, ease: "easeOut", delay: 0.2 } 
  },
};

export default function CoreEthosSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* HORIZONTAL SCROLL */
  const x = useTransform(smoothProgress, [0, 1], ["0%", `-${(ITEMS.length - 1) * 100}%`]);
  
  /* PARALLAX BACKGROUND */
  const bgX = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);

  /* FOOTBALL PHYSICS */
  const ballX = useTransform(smoothProgress, [0, 1], ["0%", "85%"]);
  const ballRotate = useTransform(smoothProgress, [0, 1], [0, 1440]); 
  // Adjusted Sine wave amplitude for mobile (lower bounce on small screens)
  const ballY = useTransform(smoothProgress, (latest) => Math.sin(latest * 18) * 50); 

  const goNext = () => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const viewportHeight = window.innerHeight;
    const progress = scrollYProgress.get();
    const nextIndex = Math.min(ITEMS.length - 1, Math.floor(progress * ITEMS.length) + 1);
    window.scrollTo({ top: sectionTop + nextIndex * viewportHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f8f9fa] text-black"
      style={{ height: `${ITEMS.length * 100}vh` }}
    >
      {/* Used 100dvh to fix mobile browser address bar jump issues */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        
        {/* --- DYNAMIC BACKGROUND PATTERN --- */}
        <motion.div 
            style={{ x: bgX }}
            className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        >
             <div className="w-[150vw] h-full" style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '40px 40px'
             }}></div>
        </motion.div>

        {/* --- HEADER --- */}
        <div className="absolute top-4 sm:top-6 left-0 right-0 z-20 text-center pointer-events-none mix-blend-multiply px-4">
             <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
             >
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
                    CORE ETHICS OF
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-1 sm:mt-2 text-brand-primary">
                    Elite Global School
                </h2>
             </motion.div>
        </div>

        {/* --- THE BALL --- */}
        <motion.div
          // Responsive Top position: 35% on mobile (between image/text), 40% on desktop
          className="absolute top-[35%] lg:top-[40%] left-[5%] sm:left-[10%] z-40 pointer-events-none"
          style={{ x: ballX, y: ballY }}
        >
            <motion.button
              onClick={goNext}
              className="relative pointer-events-auto z-10"
              style={{ rotate: ballRotate }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Responsive Size: w-14 on mobile, w-20 on desktop */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl relative overflow-hidden">
              <Image
                  src="/assets/ball.png"
                  alt="Football"
                  fill
                  className="object-contain"
              />
              </div>
            </motion.button>
            
            {/* Ghost Trail (Responsive Size) */}
            <motion.div 
                className="absolute inset-0 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-black/5 blur-md -z-10"
                style={{ x: -10 }} 
            />
        </motion.div>

        {/* --- TRACK --- */}
        <motion.div style={{ x }} className="flex h-full">
          {ITEMS.map((item, index) => (
            <div
              key={item.no}
              className="min-w-full h-full flex items-center justify-center px-4 md:px-12 relative"
            >
              {/* Responsive Grid: cols-1 on mobile, cols-2 on desktop */}
              <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* LEFT: TEXT CONTENT */}
                {/* Mobile Order: 2 (Bottom), Desktop Order: 1 (Left) */}
                <div className="relative z-10 order-2 lg:order-1 pt-4 lg:pt-0">
                   {/* Giant Number: Smaller on mobile (text-[6rem]) */}
                   <div className="absolute -top-12 lg:-top-24 -left-4 lg:-left-10 text-[6rem] sm:text-[9rem] lg:text-[12rem] font-black text-black/5 select-none pointer-events-none leading-none">
                     {item.no}
                   </div>

                   <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: false, amount: 0.5 }}
                     className="relative pl-2"
                   >
                     <div className="overflow-hidden mb-2 sm:mb-4">
                        <motion.div variants={maskTextVariants}>
                            <span className="px-3 py-1 rounded-full text-brand-secondary text-xs sm:text-md font-bold uppercase tracking-widest bg-white/50 backdrop-blur-sm border border-gray-100">
                                {item.tag}
                            </span>
                        </motion.div>
                     </div>

                     <div className="overflow-hidden mb-3 sm:mb-6">
                        <motion.h3 
                            variants={maskTextVariants}
                            // Responsive text size: 4xl (mob) -> 7xl (desk)
                            className="text-4xl sm:text-5xl lg:text-7xl font-black text-brand-primary leading-tight"
                        >
                            {item.title}
                        </motion.h3>
                     </div>

                     <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        // Responsive text size: sm (mob) -> xl (desk)
                        className="text-sm sm:text-base lg:text-xl text-slate-600 max-w-md leading-relaxed"
                     >
                        {item.desc}
                     </motion.p>

                     <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4 sm:mt-8"
                     >
                        <Link href="/about" className="group inline-flex items-center gap-3 font-semibold text-base sm:text-lg text-brand-secondary pb-1 hover:text-brand-accent transition-colors">
                            Read More
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                     </motion.div>
                   </motion.div>
                </div>

                {/* RIGHT: IMAGE REVEAL */}
                {/* Mobile Order: 1 (Top), Desktop Order: 2 (Right) */}
                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end mt-12 lg:mt-0">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        // Responsive Aspect Ratio: video (16/9) on mobile to save vertical space, 4/3 on desktop
                        className="relative w-full max-w-[600px] aspect-video lg:aspect-[4/3]"
                    >
                        <div className="absolute inset-0 overflow-hidden shadow-2xl">
                             <motion.div variants={imageScaleVariants} className="w-full h-full relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                             </motion.div>
                        </div>
                        <motion.div 
                            variants={curtainVariants}
                            className="absolute inset-0 z-20 "
                            style={{ backgroundColor: item.color }} 
                        />
                    </motion.div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}