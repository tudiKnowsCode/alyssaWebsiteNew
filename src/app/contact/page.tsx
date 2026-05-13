import { T } from "@/lib/tokens";
import { CONTACT } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  const C = CONTACT;
  return (
    <>
      <Header />
      <section className="contact-hero" style={{ background: T.paper, textAlign: "center" }}>
        <div style={{ fontFamily: T.script, fontSize: 40, color: T.pink }}>Hello!</div>
        <h1 style={{ fontFamily: T.display, fontSize: 76, fontWeight: 700, color: T.pink, margin: "4px 0 0", lineHeight: 1.02, letterSpacing: -0.3 }}>
          Let&rsquo;s Find Out If<br />We&rsquo;re A Fit.
        </h1>
        <p style={{ fontFamily: T.body, fontSize: 16, lineHeight: 1.6, color: T.inkSoft, marginTop: 20, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Initial consultations of 30 minutes are free, online or in person. We&rsquo;ll talk about your student, what&rsquo;s working, what isn&rsquo;t, and whether I&rsquo;m the right fit. No commitment, no pitch.
        </p>
      </section>
      <section className="contact-sec" style={{ background: T.paper }}>
        <div className="contact-grid">
          <div style={{ background: T.pinkSoft, borderRadius: 24, padding: 32, display: "grid", gap: 18 }}>
            <div>
              <div style={{ fontFamily: T.script, fontSize: 36, color: T.pink, lineHeight: 1 }}>How to reach me</div>
              <div style={{ fontFamily: T.display, fontSize: 28, fontWeight: 700, color: T.ink, marginTop: 4 }}>Three easy ways.</div>
            </div>
            {([["Email", C.email, T.mint], ["Phone", C.phone, T.peachSoft], ["Instagram", C.ig, T.yellow]] as const).map(([k, v, c]) => (
              <div key={k} style={{ background: c, borderRadius: 16, padding: "16px 20px" }}>
                <div style={{ fontFamily: T.body, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: T.ink, opacity: 0.7 }}>{k}</div>
                <div style={{ fontFamily: T.display, fontSize: 22, color: T.ink, fontWeight: 700, marginTop: 2 }}>{v}</div>
              </div>
            ))}
            <div style={{ padding: "12px 4px", fontFamily: T.body, fontSize: 14, color: T.ink }}>
              <div style={{ fontFamily: T.script, fontSize: 22, color: T.pink, marginBottom: 4 }}>Hours</div>
              {C.hours}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
