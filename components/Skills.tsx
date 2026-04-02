import ScrollReveal from "./ScrollReveal";

const designTools = [
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "After Effects",
  "InDesign",
  "Lightroom",
];

const webTools = [
  "Figma",
  "WordPress",
  "Shopify",
  "HTML5",
  "CSS3",
  "PHP",
  "JavaScript",
];

const aiTools = [
  "Claude",
  "Claude Code",
  "Prompt Engineering",
  "AI-Assisted Development",
  "AI Workflow Automation",
];

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3
        className="text-xs font-semibold tracking-widest uppercase text-accent"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card-bg border border-border text-xs sm:text-sm font-medium text-foreground/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-accent/40 hover:text-accent active:border-accent/40 active:text-accent transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <h2
            className="text-sm font-semibold tracking-widest text-accent uppercase mb-8 sm:mb-10"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Skills
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <ScrollReveal delay={0.1}>
            <SkillGroup title="Design & Media" skills={designTools} />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <SkillGroup title="Web Development" skills={webTools} />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <SkillGroup title="AI & Automation" skills={aiTools} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
