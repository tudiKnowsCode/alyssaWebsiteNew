"use client";

import { T } from "@/lib/tokens";
import { ABOUT } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageTile } from "@/components/ui/ImageTile";
import { Pill } from "@/components/ui/Pill";
import { BigButton } from "@/components/ui/BigButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialsRow } from "@/components/TestimonialsRow";
import { CtaBanner } from "@/components/CtaBanner";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  const A = ABOUT;

  return (
    <>
      <Header />
      <section className="about-page-hero" style={{ background: T.paper, textAlign: "center" }}>
        <h1 style={{ fontFamily: T.display, fontSize: 76, fontWeight: 700, color: T.pink, margin: "8px 0 0", lineHeight: 1.02, letterSpacing: -0.5 }}>
          Alyssa Tudino
        </h1>
      </section>

      <section className="about-page-sec" style={{ background: T.paper }}>
        <div className="about-page-grid">
          <div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: -12, right: -12, bottom: -12, background: T.peachSoft, borderRadius: 28, transform: "rotate(-3deg)" }} />
              <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", padding: 8, background: T.paper, boxShadow: "0 16px 36px -10px rgba(58,37,50,0.18)" }}>
                <ImageTile label="alyssa portrait" bg={T.pinkSoft} radius={18} h="min(560px, 75vw)" />
              </div>
              <div style={{ position: "absolute", top: -16, right: -16, background: T.yellow, color: T.ink, fontFamily: T.script, fontSize: 30, padding: "8px 22px", borderRadius: 999, transform: "rotate(8deg)", boxShadow: "0 4px 0 rgba(58,37,50,0.12)" }}>
                since 2019
              </div>
            </div>
            <div style={{ marginTop: 32, padding: 28, background: T.pinkSoft, borderRadius: 22 }}>
              <div style={{ fontFamily: T.script, fontSize: 32, color: T.pink, lineHeight: 1, marginBottom: 12 }}>Credentials</div>
              <div className="cred-grid">
                {A.credentials.map((c) => <Pill key={c} bg={T.paper}>{c}</Pill>)}
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: T.body, fontSize: 16, lineHeight: 1.75, color: T.ink }}>
              {A.paras.map((p, i) => <p key={i} style={{ margin: i ? "16px 0 0" : 0 }}>{p}</p>)}
            </div>
            <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <BigButton onClick={() => router.push("/contact")}>Book a free consult</BigButton>
              <BigButton primary={false} onClick={() => router.push("/services")}>See services</BigButton>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-sec" style={{ background: T.cream }}>
        <SectionHeader kicker="The approach">A Calm, Patient,<br />Student-Led Plan.</SectionHeader>
        <div className="approach-grid" style={{ marginTop: 32 }}>
          {[
            { c: T.mint, h: "Diagnose", b: "We start with a free 30-minute consult to figure out what's actually getting in the way — missing concept, anxiety, habits." },
            { c: T.pinkSoft, h: "Build", b: "Each plan is built around the student in front of me, not a curriculum I bought off a shelf." },
            { c: T.peachSoft, h: "Sustain", b: "We track progress weekly, share notes with parents, and adjust as life and grades shift." },
          ].map((s, i) => (
            <div key={i} style={{ background: s.c, borderRadius: 22, padding: 28, minHeight: 220 }}>
              <div style={{ fontFamily: T.script, color: T.pink, fontSize: 36, lineHeight: 1 }}>0{i + 1}</div>
              <div style={{ fontFamily: T.display, fontSize: 36, fontWeight: 700, color: T.ink, marginTop: 8, lineHeight: 1 }}>{s.h}</div>
              <p style={{ fontFamily: T.body, fontSize: 14.5, lineHeight: 1.6, color: T.ink, marginTop: 12 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsRow limit={3} />
      <CtaBanner />
      <Footer />
    </>
  );
}
