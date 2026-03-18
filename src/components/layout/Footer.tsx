import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  BUSINESS_AREA,
  DISCLOSURE,
} from "@/lib/design-tokens";

const SERVICE_LINKS = [
  { href: "/hail-damage-dallas",           label: "Hail Damage in Dallas" },
  { href: "/wind-damage-roof-repair",      label: "Wind & Storm Damage" },
  { href: "/emergency-roof-leak",          label: "Emergency Roof Leak" },
  { href: "/storm-damage-inspection",      label: "Damage Inspection" },
  { href: "/insurance-claim-help",         label: "Insurance Documentation" },
  { href: "/roof-replacement-hail",        label: "Roof Replacement" },
];

const INFO_LINKS = [
  { href: "/how-it-works",                label: "How It Works" },
  { href: "/first-24-hours-after-storm",  label: "First 24 Hours" },
  { href: "/contact",                     label: "Get Help Now" },
];

export function Footer() {
  return (
    <footer className="bg-storm-dark text-slate-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-extrabold text-white text-lg">{BUSINESS_NAME}</p>
            <p className="mt-1 text-sm text-slate-400">{BUSINESS_TAGLINE}</p>
            <p className="mt-2 text-sm text-slate-400">{BUSINESS_AREA}</p>
            <div className="mt-4">
              <TrackedPhone
                display="button"
                className="bg-accent-600 hover:bg-accent-700 text-white text-sm font-bold"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Information
            </h3>
            <ul className="space-y-2">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              About
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">{DISCLOSURE}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p className="italic">{DISCLOSURE}</p>
        </div>
      </Container>
    </footer>
  );
}
