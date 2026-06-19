import { Background } from "@/components/background";
import { Features } from "@/components/blocks/features";
import { Faq } from "@/components/blocks/faq";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";

export function HomePage() {
  return (
    <>
      <Background variant="top">
        <Hero />
        <Logos />
        <Features />
        <ResourceAllocation />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <Faq />
      </Background>
    </>
  );
}
