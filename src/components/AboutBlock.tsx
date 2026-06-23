"use client";

import { T } from "@/lib/tokens";
import { ABOUT_HOME } from "@/lib/data";
import { Pill } from "./ui/Pill";
import { BigButton } from "./ui/BigButton";
import { useRouter } from "next/navigation";

interface AboutBlockProps {
  compact?: boolean;
}

export function AboutBlock({ compact = false }: AboutBlockProps) {
  const router = useRouter();
  const A = ABOUT_HOME;
  return (
    <section className="about-sec" style={{ background: T.pinkSoft, position: "relative" }}>
      <div className="about-grid">
        <div className="about-label-cell">
          <div style={{ fontFamily: T.script, fontSize: 44, color: T.pink, lineHeight: 1 }}>{A.label}</div>
        </div>
        <div className="about-body-cell">
          <h2 className="about-h2" style={{ fontFamily: T.display, fontSize: 56, fontWeight: 700, lineHeight: 1.05, color: T.pink, margin: 0, letterSpacing: -0.3 }}>
            {A.headline}
          </h2>
          <div style={{ marginTop: 24, fontFamily: T.body, fontSize: 15, lineHeight: 1.7, color: T.ink }}>
            {A.paras.map((p, i) => (
              <p key={i} style={{ margin: i ? "14px 0 0" : 0 }}>{p}</p>
            ))}
          </div>
          {!compact && (
            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {A.credentials.map((c) => <Pill key={c} bg={T.paper}>{c}</Pill>)}
            </div>
          )}
          <div style={{ marginTop: 28 }}>
            <BigButton onClick={() => router.push(compact ? "/about" : "/contact")}>
              {compact ? "More about Alyssa" : "Book a free consult"}
            </BigButton>
          </div>
        </div>
        <div className="about-img-col" style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -8, transform: "rotate(-3deg)", background: T.peach, borderRadius: 24 }} />
          <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: T.paper, padding: 8, boxShadow: "0 12px 32px -8px rgba(58,37,50,0.18)" }}>
            <img src="/about-block.jpg" alt="Alyssa with coffee on the stoop" style={{ width: "100%", height: "min(420px, 65vw)", objectFit: "cover", objectPosition: "50% 18%", display: "block", borderRadius: 18 }} />
          </div>
          <div style={{ position: "absolute", top: -14, right: -10, background: T.yellow, color: T.ink, fontFamily: T.script, fontSize: 28, padding: "6px 18px", borderRadius: 999, transform: "rotate(8deg)", boxShadow: "0 4px 0 rgba(58,37,50,0.1)" }}>
            since 2019
          </div>
        </div>
      </div>
    </section>
  );
}
