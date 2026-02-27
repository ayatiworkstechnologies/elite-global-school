"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { photoItems } from "@/data/galleryData";

export default function AlbumPage() {
    const { slug } = useParams();
    const album = photoItems.find((item) => item.slug === slug);

    // --- LIGHTBOX STATE ---
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openLightbox = (index) => {
        setSelectedIndex(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e) => {
        e?.stopPropagation();
        if (!album) return;
        setSelectedIndex((prev) =>
            prev === album.gallery.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        if (!album) return;
        setSelectedIndex((prev) =>
            prev === 0 ? album.gallery.length - 1 : prev - 1
        );
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    if (!album) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-brand-primary mb-4">
                        Album Not Found
                    </h1>
                    <Link
                        href="/gallery"
                        className="text-brand-secondary font-semibold hover:underline"
                    >
                        ← Back to Gallery
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* --- HEADER --- */}
            <section className="pt-32 pb-12 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-brand-secondary font-semibold hover:underline mb-8"
                    >
                        <ArrowLeft size={18} />
                        Back to Gallery
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-12 h-[2px] bg-brand-secondary"></span>
                            <span className="text-sm tracking-[0.25em] text-brand-secondary font-extrabold uppercase">
                                {album.tag}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                            {album.title}
                        </h1>
                        <p className="text-gray-500 text-lg">
                            {album.gallery.length} Photos
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- IMAGE GRID --- */}
            <section className="pb-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                        {album.gallery.map((imgSrc, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.02 }}
                                onClick={() => openLightbox(index)}
                                className="relative aspect-square overflow-hidden cursor-pointer group"
                            >
                                <Image
                                    src={imgSrc}
                                    alt={`${album.title} - Photo ${index + 1}`}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- LIGHTBOX --- */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 text-white z-10">
                            <div>
                                <span className="text-brand-secondary text-sm font-bold tracking-widest uppercase">
                                    {album.tag}
                                </span>
                                <h3 className="text-xl font-bold">
                                    {album.title} — {selectedIndex + 1} / {album.gallery.length}
                                </h3>
                            </div>
                            <button
                                onClick={closeLightbox}
                                className="p-2 hover:bg-white/10 transition-colors"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 relative flex items-center justify-center overflow-hidden px-4">
                            <button
                                onClick={prevImage}
                                className="absolute left-4 md:left-8 z-20 p-3 bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                            >
                                <ChevronLeft size={32} />
                            </button>

                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full max-h-[70vh] max-w-5xl"
                            >
                                <Image
                                    src={album.gallery[selectedIndex]}
                                    alt={`${album.title} - Photo ${selectedIndex + 1}`}
                                    fill
                                    unoptimized
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 md:right-8 z-20 p-3 bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="h-32 w-full bg-black/40 border-t border-white/10 p-4">
                            <div className="flex gap-3 overflow-x-auto justify-center h-full items-center scrollbar-hide">
                                {album.gallery.map((imgSrc, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedIndex(index)}
                                        className={`relative w-20 h-16 md:w-24 md:h-20 flex-shrink-0 overflow-hidden transition-all duration-300 ${selectedIndex === index
                                                ? "ring-2 ring-brand-secondary scale-110 opacity-100"
                                                : "opacity-50 hover:opacity-100 hover:scale-105"
                                            }`}
                                    >
                                        <Image
                                            src={imgSrc}
                                            alt={`Thumbnail ${index + 1}`}
                                            fill
                                            unoptimized
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
