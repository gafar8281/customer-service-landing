import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16">
        <div className="rounded-2xl bg-primary/10 px-8 py-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Let's Build Your Solution
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a question or ready to get started? Our team is here to help.
            
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/contact">Get started free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading font-semibold">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/#hero" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold">Social</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  Facebook <ArrowUpRight className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  LinkedIn <ArrowUpRight className="size-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Customer. All rights reserved.</p>
        </div>
      </div>

      <div className="relative aspect-[1220/192] w-full overflow-hidden text-foreground opacity-10 dark:text-primary dark:opacity-[0.13]">
        <svg
          viewBox="0 0 1220 120"
          className="absolute bottom-0 h-full w-full"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="footer-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="100%"
            textAnchor="middle"
            fontSize="170"
            fontWeight="550"
            fontFamily="DM Sans, sans-serif"
            fill="url(#footer-grad)"
          >
            Customer
          </text>
        </svg>
      </div>
    </footer>
  );
}
