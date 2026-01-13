"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function AccurateDeepDiscovery() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  // Camera & Surface logic
  const zoomIn = useTransform(smoothProgress, [0, 0.2], [1, 2.5]);
  const fadeOut = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  
  // Underground logic
  const soilMover = useTransform(smoothProgress, [0.1, 1], ["100%", "0%"]);
  const rootGrowth = useTransform(smoothProgress, [0.3, 0.9], [0, 1]);
  
  // Floating Particles (Parallax)
  const particleMove = useTransform(smoothProgress, [0, 1], [0, -1000]);

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-[#0a0705] overflow-hidden">
      
      {/* 1. THE SURFACE (Sky & Tree) */}
      <motion.section 
        style={{ opacity: fadeOut, scale: zoomIn }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#f8fafc]"
      >
        <div className="relative">
          {/* Detailed Sapling Trunk */}
          <div className="w-2 h-40 bg-gradient-to-b from-[#4a2c1d] to-[#2d1a10] rounded-full shadow-xl" />
          
          {/* Leaves with varying shades of green */}
          <motion.div style={{ rotate: -40 }} className="absolute -top-4 -left-8 w-12 h-16 bg-[#2d5a27] rounded-full shadow-inner border-r-4 border-black/10" />
          <motion.div style={{ rotate: 30 }} className="absolute top-2 -right-8 w-14 h-18 bg-[#3e7d39] rounded-full shadow-inner border-l-4 border-black/10" />
          <motion.div style={{ rotate: -10 }} className="absolute top-10 -left-4 w-10 h-14 bg-[#4d9c47] rounded-full shadow-inner border-r-4 border-black/10" />
        </div>
        <div className="mt-12 text-center">
          <h1 className="text-5xl font-serif text-[#1a2e1a] tracking-tight">SARVATA</h1>
          <div className="h-px w-24 bg-[#1a2e1a]/20 mx-auto mt-4" />
          <p className="text-[#1a2e1a]/40 text-xs uppercase tracking-[0.3em] mt-4 font-bold">Nature is Deep</p>
        </div>
      </motion.section>

      {/* 2. THE UNDERGROUND (Rising Soil) */}
      <motion.section 
        style={{ y: soilMover }}
        className="fixed inset-0 z-30 bg-[#160f0a]"
      >
        {/* Grainy Soil Texture Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
        
        {/* Parallax Floating Particles (Rocks/Debris) */}
        <motion.div style={{ y: particleMove }} className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white/5 rounded-full blur-sm"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                top: Math.random() * 5000 + 'px',
                left: Math.random() * 100 + '%'
              }}
            />
          ))}
        </motion.div>

        {/* ROOT SYSTEM SVG */}
        <div className="relative w-full h-full flex justify-center">
          <svg width="800" height="1200" viewBox="0 0 800 1200" className="drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]">
            <defs>
              <filter id="organic">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
              </filter>
            </defs>

            {/* Organic Roots (using complex Bezier for realism) */}
            {[
              "M400 0 C400 100 200 150 150 450", 
              "M400 0 C400 250 350 400 300 800",
              "M400 0 C400 250 450 400 500 800",
              "M400 0 C400 100 600 150 650 450"
            ].map((path, i) => (
              <motion.path
                key={i}
                d={path}
                fill="transparent"
                stroke="#5c3d2e"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#organic)"
                style={{ pathLength: rootGrowth }}
              />
            ))}
          </svg>

          {/* 3. THE SEEDS (Geometric Gems) */}
          <div className="absolute inset-0">
            {[
              { x: 150, y: 450, title: "Seed of Inquiry" },
              { x: 300, y: 800, title: "Seed of Empathy" },
              { x: 500, y: 800, title: "Seed of Action" },
              { x: 650, y: 450, title: "Seed of Wisdom" }
            ].map((seed, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                style={{ left: seed.x, top: seed.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
              >
                {/* Glowing Core */}
                <div className="relative w-12 h-16 bg-gradient-to-t from-[#8a5d2e] to-[#fbbf24] rounded-full shadow-[0_0_40px_rgba(251,191,36,0.3)] group-hover:shadow-[#fbbf24] transition-all duration-700">
                  <motion.div 
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-2 bg-white/20 rounded-full blur-sm"
                  />
                </div>
                
                {/* Modern Label Design */}
                <div className="mt-6 px-4 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                   <p className="text-[10px] text-amber-200 uppercase tracking-widest font-bold">{seed.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Space for Scrolling */}
      <div className="h-[600vh] pointer-events-none" />
    </div>
  );
}