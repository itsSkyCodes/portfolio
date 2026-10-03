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
        {metrics.map((metric, index) => {
          const isLast = index === metrics.length - 1;
          return (
            <article
              key={metric.id}
              className={cn(
                "border-white/10 px-4 py-5 sm:px-6 sm:py-8 md:px-8 md:py-10 flex flex-col justify-center",
                index < metrics.length - 1 && "border-b lg:border-b-0",
                index % 2 === 0 && index !== metrics.length - 1 && "max-lg:border-r",
                index > 0 && "lg:border-l",
                isLast && "col-span-2 border-b-0 lg:col-span-1",
              )}
            >
              <div className={cn(isLast ? "flex flex-row items-baseline justify-between sm:flex-col sm:items-start" : "")}>
                <p className="font-mono text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground font-medium">
                  {"count" in metric && metric.count ? (
                    <CountUp end={metric.end} suffix={metric.suffix} />
                  ) : (
                    <span>{metric.display}</span>
                  )}
                </p>
                <p className={cn("text-xs sm:text-sm leading-snug text-muted", isLast ? "mt-0 sm:mt-2.5" : "mt-2 sm:mt-2.5 max-w-[12rem]")}>
                  {metric.label}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
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
    <span ref={ref}>
      <span aria-hidden="true">
        {value}
        {suffix}
      </span>
      <span className="sr-only">
        {end}
        {suffix}
      </span>
    </span>
  );
}
