import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import prefix from "@/lib/prefix";

const projects = [
  {
    title: "Rizman Ruzaini",
    url: "https://rizmanruzaini.com/",
    description: "Luxury Fashion & Couture",
    color: "#8b6f4e",
    screenshot: "screenshot-rizman.jpg",
  },
  {
    title: "Laneige Singapore",
    url: "https://sg.laneige.com/",
    description: "K-Beauty & Skincare",
    color: "#1a6fa0",
    screenshot: "screenshot-laneige.jpg",
  },
  {
    title: "Sulwhasoo Singapore",
    url: "https://sg.sulwhasoo.com/",
    description: "Luxury Skincare",
    color: "#7a4b2e",
    screenshot: "screenshot-sulwhasoo.jpg",
  },
  {
    title: "KEFTS Singapore",
    url: "https://kefts.com.sg/",
    description: "LNG Energy & Trading",
    color: "#2d5a7b",
    screenshot: "screenshot-kefts.jpg",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.12}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col rounded-[1.5rem] sm:rounded-[2rem] bg-card-bg border border-border shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all duration-300 sm:duration-500 overflow-hidden"
      >
        {/* Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={`${prefix}/${project.screenshot}`}
            alt={`${project.title} website screenshot`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between flex-1 p-5 sm:p-6">
          <div>
            <p className="text-[10px] sm:text-xs text-muted tracking-wide uppercase mb-1.5">
              {project.description}
            </p>
            <h3
              className="text-base sm:text-lg font-semibold text-foreground transition-colors duration-300"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span className="group-hover:text-accent group-active:text-accent transition-colors duration-300">
                {project.title}
              </span>
            </h3>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs text-muted/60 tracking-wider font-mono truncate mr-3">
              {project.url.replace("https://", "").replace(/\/$/, "")}
            </span>
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border group-hover:border-accent/40 group-hover:bg-accent/10 group-active:border-accent/40 group-active:bg-accent/10 transition-all duration-300">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-4 sm:h-4 text-muted group-hover:text-accent group-active:text-accent transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </div>
        </div>

        {/* Accent bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left"
          style={{ background: project.color }}
        />
      </a>
    </ScrollReveal>
  );
}

export default function Portfolio() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <h2
            className="text-sm font-semibold tracking-widest text-accent uppercase mb-8 sm:mb-10"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Selected Work
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.url} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
