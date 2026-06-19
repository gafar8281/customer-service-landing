import { Checkbox } from "radix-ui";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

function CheckboxRoot({
  className,
  ...props
}: React.ComponentProps<typeof Checkbox.Root>) {
  return (
    <Checkbox.Root
      className={cn(
        "border-input ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <Checkbox.Indicator className="flex items-center justify-center text-current">
        <Check className="size-3" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}

export { CheckboxRoot as Checkbox };
