import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08080a",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,92,255,0.25), transparent)",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#9a9aa6",
            fontFamily: "monospace",
            marginBottom: 24,
          }}
        >
          {profile.socials.github?.replace("https://", "") || "portfolio"}
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
          {profile.name}
        </div>
        <div
          style={{
            fontSize: 44,
            marginTop: 20,
            background: "linear-gradient(100deg, #7c5cff, #22d3ee, #f471b5)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.title}
        </div>
        <div style={{ fontSize: 26, color: "#9a9aa6", marginTop: 28, maxWidth: 900 }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
