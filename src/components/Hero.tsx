"use client";

import { T } from "@/lib/tokens";
import { SUBJECT_PILLS } from "@/lib/data";
import { Pill } from "./ui/Pill";
import { BigButton } from "./ui/BigButton";
import { WavyDivider } from "./ui/WavyDivider";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();
  return (
    <section className="hero-outer" style={{ background: T.paper }}>
      <div className="hero-grid">
        {/* Portrait */}
        <div className="hero-portrait" style={{ position: "relative", width: 280, height: 280 }}>
          <div style={{ position: "absolute", inset: -16, borderRadius: "50%", background: T.pinkSoft, transform: "rotate(8deg)" }} />
          <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: `3px dashed ${T.pink}`, opacity: 0.4 }} />
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", overflow: "hidden", border: `4px solid ${T.paper}`, boxShadow: "0 8px 24px rgba(58,37,50,0.15)" }}>
            <img src="/hero.jpg" alt="Alyssa" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 22%", display: "block" }} />
          </div>
          <div style={{ position: "absolute", top: -22, right: 30, width: 18, height: 18, borderRadius: "50%", background: T.yellow }} />
          <div style={{ position: "absolute", bottom: 10, left: -22, width: 12, height: 12, borderRadius: "50%", background: T.mint }} />
        </div>

        {/* Headline */}
        <div style={{ paddingTop: 12 }}>
          <h1
            className="hero-h1"
            style={{ fontFamily: T.display, fontSize: 76, fontWeight: 700, color: T.pink, lineHeight: 1.02, letterSpacing: -0.5, margin: 0 }}
          >
            Where learning is supported every step of the way.
          </h1>
          <p
            className="hero-body"
            style={{ fontFamily: T.body, fontSize: 16, lineHeight: 1.6, color: T.inkSoft, marginTop: 22, maxWidth: 560 }}
          >
            <i>Supporting students in grades K–12 to build confidence, strengthen skills, and achieve success across all academic areas</i> <strong>through personalized, supportive instruction.</strong>
          </p>
          <div className="hero-cta" style={{ marginTop: 28 }}>
            <BigButton onClick={() => router.push("/contact")}>Book a free consult</BigButton>
          </div>
        </div>

        {/* Subject pills */}
        <div className="hero-pills-col" style={{ position: "relative", paddingTop: 8 }}>
          <div style={{ fontFamily: T.script, color: T.pink, fontSize: 30, marginBottom: 12 }}>I tutor:</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: 10 }}>
            {SUBJECT_PILLS.map((p, i) => (
              <Pill key={p.label} bg={p.bg} style={{ marginLeft: i % 2 === 0 ? 0 : 28 }}>{p.label}</Pill>
            ))}
          </div>
        </div>
      </div>
      <div className="wave-bleed" style={{ marginTop: 64 }}>
        <WavyDivider fill={T.pinkSoft} bg={T.paper} />
      </div>
    </section>
  );
}
