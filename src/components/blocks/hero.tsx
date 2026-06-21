// import {
//   Blend,
//   ChartNoAxesColumn,
//   CircleDot,
//   Diamond,
// } from "lucide-react";
import {
  ShieldCheck,
  MonitorSmartphone,
  Headset,
  Network,
  Calculator,
  BadgePercent,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DashedLine } from "@/components/dashed-line";
import heroImage from "@/assets/odoo_ui.png";

// const bullets = [
//   { icon: CircleDot, label: "Real-time resource tracking" },
//   { icon: Blend, label: "Seamless team collaboration" },
//   { icon: Diamond, label: "AI-powered scheduling" },
//   { icon: ChartNoAxesColumn, label: "Advanced analytics & insights" },
// ];
const bullets = [
  { icon: Calculator, label: "Advanced Accounting & Financial Management" },
  { icon: BadgePercent, label: "Saudi VAT & Fatoora Compliant Invoicing" },
  { icon: ShieldCheck, label: "Trusted Security & Surveillance Systems" },
  { icon: MonitorSmartphone, label: "Smart POS & Business Software" },
  { icon: Network, label: "Professional IT & Network Infrastructure" },
  { icon: Headset, label: "Dedicated Technical Support & Training" },
];

export function Hero() {
  return (
    <section id="hero" className="container py-20 md:pt-25">
      <div className="flex flex-col items-stretch gap-0 lg:flex-row">
        <div className="flex flex-col justify-center py-8 lg:w-1/2 lg:pr-12">

          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Powering Saudi Businesses with Smart Technology
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
          Business software, security systems, networking, and POS solutions — all from one 
          trusted provider in Al Hofuf. We handle the technology so you can focus on your business.
          </p>

          <DashedLine className="my-8" />

          <ul className="space-y-3">
            {bullets.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm">
                <Icon className="size-4 shrink-0 text-primary" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn more</Link>
            </Button>
          </div>
        </div>

        <DashedLine orientation="vertical" className="mx-0 hidden lg:block" />

        <div className="flex items-center justify-center py-8 lg:w-1/2 lg:pl-12">
          <img
            src={heroImage}
            alt="Mainline dashboard"
            className="w-full max-w-lg rounded-2xl shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
