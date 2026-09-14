"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/section";
import { metrics } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Impact strip. Numbers count up only when they enter the viewport. */
export function ImpactMetrics() {
  return (
    <section aria-labelledby="impact-heading" className="border-y border-white/10">
      <h2 id="impact-heading" className="sr-only">
        Engineering impact
      </h2>
      <Container className="py-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">Engineering impact</p>
      </Container>
      <div className="mx-auto grid max-w-6xl grid-cols-2 border-t border-white/10 lg:grid-cols-5">
        {metrics.map((metric, index) => (
          <article
            key={metric.id}
            className={cn(
              "border-white/10 px-5 py-8 sm:px-8 sm:py-10",
              index < metrics.length - 1 && "border-b lg:border-b-0",
              index % 2 === 0 && index !== metrics.length - 1 && "max-lg:border-r",
              index > 0 && "lg:border-l",
              index === metrics.length - 1 && "col-span-2 border-b-0 lg:col-span-1",
            )}
          >
            <p className="font-mono text-4xl tracking-tight text-foreground sm:text-5xl">
              {"count" in metric && metric.count ? (
                <CountUp end={metric.end} suffix={metric.suffix} label={metric.label} />
              ) : (
                <span aria-label={`${metric.display} ${metric.label}`}>{metric.display}</span>
              )}
            </p>
            <p className="mt-3 max-w-[12rem] text-sm leading-snug text-muted">{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CountUp({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(end);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || reduced || started.current) return;
    started.current = true;

    const top = ref.current?.getBoundingClientRect().top ?? 0;
    const alreadyVisible = window.scrollY < 24 && top < window.innerHeight * 0.9;
    if (alreadyVisible) return;

    const controls = animate(0, end, {
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [end, inView, reduced]);

  return (
    <span ref={ref} aria-label={`${end}${suffix} ${label}`}>
      <span aria-hidden>
        {value}
        {suffix}
      </span>
    </span>
  );
}
