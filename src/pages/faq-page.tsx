import { Background } from "@/components/background";
import { Faq } from "@/components/blocks/faq";
import { Testimonials } from "@/components/blocks/testimonials";
import { DashedLine } from "@/components/dashed-line";

export function FaqPage() {
  return (
    <>
      <Background variant="top">
        <Faq headerTag="h1" />
      </Background>
      <DashedLine className="my-0" />
      <Testimonials dashedLineClassName="hidden" />
    </>
  );
}
