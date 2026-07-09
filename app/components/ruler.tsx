import { cn } from "@/lib/utils";

interface RulerProps {
  className?: string;
  orientation?: "vertical" | "horizontal";
  length?: number;
  tickInterval?: number;
  majorTickInterval?: number;
  mediumTickInterval?: number;
  tickDirection?: "left" | "right" | "up" | "down";
}

export function Ruler({
  className,
  orientation = "vertical",
  length = 100,
  tickInterval = 5,
  majorTickInterval = 25,
  mediumTickInterval = 10,
  tickDirection = "right",
}: RulerProps) {
  const isVertical = orientation === "vertical";

  const ticks = Array.from({ length: Math.floor(length / tickInterval) + 1 }, (_, i) => {
    const position = i * tickInterval;
    const isMajor = position % majorTickInterval === 0;
    const isMedium = !isMajor && position % mediumTickInterval === 0;
    return { position, isMajor, isMedium };
  });

  const tickLengthClass = (isMajor: boolean, isMedium: boolean) => {
    if (isMajor) return isVertical ? "w-6" : "h-6";
    if (isMedium) return isVertical ? "w-4" : "h-4";
    return isVertical ? "w-2" : "h-2";
  };

  // For vertical ruler: "left" means ticks extend left from center line, "right" means right
  // For horizontal ruler: "up" means ticks extend up, "down" means down
  const tickPositionClass = () => {
    if (!isVertical) {
      if (tickDirection === "up") return "top-1/2 ";
      return "top-1/2";
    }
    if (tickDirection === "left") return "right-1/2";
    return "left-1/2";
  };

  return (
    <div
      className={cn(
        "relative",
        isVertical ? "h-full w-8" : "w-full h-8",
        className
      )}
    >


      {ticks.map(({ position, isMajor, isMedium }) => (
        <div
          key={position}
          className={cn(
            "absolute",
            isVertical ? "left-0 w-full" : "top-0 h-full",
            isMajor ? "border-text-weak" : "border-text-weaker"
          )}
          style={{
            [isVertical ? "top" : "left"]: `${position}%`,
          }}
        >
          <div
            className={cn(
              "absolute border-current",
              isVertical
                ? `${tickPositionClass()} border-t ${tickLengthClass(isMajor, isMedium)}`
                : `${tickPositionClass()} border-l ${tickLengthClass(isMajor, isMedium)}`
            )}
          />
        </div>
      ))}
    </div>
  );
}
