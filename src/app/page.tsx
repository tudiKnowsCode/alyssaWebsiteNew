import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutBlock } from "@/components/AboutBlock";
import { TestimonialsRow } from "@/components/TestimonialsRow";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { T } from "@/lib/tokens";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutBlock compact />
      <ServicesGrid />
      <WavyDivider fill={T.pinkSoft} bg={T.paper} />
      <TestimonialsRow bg={T.pinkSoft} />
      <CtaBanner />
      <Footer />
    </>
  );
}
