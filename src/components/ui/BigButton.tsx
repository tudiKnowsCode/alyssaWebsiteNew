"use client";

import { T } from "@/lib/tokens";
import { CSSProperties, ReactNode } from "react";

interface BigButtonProps {
  children: ReactNode;
  primary?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
}

export function BigButton({
  children,
  primary = true,
  onClick,
  style,
  type = "button",
}: BigButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(2px)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = primary
          ? "0 3px 0 rgba(216,59,133,0.35)"
          : "0 2px 0 rgba(236,91,155,0.2)";
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = primary
          ? "0 6px 0 rgba(216,59,133,0.35)"
          : "0 4px 0 rgba(236,91,155,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = primary
          ? "0 6px 0 rgba(216,59,133,0.35)"
          : "0 4px 0 rgba(236,91,155,0.2)";
      }}
      style={{
        border: "none",
        cursor: "pointer",
        background: primary ? T.pinkHot : T.paper,
        color: primary ? "#fff" : T.pink,
        padding: "14px 36px",
        borderRadius: 999,
        fontFamily: T.body,
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: 1.4,
        textTransform: "uppercase",
        boxShadow: primary
          ? "0 6px 0 rgba(216,59,133,0.35)"
          : "0 4px 0 rgba(236,91,155,0.2)",
        transition: "transform .15s, box-shadow .15s",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
