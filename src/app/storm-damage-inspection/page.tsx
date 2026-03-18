import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/templates/ServicePageLayout";

export const metadata: Metadata = {
  title:       "Storm Damage Inspection Dallas — What to Expect & Why It Matters",
  description: "A proper storm damage inspection before you file your insurance claim can make a significant difference. We explain what inspectors check and how to use the report.",
  alternates:  { canonical: "/storm-damage-inspection" },
};

const SECTIONS = [
  {
    heading: "Why a storm damage inspection matters",
    content: (
      <p>
        Most homeowners call their insurance company first after a storm. The insurer sends an
        adjuster, who does their own inspection — and that report becomes the basis for your claim.
        Getting your own independent inspection first gives you a documented baseline. If the
        adjuster misses damage or undervalues it, you have independent evidence to support a
        supplemental claim or dispute. It&apos;s not adversarial — it&apos;s preparation.
      </p>
    ),
  },
  {
    heading: "What a thorough storm damage inspection covers",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Roof:</strong> All surfaces — field shingles, ridge cap, valleys, flashing, penetrations</li>
        <li><strong>Gutters and downspouts:</strong> Dents, cracks, detachment</li>
        <li><strong>Siding:</strong> Impact marks, cracks, displaced panels</li>
        <li><strong>Windows and screens:</strong> Cracked glass, torn screens, bent frames</li>
        <li><strong>HVAC/mechanical:</strong> Condenser fins, exhaust caps, vent covers</li>
        <li><strong>Skylights and chimneys:</strong> Cracked glass, damaged caps or flashing</li>
        <li><strong>Attic interior:</strong> Water infiltration, staining, insulation damage</li>
        <li><strong>Documentation:</strong> Photos with GPS coordinates, date-stamps, written report</li>
      </ul>
    ),
  },
  {
    heading: "First 24 hours: what to do before the inspector arrives",
    content: (
      <ol className="list-decimal list-inside space-y-1.5">
        <li>Do not make any repairs or clean up storm debris until documented</li>
        <li>Photograph your roof, gutters, siding, and yard from the ground before anything changes</li>
        <li>Note the exact storm date and time — pull weather.gov records if helpful</li>
        <li>Keep windows closed to prevent moisture damage from spreading</li>
        <li>Contact us to coordinate an inspection before filing your claim</li>
      </ol>
    ),
  },
  {
    heading: "When to prioritize inspection",
    content: (
      <p>
        After any storm where hail is confirmed, winds exceeded 60 mph, or you notice any of
        the common damage indicators (granules in gutters, dented AC fins, torn screens), a
        professional inspection is worth scheduling within 48–72 hours. Insurance policies have
        filing windows, and documented evidence gathered close to the storm date carries more
        weight than documentation assembled weeks later.
      </p>
    ),
  },
  {
    heading: "What we do vs. what a contractor does",
    content: (
      <p>
        We help you understand the inspection process, what to look for, and what questions to
        ask. We then connect you with a vetted local specialist who performs the actual inspection.
        We are not inspectors or contractors. We own the intake and coordination — the specialist
        does the assessment and provides the written report.
      </p>
    ),
  },
  {
    heading: "Insurance and documentation notes",
    content: (
      <p>
        A professional inspection report is your primary documentation asset in a storm damage
        claim. It should include: photos of every damage point, storm date reference, square
        footage of affected areas, and a written description of damage types. Keep all copies.
        If you disagree with your insurer&apos;s adjuster report, your inspection documentation
        is the starting point for a supplemental claim or a public adjuster engagement.
        Note: we do not assist with claim negotiation or filing — that requires a licensed
        professional.
      </p>
    ),
  },
];

const FAQ_ITEMS = [
  {
    question: "Should I get an inspection before or after calling my insurance company?",
    answer:
      "Before, if possible. Getting independent documentation first gives you a baseline that can support your claim if the insurer's adjuster misses something. It doesn't delay filing — it strengthens it.",
  },
  {
    question: "How much does a storm damage inspection cost in Dallas?",
    answer:
      "Many roofing contractors in Dallas offer free or low-cost storm damage inspections, especially when they may also be doing the repair work. Costs vary — some charge $150–$400 for an independent written report. We can connect you with vetted local specialists.",
  },
  {
    question: "Can I do the inspection myself?",
    answer:
      "You can document what you see from the ground, and that's valuable. But roof surfaces require a professional to assess properly and safely — and an adjuster will give more weight to a professional inspection report than to homeowner photos alone.",
  },
  {
    question: "What happens after the inspection?",
    answer:
      "You receive a written inspection report with photos. You can share this with your insurer when filing. If the damage exceeds your deductible and is storm-related, you proceed with the claim. The specialist can also provide a repair estimate.",
  },
];

export default function StormDamageInspectionPage() {
  return (
    <ServicePageLayout
      slug="storm-damage-inspection"
      heroHeadline="Storm Damage Inspection in Dallas — What to Expect"
      heroSubheadline="An independent inspection before you file your insurance claim is one of the most valuable things you can do. We help you understand the process and connect with vetted local specialists."
      sections={SECTIONS}
      faqItems={FAQ_ITEMS}
      relatedLinks={[
        { href: "/hail-damage-dallas",       label: "Hail Damage in Dallas" },
        { href: "/emergency-roof-leak",      label: "Emergency Roof Leak" },
        { href: "/insurance-claim-help",     label: "Insurance Documentation Help" },
        { href: "/wind-damage-roof-repair",  label: "Wind Damage Roof Repair" },
      ]}
    />
  );
}
