"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const layouts = [
  {
    title: "L'Occitane en Provence",
    category: "Beauty & Skincare",
    image: "/figma-loccitane.jpg",
    color: "#c5a644",
  },
  {
    title: "LIVA Honda",
    category: "Automotive Marketplace",
    image: "/figma-liva.jpg",
    color: "#d42027",
  },
  {
    title: "Kawasaki",
    category: "Motorcycle Brand",
    image: "/figma-kawasaki.jpg",
    color: "#6cba41",
  },
  {
    title: "Le Creuset",
    category: "Premium Cookware",
    image: "/figma-lecreuset.jpg",
    color: "#e07b2e",
  },
];

export default function LayoutPortfolio() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <h2
            className="text-sm font-semibold tracking-widest text-accent uppercase mb-8 sm:mb-10"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Layout Design
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {layouts.map((layout, i) => (
            <ScrollReveal key={layout.title} delay={i * 0.1}>
              <motion.button
                onClick={() => setSelected(i)}
                className="group relative w-full text-left rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-card-bg border border-border shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={layout.image}
                    alt={`${layout.title} — Figma layout design`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14L21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                      View full
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6">
                  <p className="text-[10px] sm:text-xs text-muted tracking-wide uppercase mb-1.5">
                    {layout.category}
                  </p>
                  <h3
                    className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {layout.title}
                  </h3>
                </div>

                {/* Accent bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: layout.color }}
                />
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative w-full max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={layouts[selected].image}
                  alt={`${layouts[selected].title} — Figma layout design`}
                  fill
                  className="object-contain bg-black"
                  sizes="100vw"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between text-white/80 px-1">
                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {layouts[selected].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/50">
                    {layouts[selected].category} — Figma Layout Design
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(selected > 0 ? selected - 1 : layouts.length - 1);
                    }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(selected < layouts.length - 1 ? selected + 1 : 0);
                    }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
