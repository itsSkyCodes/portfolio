import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

/** Text field used by the contact form. */
export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-base text-foreground transition-colors placeholder:text-muted/70 hover:border-white/20 focus-visible:border-accent/70 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
