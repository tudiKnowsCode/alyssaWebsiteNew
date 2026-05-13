"use client";

import { T } from "@/lib/tokens";
import { SERVICES } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BigButton } from "@/components/ui/BigButton";
import { CtaBanner } from "@/components/CtaBanner";
import { useRouter } from "next/navigation";

export default function ServicesIndexPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <section className="svc-index-hero" style={{ background: T.paper, textAlign: "center" }}>
        <div style={{ fontFamily: T.script, fontSize: 38, color: T.pink }}>Services</div>
        <h1 style={{ fontFamily: T.display, fontSize: 72, fontWeight: 700, color: T.pink, margin: "4px 0 0", lineHeight: 1.05, letterSpacing: -0.3 }}>
          Three Ways We Can<br />Work Together.
        </h1>
        <p style={{ fontFamily: T.body, fontSize: 16, lineHeight: 1.6, color: T.inkSoft, marginTop: 20, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
          Pick the plan that fits where your student is. Each one comes with a free 30-minute consult before any commitment.
        </p>
      </section>
      <section className="svc-index-sec" style={{ background: T.paper }}>
        <div style={{ display: "grid", gap: 24 }}>
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="svc-index-row"
              style={{ background: s.color, borderRadius: 24, padding: 36, cursor: "pointer" }}
              onClick={() => router.push(`/services/${s.id}`)}
            >
              <div>
                <div style={{ fontFamily: T.body, fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: T.ink, opacity: 0.7, marginBottom: 8 }}>
                  {s.grades} · {s.sessionLen} sessions
                </div>
                <div style={{ fontFamily: T.display, fontSize: 44, fontWeight: 700, color: T.ink, lineHeight: 1.02 }}>{s.name}</div>
              </div>
              <p style={{ fontFamily: T.body, fontSize: 15.5, lineHeight: 1.6, color: T.ink, margin: 0 }}>{s.long}</p>
              <div className="svc-index-price">
                <div style={{ fontFamily: T.body, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: T.ink, opacity: 0.7 }}>From</div>
                <div style={{ fontFamily: T.display, fontSize: 56, fontWeight: 700, color: T.ink, lineHeight: 1 }}>${s.pricing[0].price}</div>
                <div style={{ marginTop: 14 }}>
                  <BigButton onClick={() => router.push(`/services/${s.id}`)}>View details</BigButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </>
  );
}
