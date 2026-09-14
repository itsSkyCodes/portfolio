import { ImageResponse } from "next/og";

import { OgCard } from "@/components/og-card";

export const alt = "Shyam Kumar Yadav | Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated social preview. No external font fetch, so the build stays reliable. */
export default function OpenGraphImage() {
  return new ImageResponse(<OgCard />, { ...size });
}
