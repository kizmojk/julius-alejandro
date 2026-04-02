import ScrollReveal from "./ScrollReveal";

const jobs = [
  {
    role: "Shopify Developer",
    company: "ADA Asia",
    period: "Feb 2021 — Present",
    description:
      "Head of Web Front-End Development. Building Shopify stores, API integrations, multi-language sites for global brands like Unilever Vietnam and Amore Pacific Singapore.",
  },
  {
    role: "Senior Web Designer & Developer",
    company: "Xilium Professional",
    period: "Oct 2018 — Feb 2021",
    description:
      "Marketing creative, senior multimedia editor, videographer, photographer, and layout artist.",
  },
  {
    role: "Senior Web Designer & Developer",
    company: "Digital Swarm",
    period: "Apr 2017 — Oct 2018",
    description:
      "Senior web designer and developer, video editor, and layout artist.",
  },
  {
    role: "Marketing Creative",
    company: "Rethink Staffing",
    period: "Oct 2016 — Apr 2017",
    description:
      "Motion graphic artist, video editor, layout artist, web design and development.",
  },
  {
    role: "Multimedia Artist",
    company: "Bluqube Inc.",
    period: "Feb 2016 — Oct 2016",
    description:
      "Multimedia artist, video editor, layout artist, event stickers, web design and development, motion graphics.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <h2
            className="text-sm font-semibold tracking-widest text-accent uppercase mb-10 sm:mb-14"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Experience
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-10 sm:gap-12">
            {jobs.map((job, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative flex gap-6 sm:gap-8">
                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1.5">
                    <div className="w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full border-2 border-accent bg-background" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <span className="text-[10px] sm:text-xs text-muted tracking-wider uppercase font-medium">
                      {job.period}
                    </span>
                    <h3
                      className="text-base sm:text-lg font-semibold text-foreground mt-1"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-accent mt-0.5">
                      {job.company}
                    </p>
                    <p className="text-sm text-muted leading-relaxed mt-2">
                      {job.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
