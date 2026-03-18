import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/templates/ServicePageLayout";

export const metadata: Metadata = {
  title:       "Hail Damage in Dallas — Signs, Documentation & What to Do",
  description: "Dallas gets some of the heaviest hail in the country. Learn how to spot hail damage on your roof, what to document, and when to act before your insurance window closes.",
  alternates:  { canonical: "/hail-damage-dallas" },
};

const SECTIONS = [
  {
    heading: "How hail damages Dallas roofs",
    content: (
      <p>
        Dallas sits squarely in Hail Alley — the strip of the US that sees the most significant
        hailstorms. Hailstones as small as 1 inch can crack asphalt shingles, dent metal flashing,
        break gutters, and puncture softer roofing materials. The damage often isn&apos;t obvious from
        the ground, which is why so many Dallas homeowners find out months later when a leak develops
        — and by then the insurance window may have closed.
      </p>
    ),
  },
  {
    heading: "Signs of hail damage to look for",
    content: (
      <>
        <p className="mb-2">From the ground (safe to check):</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Dented gutters, downspouts, or AC condenser fins</li>
          <li>Dings on window screens or sills</li>
          <li>Dented or cracked siding</li>
          <li>Granule loss visible in gutters or on the ground</li>
          <li>Damaged patio furniture, fences, or vehicles — often a proxy for roof impact</li>
        </ul>
        <p className="mb-2">On the roof (only accessible to a professional):</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Round or irregular dark spots on shingles where granules have been knocked off</li>
          <li>Bruised shingles — soft spots that feel spongy when pressed</li>
          <li>Cracked or split shingles</li>
          <li>Exposed fiberglass mat</li>
          <li>Dented ridge cap</li>
        </ul>
      </>
    ),
  },
  {
    heading: "What to do in the first 24 hours",
    content: (
      <ol className="list-decimal list-inside space-y-1.5">
        <li>Photograph your gutters, siding, AC unit, and any visible roof damage from the ground</li>
        <li>Note the date and time of the storm (pull weather records if needed)</li>
        <li>Check your attic for any daylight or moisture</li>
        <li>Do not go on the roof yourself — hail-damaged shingles are fragile and slippery</li>
        <li>Contact us — we&apos;ll help you get a proper inspection before you call insurance</li>
        <li>Check your insurance policy for the claim filing window (usually 1–2 years, but varies)</li>
      </ol>
    ),
  },
  {
    heading: "When hail damage becomes urgent",
    content: (
      <p>
        Hail damage doesn&apos;t always cause immediate leaks. It weakens shingles so that the next
        rain or freeze causes the actual failure. That gap between the storm and the visible symptom
        is where homeowners get hurt — because insurers may argue the damage is old and pre-existing
        if you wait too long to file. The right time to document and report is right after the
        storm, not after the first leak.
      </p>
    ),
  },
  {
    heading: "What a specialist will check during inspection",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Date-stamp photos of all impact points on shingles</li>
        <li>Granule loss measurement across the roof field</li>
        <li>Ridge cap, flashing, and valley condition</li>
        <li>Gutters, fascia, and soffit damage</li>
        <li>HVAC and skylight impacts</li>
        <li>Interior attic for any moisture or penetration</li>
      </ul>
    ),
  },
  {
    heading: "Insurance and documentation notes",
    content: (
      <p>
        Most standard homeowner policies cover hail damage as a sudden and accidental loss. The
        critical factors are: (1) the damage is from a specific storm event, (2) you report it
        within the policy&apos;s filing window, and (3) the damage meets your policy&apos;s threshold.
        A professional inspection before filing gives you a documented baseline. We help you
        understand what to photograph and what questions to ask before your adjuster arrives.
        We do not file claims or negotiate on your behalf — that requires a licensed adjuster.
      </p>
    ),
  },
];

const FAQ_ITEMS = [
  {
    question: "How long do I have to file a hail damage claim in Texas?",
    answer:
      "Texas law gives homeowners 2 years from the date of loss to file a claim, but your specific policy may have a shorter window. Some policies require notification within 30–60 days of a storm. Read your policy or call your agent right after any significant hail event.",
  },
  {
    question: "What size hail damages a roof?",
    answer:
      "Hail of 1 inch or larger (golf ball = 1.75 inches) typically causes functional damage to asphalt shingles. Smaller hail can still crack older or already-degraded shingles. Metal roofing and tile respond differently. A professional inspection is the only reliable way to assess actual damage.",
  },
  {
    question: "Can I see hail damage from the ground?",
    answer:
      "Sometimes — you might see missing granules in gutters, dented gutters, or cracked siding. But most hail damage to roofing material requires a close-up inspection. Dented gutters and AC fins are a reliable indicator that hail hit hard enough to potentially damage the roof too.",
  },
  {
    question: "Will my insurance premium go up if I file a hail damage claim?",
    answer:
      "Potentially yes, depending on your insurer and your claim history. However, hail claims in Texas are generally treated as weather-related events (not your fault), which carries less rating impact than at-fault claims. Speak with your agent before filing if you're concerned about premium impact.",
  },
];

export default function HailDamageDallasPage() {
  return (
    <ServicePageLayout
      slug="hail-damage-dallas"
      heroHeadline="Hail Hit Dallas? Here's What to Do — and When."
      heroSubheadline="Dallas is in Hail Alley. We help homeowners document damage before the insurance window closes — and connect with specialists who know what insurance adjusters look for."
      sections={SECTIONS}
      faqItems={FAQ_ITEMS}
      relatedLinks={[
        { href: "/emergency-roof-leak",          label: "Emergency Roof Leak" },
        { href: "/storm-damage-inspection",      label: "Storm Damage Inspection" },
        { href: "/insurance-claim-help",         label: "Insurance Documentation Help" },
        { href: "/roof-replacement-hail",        label: "Roof Replacement After Hail" },
        { href: "/first-24-hours-after-storm",   label: "First 24 Hours After a Storm" },
      ]}
    />
  );
}
