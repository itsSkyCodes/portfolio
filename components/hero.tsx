import { ArrowRight } from "lucide-react";

import { Container } from "@/components/section";
import { SocialLinks } from "@/components/social-links";
import { SystemDiagram } from "@/components/system-diagram";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/portfolio";
import { site } from "@/data/site";

/** Opening statement and system-flow visual. The heading renders without waiting on animation. */
export function Hero() {
  const accentIndex = hero.heading.lastIndexOf(hero.headingAccent);
  const lead = accentIndex >= 0 ? hero.heading.slice(0, accentIndex) : hero.heading;
  const accent = accentIndex >= 0 ? hero.heading.slice(accentIndex) : "";

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_55%_45%_at_72%_0%,rgba(198,165,122,0.11),transparent_62%)]"
        aria-hidden
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">{hero.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-[2.55rem] leading-[1.05] font-medium tracking-[-0.035em] text-balance text-foreground sm:text-6xl lg:text-[4.35rem]">
            {lead}
            <span className="text-accent">{accent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/90 sm:text-xl">
            {hero.supporting}
          </p>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {hero.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
                <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">{"Let's Connect"}</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <SocialLinks />
            <p className="text-sm text-muted">
              {site.location}
              <span className="mx-2 text-white/20" aria-hidden>
                /
              </span>
              {site.company}
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <SystemDiagram />
        </div>
      </Container>
    </section>
  );
}
