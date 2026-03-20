import { ImageResponse } from "next/og";

export const alt = "Dakar Fleet – Premium electric transport in Dakar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 88,
            fontWeight: 300,
            letterSpacing: "0.12em",
          }}
        >
          <span style={{ color: "#C9A84C" }}>DAKAR</span>
          <span style={{ color: "#F7F3EE" }}>FLEET</span>
        </div>
        <div style={{ color: "#F7F3EE", fontSize: 32, opacity: 0.7, textAlign: "center" }}>
          Premium chauffeur service in Dakar
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 8,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4CAF7D" }} />
          <span style={{ color: "#4CAF7D", fontSize: 22 }}>100% Electric vehicles · Available 24/7</span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            color: "#C9A84C",
            fontSize: 18,
            opacity: 0.6,
            letterSpacing: "0.15em",
          }}
        >
          dakarfleet.com/en
        </div>
      </div>
    ),
    { ...size }
  );
}
