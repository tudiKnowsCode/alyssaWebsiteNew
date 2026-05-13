"use client";

import { T } from "@/lib/tokens";
import { CSSProperties, useId } from "react";

interface ImageTileProps {
  label: string;
  bg?: string;
  color?: string;
  radius?: number;
  h?: number | string;
  style?: CSSProperties;
}

export function ImageTile({
  label,
  bg,
  color,
  radius = 20,
  h = "100%",
  style,
}: ImageTileProps) {
  const id = useId().replace(/:/g, "");
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: radius,
        background: bg || "rgba(58,37,50,0.06)",
        height: h,
        ...style,
      }}
    >
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <pattern
            id={"pt" + id}
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="14"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="14"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={"url(#pt" + id + ")"} />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "ui-monospace, 'JetBrains Mono', Menlo, monospace",
          fontSize: 11,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: color || "rgba(58,37,50,0.55)",
          textAlign: "center",
          padding: 16,
        }}
      >
        {label}
      </div>
    </div>
  );
}
