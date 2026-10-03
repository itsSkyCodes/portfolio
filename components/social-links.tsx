import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  showLabels?: boolean;
};

const links = [
  { href: site.linkedin, label: "LinkedIn", icon: LinkedInIcon, external: true },
  { href: site.github, label: "GitHub", icon: GitHubIcon, external: true },
  { href: `mailto:${site.email}`, label: "Email", icon: Mail, external: false },
] as const;

/** Shared LinkedIn, GitHub, and email links. */
export function SocialLinks({ className, showLabels = false }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.label}>
            <a
              href={link.href}
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-full border border-white/10 text-sm text-muted transition-colors hover:border-white/25 hover:text-foreground active:bg-white/10 touch-manipulation",
                showLabels ? "gap-2 px-3.5" : "size-10 px-0"
              )}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon className="size-4 shrink-0" aria-hidden />
              {showLabels ? link.label : <span className="sr-only">{link.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
