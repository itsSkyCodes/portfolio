import { navLinks, site } from "@/data/site";

/** Quiet closing band with identity and in-page links. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm tracking-[0.16em] text-foreground">SHYAM KUMAR YADAV</p>
          <p className="mt-2 text-sm text-muted">
            {site.role}
            <span className="mx-2 text-white/20" aria-hidden>
              /
            </span>
            {site.location}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-8 w-full max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-[11px] tracking-wide text-muted">
          © {year} {site.name}. TypeScript · Node.js · NestJS · SaaS · Generative AI
        </p>
      </div>
    </footer>
  );
}
