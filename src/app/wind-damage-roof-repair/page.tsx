import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/templates/ServicePageLayout";

export const metadata: Metadata = {
  title:       "Wind & Storm Damage Roof Repair Dallas — Signs & Next Steps",
  description: "Wind damage is often worse than it looks. Missing shingles, lifted flashing, and debris impact can leave your roof vulnerable. We help Dallas homeowners assess and act fast.",
  alternates:  { canonical: "/wind-damage-roof-repair" },
};

const SECTIONS = [
  {
    heading: "How wind damages Dallas roofs",
    content: (
      <p>
        Straight-line winds, microbursts, and tornadoes are common across the Dallas–Fort Worth
        area, especially from spring through early fall. Wind damage to roofs is deceptive — it
        often doesn&apos;t cause immediate leaks but creates gaps and entry points that fail during
        the next rain. Even winds of 50–60 mph can lift shingles, break the adhesive seal on
        shingle tabs, and expose the underlayment beneath.
      </p>
    ),
  },
  {
    heading: "Signs of wind damage on your roof",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Missing shingles or shingle tabs — especially on corners and ridges</li>
        <li>Lifted, curled, or peeling shingles</li>
        <li>Exposed roof deck (black or brown substrate visible)</li>
        <li>Damaged or missing ridge cap</li>
        <li>Bent, lifted, or displaced metal flashing</li>
        <li>Debris impact — branches, tree limbs on or through the roof</li>
        <li>Damage to gutters and fascia boards</li>
        <li>Fallen trees or large branches anywhere near the house</li>
      </ul>
    ),
  },
  {
    heading: "What to do in the first 24 hours",
    content: (
      <ol className="list-decimal list-inside space-y-1.5">
        <li>Walk the perimeter of your house and photograph anything you can see from the ground</li>
        <li>Check your attic for any new light or moisture</li>
        <li>If there is tree damage on the roof, do not try to remove it yourself</li>
        <li>Cover any visible openings if it is safe to do so from the ground only</li>
        <li>Document the storm date, time, and any official storm warnings</li>
        <li>Contact us — we&apos;ll help coordinate a professional assessment before you file</li>
      </ol>
    ),
  },
  {
    heading: "When wind damage becomes urgent",
    content: (
      <p>
        A single missing shingle can allow water infiltration during the next rain. A lifted
        ridge cap exposes the most vulnerable part of your roof. Wind damage that doesn&apos;t cause
        an immediate leak still compromises the waterproofing system — so the next rainstorm
        becomes the real test. Don&apos;t wait for a leak to confirm what the wind already did.
      </p>
    ),
  },
  {
    heading: "What a specialist will check",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Shingle tab adhesion — whether tabs are still sealed or have broken free</li>
        <li>Ridge and hip cap condition</li>
        <li>Flashing integrity around chimneys, vents, and skylights</li>
        <li>Deck exposure and any water intrusion</li>
        <li>Tree and debris impact damage</li>
        <li>Gutters and soffit damage as secondary indicators</li>
      </ul>
    ),
  },
  {
    heading: "Insurance and documentation notes",
    content: (
      <p>
        Wind damage from a named storm event is typically covered under standard homeowner
        policies. The key is establishing the damage occurred during the storm, not from gradual
        wear. Photographs with timestamps, weather records from the storm date, and a professional
        inspection report are the documentation stack that matters. We help you understand what
        to capture before your adjuster arrives.
      </p>
    ),
  },
];

const FAQ_ITEMS = [
  {
    question: "What wind speed damages a roof?",
    answer:
      "Asphalt shingle roofs are rated for winds of 60–130 mph depending on the product, but older or improperly installed shingles can fail at 50 mph or less. Straight-line winds in DFW thunderstorms regularly exceed 60 mph. Any significant thunderstorm is worth checking after.",
  },
  {
    question: "Does homeowner insurance cover wind damage in Texas?",
    answer:
      "Standard homeowner policies in Texas cover wind and hail damage, though some insurers exclude windstorm in higher-risk areas or require a separate wind/hail deductible. Check your declarations page for your specific deductible and any exclusions. Call your agent if you're unsure.",
  },
  {
    question: "Is wind damage covered if the storm wasn't a named event?",
    answer:
      "Yes — you don't need a named hurricane or tornado. Any sudden windstorm event that causes damage is typically covered. The important thing is documenting that the damage was sudden and accidental, not pre-existing deterioration.",
  },
];

export default function WindDamageRoofRepairPage() {
  return (
    <ServicePageLayout
      slug="wind-damage-roof-repair"
      heroHeadline="Wind Damage to Your Roof? Here's What to Check."
      heroSubheadline="Missing shingles, lifted flashing, debris impact — wind damage is often underestimated. We help Dallas homeowners assess the real picture and act before the next rain."
      sections={SECTIONS}
      faqItems={FAQ_ITEMS}
      relatedLinks={[
        { href: "/emergency-roof-leak",      label: "Emergency Roof Leak" },
        { href: "/hail-damage-dallas",       label: "Hail Damage in Dallas" },
        { href: "/storm-damage-inspection",  label: "Storm Damage Inspection" },
        { href: "/insurance-claim-help",     label: "Insurance Documentation Help" },
      ]}
    />
  );
}
