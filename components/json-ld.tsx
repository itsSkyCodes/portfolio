import { site } from "@/data/site";
import { education, skillGroups } from "@/data/portfolio";

/** Structured data for the person profile, aligned with the resume. */
export function JsonLd() {
  const knowsAbout = skillGroups.flatMap((group) => [...group.items]);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    email: `mailto:${site.email}`,
    telephone: site.phone,
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
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
    })),
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
