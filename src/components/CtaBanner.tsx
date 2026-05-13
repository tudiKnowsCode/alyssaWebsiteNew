"use client";

import { T } from "@/lib/tokens";
import { BigButton } from "./ui/BigButton";
import { useRouter } from "next/navigation";

export function CtaBanner() {
  const router = useRouter();
  return (
    <section className="cta-sec" style={{ background: T.cream }}>
      <div
        className="cta-inner"
        style={{ background: T.pink, color: "#fff", boxShadow: "0 12px 32px -8px rgba(216,59,133,0.35)" }}
      >
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
        <div style={{ position: "absolute", bottom: -30, right: 80, width: 120, height: 120, borderRadius: "50%", background: T.yellow, opacity: 0.5 }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: T.script, fontSize: 40, lineHeight: 1, marginBottom: 4 }}>Let&rsquo;s talk</div>
          <h3 className="cta-h3" style={{ fontFamily: T.display, fontSize: 48, fontWeight: 700, margin: 0, lineHeight: 1.05, letterSpacing: -0.3 }}>
            The first 30 minutes<br />are on me.
          </h3>
          <p style={{ fontFamily: T.body, fontSize: 16, lineHeight: 1.6, marginTop: 14, opacity: 0.95, maxWidth: 540 }}>
            We&rsquo;ll talk through what&rsquo;s working, what isn&rsquo;t, and whether I&rsquo;m the right fit for your student. No pressure, no pitch.
          </p>
        </div>
        <BigButton
          onClick={() => router.push("/contact")}
          primary={false}
          style={{ background: T.yellow, color: T.ink, boxShadow: "0 6px 0 rgba(58,37,50,0.15)", position: "relative" }}
        >
          Book free consult
        </BigButton>
      </div>
    </section>
  );
}
