import { ChevronRight } from "lucide-react";
import { DashedLine } from "@/components/dashed-line";
import accountingImage from "@/assets/accounting.png";
import hardwareImage from "@/assets/hardware.png";
import cctvImage from "@/assets/cctv.png";


const features = [
  {
    title: "Accounting",
    description:
      "Smart accounting software built for Saudi VAT, Fatoora, and real-time financial control.",
    image: accountingImage,
    href: "#",
  },
  {
    title: "Hardware",
    description:
      "Enterprise-grade computers and networking equipment, supplied and installed locally.",
    image: hardwareImage,
    href: "#",
  },
  {
    title: "CCTV Systems",
    description:
      "Keep your business secure with industry-leading CCTV and surveillance solutions.",
    image: cctvImage,
    href: "#",
  },
  {
    title: "Perfomance Reports",
    description:
      "Real-time performance reports that give you instant visibility into your business.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eEor7SAqm4jpFHwNn_gwWp569NYDmWmisjicKyNhv08z0IE6fqGXP0Q&s=10",
    href: "#",
  },
  {
    title: "Payment Systems",
    description:
      "Fast, secure payment processing integrated seamlessly with your business operations.",
    image: "https://i0.wp.com/vpurshan.wpcomstaging.com/wp-content/uploads/2023/01/Electronic-Payment-System.jpg?fit=1200%2C800&ssl=1",
    href: "#",
  },
  {
    title: "Electronic Invoicing",
    description:
      "Fatoora-compliant electronic invoicing that's fast, accurate, and fully automated.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zlrQ2DI3GVeyja1SfOMtkTXTPRJEQ-FWQjpdheK6gxw3aeGXeqlJuK0&s=10",
    href: "#",
  },
  {
    title: "Inventory Management",
    description:
      "Track stock levels, suppliers, and costs in real time — never run out or overstock again.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadlb7ouK_u2nabmnh4HPmytK_4YF0RDLwn92M45StBf1Al8v9uw_zVWM&s=10",
    href: "#",
  },
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built to grow your business online.",
    image: "https://media.istockphoto.com/id/1492596364/vector/web-or-app-development-concept-with-ui-ux-elements-collage-for-web-banner-op-poster-vector.jpg?s=612x612&w=0&k=20&c=d0XznOLnxlt0Bs24dtK8Yj-I8QUR7FwDm2-7U5WbmKU=",
    href: "#",
  },
  {
    title: "Design for Employees",
    description:
      "Professional workplace designs that boost productivity and reflect your brand identity.",
    image: "https://graphicsfamily.com/wp-content/uploads/edd/2024/01/Id-Card-Employee-Information-Template.jpg",
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

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div key={feature.title} className="flex flex-col gap-4 p-0 border-border [&:not(:nth-child(3n))]:lg:border-r [&:not(:nth-last-child(-n+3))]:lg:border-b">
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
