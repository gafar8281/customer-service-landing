import { DashedLine } from "@/components/dashed-line";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Customer transformed how we allocate resources. We now ship 30% faster and our PMs actually enjoy planning sprints.",
    author: "Amy Chase",
    role: "VP of Engineering",
    company: "Mercury",
    image: "https://i.pravatar.cc/48?u=amy-chase",
  },
  {
    quote:
      "Finally, a tool that gives us the visibility we need without the spreadsheet chaos. Our team adopted it in days.",
    author: "Jonas Kotara",
    role: "CTO",
    company: "Watershed",
    image: "https://i.pravatar.cc/48?u=jonas-kotara",
  },
  {
    quote:
      "The resource allocation views alone are worth the switch. We eliminated our weekly planning meetings entirely.",
    author: "Kevin Yam",
    role: "Director of Product",
    company: "Retool",
    image: "https://i.pravatar.cc/48?u=kevin-yam",
  },
  {
    quote:
      "Customer is the only tool that properly handles cross-team dependencies. It's been a game changer for us.",
    author: "Kundo Marta",
    role: "Head of Operations",
    company: "Ramp",
    image: "https://i.pravatar.cc/48?u=kundo-marta",
  },
  {
    quote:
      "The interface is so clean and intuitive. Our leadership team uses it daily to track progress across all initiatives.",
    author: "Sarah Al-Rashidi",
    role: "CEO",
    company: "Descript",
    image: "https://i.pravatar.cc/48?u=sarah-alrashidi",
  },
  {
    quote:
      "Integration with our existing tools was seamless. We were up and running in less than a day.",
    author: "Omar Khalid",
    role: "Engineering Manager",
    company: "Arc",
    image: "https://i.pravatar.cc/48?u=omar-khalid",
  },
  {
    quote:
      "We tried four other tools before Customer. Nothing else came close to handling our complex org structure.",
    author: "Lena Müller",
    role: "Project Manager",
    company: "Monzo",
    image: "https://i.pravatar.cc/48?u=lena-muller",
  },
  {
    quote:
      "The reporting features saved us hours every week. Stakeholders love the auto-generated status updates.",
    author: "James Okafor",
    role: "Program Director",
    company: "Perplexity",
    image: "https://i.pravatar.cc/48?u=james-okafor",
  },
];

interface TestimonialsProps {
  className?: string;
  dashedLineClassName?: string;
}

export function Testimonials({ className, dashedLineClassName }: TestimonialsProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
          Trusted by Our Customers
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Discover how we've helped businesses and individuals achieve their goals through our expertise and commitment.
        </p>

        <div className="relative mt-12 px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.author}
                  className="basis-4/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                    <p className="flex-1 text-sm text-muted-foreground">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.author}
                        className="size-10 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-semibold">{t.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <DashedLine className={cn("mt-20", dashedLineClassName)} />
    </section>
  );
}
