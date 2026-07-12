import { ImageResponse } from "next/og";

// Dynamically generated "GM" monogram favicon — matches the nav logo.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7c5cff",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -2,
          fontFamily: "sans-serif",
          borderRadius: 14,
        }}
      >
        GM
      </div>
    ),
    { ...size }
  );
}
