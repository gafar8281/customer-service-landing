import { Background } from "@/components/background";
import { About } from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { Investors } from "@/components/blocks/investors";
import { DashedLine } from "@/components/dashed-line";

export function AboutPage() {
  return (
    <>
      <Background variant="top">
        <AboutHero />
        <About />
      </Background>
      <DashedLine className="my-0" />
      <Investors />
    </>
  );
}
