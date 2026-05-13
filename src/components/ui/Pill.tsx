import { T } from "@/lib/tokens";
import { CSSProperties, ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  bg?: string;
  color?: string;
  style?: CSSProperties;
}

export function Pill({ children, bg, color, style }: PillProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: bg || T.pinkSoft,
        color: color || T.ink,
        padding: "8px 18px",
        borderRadius: 999,
        fontFamily: T.body,
        fontWeight: 500,
        fontSize: 14,
        boxShadow: "0 2px 0 rgba(58,37,50,0.08)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
