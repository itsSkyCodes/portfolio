import { Container, SectionHeading } from "@/components/section";
import { principles } from "@/data/portfolio";

/** Operating principles for how systems are designed and owned. */
export function Principles() {
  return (
    <section id="principles" aria-labelledby="principles-heading" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="principles-heading"
          index="06"
          eyebrow="Principles"
          title="How the work is approached."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <li key={principle.title} className="reveal rounded-2xl border border-white/10 p-6">
              <p className="font-mono text-[11px] text-accent">0{index + 1}</p>
              <h3 className="mt-4 text-lg font-medium tracking-tight text-foreground">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{principle.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
