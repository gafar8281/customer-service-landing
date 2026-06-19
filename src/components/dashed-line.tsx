import { cn } from "@/lib/utils";

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function DashedLine({
  orientation = "horizontal",
  className,
}: DashedLineProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={cn("hidden h-full w-px shrink-0 lg:block", className)}
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 4px, var(--border) 4px, var(--border) 8px)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />
    );
  }

  return (
    <div
      className={cn("h-px w-full shrink-0", className)}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, transparent, transparent 4px, var(--border) 4px, var(--border) 8px)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    />
  );
}
