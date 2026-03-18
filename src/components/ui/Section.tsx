import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Spacing = "sm" | "md" | "lg" | "xl";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  spacing?: Spacing;
  bg?: "white" | "light" | "dark" | "primary";
}

const spacingMap: Record<Spacing, string> = {
  sm: "py-8 sm:py-10",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-24",
  xl: "py-20 sm:py-32",
};

const bgMap = {
  white:   "bg-white",
  light:   "bg-slate-50",
  dark:    "bg-storm-dark text-white",
  primary: "bg-primary-700 text-white",
};

export function Section({
  as: Tag = "section",
  spacing = "md",
  bg = "white",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(spacingMap[spacing], bgMap[bg], className)} {...props}>
      {children}
    </Tag>
  );
}
