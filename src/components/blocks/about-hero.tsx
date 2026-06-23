import { DashedLine } from "@/components/dashed-line";

const stats = [
  { value: "100+", label: "Businesses Served" },
  { value: "10+", label: "Years of Experience" },
  { value: "8+", label: "Service Categories" },
  { value: "24/7", label: "Technical Support" },
];

export function AboutHero() {
  return (
    <section className="container py-30 md:pt-40">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
          Who We Are
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Your Trusted Technology Partner in Al Hofuf
        </p>
      </div>

      <div className="mt-16">
        <div className="flex flex-col divide-y divide-border lg:flex-row lg:divide-x lg:divide-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center gap-1 py-8 text-center lg:py-4"
            >
              {i > 0 && (
                <DashedLine
                  orientation="horizontal"
                  className="mb-8 lg:hidden"
                />
              )}
              <span className="font-heading text-4xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
