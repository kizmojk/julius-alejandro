"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import prefix from "@/lib/prefix";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Designs", href: "#designs" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-14 sm:h-16">
        <a
          href="#"
          className="text-sm font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          JKA<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-muted hover:text-accent tracking-wide uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${prefix}/Julius-Alejandro-Resume.pdf`}
            download
            className="ml-3 px-4 py-1.5 text-xs font-semibold text-white bg-accent hover:bg-accent-light rounded-full tracking-wide uppercase transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex flex-col gap-1 w-8 h-8 items-center justify-center cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-sm font-medium text-muted hover:text-accent tracking-wide uppercase transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${prefix}/Julius-Alejandro-Resume.pdf`}
                download
                className="mt-2 py-2.5 text-sm font-semibold text-accent tracking-wide uppercase"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
