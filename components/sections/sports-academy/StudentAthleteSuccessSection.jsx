"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "\"Westview Academy gave me the discipline I needed. The balance between academics and training is unmatched.\"",
    name: "Michael T.",
    classYear: "Class of '22",
    image: "/assets/avatar-1.png", 
    rating: 5,
  },
  {
    id: 2,
    quote: "\"The coaches here are mentors for life. They pushed me to be my best self on and off the court.\"",
    name: "Jessica L.",
    classYear: "Class of '23",
    image: "/assets/avatar-2.png", 
    rating: 5,
  },
  {
    id: 3,
    quote: "\"The facilities are world-class. Swimming here prepared me for nationals like nowhere else could.\"",
    name: "David R.",
    classYear: "Class of '24",
    image: "/assets/avatar-1.png", 
    rating: 5,
  },
  {
    id: 4,
    quote: "\"I learned leadership and teamwork here. The program is tough but incredibly rewarding.\"",
    name: "Sarah K.",
    classYear: "Class of '23",
    image: "/assets/avatar-2.png", 
    rating: 5,
  },
  {
    id: 5,
    quote: "\"An amazing experience that shaped my future. Highly recommend to any serious athlete.\"",
    name: "James P.",
    classYear: "Class of '25",
    image: "/assets/avatar-1.png", 
    rating: 5,
  },
];

// --- STAR COMPONENT FOR ANIMATION ---
const AnimatedStar = ({ index }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }} // Staggered entrance
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-secondary"
        initial={{ fill: "transparent", stroke: "#9ca3af" }} // Start Gray/Empty
        whileInView={{ fill: "#fb923c", stroke: "#fb923c" }} // Fill Orange
        transition={{ 
          duration: 0.8, 
          delay: 0.2 + (index * 0.15), // Sequential filling effect
          ease: "easeOut" 
        }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </motion.svg>
    </motion.div>
  );
};

export default function StudentAthleteSuccessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive Check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(2); // Desktop
      } else {
        setItemsPerView(1); // Mobile
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.25em] text-brand-secondary font-extrabold uppercase block mb-4"
          >
            Inspirational
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6 relative inline-block"
          >
            Student-Athlete Success
          </motion.h2>
        </div>

        {/* --- CAROUSEL --- */}
        <div className="relative px-0 md:px-12 max-w-7xl mx-auto">
          
          {/* LEFT BTN */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#fff7ed" }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-white text-brand-secondary transition-colors"
          >
            <ArrowLeft size={24} />
          </motion.button>

          {/* RIGHT BTN */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#fff7ed" }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12  bg-white text-brand-secondary transition-colors"
          >
            <ArrowRight size={24} />
          </motion.button>

          {/* SLIDING TRACK */}
          <div className="overflow-hidden py-10 -my-10"> {/* Extra padding for hover scaling */}
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-1/2 px-4 box-border"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" 
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-white p-8 border border-gray-100 flex flex-col md:flex-row gap-6 items-start h-full cursor-pointer"
                  >
                    {/* Profile Image */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-200">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      {/* Animated Star Rating */}
                      <div className="flex items-center mb-3 space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <AnimatedStar key={i} index={i} />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed italic mb-4">
                        {testimonial.quote}
                      </p>

                      {/* Author */}
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm font-medium">
                          {testimonial.classYear}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}