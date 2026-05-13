import { T } from "@/lib/tokens";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialsRow } from "@/components/TestimonialsRow";
import { CtaBanner } from "@/components/CtaBanner";

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <section className="reviews-hero" style={{ background: T.paper, textAlign: "center" }}>
        <div style={{ fontFamily: T.script, fontSize: 40, color: T.pink }}>Kind words</div>
        <h1 style={{ fontFamily: T.display, fontSize: 76, fontWeight: 700, color: T.pink, margin: "4px 0 0", lineHeight: 1.02, letterSpacing: -0.3 }}>
          Notes From Real<br />Students &amp; Parents.
        </h1>
      </section>
      <TestimonialsRow />
      <CtaBanner />
      <Footer />
    </>
  );
}
