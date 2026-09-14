import type { MetadataRoute } from "next";

import { site } from "@/data/site";

/** Single-page sitemap. Canonical host comes from NEXT_PUBLIC_SITE_URL. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
