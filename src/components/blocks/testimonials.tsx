import { DashedLine } from "@/components/dashed-line";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import cust1Image from "@/assets/Mohammed Al-Qahtani.jpeg";
import cust2Image from "@/assets/Faisal Al-Dossari.jpeg";
import cust3Image from "@/assets/Ahmed Al-Otaibi.jpeg";
import cust4Image from "@/assets/person7.jpeg";
import cust5Image from "@/assets/person_1.jpeg";




const testimonials = [
  {
    quote:
      "Working with Customer Service was a great experience. Our Odoo system was set up smoothly, and our business is now more organized and efficient.",
    author: "Mohammed Al-Qahtani",
    image: cust1Image,
  },
  {
    quote:
      "Customer Service made our ZATCA e-invoicing setup simple and stress-free. They guided us through every step and made sure everything was compliant.",
    author: "Faisal Al-Dossari",
    role: "CTO",
    company: "Watershed",
    image: cust2Image,
  },
  {
    quote:
      "Their support team is always quick to respond. Whether it's a software question or a technical issue, they always find the right solution.",
    author: "Ahmed Al-Otaibi",
    role: "Director of Product",
    company: "Retool",
    image: cust3Image,
  },
  {
    quote:
      "The POS system has made our daily operations much smoother. Sales tracking and inventory management are now much easier than before.",
    author: "Khalid Al-Shammari",
    role: "Head of Operations",
    company: "Ramp",
    image: cust4Image,
  },
  {
    quote:
      "Working with Customer Service has been a great experience. Every project has been handled professionally and delivered on time.",
    author: "Omar Al-Anazi",
    role: "CEO",
    company: "Descript",
    image: cust5Image,
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
                          {/* {t.role}, {t.company} */}
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
