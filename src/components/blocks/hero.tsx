import {
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DashedLine } from "@/components/dashed-line";
import heroImage from "@/assets/hero.png";

const bullets = [
  { icon: CircleDot, label: "Real-time resource tracking" },
  { icon: Blend, label: "Seamless team collaboration" },
  { icon: Diamond, label: "AI-powered scheduling" },
  { icon: ChartNoAxesColumn, label: "Advanced analytics & insights" },
];

export function Hero() {
  return (
    <section id="hero" className="container py-20">
      <div className="flex flex-col items-stretch gap-0 lg:flex-row">
        <div className="flex flex-col justify-center py-8 lg:w-1/2 lg:pr-12">

          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Resource allocation for modern teams
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Stop guessing who&apos;s working on what. Mainline gives your team
            complete visibility into resources, timelines, and capacity — all in
            one place.
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
              <Link to="/contact">Start free trial</Link>
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
