import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/templates/ServicePageLayout";

export const metadata: Metadata = {
  title:       "Emergency Roof Leak Dallas — Active Leak? Call Now",
  description: "Active roof leak or water coming in after a storm? We help Dallas homeowners get fast, vetted help. Don't wait — water damage compounds quickly.",
  alternates:  { canonical: "/emergency-roof-leak" },
};

const SECTIONS = [
  {
    heading: "What is an emergency roof leak?",
    content: (
      <p>
        An emergency roof leak is any situation where water is actively entering your home
        through the roof — whether from hail damage, wind-torn shingles, a fallen tree branch,
        or a flashing failure. Unlike slow, hidden leaks, emergency situations put your interior,
        insulation, and electrical systems at immediate risk. If you can see daylight through your
        roof, hear dripping, or spot growing wet spots on ceilings, you have an emergency.
      </p>
    ),
  },
  {
    heading: "Signs your roof leak is urgent",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Water actively dripping or pooling inside</li>
        <li>Ceiling bulging or bubbling (pooled water above)</li>
        <li>Wet insulation visible in attic</li>
        <li>Dark ceiling stains that are growing</li>
        <li>Shingles visibly missing, cracked, or displaced</li>
        <li>Daylight visible through the roof deck</li>
        <li>Storm debris on or through the roof</li>
      </ul>
    ),
  },
  {
    heading: "What to do in the first 24 hours",
    content: (
      <>
        <p className="font-semibold text-red-700 mb-2">
          🚨 If there is any structural damage or electrical risk, leave and call 911.
        </p>
        <ol className="list-decimal list-inside space-y-1.5">
          <li>Move furniture, valuables, and electronics away from the affected area</li>
          <li>Place buckets under active drips — don&apos;t let water pool on floors</li>
          <li>Take photos and video of everything before touching anything</li>
          <li>Call us — we can help you get a tarp installed and connect with a specialist</li>
          <li>Notify your insurance company (but wait for documentation first if possible)</li>
          <li>Do not start major repairs until the damage is properly documented</li>
        </ol>
      </>
    ),
  },
  {
    heading: "When it becomes critical",
    content: (
      <p>
        Water damage compounds fast. Drywall begins to break down within hours. Mold can start
        growing within 24–48 hours in warm, humid conditions — and Dallas is humid. Insulation that
        gets wet loses its R-value and rarely dries properly. The longer you wait, the larger your
        repair scope. Emergency tarping buys you time without locking in a contractor.
      </p>
    ),
  },
  {
    heading: "What a specialist will check",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Full roof inspection to identify all entry points (not just the obvious one)</li>
        <li>Attic inspection for hidden water infiltration and mold</li>
        <li>Assessment of whether a tarp is needed immediately</li>
        <li>Structural integrity check for affected areas</li>
        <li>Documentation for insurance purposes</li>
      </ul>
    ),
  },
  {
    heading: "Insurance and documentation notes",
    content: (
      <p>
        Document everything before any repairs begin. Photos, video, timestamps, and a written
        account of when you noticed the leak. Most homeowner policies cover sudden storm damage but
        not gradual deterioration — so establishing that the damage is storm-related matters.
        Keep any receipts for emergency mitigation (tarps, water extraction). We can help you
        understand what to capture before your adjuster visits.
      </p>
    ),
  },
];

const FAQ_ITEMS = [
  {
    question: "Should I call my insurance company before getting the leak fixed?",
    answer:
      "Document everything first (photos, video), then call your insurer. You do NOT need to wait for an adjuster before emergency mitigation — most policies require you to prevent further damage. Get the tarp installed, keep receipts, and file promptly.",
  },
  {
    question: "How much does emergency roof tarping cost in Dallas?",
    answer:
      "Emergency tarping in Dallas typically runs $300–$800 depending on roof size and damage extent. This cost is usually covered by homeowner insurance as part of emergency mitigation. We can connect you with a specialist who will assess the cost upfront.",
  },
  {
    question: "Can I tarp my own roof?",
    answer:
      "You can, but it's risky. Wet roofs are slippery, and improper tarping can cause additional damage or void your insurance claim if done incorrectly. We recommend letting a professional handle it — especially in an emergency.",
  },
  {
    question: "What is the difference between you and a roofing contractor?",
    answer:
      "We are not a roofing contractor. We help you understand what happened, what to document, and who to call — then we connect you with a vetted local specialist. We own the intake; the contractor does the work.",
  },
];

export default function EmergencyRoofLeakPage() {
  return (
    <ServicePageLayout
      slug="emergency-roof-leak"
      heroHeadline="Emergency Roof Leak in Dallas? Get Fast Help."
      heroSubheadline="Active leak, water coming in, storm damage through the roof — we help you get the right specialist on site fast. Don't let water damage compound."
      ctaText="Get Emergency Help"
      presetEmergency={true}
      sections={SECTIONS}
      faqItems={FAQ_ITEMS}
      relatedLinks={[
        { href: "/hail-damage-dallas",       label: "Hail Damage in Dallas" },
        { href: "/storm-damage-inspection",  label: "Storm Damage Inspection" },
        { href: "/insurance-claim-help",     label: "Insurance Documentation Help" },
        { href: "/first-24-hours-after-storm", label: "First 24 Hours After a Storm" },
      ]}
    />
  );
}
