"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Camera, Video } from "lucide-react";
import { photoItems, videoItems } from "@/data/galleryData";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("photos");

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
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all -lg ${activeTab === "photos"
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
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all  ${activeTab === "videos"
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
        {activeTab === "photos" ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
            <AnimatePresence mode="popLayout">
              {photoItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`relative group overflow-hidden ${item.className}`}
                >
                  <Link href={`/gallery/${item.slug}`} className="block w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>

                    <div className="absolute top-6 left-6 bg-white px-4 py-1.5 shadow-md ">
                      <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-md group-hover:translate-x-2 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                        <Camera size={14} /> View Gallery ({item.gallery.length}{" "}
                        photos)
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* --- VIDEOS: Inline YouTube Embeds in original grid --- */
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
            <AnimatePresence mode="popLayout">
              {videoItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`relative group overflow-hidden ${item.className}`}
                >
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
                    <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">
                      {item.tag}
                    </span>
                    <h3 className="text-white text-lg font-bold mt-1">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
