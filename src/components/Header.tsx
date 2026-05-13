"use client";

import { T } from "@/lib/tokens";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!scrolled) setMenuOpen(false);
  }, [scrolled]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`hdr-root${scrolled ? " hdr-root--compact" : ""}`}
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      {/* White section — desktop: logo+tagline+socials / scrolled: logo only / mobile scrolled: logo+hamburger */}
      <div className="hdr-top" style={{ background: T.paper }}>
        <div className="hdr-spacer" />
        <div style={{ textAlign: "center" }}>
          <Link href="/" style={{ textDecoration: "none", display: "block" }}>
            <img
              src="/nav.svg"
              alt="Alyssa Tudino"
              className="hdr-logo"
              style={{ display: "block", margin: "0 auto" }}
            />
          </Link>
          <div
            className="hdr-tagline"
            style={{
              fontFamily: T.body,
              fontSize: 11,
              letterSpacing: 4,
              color: T.inkSoft,
              marginTop: 6,
              textTransform: "uppercase",
            }}
          >
            Where learning is supported every step of the way
          </div>
        </div>
        <div className="hdr-right">
          <div className="hdr-socials">
            {[
              { l: "IG", c: T.pink },
              { l: "FB", c: T.pinkHot },
              { l: "Tk", c: T.pinkDeep },
            ].map((s, i) => (
              <span
                key={i}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: s.c,
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: T.body,
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                {s.l}
              </span>
            ))}
          </div>
          <button
            className="hdr-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, lineHeight: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T.ink} strokeWidth="2.5" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Pink nav — centered links, unchanged on desktop; hidden on mobile when scrolled */}
      <nav className="hdr-nav" style={{ background: T.pink }}>
        {NAV_LINKS.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="hdr-nav-link"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontFamily: T.body,
              fontSize: 14,
              fontWeight: isActive(href) ? 700 : 500,
              letterSpacing: 1.6,
              textTransform: "uppercase",
              borderBottom: isActive(href) ? "2px solid #fff" : "2px solid transparent",
              paddingBottom: 4,
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="hdr-mobile-menu" style={{ background: T.pink }}>
          {NAV_LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                fontFamily: T.body,
                fontSize: 15,
                fontWeight: isActive(href) ? 700 : 500,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                padding: "14px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
