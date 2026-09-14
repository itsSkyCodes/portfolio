/**
 * Site identity, contact details, and navigation.
 * Update social URLs here — they are the only place links are defined.
 */

export const site = {
  name: "Shyam Kumar Yadav",
  shortName: "Shyam Kumar Yadav",
  role: "Full-Stack Software Engineer",
  title: "Shyam Kumar Yadav | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in TypeScript, Node.js, NestJS, SaaS platforms, and Generative AI.",
  url: resolveSiteUrl(),
  email: "shyamsky1914@gmail.com",
  phone: "+91 9569970184",
  phoneHref: "tel:+919569970184",
  location: "Chandigarh, India",
  company: "Luminoguru Pvt. Ltd.",
  linkedin: "https://www.linkedin.com/in/shyam-kumar-yadav-5827431a6",
  github: "https://github.com/shyamkumaryadav",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return "http://localhost:3000";
  return configured.replace(/\/$/, "");
}
