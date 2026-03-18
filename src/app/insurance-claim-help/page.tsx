import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/templates/ServicePageLayout";

export const metadata: Metadata = {
  title:       "Storm Damage Insurance Documentation Help — Dallas Homeowners",
  description: "We help Dallas homeowners document storm damage correctly before filing an insurance claim. Not a public adjuster — just practical guidance on what to capture and when.",
  alternates:  { canonical: "/insurance-claim-help" },
};

const SECTIONS = [
  {
    heading: "What we help you with — and what we don't",
    content: (
      <>
        <p className="mb-3">
          We help Dallas homeowners document storm damage so they can file an accurate,
          well-supported insurance claim. This means: understanding what to photograph, what
          records to gather, and what to expect from the claims process.
        </p>
        <p className="font-medium text-slate-700">
          We do not file claims on your behalf, negotiate with insurers, or act as a public
          adjuster. That is licensed activity. We help with the documentation step — before
          the claim begins.
        </p>
      </>
    ),
  },
  {
    heading: "What to document before you file",
    content: (
      <>
        <p className="mb-2">The documentation stack that supports a storm damage claim:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Storm records:</strong> Date, time, and severity from weather.gov or a local station</li>
          <li><strong>Exterior photos:</strong> Roof (from ground), gutters, siding, windows, AC unit — all damage visible</li>
          <li><strong>Interior photos:</strong> Any ceiling stains, attic moisture, or visible water intrusion</li>
          <li><strong>Professional inspection report:</strong> The strongest form of documentation</li>
          <li><strong>Pre-storm photos:</strong> If you have them, extremely valuable for comparison</li>
          <li><strong>Inventory of damaged personal property:</strong> Serial numbers, purchase dates, values</li>
          <li><strong>Emergency mitigation receipts:</strong> Tarping, water extraction, boarding up</li>
        </ul>
      </>
    ),
  },
  {
    heading: "The documentation timeline that matters",
    content: (
      <ol className="list-decimal list-inside space-y-1.5">
        <li><strong>Day 0–1:</strong> Document everything in its storm-damaged state before anything is touched</li>
        <li><strong>Day 1–3:</strong> Get a professional inspection and written report</li>
        <li><strong>Day 1–7:</strong> Notify your insurer of the claim (check your policy for the window)</li>
        <li><strong>Before adjuster visit:</strong> Have your documentation package ready</li>
        <li><strong>After adjuster visit:</strong> Compare their report to your documentation; flag any gaps</li>
      </ol>
    ),
  },
  {
    heading: "Common documentation mistakes",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Waiting weeks to document — insurer may argue damage is pre-existing</li>
        <li>Making repairs before documenting — removes evidence</li>
        <li>Only photographing the obvious damage — missing secondary damage points</li>
        <li>Not getting a professional inspection before the adjuster visit</li>
        <li>Discarding damaged materials before the adjuster sees them</li>
        <li>Not noting the storm date and time formally</li>
      </ul>
    ),
  },
  {
    heading: "Insurance deductibles: what you need to know",
    content: (
      <p>
        Texas homeowner policies often have a separate wind/hail deductible, usually expressed
        as a percentage of your dwelling coverage (e.g., 1% or 2%) rather than a flat dollar
        amount. On a $300,000 home, a 2% hail deductible is $6,000. This is your out-of-pocket
        threshold before insurance pays. Knowing your deductible before deciding to file is
        important — it affects whether filing makes financial sense for smaller claims.
        This is not financial advice; consult your agent for specifics.
      </p>
    ),
  },
];

const FAQ_ITEMS = [
  {
    question: "How is documentation help different from a public adjuster?",
    answer:
      "A public adjuster is a licensed professional who works on your behalf to negotiate a settlement with your insurer — they typically charge 10–15% of the claim payout. We help you document damage correctly before the process begins. We do not negotiate with insurers or act as your representative.",
  },
  {
    question: "What photos matter most for a roof damage claim?",
    answer:
      "Photos of: (1) the impact area up close showing granule loss or cracks, (2) the overall roof field from multiple angles, (3) gutters showing granule accumulation, (4) any secondary indicators like AC fins or screens, (5) your attic if there is moisture. Date-stamped photos near the storm date matter most.",
  },
  {
    question: "Does a professional inspection report actually help my claim?",
    answer:
      "Yes, significantly. An independent written report from a licensed contractor documents the damage before the insurer's adjuster visits. If the adjuster misses items, you have professional documentation to support a supplement or dispute.",
  },
  {
    question: "Should I accept the first offer from my insurer?",
    answer:
      "That depends on whether the offer accurately reflects the documented damage and the cost to repair. If you believe the offer is incomplete, you can file a supplemental claim with additional documentation, or engage a public adjuster. We are not licensed to advise you on whether to accept a claim offer.",
  },
];

export default function InsuranceClaimHelpPage() {
  return (
    <ServicePageLayout
      slug="insurance-claim-help"
      heroHeadline="Storm Damage Documentation for Dallas Homeowners"
      heroSubheadline="We help you document damage correctly before you file — so you have the strongest possible starting position. We are not a public adjuster or insurer."
      sections={SECTIONS}
      faqItems={FAQ_ITEMS}
      relatedLinks={[
        { href: "/storm-damage-inspection",  label: "Storm Damage Inspection" },
        { href: "/hail-damage-dallas",       label: "Hail Damage in Dallas" },
        { href: "/emergency-roof-leak",      label: "Emergency Roof Leak" },
        { href: "/first-24-hours-after-storm", label: "First 24 Hours After a Storm" },
      ]}
    />
  );
}
