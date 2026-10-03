import { Container, SectionHeading } from "@/components/section";
import { skillGroups } from "@/data/portfolio";

/** Categorized technical skills as quiet badges, not a logo wall. */
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="skills-heading"
          index="02"
          eyebrow="Skills"
          title="A stack chosen for production systems."
          description="Languages, platforms, and integrations used to design APIs, data models, real-time features, and AI pipelines."
        />
        <ul className="mt-8 sm:mt-12 grid gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li key={group.title} className="reveal rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs sm:text-sm text-foreground/90 transition-colors hover:border-accent/40">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
