import { ArrowRight, Download } from "lucide-react";

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
    <section id="home" className="relative overflow-hidden pt-20 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_55%_45%_at_72%_0%,rgba(198,165,122,0.11),transparent_62%)]"
        aria-hidden
      />
      <Container className="relative grid items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-accent font-medium">
              {hero.eyebrow}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 sm:px-2.5 py-0.5 text-[11px] sm:text-xs font-medium text-emerald-400">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              {site.status}
            </span>
          </div>

          <h1 className="mt-4 sm:mt-5 max-w-3xl text-[2rem] min-[390px]:text-[2.25rem] sm:text-5xl lg:text-[4.35rem] leading-[1.1] sm:leading-[1.05] font-medium tracking-[-0.035em] text-balance text-foreground break-words">
            {lead}
            <span className="text-accent">{accent}</span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xl text-pretty text-base sm:text-xl leading-relaxed text-foreground/90">
            {hero.supporting}
          </p>

          <p className="mt-3 sm:mt-4 max-w-xl text-pretty text-sm sm:text-base leading-relaxed text-muted">
            {hero.summary}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col min-[420px]:flex-row flex-wrap gap-2.5 sm:gap-3">
            <Button asChild size="lg" className="w-full min-[420px]:w-auto justify-center">
              <a href="#projects">
                View My Work
                <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full min-[420px]:w-auto justify-center">
              <a
                href={site.resume.url}
                download={site.resume.filename}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download aria-hidden />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="w-full min-[420px]:w-auto justify-center">
              <a href="#contact">{"Let's Connect"}</a>
            </Button>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <SocialLinks />
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-muted">
              <span>{site.location}</span>
              <span className="text-white/20" aria-hidden>
                /
              </span>
              <span className="text-foreground/80">{site.availability}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <SystemDiagram />
        </div>
      </Container>
    </section>
  );
}
