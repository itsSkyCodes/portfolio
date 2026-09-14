import { site } from "@/data/site";

/** Shared Open Graph / Twitter card layout. Styles must stay compatible with Satori. */
export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#080808",
        color: "#f3f0e8",
        padding: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 18,
          letterSpacing: 4,
          color: "#c6a57a",
          textTransform: "uppercase",
        }}
      >
        <span>Full-Stack Software Engineer</span>
        <span>Portfolio</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -2 }}>{site.name}</div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#a8a294", maxWidth: 900 }}>
          TypeScript, Node.js, NestJS, SaaS platforms, and Generative AI.
        </div>
      </div>
      <div style={{ display: "flex", gap: 18, fontSize: 22, color: "#a8a294" }}>
        <span>SaaS</span>
        <span>·</span>
        <span>Healthcare</span>
        <span>·</span>
        <span>Inventory</span>
        <span>·</span>
        <span>Generative AI</span>
      </div>
    </div>
  );
}
