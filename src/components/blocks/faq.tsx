import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    category: "Getting started",
    items: [
      {
        question: "What areas do you serve?",
        answer:
          "We are based in Al Nayfiyah, Al Hofuf and proudly serve businesses across the Eastern Province of Saudi Arabia. Contact us to discuss your location and we will do our best to accommodate your needs.",
      },
      {
        question: "Which brands do you work with?",
        answer:
          "We partner with industry-leading brands including Odoo, Hikvision, Dahua, Cisco, Dell, HP, Lenovo, ZKTeco, POSBANK, and SUNMI — ensuring you always get reliable, proven technology.",
      },
    ],
  },
  // {
  //   category: "Software & Accounting",
  //   items: [
  //     {
  //       question: "Do your software solutions support Saudi VAT and Fatoora e-invoicing?",
  //       answer:
  //       "Yes. All our accounting and POS software solutions are fully compliant with Saudi VAT regulations, Fatoora e-invoicing requirements, and Zakat Authority integration — so your business stays compliant from day one.",
  //     },
  //     {
  //       question: "Can your software be used for restaurants and grocery stores?",
  //       answer:
  //         "Yes. We offer specialized software for restaurants and cafés with kitchen-to-cashier integration, food cost tracking, and profit/loss reports — as well as grocery and hypermarket solutions with barcode support and inventory management.",
  //     },
  //   ],
  // },

  
  {
    category: "Security Systems",
    items: [
      {
        question: "What security systems do you install?",
        answer:
          "We install and configure CCTV surveillance cameras, access control systems, fingerprint attendance devices, intercom systems, electronic gates, and vehicle tracking — using trusted brands like Hikvision, Dahua, and EZVIZ.",
      },
      {
        question: "Do you offer maintenance for security systems?",
        answer:
          "Yes. We provide annual maintenance contracts for all security systems we install, ensuring your equipment stays fully operational and up to date throughout the year.",
      },
    ],
  },
  {
    category: "Support & Training",
    items: [
      {
        question: "Do you offer installation and setup services?",
        answer:
        "Absolutely. We handle everything from delivery and installation to configuration and staff training — whether it is a CCTV system, POS hardware, network infrastructure, or accounting software.",
      },
    ],
  },
];

interface FaqProps {
  headerTag?: "h1" | "h2";
  className?: string;
}

export function Faq({ headerTag: Heading = "h2", className }: FaqProps) {
  return (
    <section className={cn("container py-30", className)}>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Heading className="font-heading text-3xl font-bold md:text-4xl">
            Frequently asked questions
          </Heading>
          <p className="text-muted-foreground">
            Can&apos;t find the answer you&apos;re looking for? Our team is
            happy to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-1 text-sm font-medium underline underline-offset-4 hover:text-primary transition-colors"
          >
            Contact support →
          </Link>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            {categories.map((cat) => (
              <div key={cat.category}>
                <p className="py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {cat.category}
                </p>
                {cat.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
