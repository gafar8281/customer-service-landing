import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { DashedLine } from "@/components/dashed-line";
import { features } from "@/lib/features-data";

export function Features() {
  return (
    <section className="container py-20">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Built for Saudi Businesses.
      </p>
      <h2 className="mt-4 text-center font-heading text-3xl font-bold md:text-4xl">
        Everything Your Business Needs, Under One Roof
      </h2>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={feature.slug}
            className="flex flex-col gap-4 border-border p-0 [&:not(:nth-child(3n))]:lg:border-r [&:not(:nth-last-child(-n+3))]:lg:border-b"
          >
            {i > 0 && <DashedLine className="lg:hidden" />}
            <div className="flex flex-1 flex-col gap-6 px-0 py-8 lg:px-8 lg:py-12">
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
              <Link
                to={`/features/${feature.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Learn more <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
