import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

/** Fallback for unknown routes. */
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-start justify-center px-5 py-32 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight">This page is not part of the site.</h1>
      <p className="mt-4 max-w-md text-muted">The link may be outdated. The portfolio itself is still here.</p>
      <Link href="/" className="mt-8 text-sm text-foreground underline decoration-accent/70 underline-offset-4">
        Back to the portfolio
      </Link>
    </main>
  );
}
