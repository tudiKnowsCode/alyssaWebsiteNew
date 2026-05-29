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
    // Initialise from real scroll position so browser scroll-restore doesn't flash
    setScrolled(window.scrollY > 80);

    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        // Hysteresis: engage at 80px, disengage only when back below 30px.
        // The dead-band prevents flickering when bouncing near the threshold.
        setScrolled(prev => (prev ? y > 30 : y > 80));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
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
              src="/nav.png"
              alt="Alyssa Tudino"
              className="hdr-logo"
              fetchPriority="high"
              decoding="sync"
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
