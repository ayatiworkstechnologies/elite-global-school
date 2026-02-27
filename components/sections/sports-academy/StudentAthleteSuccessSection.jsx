"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

/* ───────────────────────────────────
   PARENT TESTIMONIALS
─────────────────────────────────── */
const testimonials = [
  {
    id: 1,
    grade: "Pre KG",
    location: "Chennai",
    paragraphs: [
      "We were looking for a school where our child would feel safe and happy during her first school experience. At Elite Global School, the teachers are extremely approachable and warm.",
      "My daughter comes home singing rhymes and explaining what she learned through activities and play. There is no pressure, no fear, just joyful learning. We can clearly see her confidence growing every week.",
    ],
    highlight: "Joyful learning with no pressure",
  },
  {
    id: 2,
    grade: "LKG",
    location: "Mogappair, Chennai",
    paragraphs: [
      "We chose Elite Global School for its nurturing environment. The interaction with teachers is very smooth, they update us regularly and patiently answer every question.",
      "What impressed us most is how learning happens through games and storytelling. Our son now identifies numbers and letters naturally without feeling forced. The foundation they are building is strong and stress-free.",
    ],
    highlight: "Learning through games & storytelling",
  },
  {
    id: 3,
    grade: "UKG",
    location: "Anna Nagar, Chennai",
    paragraphs: [
      "As working parents, we wanted a school that focuses on holistic growth, not just academics. At Elite Global School, mentors genuinely understand each child. Our daughter enjoys school and looks forward to going every day.",
      "She has improved in communication and social skills, and we can clearly see that learning through play makes a big difference. There is discipline, but never pressure.",
    ],
    highlight: "Holistic growth & social skills",
  },
  {
    id: 4,
    grade: "Grade 2",
    location: "Chennai",
    paragraphs: [
      "We are very happy with the way Elite Global School balances academics and personal development. The teachers are very accessible and encourage open communication.",
      "Whenever we have concerns, they listen and guide us. The improvement in reading, comprehension, and confidence is clearly visible. The environment motivates children to learn without fear of mistakes.",
    ],
    highlight: "Balanced academics & personal growth",
  },
  {
    id: 5,
    grade: "Grade 5",
    location: "Chennai",
    paragraphs: [
      "We appreciate the structured yet encouraging approach at Elite Global School. The mentors focus on conceptual clarity rather than rote learning.",
      "Our child has become more independent and responsible in handling assignments. There is encouragement to perform well, but no unhealthy pressure. The school truly prepares children for the next stage with confidence.",
    ],
    highlight: "Conceptual clarity over rote learning",
  },
];

/* ── Animated Star ── */
const AnimatedStar = ({ index }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0.5 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-secondary"
      initial={{ fill: "transparent", stroke: "#9ca3af" }}
      whileInView={{ fill: "#fb923c", stroke: "#fb923c" }}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
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

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && currentIndex < maxIndex) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      prevSlide();
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.4em] text-brand-secondary font-extrabold uppercase block mb-4"
          >
            What Parents Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-brand-primary mb-4"
          >
            Stories of Trust & Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Hear from parents across Chennai who chose Elite Global School for
            their children&apos;s foundational years.
          </motion.p>
        </div>

        {/* ── Testimonial Slider ── */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl flex items-center justify-center rounded-full text-brand-secondary hover:bg-orange-50 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl flex items-center justify-center rounded-full text-brand-secondary hover:bg-orange-50 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <ArrowRight size={22} />
            </button>
          </div>

          {/* Viewport */}
          <div className="overflow-visible md:overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 w-full md:w-1/2 px-2 md:px-4 box-border"
                >
                  <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
                    {/* Accent bar */}
                    <div
                      className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-brand-primary"
                    />

                    {/* Quote icon */}
                    <div className="mb-4 mt-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center">
                        <Quote size={18} className="text-white" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center mb-4 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <AnimatedStar key={i} index={i} />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <div className="flex-grow space-y-3 mb-6">
                      {t.paragraphs.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-gray-600 text-sm md:text-base leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Highlight pill */}
                    <div className="mb-5">
                      <span
                        className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-brand-secondary text-white"
                      >
                        {t.highlight}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      {/* Avatar placeholder with gradient */}
                      <div
                        className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold text-sm"
                      >
                        {t.grade.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">
                          Parent of {t.grade} Student
                        </h4>
                        <p className="text-gray-400 text-xs">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="hidden md:flex justify-center mt-8">
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(Math.min(i, maxIndex))}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${currentIndex === i
                    ? "w-10 bg-brand-primary"
                    : "w-3 bg-gray-200 hover:bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(Math.min(i, maxIndex))}
                className={`h-1.5 transition-all rounded-full cursor-pointer ${currentIndex === i
                  ? "w-8 bg-brand-secondary"
                  : "w-2 bg-gray-200"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}