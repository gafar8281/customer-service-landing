import { cn } from "@/lib/utils";

interface BackgroundProps {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
}

export function Background({
  children,
  variant = "top",
  className,
}: BackgroundProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted/30",
        variant === "top" ? "rounded-b-3xl" : "rounded-t-3xl",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl",
            variant === "top" ? "-top-32 -left-32" : "-bottom-32 -right-32",
          )}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
