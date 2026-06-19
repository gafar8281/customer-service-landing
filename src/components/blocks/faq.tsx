import { Link } from "react-router-dom";
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
        question: "How do I get started with Mainline?",
        answer:
          "Sign up for a free trial at our website. No credit card required. You can invite your team and start a project in under five minutes.",
      },
      {
        question: "What does the free trial include?",
        answer:
          "The free trial gives you full access to all features for 14 days, including unlimited projects, team members, and integrations.",
      },
    ],
  },
  {
    category: "Pricing & plans",
    items: [
      {
        question: "How does pricing work?",
        answer:
          "Mainline is priced per seat, per month. We offer Starter, Growth, and Enterprise plans to fit teams of all sizes. Annual billing saves you 20%.",
      },
      {
        question: "Can I change my plan at any time?",
        answer:
          "Yes. You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes take effect at the next billing cycle.",
      },
      {
        question: "Do you offer discounts for startups or non-profits?",
        answer:
          "Yes, we offer special pricing for qualifying startups and non-profit organisations. Contact our sales team for details.",
      },
    ],
  },
  {
    category: "Technical & integrations",
    items: [
      {
        question: "Which tools does Mainline integrate with?",
        answer:
          "Mainline integrates with Jira, Notion, Asana, Confluence, Google Drive, Slack, GitHub, and many more via our open API and Zapier connector.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Absolutely. Mainline is SOC 2 Type II certified and uses end-to-end encryption. Your data is stored in ISO 27001-certified data centres.",
      },
    ],
  },
];

interface FaqProps {
  headerTag?: "h1" | "h2";
}

export function Faq({ headerTag: Heading = "h2" }: FaqProps) {
  return (
    <section className="container py-20">
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
