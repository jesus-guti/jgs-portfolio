import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  gridSize?: number;
  fadeIntensity?: number;
}

export function GridBackground({
  className,
  gridSize = 40,
  fadeIntensity = 20,
}: GridBackgroundProps) {
  return (
    <div className={cn("absolute inset-0", className)}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage: `
            linear-gradient(to right, var(--color-border-special) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border-special) 1px, transparent 1px)
          `,
        }}
      />
      {/* Radial gradient fade */}
      <div
        className="absolute inset-0 bg-surface-root"
        style={{
          maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
        }}
      />
    </div>
  );
}
