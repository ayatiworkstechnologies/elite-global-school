"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  { id: 1, quote: "\"Westview Academy gave me the discipline I needed. The balance between academics and training is unmatched.\"", name: "Michael T.", classYear: "Class of '22", image: "/assets/avatar-1.png", rating: 5 },
  { id: 2, quote: "\"The coaches here are mentors for life. They pushed me to be my best self on and off the court.\"", name: "Jessica L.", classYear: "Class of '23", image: "/assets/avatar-2.png", rating: 5 },
  { id: 3, quote: "\"The facilities are world-class. Swimming here prepared me for nationals like nowhere else could.\"", name: "David R.", classYear: "Class of '24", image: "/assets/avatar-1.png", rating: 5 },
  { id: 4, quote: "\"I learned leadership and teamwork here. The program is tough but incredibly rewarding.\"", name: "Sarah K.", classYear: "Class of '23", image: "/assets/avatar-2.png", rating: 5 },
  { id: 5, quote: "\"An amazing experience that shaped my future. Highly recommend to any serious athlete.\"", name: "James P.", classYear: "Class of '25", image: "/assets/avatar-1.png", rating: 5 },
];

const AnimatedStar = ({ index }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0.5 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <motion.svg
      xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-secondary"
      initial={{ fill: "transparent", stroke: "#9ca3af" }}
      whileInView={{ fill: "#fb923c", stroke: "#fb923c" }}
      transition={{ duration: 0.8, delay: 0.2 + (index * 0.15) }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </motion.svg>
  </motion.div>
);

export default function StudentAthleteSuccessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  const nextSlide = () => setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  const prevSlide = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

  // --- MOBILE SWIPE LOGIC ---
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && currentIndex < maxIndex) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      prevSlide();
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12">
          <motion.span className="text-sm tracking-[0.4em] text-brand-secondary font-extrabold uppercase block mb-4">
            Inspirational
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">Student-Athlete Success</h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          
          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:block">
            <button onClick={prevSlide} className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl flex items-center justify-center rounded-full text-brand-secondary hover:bg-orange-50 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl flex items-center justify-center rounded-full text-brand-secondary hover:bg-orange-50 transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>

          {/* VIEWPORT */}
          <div className="overflow-visible md:overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-full md:w-1/2 px-2 md:px-4 box-border">
                  <div className="bg-white p-6 md:p-8 border border-gray-100 flex flex-col md:flex-row gap-5 items-start h-full">
                    <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-100">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center mb-2 space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => <AnimatedStar key={i} index={i} />)}
                      </div>
                      <p className="text-gray-600 text-sm md:text-base italic mb-4">{testimonial.quote}</p>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-400 text-xs">{testimonial.classYear}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* MOBILE PAGINATION DOTS */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(Math.min(i, maxIndex))}
                className={`h-1.5 transition-all rounded-full ${
                  currentIndex === i ? "w-8 bg-brand-secondary" : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}