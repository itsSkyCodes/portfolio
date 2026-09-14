import { Container, SectionHeading } from "@/components/section";
import { about, workSurface } from "@/data/portfolio";

/** Biography and a compact architecture surface of the work. */
export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            id="about-heading"
            index="01"
            eyebrow="About"
            title={about.title}
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {about.domains.map((domain) => (
              <li
                key={domain}
                className="rounded-full border border-white/10 px-3 py-1 text-sm text-foreground/90"
              >
                {domain}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="reveal rounded-2xl border border-white/10 bg-card/60 p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Scope of work
            </p>
            <ol className="relative mt-5 space-y-0">
              {workSurface.map((layer, index) => (
                <li key={layer.label} className="relative grid grid-cols-[1.25rem_1fr] gap-4 pb-5 last:pb-0">
                  {index < workSurface.length - 1 ? (
                    <span className="absolute top-3 bottom-0 left-[7px] w-px bg-white/10" aria-hidden />
                  ) : null}
                  <span className="relative z-10 mt-1.5 size-4 rounded-full border border-accent/70 bg-background" aria-hidden />
                  <div className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                    <p className="text-sm font-medium text-foreground">{layer.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{layer.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
