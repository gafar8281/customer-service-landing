import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ImageSectionProps {
  images: [string, string];
  titles: [string, string];
}

function ImageSection({ images, titles }: ImageSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-2xl">
          <img
            src={src}
            alt={titles[i]}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  label: string;
  heading: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
}

function TextSection({ label, heading, paragraphs, cta }: TextSectionProps) {
  return (
    <div className="flex flex-col justify-center gap-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">
        {label}
      </p>
      <h2 className="font-heading text-3xl font-bold md:text-4xl">{heading}</h2>
      {paragraphs.map((p) => (
        <p key={p} className="text-muted-foreground">
          {p}
        </p>
      ))}
      {cta && (
        <div>
          <Button asChild size="lg">
            <Link to={cta.href}>{cta.label}</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export function About() {
  return (
    <section className="container py-20">
      <div className="flex flex-col gap-24">
        {/* Section 1 */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <TextSection
            label="Our mission"
            heading="Built for teams that ship"
            paragraphs={[
              "To provide businesses across Saudi Arabia with integrated technology solutions that simplify operations, ensure compliance, and drive growth— supported by expert installation, training, and ongoing technical care.",
              // "We obsess over the small details that make a big difference — intuitive interfaces, lightning-fast performance, and integrations that actually work.",
            ]}
          />
          <ImageSection
            images={[
              "https://placehold.co/480x320/e8e8e0/888888?text=Team+1",
              "https://placehold.co/480x320/e8e8e0/888888?text=Office+1",
            ]}
            titles={["Team", "Office"]}
          />
        </div>

        {/* Section 2 */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ImageSection
            images={[
              "https://placehold.co/480x320/e8e8e0/888888?text=Team+2",
              "https://placehold.co/480x320/e8e8e0/888888?text=Office+2",
            ]}
            titles={["Team 2", "Office 2"]}
          />
          <TextSection
            label="Our Vision"
            heading="We're hiring across the region"
            paragraphs={[
              "To be the most trusted technology partner for businesses in the Eastern Province, known for quality, reliability, and exceptional customer support.",
              // "If you're passionate about developer tooling, design, or growth — we'd love to hear from you.",
            ]}
            // cta={{ label: "View open roles", href: "/contact" }}
          />
        </div>
      </div>
    </section>
  );
}
