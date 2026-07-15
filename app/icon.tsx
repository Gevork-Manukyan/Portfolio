import { ImageResponse } from "next/og";

// Dynamically generated "GM" monogram favicon — matches the nav logo.
export const size = { width: 96, height: 96 };
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
          fontSize: 50,
          fontWeight: 700,
          letterSpacing: -3,
          fontFamily: "sans-serif",
          borderRadius: 20,
        }}
      >
        GM
      </div>
    ),
    { ...size }
  );
}
