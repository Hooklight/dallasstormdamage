import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import { StructuredData } from "@/components/ui/StructuredData";
import { PHONE_NUMBER } from "@/lib/design-tokens";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title:       "First 24 Hours After a Dallas Storm — What to Do",
  description: "A practical step-by-step guide for Dallas homeowners: what to check, what to photograph, what to call, and what not to do in the first 24 hours after a storm.",
  alternates:  { canonical: "/first-24-hours-after-storm" },
  openGraph: {
    title:       "First 24 Hours After a Dallas Storm",
    description: "Practical checklist for Dallas homeowners. Bookmark this and share it.",
  },
};

const STEPS = [
  {
    step:  "1",
    title: "Make sure everyone is safe",
    body:  "Before anything else — are you and your household safe? If there is structural damage, downed power lines, flooding, or any immediate hazard: leave and call 911.",
    urgent: true,
  },
  {
    step:  "2",
    title: "Do not start cleanup yet",
    body:  "Leave storm damage in place until you have documented it. Cleaning up or making repairs before documenting can hurt your insurance claim. Take photos and video first.",
  },
  {
    step:  "3",
    title: "Photograph everything you can safely reach",
    body:  "Walk the perimeter of your home. Photograph your roof from the ground, your gutters, siding, windows, AC condenser unit, fence, and vehicles. Check inside for ceiling stains or dripping.",
  },
  {
    step:  "4",
    title: "Record the storm details",
    body:  "Note the date and time. Pull the weather report from weather.gov or a local news station. Screenshot or print the storm record — it becomes part of your documentation package.',",
  },
  {
    step:  "5",
    title: "Check your attic",
    body:  "Safely access your attic if possible. Look for new daylight, water staining, wet insulation, or drips. This is often where storm damage becomes visible before ceiling damage appears.',",
  },
  {
    step:  "6",
    title: "Emergency mitigation — if needed",
    body:  "If there is an active roof leak, place buckets and cover belongings. If there is a significant opening in the roof, get a professional tarp installed. Do not go on a wet or damaged roof.",
  },
  {
    step:  "7",
    title: "Contact us or schedule an inspection",
    body:  "Call us or fill out the form. We help you understand what you have, coordinate an independent inspection, and connect you with a specialist before you file with your insurer.',",
  },
  {
    step:  "8",
    title: "Notify your insurer",
    body:  "Once you have documentation — photos, inspection report, storm records — call your insurance company to report the claim. Having documentation ready before you call puts you in a stronger position.',",
  },
  {
    step:  "9",
    title: "Keep all receipts for emergency mitigation",
    body:  "Any money you spend on emergency tarping, water extraction, or boarding up is typically reimbursable under your policy as emergency mitigation. Keep every receipt.",
  },
];

const WHAT_NOT_TO_DO = [
  "Do not make permanent repairs before documenting and before your adjuster visits",
  "Do not discard damaged materials — the adjuster needs to see them",
  "Do not sign any contractor agreements on the day of the storm",
  "Do not let anyone pressure you into a same-day decision",
  "Do not post damage photos on social media with location data before filing",
];

const EMERGENCY_CONTACTS = [
  { label: "Emergency / structural danger", number: "911" },
  { label: "Downed power lines / electrical", number: "Oncor: (888) 313-4747" },
  { label: "Gas leak", number: "Atmos Energy: (866) 322-8667" },
  { label: "Storm damage help (us)", number: PHONE_NUMBER },
];

export default function First24HoursPage() {
  return (
    <>
      <StructuredData pageUrl="/first-24-hours-after-storm" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1d4ed8] text-white py-10 sm:py-14 print:hidden">
        <Container size="md">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold mb-2">
                First 24 Hours After a Dallas Storm
              </h1>
              <p className="text-slate-300">
                A practical checklist. Bookmark it before you need it.
              </p>
            </div>
            <TrackedPhone display="button" className="shrink-0">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {PHONE_NUMBER}
            </TrackedPhone>
          </div>
        </Container>
      </section>

      {/* Checklist */}
      <section className="py-10 sm:py-14 bg-white">
        <Container size="md">
          <div className="space-y-6">
            {STEPS.map(({ step, title, body, urgent }) => (
              <div
                key={step}
                className={`flex gap-4 p-4 rounded-xl border ${urgent ? "border-red-200 bg-red-50" : "border-slate-200 bg-white"}`}
              >
                <div className={`flex items-center justify-center h-9 w-9 rounded-full font-extrabold text-sm shrink-0 ${urgent ? "bg-red-600 text-white" : "bg-blue-600 text-white"}`}>
                  {step}
                </div>
                <div>
                  <h2 className={`font-bold mb-1 ${urgent ? "text-red-800" : "text-[#0f172a]"}`}>
                    {title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What not to do */}
          <div className="mt-10 p-5 bg-orange-50 border border-orange-200 rounded-xl">
            <h2 className="font-bold text-[#0f172a] mb-3">⚠️ What NOT to do in the first 24 hours</h2>
            <ul className="space-y-2">
              {WHAT_NOT_TO_DO.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency contacts */}
          <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-xl">
            <h2 className="font-bold text-[#0f172a] mb-3">Emergency Contacts</h2>
            <dl className="space-y-2">
              {EMERGENCY_CONTACTS.map(({ label, number }) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-3 text-sm">
                  <dt className="text-slate-500 shrink-0">{label}:</dt>
                  <dd className="font-semibold text-[#0f172a]">{number}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Related links */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-sm font-semibold text-[#0f172a] mb-3">More help:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/hail-damage-dallas",      label: "Hail Damage" },
                { href: "/emergency-roof-leak",     label: "Emergency Roof Leak" },
                { href: "/storm-damage-inspection", label: "Damage Inspection" },
                { href: "/insurance-claim-help",    label: "Insurance Documentation" },
                { href: "/contact",                 label: "Get Help Now" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 font-medium transition-colors"
                >
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
