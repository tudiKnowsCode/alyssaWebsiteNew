import { T } from "@/lib/tokens";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";

interface TestimonialsRowProps {
  limit?: number;
  bg?: string;
}

export function TestimonialsRow({ limit, bg = T.paper }: TestimonialsRowProps) {
  const list = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  const tints = [T.mint, T.peachSoft, T.yellow, T.sky];
  return (
    <section className="tmono-sec" style={{ background: bg }}>
      <SectionHeader kicker="Kind words">
        From Students<br />and Their Parents.
      </SectionHeader>
      <div className="tmono-grid" style={{ marginTop: 36 }}>
        {list.map((tm, i) => (
          <figure
            key={i}
            style={{ margin: 0, background: tints[i % tints.length], borderRadius: 22, padding: 28, transform: i % 2 === 0 ? "rotate(-0.8deg)" : "rotate(0.8deg)" }}
          >
            <div style={{ fontFamily: T.display, fontSize: 64, lineHeight: 0.5, color: T.pink }}>&ldquo;</div>
            <blockquote style={{ fontFamily: T.body, fontSize: 16, lineHeight: 1.55, margin: "10px 0 0", color: T.ink }}>{tm.quote}</blockquote>
            <figcaption style={{ marginTop: 18, fontFamily: T.body, fontSize: 14, color: T.ink }}>
              <div style={{ fontFamily: T.display, fontSize: 22, lineHeight: 1, color: T.pink }}>&mdash; {tm.who}</div>
              <div style={{ opacity: 0.7, marginTop: 4, fontSize: 13 }}>{tm.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
