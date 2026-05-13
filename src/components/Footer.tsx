import { T } from "@/lib/tokens";
import { CONTACT, SERVICES } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="ftr-sec" style={{ background: T.pink, color: "#fff" }}>
      <div className="ftr-grid">
        <div>
          <img src="/nav.svg" alt="Alyssa Tudino" style={{ height: 56, display: "block" }} />
          <p style={{ fontFamily: T.body, fontSize: 14, lineHeight: 1.6, marginTop: 18, maxWidth: 320, opacity: 0.92 }}>
            Where learning is supported every step of the way.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: T.display, fontSize: 26, marginBottom: 10 }}>Site</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontFamily: T.body, fontSize: 14 }}>
            {([["Home", "/"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"]] as const).map(([l, href]) => (
              <li key={href}>
                <Link href={href} style={{ color: "#fff", textDecoration: "none", opacity: 0.92 }}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: T.display, fontSize: 26, marginBottom: 10 }}>Services</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontFamily: T.body, fontSize: 14 }}>
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link href={`/services/${s.id}`} style={{ color: "#fff", textDecoration: "none", opacity: 0.92 }}>{s.short}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: T.display, fontSize: 26, marginBottom: 10 }}>Hello</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontFamily: T.body, fontSize: 14, opacity: 0.92 }}>
            <li>{CONTACT.email}</li>
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.area}</li>
          </ul>
        </div>
      </div>
      <div className="ftr-bottom" style={{ fontFamily: T.body, fontSize: 12, opacity: 0.85 }}>
        <span>© 2026 Tudino Learning</span>
      </div>
    </footer>
  );
}
