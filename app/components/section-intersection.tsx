import { cn } from "@/lib/utils";

interface SectionIntersectionProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export function SectionIntersection({
  className,
  position = "top-left",
}: SectionIntersectionProps) {
  const isLeft = position.includes("left");
  const isTop = position.includes("top");

  return (
    <div
      className={cn(
        "absolute w-16 h-16",
        isLeft ? "left-0" : "right-0",
        isTop ? "top-0" : "bottom-0",
        className
      )}
    >
      {/* Diamond marker */}
      <div
        className={cn(
          "absolute w-3 h-3 bg-surface-root border border-text-weak rotate-45 z-50",
          isLeft ? "-left-1.5" : "-right-1.5",
          isTop ? "-top-1.5" : "-bottom-1.5"
        )}
      />
    </div>
  );
}
