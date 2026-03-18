"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import { BUSINESS_NAME, PHONE_NUMBER } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, AlertTriangle } from "lucide-react";

const NAV_LINKS = [
  { href: "/hail-damage-dallas",        label: "Hail Damage" },
  { href: "/wind-damage-roof-repair",   label: "Wind Damage" },
  { href: "/emergency-roof-leak",       label: "Emergency Leak" },
  { href: "/storm-damage-inspection",   label: "Inspection" },
  { href: "/insurance-claim-help",      label: "Insurance Help" },
  { href: "/how-it-works",              label: "How It Works" },
  { href: "/contact",                   label: "Get Help" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else            document.body.style.overflow  = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 bg-white transition-shadow duration-200",
          scrolled ? "shadow-elevated" : "border-b border-slate-100",
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-extrabold text-primary-700 text-lg shrink-0"
              aria-label={`${BUSINESS_NAME} — home`}
            >
              <AlertTriangle className="h-5 w-5 text-accent-500" aria-hidden="true" />
              <span className="hidden sm:block">{BUSINESS_NAME}</span>
              <span className="sm:hidden">DSD</span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop phone */}
            <TrackedPhone display="button" className="hidden md:inline-flex shrink-0">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {PHONE_NUMBER}
            </TrackedPhone>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
            >
              {mobileOpen
                ? <X  className="h-6 w-6" aria-hidden="true" />
                : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </Container>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          hidden={!mobileOpen}
          className="lg:hidden border-t border-slate-100 bg-white"
        >
          <Container>
            <nav aria-label="Mobile navigation" className="py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      </header>

      {/* Sticky mobile call button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <TrackedPhone
          display="hero"
          className="w-full rounded-none py-4 text-base justify-center"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now — {PHONE_NUMBER}
        </TrackedPhone>
      </div>
    </>
  );
}
