"use client";

import { ArrowDown, ArrowRight, ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { Container, SectionHeading } from "@/components/section";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Featured project cards with expandable technical detail. */
export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="projects-heading"
          index="04"
          eyebrow="Projects"
          title="Selected systems, shipped with constraints."
          description="Healthcare data and real-time booking — two products where reliability, access control, and live state matter."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const technologies = "technologies" in project ? project.technologies : undefined;
  const flow = "flow" in project ? project.flow : undefined;

  return (
    <article className="reveal flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{project.category}</p>
        <p className="font-mono text-xs text-muted">{project.dates}</p>
      </div>
      <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>
      <p className="mt-5 text-sm text-foreground/90">
        <span className="text-muted">Highlight — </span>
        {project.highlight}
      </p>
      {flow ? <Flow steps={flow} /> : null}

      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 self-start text-sm text-foreground hover:text-accent"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Hide technical details" : "Technical details"}
        <ChevronDown className={cn("size-4 transition-transform motion-reduce:transition-none", open && "rotate-180")} aria-hidden />
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-5" aria-hidden={!open}>
            <ul className="space-y-2 text-sm leading-relaxed text-muted">
              {project.capabilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {technologies ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <li key={item} className="rounded-full border border-white/10 px-3 py-1 text-sm text-foreground/90">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function Flow({ steps }: { steps: readonly string[] }) {
  return (
    <div className="mt-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Architecture</p>
      <ol className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {steps.map((step, index) => (
          <li key={step} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            <span className="rounded-md border border-white/10 bg-background px-3 py-1.5 text-sm text-foreground">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <>
                <ArrowDown className="ml-3 size-3.5 text-accent/80 sm:ml-0 sm:hidden" aria-hidden />
                <ArrowRight className="hidden size-3.5 text-accent/80 sm:block" aria-hidden />
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
