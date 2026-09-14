import { site } from "@/data/site";
import { skillGroups } from "@/data/portfolio";

/** Structured data for the person profile. Facts stay limited to the portfolio content. */
export function JsonLd() {
  const knowsAbout = skillGroups.flatMap((group) => [...group.items]);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Software Engineer",
    description: site.description,
    email: `mailto:${site.email}`,
    telephone: "+91-9569970184",
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: site.company,
    },
    sameAs: [site.linkedin, site.github],
    knowsAbout,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
