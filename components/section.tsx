import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Centered page column with consistent horizontal padding. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  id: string;
};

/** Numbered section heading used across the page. */
export function SectionHeading({ index, eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="reveal max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        {index} / {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-3xl font-medium tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
