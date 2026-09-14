import { systemFlow } from "@/data/portfolio";

/** Technical system-flow diagram for the hero. Decorative motion, textual content stays readable. */
export function SystemDiagram() {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] p-5 shadow-[0_30px_80px_-48px_rgba(0,0,0,0.9)] sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px] opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
        aria-hidden
      />
      <figcaption className="relative flex items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">System flow</p>
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          <span className="relative flex size-1.5" aria-hidden>
            <span className="absolute inline-flex size-full rounded-full bg-accent/70 motion-safe:animate-ping" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          Production
        </p>
      </figcaption>

      <ol className="relative mt-6 space-y-2.5">
        <span className="absolute top-3 bottom-3 left-[7px] w-px bg-white/10" aria-hidden />
        <span className="spine-pulse absolute left-[4px] size-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(198,165,122,0.8)]" aria-hidden />
        {systemFlow.map((node, index) => (
          <li key={node.label} className="relative flex items-center gap-3">
            <span className="relative z-10 size-4 shrink-0 rounded-full border border-accent/70 bg-background" aria-hidden />
            <div className="flex min-w-0 flex-1 items-baseline justify-between gap-3 rounded-lg border border-white/10 bg-[#0c0c0c]/80 px-3 py-2.5">
              <span className="text-sm text-foreground">
                <span className="mr-2 font-mono text-[10px] text-accent/80">0{index + 1}</span>
                {node.label}
              </span>
              <span className="truncate font-mono text-[11px] text-muted">{node.detail}</span>
            </div>
          </li>
        ))}
      </ol>

      <p className="relative mt-5 font-mono text-[11px] leading-relaxed tracking-wide text-muted">
        API → Database → Queue → AI → Client
      </p>
    </figure>
  );
}
