import { Globe, Mail, MapPin } from "lucide-react";
import { DashedLine } from "@/components/dashed-line";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          Get in touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Whether you&apos;re ready to start or just exploring your options,
          we&apos;re here to help.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="size-5 text-primary" />
          </div>
          <h3 className="font-heading font-semibold">Corporate office</h3>
          <address className="not-italic text-sm text-muted-foreground">
            King Fahd Road
            <br />
            Olaya District, Riyadh
            <br />
            Kingdom of Saudi Arabia
          </address>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
            <Mail className="size-5 text-primary" />
          </div>
          <h3 className="font-heading font-semibold">Email us</h3>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <a
              href="mailto:careers@mainline.sa"
              className="hover:text-foreground transition-colors"
            >
              careers@mainline.sa
            </a>
            <a
              href="mailto:press@mainline.sa"
              className="hover:text-foreground transition-colors"
            >
              press@mainline.sa
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
            <Globe className="size-5 text-primary" />
          </div>
          <h3 className="font-heading font-semibold">Follow us</h3>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              𝕏 @mainlinehq
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              in Mainline
            </a>
          </div>
        </div>
      </div>

      <DashedLine className="my-12" />

      <div className="mx-auto max-w-2xl">
        <ContactForm />
      </div>
    </section>
  );
}
