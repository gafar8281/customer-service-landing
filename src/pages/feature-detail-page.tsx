import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Background } from "@/components/background";
import { DashedLine } from "@/components/dashed-line";
import { getFeatureBySlug } from "@/lib/features-data";
import { NotFoundPage } from "@/pages/not-found";

export function FeatureDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const feature = getFeatureBySlug(slug ?? "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!feature) {
    return <NotFoundPage />;
  }

  return (
    <Background variant="top">
      <motion.section
        className="container pb-20 pt-28 lg:pt-36"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Link
          to="/#features"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <DashedLine className="my-8" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-muted/30">
            <img
              src={feature.image}
              alt={feature.title}
              className="h-64 w-full object-cover lg:h-full lg:min-h-[400px]"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Our Services
            </p>
            <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
              {feature.title}
            </h1>
            <p className="text-lg text-muted-foreground">{feature.description}</p>
            <DashedLine />
            <p className="leading-relaxed text-muted-foreground">
              {feature.details}
            </p>
          </div>
        </div>
      </motion.section>
    </Background>
  );
}
