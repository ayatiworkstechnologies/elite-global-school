"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const FEATURES = [
    { title: "Playground", desc: "Bright, focused spaces designed for creative play and physical development.", image: "/assets/our-1.jpg" },
    { title: "Classroom", desc: "Open, safe areas where students explore, collaborate and build teamwork.", image: "/assets/our-2.jpg" },
    { title: "Campus", desc: "A secure, inspiring environment that supports learning beyond classrooms.", image: "/assets/our-3.jpg" },
    { title: "Library", desc: "A knowledge hub that encourages reading, research, and independent thinking.", image: "/assets/our-4.jpg" },
    { title: "Canteen", desc: "Hygienic, welcoming spaces serving nutritious meals for growing minds.", image: "/assets/our-5.jpg" },
];

export default function UniquenessSection() {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <section className="section-lg bg-white overflow-hidden">
            <div className="container-lg">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-lg tracking-widest text-text-muted uppercase">
                        Why Elite Global School?
                    </span>
                    <h2 className="mt-4 font-primary font-bold text-4xl lg:text-5xl text-brand-primary">
                        Our Uniqueness Well
                        <br />Defined Here
                    </h2>
                </motion.div>

                {/* OVERLAPPED STRIP */}
                <div className="relative flex justify-center items-end h-[340px]">
                    {FEATURES.map((item, index) => {
                        const total = FEATURES.length;

                        // 🔁 circular distance (key fix)
                        let distance = index - activeIndex;
                        if (distance > total / 2) distance -= total;
                        if (distance < -total / 2) distance += total;

                        const abs = Math.abs(distance);
                        const isActive = distance === 0;

                        return (
                            <motion.div
                                key={item.title}
                                onClick={() => setActiveIndex(index)}
                                animate={{
                                    x: distance * 160,          // keeps overlap
                                    scale: isActive ? 1 : abs === 1 ? 0.9 : 0.85,
                                    opacity: isActive ? 1 : abs === 1 ? 0.9 : 0.7,
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                whileHover={{ y: -6 }}
                                className={`
        absolute cursor-pointer overflow-hidden rounded-xl shadow-xl
        ${isActive ? "z-30 w-[450px] h-[280px]" :
                                        abs === 1 ? "z-20 w-[440px] h-[260px]" :
                                            "z-10 w-[440px] h-[240px]"}
      `}
                            >
                                {/* IMAGE */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-fit"
                                />

                                {/* OVERLAY */}
                                <motion.div
                                    animate={{
                                        backgroundColor: isActive
                                            ? "rgba(0,0,0,0.25)"
                                            : "rgba(0,0,0,0.45)",
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                />

                                {/* CONTENT */}
                                <div className="absolute bottom-0 p-4 text-white">
                                    <h4 className="font-primary text-2xl mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-lg leading-relaxed text-white/90">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}


                </div>
            </div>
        </section>
    );
}
