import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

/** Multi-line field used by the contact form. */
export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-36 w-full resize-y rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-base text-foreground transition-colors placeholder:text-muted/70 hover:border-white/20 focus-visible:border-accent/70 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
