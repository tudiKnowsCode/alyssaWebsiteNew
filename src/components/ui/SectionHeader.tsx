import { T } from "@/lib/tokens";
import { ReactNode } from "react";

interface SectionHeaderProps {
  kicker?: string;
  children: ReactNode;
  align?: "center" | "left" | "right";
  color?: string;
}

export function SectionHeader({ kicker, children, align = "center", color }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: align, marginBottom: 36 }}>
      {kicker && (
        <div className="sec-hdr-kicker" style={{ fontFamily: T.script, color: T.pink, fontSize: 38, lineHeight: 1, marginBottom: 4 }}>
          {kicker}
        </div>
      )}
      <h2 className="sec-hdr-h2" style={{ fontFamily: T.display, fontWeight: 700, fontSize: 56, lineHeight: 1.05, letterSpacing: -0.5, color: color || T.pink, margin: 0 }}>
        {children}
      </h2>
    </div>
  );
}
