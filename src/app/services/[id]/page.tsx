"use client";

import { T } from "@/lib/tokens";
import { SERVICES, FAQS } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BigButton } from "@/components/ui/BigButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";

export default function ServicePage() {
  const router = useRouter();
  const params = useParams();
  const serviceId = params.id as string;
  const s = SERVICES.find((x) => x.id === serviceId) || SERVICES[0];

  const scrollToPricing = () => {
    const el = document.getElementById("svc-pricing");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: "smooth" });
  };

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="svc-detail-outer" style={{ background: s.color, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 220, height: 220, borderRadius: "50%", background: T.paper, opacity: 0.5 }} />
        <div style={{ position: "absolute", bottom: 30, left: 40, width: 18, height: 18, borderRadius: "50%", background: T.pink }} />
        <div style={{ position: "absolute", top: 60, left: 240, width: 12, height: 12, borderRadius: "50%", background: T.yellow }} />
        <div className="svc-detail-hero" style={{ position: "relative" }}>
          <div>
            <button
              onClick={() => router.push("/services")}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: T.body, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", color: T.ink, opacity: 0.7, padding: 0, transition: "opacity .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              ← All services
            </button>
            <div style={{ fontFamily: T.script, color: T.pink, fontSize: 38, lineHeight: 1, marginTop: 12 }}>{s.grades}</div>
            <h1 className="svc-detail-h1" style={{ fontFamily: T.display, fontSize: 84, fontWeight: 700, color: T.ink, lineHeight: 1, margin: "4px 0 0", letterSpacing: -0.5 }}>
              {s.name}
            </h1>
            <p style={{ fontFamily: T.body, fontSize: 17, lineHeight: 1.6, color: T.ink, marginTop: 22, maxWidth: 560 }}>{s.long}</p>
            <div style={{ marginTop: 26, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <BigButton onClick={() => router.push("/contact")}>Book a free consult</BigButton>
              <BigButton primary={false} onClick={scrollToPricing}>See pricing</BigButton>
            </div>
          </div>
          <div className="svc-hero-img" style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -10, transform: "rotate(4deg)", background: T.paper, borderRadius: 24 }} />
            <div style={{ position: "relative", padding: 8, background: T.paper, borderRadius: 22, boxShadow: "0 12px 32px -10px rgba(58,37,50,0.18)" }}>
              <img
                src={s.image}
                alt={s.short}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: 340, objectFit: "cover", display: "block", borderRadius: 16 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="svc-detail-included" style={{ background: T.paper }}>
        {(s.id === "skills" || s.id === "meeting") ? (
          <>
            <h2 style={{ fontFamily: T.display, fontSize: 42, fontWeight: 700, color: T.pink, margin: "0 0 24px", lineHeight: 1 }}>What's Included:</h2>
            <ul className="bullets-2col" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
              {s.bullets.map((b, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 16, alignItems: "center", borderRadius: 16, padding: "16px 22px" }}>
                  <span style={{ width: 36, height: 36, borderRadius: "50%", background: s.colorDeep, color: "#fff", display: "grid", placeItems: "center", fontFamily: T.display, fontSize: 18, fontWeight: 700 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: T.body, fontSize: 16, color: T.ink }}>{b}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="included-grid">
            <div>
              <h2 style={{ fontFamily: T.display, fontSize: 56, fontWeight: 700, color: T.pink, margin: "4px 0 0", lineHeight: 1.05, letterSpacing: -0.3 }}>
                {s.included}
              </h2>
              <p style={{ fontFamily: T.body, fontSize: 15, lineHeight: 1.6, color: T.inkSoft, marginTop: 16, maxWidth: 380 }}>
                {s.sessionLen} sessions, in person or online.
              </p>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
              {s.bullets.map((b, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 16, alignItems: "center", background: i % 2 === 0 ? T.cream : T.pinkSoft, borderRadius: 16, padding: "16px 22px" }}>
                  <span style={{ width: 36, height: 36, borderRadius: "50%", background: s.colorDeep, color: "#fff", display: "grid", placeItems: "center", fontFamily: T.display, fontSize: 18, fontWeight: 700 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: T.body, fontSize: 16, color: T.ink }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Pricing */}
      <section id="svc-pricing" className="svc-pricing-sec" style={{ background: T.cream }}>
        <SectionHeader kicker="Pricing">Three Ways To<br />Work With Me.</SectionHeader>
        <div className="svc-pricing-grid" style={{ marginTop: 32 }}>
          {s.pricing.map((p) => (
            <div
              key={p.name}
              style={{
                background: p.best ? T.pink : T.paper,
                color: p.best ? "#fff" : T.ink,
                borderRadius: 24,
                padding: 32,
                position: "relative",
                transform: p.best ? "translateY(-12px)" : "none",
                boxShadow: p.best ? "0 16px 36px -10px rgba(216,59,133,0.4)" : "0 4px 0 rgba(58,37,50,0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {p.best && (
                <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%) rotate(-3deg)", background: T.yellow, color: T.ink, fontFamily: T.script, fontSize: 22, padding: "4px 20px", borderRadius: 999, boxShadow: "0 3px 0 rgba(58,37,50,0.12)" }}>
                  most chosen
                </div>
              )}
              <div style={{ fontFamily: T.display, fontSize: 30, fontWeight: 700, lineHeight: 1.05 }}>{p.name}</div>
              <div style={{ fontFamily: T.body, fontSize: 13, opacity: p.best ? 0.85 : 0.6, marginTop: 4 }}>{p.unit}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 24 }}>
                <span style={{ fontFamily: T.display, fontSize: 76, fontWeight: 700, lineHeight: 0.9 }}>${p.price}</span>
              </div>
              <div style={{ fontFamily: T.body, fontSize: 14, opacity: p.best ? 0.9 : 0.6, marginTop: 6, minHeight: 22 }}>
                {p.perSess ? `$${p.perSess} per session` : ""}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "grid", gap: 10, flex: 1 }}>
                {p.perks.map((pk) => (
                  <li key={pk} style={{ display: "flex", gap: 10, fontFamily: T.body, fontSize: 14.5, lineHeight: 1.45 }}>
                    <span style={{ color: p.best ? T.yellow : T.pink, fontWeight: 700 }}>✓</span>{pk}
                  </li>
                ))}
              </ul>
              <BigButton
                onClick={() => router.push("/contact")}
                primary={!p.best}
                style={p.best ? { background: T.yellow, color: T.ink, boxShadow: "0 5px 0 rgba(58,37,50,0.15)", marginTop: 24 } : { marginTop: 24 }}
              >
                Choose {p.name.split(" ")[0]}
              </BigButton>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24, fontFamily: T.body, fontSize: 14, color: T.inkSoft }}>
          First 30 minutes are always free · 24-hour cancellation policy · no contracts
        </div>
      </section>

      {/* FAQs */}
      <section className="svc-faq-sec" style={{ background: T.paper }}>
        <SectionHeader kicker="Common questions">Things Parents<br />Often Ask.</SectionHeader>
        <div style={{ maxWidth: 800, margin: "32px auto 0", display: "grid", gap: 12 }}>
          {[...s.faqs, ...FAQS.slice(0, 2)].map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: T.pinkSoft, borderRadius: 18, padding: "18px 26px" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{ background: "none", border: "none", cursor: "pointer", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: T.display, fontSize: 24, color: T.ink, fontWeight: 700, padding: 0, textAlign: "left", transition: "opacity .2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {q}
        <span style={{ color: T.pink, fontSize: 28, fontFamily: T.body, display: "inline-block", transition: "transform .2s", transform: open ? "rotate(45deg)" : "none", flexShrink: 0, marginLeft: 16 }}>
          +
        </span>
      </button>
      {open && (
        <p style={{ fontFamily: T.body, fontSize: 15, lineHeight: 1.6, color: T.ink, marginTop: 10, marginBottom: 0 }}>{a}</p>
      )}
    </div>
  );
}
