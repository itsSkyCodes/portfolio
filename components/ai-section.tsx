"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container, SectionHeading } from "@/components/section";
import { aiPipeline } from "@/data/portfolio";

/** Generative AI pipeline. Copy stays visible; motion is limited to the connector. */
export function AiSection() {
  const reduced = useReducedMotion();

  return (
    <section id="ai" aria-labelledby="ai-heading" className="scroll-mt-24 border-t border-white/10 bg-[#0c0b0a] py-24 sm:py-32">
      <Container className="grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="ai-heading"
            index="05"
            eyebrow="Generative AI"
            title={aiPipeline.title}
            description={aiPipeline.subtitle}
          />
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {aiPipeline.summary}
          </p>
          <p className="mt-8 font-mono text-sm tracking-wide text-foreground/90">
            {aiPipeline.stack.join(" · ")}
          </p>
        </div>

        <div className="lg:col-span-7">
          <ol className="relative">
            <span className="absolute top-5 bottom-5 left-[15px] hidden w-px bg-white/10 sm:block" aria-hidden />
            <motion.span
              className="ai-pulse absolute left-[12px] hidden size-2 rounded-full bg-accent shadow-[0_0_12px_rgba(198,165,122,0.85)] sm:block"
              aria-hidden
              initial={false}
              animate={
                reduced
                  ? { top: "1rem", opacity: 0 }
                  : { top: ["1rem", "calc(100% - 1.25rem)"], opacity: [0, 1, 1, 0] }
              }
              transition={reduced ? { duration: 0 } : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />
            {aiPipeline.steps.map((step, index) => (
              <li key={step} className="relative pb-3 last:pb-0 sm:pl-12">
                <span className="absolute top-4 left-2 hidden size-4 rounded-full border border-accent/80 bg-[#0c0b0a] sm:block" aria-hidden />
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5">
                  <span className="text-sm text-foreground sm:text-base">{step}</span>
                  <span className="font-mono text-[11px] text-accent">0{index + 1}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
