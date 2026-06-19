import { Accordion } from "radix-ui";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionRoot = Accordion.Root;
const AccordionItem = Accordion.Item;

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Trigger>) {
  return (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Content>) {
  return (
    <Accordion.Content
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </Accordion.Content>
  );
}

export { AccordionRoot as Accordion, AccordionItem, AccordionTrigger, AccordionContent };
