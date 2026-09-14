"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { Container, SectionHeading } from "@/components/section";
import { experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Interactive timeline of work at Luminoguru. Details stay in the DOM for indexing. */
export function Experience() {
  const [openId, setOpenId] = useState<string>(experience.achievements[0]?.id ?? "");

  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="experience-heading"
          index="03"
          eyebrow="Experience"
          title="Production ownership, not ticket delivery."
          description="One company, a widening scope: multi-tenant SaaS, inventory systems, and a Generative AI pipeline in production."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-sm text-accent">{experience.dates}</p>
            <p className="mt-3 text-2xl font-medium tracking-tight text-foreground">{experience.company}</p>
            <p className="mt-2 text-base text-foreground/90">{experience.title}</p>
            <p className="mt-1 text-sm text-muted">{experience.promotion}</p>
            <p className="mt-4 text-sm text-muted">{experience.location}</p>
          </div>

          <ol className="relative lg:col-span-8">
            <span className="absolute top-2 bottom-2 left-[7px] hidden w-px bg-white/10 sm:block" aria-hidden />
            {experience.achievements.map((item) => (
              <li key={item.id} className="relative sm:pl-10">
                <span className="absolute top-6 left-0 hidden size-4 rounded-full border border-accent/80 bg-background sm:block" aria-hidden />
                <Achievement
                  item={item}
                  open={openId === item.id}
                  onToggle={() => setOpenId((current) => (current === item.id ? "" : item.id))}
                />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

type AchievementItem = (typeof experience.achievements)[number];

function Achievement({
  item,
  open,
  onToggle,
}: {
  item: AchievementItem;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const featured = "featured" in item && item.featured;
  const technologies = "technologies" in item ? item.technologies : undefined;
  const integrations = "integrations" in item ? item.integrations : undefined;
  const callout = "callout" in item ? item.callout : undefined;

  return (
    <article className={cn("mb-4 rounded-2xl border bg-white/[0.02] p-5 sm:p-6", featured ? "border-accent/35" : "border-white/10")}>
      <div className="flex items-start justify-between gap-4">
        <div>
          {featured ? (
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Production AI</p>
          ) : null}
          <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{item.summary}</p>
        </div>
      </div>

      {callout ? (
        <p className="mt-4 rounded-xl border border-accent/25 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-foreground/90">
          <span className="font-medium text-accent">{callout.label}.</span> {callout.detail}
        </p>
      ) : null}

      <button
        type="button"
        className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-accent"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {open ? "Hide details" : "View details"}
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
          <div className="pt-4" aria-hidden={!open}>
            <ul className="space-y-2 text-sm leading-relaxed text-muted">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            {technologies ? <Meta label="Technology" items={technologies} /> : null}
            {integrations ? <Meta label="Integrations" items={integrations} /> : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-full border border-white/10 px-3 py-1 text-sm text-foreground/90">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
