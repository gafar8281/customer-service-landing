import { ChevronRight } from "lucide-react";
import { DashedLine } from "@/components/dashed-line";

const features = [
  {
    title: "Triage & Prioritize",
    description:
      "Automatically surface the highest-impact tasks and allocate your team's time where it matters most.",
    image: "https://placehold.co/480x320/f5f5f0/888888?text=Triage+Card",
    href: "#",
  },
  {
    title: "Cycle Planning",
    description:
      "Plan sprints and delivery cycles with confidence. Balance workloads before problems arise.",
    image: "https://placehold.co/480x320/f5f5f0/888888?text=Cycle+Card",
    href: "#",
  },
  {
    title: "Portfolio Overview",
    description:
      "Get a bird's-eye view of every project and initiative across your entire organisation.",
    image: "https://placehold.co/480x320/f5f5f0/888888?text=Overview+Card",
    href: "#",
  },
];

export function Features() {
  return (
    <section className="container py-20">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Measure twice. Cut once.
      </p>
      <h2 className="mt-4 text-center font-heading text-3xl font-bold md:text-4xl">
        Everything your team needs
      </h2>

      <div className="mt-12 flex flex-col divide-y divide-border lg:flex-row lg:divide-x lg:divide-y-0">
        {features.map((feature, i) => (
          <div key={feature.title} className="flex flex-col gap-4 p-0">
            {i > 0 && <DashedLine className="lg:hidden" />}
            <div className="flex flex-1 flex-col gap-6 px-0 py-8 lg:px-8">
              <div className="overflow-hidden rounded-xl border border-border bg-muted/30">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="font-heading text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <a
                href={feature.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Learn more <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
