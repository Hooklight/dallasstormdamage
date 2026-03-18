import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "emergency";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:   "bg-slate-100 text-slate-700",
  success:   "bg-success-50 text-success-700",
  warning:   "bg-warning-50 text-warning-600",
  danger:    "bg-danger-50 text-danger-700",
  info:      "bg-primary-50 text-primary-700",
  emergency: "bg-danger-600 text-white animate-pulse-slow",
};

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
