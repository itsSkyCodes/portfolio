"use client";

import { ArrowDown, ArrowRight, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { useId, useState } from "react";

import { Container, SectionHeading } from "@/components/section";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Featured project showcase presenting all 6 production systems. */
export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          id="projects-heading"
          index="04"
          eyebrow="Projects"
          title="Production systems, shipped with constraints."
          description="Six core production systems spanning multi-tenant SaaS, Generative AI orchestration, ERP-integrated inventory, oncology diagnostics, social platforms, and real-time booking."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
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
  const contributions = "contributions" in project ? project.contributions : undefined;
  const purpose = "purpose" in project ? project.purpose : undefined;

  return (
    <article className="reveal flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 transition-colors hover:border-accent/30">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            {project.category}
          </span>
          <span className="font-mono text-xs text-muted">{project.dates}</span>
        </div>

        <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground sm:text-[1.65rem]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        {purpose ? (
          <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 text-xs sm:text-sm leading-relaxed text-foreground/90">
            <span className="font-mono uppercase tracking-wider text-[11px] text-accent block mb-1">
              Purpose
            </span>
            {purpose}
          </div>
        ) : null}

        <p className="mt-4 text-xs sm:text-sm text-foreground/90">
          <span className="text-muted">Highlight — </span>
          {project.highlight}
        </p>

        {flow ? <Flow steps={flow} /> : null}

        {technologies ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {technologies.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs sm:text-sm text-foreground/90"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-6 border-t border-white/5 pt-4">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Hide technical details & contributions" : "View key features & contributions"}
          <ChevronDown
            className={cn(
              "size-4 transition-transform motion-reduce:transition-none",
              open && "rotate-180"
            )}
            aria-hidden
          />
        </button>

        <div
          id={panelId}
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="pt-4 space-y-5" aria-hidden={!open}>
              {contributions ? (
                <div>
                  <h4 className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    <Sparkles className="size-3 text-accent" aria-hidden />
                    My Contributions
                  </h4>
                  <ul className="mt-2.5 space-y-2 text-xs sm:text-sm leading-relaxed text-foreground/90">
                    {contributions.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  Key Features & Capabilities
                </h4>
                <ul className="mt-2.5 space-y-2 text-xs sm:text-sm leading-relaxed text-muted">
                  {project.capabilities.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Flow({ steps }: { steps: readonly string[] }) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Architecture Flow</p>
      <ol className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {steps.map((step, index) => (
          <li key={step} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            <span className="rounded-md border border-white/10 bg-background px-2.5 py-1 text-xs sm:text-sm text-foreground">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <>
                <ArrowDown className="ml-3 size-3 text-accent/80 sm:ml-0 sm:hidden" aria-hidden />
                <ArrowRight className="hidden size-3 text-accent/80 sm:block" aria-hidden />
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
