"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera, Video, X, ChevronLeft, ChevronRight } from "lucide-react";

// --- DATA CONFIGURATION ---

const photoItems = [
  {
    id: 1,
    tag: "SPORTS",
    title: "Annual Sports day",
    image: "/assets/gallery-img-1.jpg",
    className: "md:col-span-2 md:row-span-2 h-[400px] md:h-full",
    // MANUAL LIST: Add your specific image paths here
    gallery: [
      "/assets/gallery-img-1.jpg",
      "/assets/gallery-img-2.jpg",
      "/assets/gallery-img-3.jpg",
      "/assets/gallery-img-4.jpg",
      "/assets/gallery-img-1.jpg", // Repeats for demo purposes
      "/assets/gallery-img-2.jpg",
    ],
  },
  {
    id: 2,
    tag: "REPUBLIC",
    title: "National Days",
    image: "/assets/gallery-img-2.jpg",
    className: "md:col-span-1 md:row-span-1 h-[250px]",
    gallery: [
      "/assets/gallery-img-2.jpg",
      "/assets/gallery-img-3.jpg",
      "/assets/gallery-img-4.jpg",
    ],
  },
  {
    id: 3,
    tag: "FARM",
    title: "Out Reach Program",
    image: "/assets/gallery-img-4.jpg",
    className: "md:col-span-1 md:row-span-1 h-[250px]",
    gallery: [
      "/assets/gallery-img-3.jpg",
      "/assets/gallery-img-1.jpg",
      "/assets/gallery-img-4.jpg",
      "/assets/gallery-img-2.jpg",
    ],
  },
  {
    id: 4,
    tag: "ARTS",
    title: "Extra Curricular",
    image: "/assets/gallery-img-3.jpg",
    className: "md:col-span-2 md:row-span-1 h-[250px]",
    gallery: [
      "/assets/gallery-img-4.jpg",
      "/assets/gallery-img-1.jpg",
      "/assets/gallery-img-2.jpg",
      "/assets/gallery-img-3.jpg",
      "/assets/gallery-img-4.jpg",
    ],
  },
];

const videoItems = [
  {
    id: 5,
    tag: "HIGHLIGHTS",
    title: "Annual Day 2023 Highlights",
    image: "/assets/gallery-img-1.jpg",
    className: "md:col-span-2 md:row-span-2 h-[400px] md:h-full",
  },
  {
    id: 6,
    tag: "KARATE",
    title: "Karate Championship",
    image: "/assets/gallery-img-2.jpg",
    className: "md:col-span-2 md:row-span-1 h-[250px]",
  },
  {
    id: 7,
    tag: "SCIENCE",
    title: "Science Fair Projects",
    image: "/assets/gallery-img-3.jpg",
    className: "md:col-span-2 md:row-span-1 h-[250px]",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("photos");

  // --- MODAL STATE ---
  const [selectedAlbum, setSelectedAlbum] = useState(null); // Which card was clicked?
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Which image inside the album?

  // Helper to open modal
  const openModal = (item) => {
    // Only open for photos in this specific design
    if (activeTab === "photos") {
      setSelectedAlbum(item);
      setCurrentImageIndex(0);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
  };

  // Helper to close modal
  const closeModal = () => {
    setSelectedAlbum(null);
    document.body.style.overflow = "auto";
  };

  // Navigate Main Image
  const nextImage = (e) => {
    e?.stopPropagation();
    if (!selectedAlbum) return;
    setCurrentImageIndex((prev) =>
      prev === selectedAlbum.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    if (!selectedAlbum) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedAlbum.gallery.length - 1 : prev - 1,
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedAlbum) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedAlbum]);

  const items = activeTab === "photos" ? photoItems : videoItems;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-12 h-[2px] bg-brand-secondary "></span>
              <span className="text-sm tracking-[0.25em] text-brand-secondary  font-extrabold uppercase">
                Gallery
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-brand-primary  mb-6"
            >
              Our Uniqueness Well Defined Here
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed"
            >
              A glimpse into everyday learning, celebrations, sports, and
              experiences that shape our students' journey at Elite Global
              Schools.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => setActiveTab("photos")}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all -lg ${
                activeTab === "photos"
                  ? "bg-gray-100 text-gray-900 shadow-inner"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              <Camera
                size={20}
                className={
                  activeTab === "photos" ? "text-brand-secondary " : ""
                }
              />
              Photos
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all  ${
                activeTab === "videos"
                  ? "bg-gray-100 text-gray-900 shadow-inner"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              <Video
                size={20}
                className={
                  activeTab === "videos" ? "text-brand-secondary " : ""
                }
              />
              Videos
            </button>
          </motion.div>
        </div>

        {/* --- GRID GALLERY --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openModal(item)}
                className={`relative group overflow-hidden cursor-pointer  ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>

                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 shadow-md ">
                  <span className="text-xs font-bold tracking-widest text-brand-secondary  uppercase">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-md group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                  {/* Visual cue that this opens a gallery */}
                  {activeTab === "photos" && (
                    <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <Camera size={14} /> View Gallery ({item.gallery.length}{" "}
                      photos)
                    </p>
                  )}
                </div>

                {activeTab === "videos" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50  group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* --- FULL SCREEN MODAL (LIGHTBOX) --- */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col"
          >
            {/* 1. Modal Header (Title + Close) */}
            <div className="flex justify-between items-center p-6 text-white z-10">
              <div>
                <span className="text-brand-secondary text-sm font-bold tracking-widest uppercase">
                  {selectedAlbum.tag}
                </span>
                <h3 className="text-xl font-bold">{selectedAlbum.title}</h3>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/10 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* 2. Main Image Viewer */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden px-4">
              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 z-20 p-3  bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
              >
                <ChevronLeft size={32} />
              </button>

              {/* The Image */}
              <motion.div
                key={currentImageIndex} // Key change triggers animation
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-h-[70vh] max-w-5xl"
              >
                {/* Updated to use string directly from array */}
                <Image
                  src={selectedAlbum.gallery[currentImageIndex]}
                  alt="Gallery View"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 z-20 p-3 bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* 3. Thumbnails Strip (Bottom) */}
            <div className="h-32 w-full bg-black/40 border-t border-white/10 p-4">
              <div className="flex gap-3 overflow-x-auto justify-center h-full items-center scrollbar-hide">
                {selectedAlbum.gallery.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-20 h-16 md:w-24 md:h-20 flex-shrink-0 -md overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index
                        ? "ring-2 ring-brand-secondary  scale-110 opacity-100"
                        : "opacity-50 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <Image
                      src={imgSrc} // Use the string directly
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
