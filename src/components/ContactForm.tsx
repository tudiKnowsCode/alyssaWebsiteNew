"use client";

import { T } from "@/lib/tokens";
import { SERVICES } from "@/lib/data";
import { BigButton } from "./ui/BigButton";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "", grade: "", subject: "", note: "" });
  const update = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));

  const inputCss: React.CSSProperties = {
    width: "100%", border: "none", borderRadius: 14, padding: "14px 18px",
    background: T.cream, fontFamily: T.body, fontSize: 15, color: T.ink,
    outline: "none", boxSizing: "border-box",
  };
  const labelCss: React.CSSProperties = {
    display: "block", fontFamily: T.body, fontSize: 12, letterSpacing: 1.5,
    textTransform: "uppercase", color: T.inkSoft, marginBottom: 6,
  };

  if (submitted) {
    return (
      <div style={{ background: T.mint, borderRadius: 24, padding: 40, minHeight: 480, display: "grid", placeItems: "center", textAlign: "center" }}>
        <div>
          <div style={{ fontFamily: T.script, color: T.pink, fontSize: 56 }}>Thank you!</div>
          <h3 style={{ fontFamily: T.display, fontSize: 40, color: T.ink, fontWeight: 700, margin: "8px 0 16px", lineHeight: 1.1 }}>
            Got it — I&rsquo;ll be in touch within 24 hours.
          </h3>
          <p style={{ fontFamily: T.body, fontSize: 15, color: T.ink, lineHeight: 1.6, maxWidth: 380, margin: "0 auto" }}>
            Most parents hear back the same day. If you don&rsquo;t see anything, check the spam folder or text me directly.
          </p>
          <div style={{ marginTop: 24 }}>
            <BigButton primary={false} onClick={() => { setSubmitted(false); setData({ name: "", email: "", phone: "", grade: "", subject: "", note: "" }); }}>
              Send another
            </BigButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      style={{ background: T.paper, border: `2px solid ${T.pinkSoft}`, borderRadius: 24, padding: 32, display: "grid", gap: 16 }}
    >
      <div style={{ fontFamily: T.script, fontSize: 36, color: T.pink, lineHeight: 1 }}>Tell me a bit</div>
      <div style={{ fontFamily: T.display, fontSize: 28, fontWeight: 700, color: T.ink, marginTop: -6 }}>about your student</div>
      <div className="form-2col">
        <label><span style={labelCss}>Your name</span><input style={inputCss} value={data.name} onChange={(e) => update("name", e.target.value)} required /></label>
        <label><span style={labelCss}>Email</span><input type="email" style={inputCss} value={data.email} onChange={(e) => update("email", e.target.value)} required /></label>
      </div>
      <label><span style={labelCss}>Phone (optional)</span><input style={inputCss} value={data.phone} onChange={(e) => update("phone", e.target.value)} /></label>
      <div className="form-2col">
        <label>
          <span style={labelCss}>Grade level</span>
          <select style={{ ...inputCss, appearance: "none" }} value={data.grade} onChange={(e) => update("grade", e.target.value)}>
            <option value="">Select grade</option>
            {["K–2", "3–5", "6–8", "9–10", "11–12"].map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
        <label>
          <span style={labelCss}>Service</span>
          <select style={{ ...inputCss, appearance: "none" }} value={data.subject} onChange={(e) => update("subject", e.target.value)}>
            <option value="">Pick a service</option>
            {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.short}</option>)}
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label>
        <span style={labelCss}>What would you like help with?</span>
        <textarea rows={4} style={{ ...inputCss, resize: "none" }} value={data.note} onChange={(e) => update("note", e.target.value)} placeholder="What's been hard? What would feel like a win?" />
      </label>
      <BigButton type="submit" style={{ marginTop: 8, justifySelf: "start" }}>Send request</BigButton>
    </form>
  );
}
