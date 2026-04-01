"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <div className="max-w-2xl">
            <h2
              className="text-sm font-semibold tracking-widest text-accent uppercase mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              About
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground/80">
              More than <span className="font-semibold text-foreground">5 years of experience</span> in
              the field of Web Development and Design, Branding, Digital
              Creatives and Marketing. Currently heading Web Front-End
              Development at{" "}
              <span className="font-semibold text-accent">ADA Asia</span> in
              Iloilo City.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted">
            <div className="flex flex-col gap-1 sm:border-r sm:border-border sm:pr-6">
              <span className="text-xs tracking-widest uppercase text-accent font-semibold">
                Experience
              </span>
              <span className="text-foreground font-medium">5+ Years</span>
            </div>
            <div className="flex flex-col gap-1 sm:border-r sm:border-border sm:pr-6">
              <span className="text-xs tracking-widest uppercase text-accent font-semibold">
                Companies
              </span>
              <span className="text-foreground font-medium">5 Companies</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-widest uppercase text-accent font-semibold">
                Education
              </span>
              <span className="text-foreground font-medium">
                BS Information Technology
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
