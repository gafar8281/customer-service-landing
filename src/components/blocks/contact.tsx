import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { DashedLine } from "@/components/dashed-line";
// import { ContactForm } from "./contact-form";

function GoogleMapEmbed() {
  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-border">
      <iframe
        src="https://maps.google.com/maps?q=25.3352294,49.5540405&z=15&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office location"
      />
    </div>
  );
}

export function Contact() {
  return (
    <section className="container py-30 md:pt-40">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          Get in touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Whether you&apos;re ready to start or just exploring your options,
          we&apos;re here to help.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="size-5 text-primary" />
          </div>
          <h3 className="font-heading font-semibold">Office</h3>
          <address className="not-italic text-sm text-muted-foreground">
            Al Nayfiyah, Al Hofuf
            {/* <br />
            Olaya District, Riyadh */}
            <br />
            Kingdom of Saudi Arabia
          </address>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
            <Phone className="size-5 text-primary" />
          </div>
          <h3 className="font-heading font-semibold">Phone</h3>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <a
              href="tel:+966505916894"
              className="hover:text-foreground transition-colors"
            >
              +966 50 591 6894
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
            <Mail className="size-5 text-primary" />
          </div>
          <h3 className="font-heading font-semibold">Email us</h3>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <a
              href="mailto:x5312542@hotmail.com"
              className="hover:text-foreground transition-colors"
            >
              x5312542@hotmail.com
            </a>
            {/* <a
              href="mailto:press@mainline.sa"
              className="hover:text-foreground transition-colors"
            >
              press@mainline.sa
            </a> */}
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
            <Globe className="size-5 text-primary" />
          </div>
          <h3 className="font-heading font-semibold">Follow us</h3>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              fb @customer
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              in @customer
            </a>
          </div>
        </div>
      </div>

     

      <DashedLine className="my-12" />

      <div className="mx-auto max-w-2xl">
        {/* <ContactForm /> */}
        <GoogleMapEmbed />
      </div>
    </section>
  );
}
