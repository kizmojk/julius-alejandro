"use client";

import Image from "next/image";
import prefix from "@/lib/prefix";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 sm:gap-12 lg:gap-20 items-center animate-fade-in">
          {/* Profile photo — shows first on mobile, second on desktop */}
          <div
            className="relative w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 flex-shrink-0 mx-auto lg:mx-0 order-first lg:order-last animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-accent/10 rotate-3" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-border shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <Image
                src={`${prefix}/profile-avatar.jpg`}
                alt="Julius Kevin Alejandro"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                preload
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 288px"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-accent tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Iloilo City, Philippines
              </span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] animate-fade-up"
              style={{ fontFamily: "var(--font-outfit)", animationDelay: "0.42s" }}
            >
              Julius Kevin
              <br />
              <span className="text-accent">Alejandro</span>
            </h1>

            <p
              className="text-base sm:text-xl text-muted max-w-lg leading-relaxed mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.54s" }}
            >
              <span className="sm:hidden">
                Web Designer & Developer<br />
                Multimedia Editor<br />
                Layout Artist · AI Tools Expert
              </span>
              <span className="hidden sm:inline">
                Web Designer & Developer
                <span className="mx-2 text-border">|</span>
                Multimedia Editor
                <span className="mx-2 text-border">|</span>
                Layout Artist
                <span className="mx-2 text-border">|</span>
                AI Tools Expert
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
