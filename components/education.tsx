import { GraduationCap } from "lucide-react";

import { Container, SectionHeading } from "@/components/section";
import { education } from "@/data/portfolio";

/** Academic credentials and degrees. */
export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          id="education-heading"
          index="07"
          eyebrow="Education"
          title="Academic foundation in computer applications."
          description="Formal degrees completed with a focus on computer science, application architecture, and software development."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.degree}
              className="reveal flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-colors hover:border-accent/30"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <GraduationCap className="size-5" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-accent">{item.dates}</span>
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {item.degree}
                </h3>
                <p className="mt-2 text-base text-foreground/90">{item.institution}</p>
              </div>
              <p className="mt-6 text-sm text-muted">{item.location}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
