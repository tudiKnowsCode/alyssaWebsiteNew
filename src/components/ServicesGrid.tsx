"use client";

import { T } from "@/lib/tokens";
import { SERVICES } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { ImageTile } from "./ui/ImageTile";
import { BigButton } from "./ui/BigButton";
import { useRouter } from "next/navigation";

export function ServicesGrid() {
  const router = useRouter();

  const cells = [
    { type: "service" as const, s: SERVICES[0] },
    { type: "image" as const, label: "students at the kitchen table", bg: T.lilac },
    { type: "service" as const, s: SERVICES[2] },
    { type: "image" as const, label: "alyssa working with a student", bg: T.mint },
    { type: "service" as const, s: SERVICES[1] },
    { type: "image" as const, label: "study materials · still life", bg: T.sky },
  ];

  return (
    <section className="svc-outer" style={{ background: T.paper }}>
      <SectionHeader>
        Tutoring Across Every Stage<br />Of The K–12 Journey.
      </SectionHeader>
      <div className="svc-grid" style={{ marginTop: 40 }}>
        {cells.map((c, i) => {
          if (c.type === "image") {
            return <ImageTile key={i} label={c.label} bg={c.bg} color="rgba(255,255,255,0.85)" radius={20} />;
          }
          const s = c.s;
          return (
            <div
              key={i}
              style={{
                background: s.color,
                borderRadius: 20,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "transform .2s",
                boxShadow: "0 2px 0 rgba(58,37,50,0.05)",
              }}
              onClick={() => router.push(`/services/${s.id}`)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div>
                <div style={{ fontFamily: T.body, fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: T.ink, opacity: 0.7, marginBottom: 12 }}>{s.grades}</div>
                <div style={{ fontFamily: T.display, fontSize: 34, lineHeight: 1.05, color: T.ink, fontWeight: 700, marginBottom: 12 }}>{s.short}</div>
                <p style={{ fontFamily: T.body, fontSize: 14.5, lineHeight: 1.55, color: T.ink, margin: 0 }}>{s.blurb}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
                <span style={{ fontFamily: T.body, fontSize: 13, color: T.ink, opacity: 0.85 }}>From ${s.pricing[0].price}</span>
                <span style={{ fontFamily: T.body, fontSize: 12, letterSpacing: 1.6, textTransform: "uppercase", color: T.ink, fontWeight: 700 }}>Learn more →</span>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <BigButton primary={false} onClick={() => router.push("/services")} style={{ background: T.peach, color: "#fff", boxShadow: "0 4px 0 rgba(58,37,50,0.15)" }}>
          All services
        </BigButton>
      </div>
    </section>
  );
}
