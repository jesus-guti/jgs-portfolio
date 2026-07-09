import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "default" | "reverse" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "default",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all active:translate-x-[2px] active:translate-y-[2px]";

  const variants = {
    default: "bg-blue-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
    reverse: "bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
    neutral: "bg-text-default text-text-strong border-2 border-text-strong shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-body",
    lg: "px-6 py-3 text-heading-section",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
