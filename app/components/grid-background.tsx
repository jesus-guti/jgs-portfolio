import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  gridSize?: number;
}

export function GridBackground({
  className,
  gridSize = 8,
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage:
            "radial-gradient(ellipse 70% 65% at 50% 42%, transparent 0%, transparent 18%, black 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 65% at 50% 42%, transparent 0%, transparent 18%, black 72%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 80% at 50% 40%, hsl(0 9% 7%) 0%, hsl(0 9% 7% / 0.94) 32%, hsl(0 9% 7% / 0.45) 58%, transparent 78%)",
        }}
      />
    </div>
  );
}
