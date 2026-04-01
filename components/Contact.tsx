"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function MagneticLink({
  href,
  children,
  label,
  display,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  display?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="group flex items-center gap-3 sm:gap-4 px-5 py-4 sm:px-6 sm:py-5 rounded-[1.25rem] sm:rounded-[1.5rem] bg-card-bg border border-border shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-accent/40 hover:shadow-[0_4px_24px_rgba(45,125,123,0.1)] active:border-accent/40 transition-all duration-300"
    >
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      <div className="flex flex-col">
        <span className="text-xs text-muted tracking-wide uppercase">
          {label}
        </span>
        <span className="text-foreground font-medium text-sm">
          {display
            ? display
            : href.startsWith("mailto:")
              ? href.replace("mailto:", "")
              : href.startsWith("tel:")
                ? href.replace("tel:", "")
                : href}
        </span>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <h2
            className="text-sm font-semibold tracking-widest text-accent uppercase mb-10"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Get in Touch
          </h2>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <ScrollReveal delay={0.1}>
            <MagneticLink href="mailto:kizmojk@gmail.com" label="Email">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </MagneticLink>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MagneticLink href="tel:+639480734052" label="Phone">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </MagneticLink>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MagneticLink href="https://www.linkedin.com/in/julius-kevin-alejandro/" label="LinkedIn" display="Connect with me">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </MagneticLink>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-border">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Julius Kevin Alejandro. Iloilo City, Philippines.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
