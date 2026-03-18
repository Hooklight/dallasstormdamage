"use client";

import { cn } from "@/lib/utils";
import { PHONE_NUMBER } from "@/lib/design-tokens";
import type { AnchorHTMLAttributes } from "react";

interface TrackedPhoneProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  override?: string;
  rawOverride?: string;
  display?: "inline" | "button" | "hero";
}

export function TrackedPhone({
  override,
  rawOverride,
  display = "inline",
  className,
  children,
  ...props
}: TrackedPhoneProps) {
  const displayNumber = override ?? PHONE_NUMBER;
  const rawNumber     = rawOverride ?? displayNumber.replace(/\D/g, "");

  function handleClick() {
    if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: "phone_click",
        phone_number: displayNumber,
      });
    }
  }

  return (
    <a
      href={`tel:${rawNumber}`}
      onClick={handleClick}
      className={cn(
        display === "inline" &&
          "font-semibold text-primary-700 hover:text-primary-900 underline underline-offset-2",
        display === "button" &&
          "inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg shadow-sm transition-colors",
        display === "hero" &&
          "inline-flex items-center gap-3 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-extrabold text-xl rounded-xl shadow-hero transition-colors",
        className,
      )}
      aria-label={`Call us at ${displayNumber}`}
      {...props}
    >
      {children ?? displayNumber}
    </a>
  );
}
