import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import { StructuredData } from "@/components/ui/StructuredData";
import { PHONE_NUMBER, DISCLOSURE } from "@/lib/design-tokens";
import { Phone, FileCheck, Search, Shield, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title:       "How It Works — Dallas Storm Damage Help",
  description: "We are not a contractor. We help Dallas homeowners navigate storm damage — from documentation to connecting with vetted specialists. Here's exactly how it works.",
  alternates:  { canonical: "/how-it-works" },
};

const STEPS = [
  {
    step:  "01",
    icon:  Phone,
    title: "You reach out",
    body:  "Call us or fill out the form. Takes about 2 minutes. Tell us what happened, where you are, and how urgent it is.",
    note:  "We're real people — not a bot or a form that goes nowhere.",
  },
  {
    step:  "02",
    icon:  FileCheck,
    title: "We help you document the damage",
    body:  "We walk you through what to photograph, what records to gather, and what your insurance company will likely ask for. Good documentation matters before anything else.",
    note:  "We are not an insurer or adjuster. We help with the preparation step.",
  },
  {
    step:  "03",
    icon:  Search,
    title: "We connect you with a vetted local specialist",
    body:  "We route your information to a vetted local contractor who handles this type of work in your area. We don't cold-sell you to a call center. You hear from someone who knows DFW storm work.",
    note:  "All leads go through us first. You are not added to a shared lead marketplace.",
  },
  {
    step:  "04",
    icon:  Shield,
    title: "The specialist handles the work",
    body:  "The contractor does the inspection, the repair estimate, and the work itself. We stay available if questions come up, but the specialist manages the job.",
    note:  "We do not do the contracting work. We are the intake and connection layer.",
  },
];

const TRUST_POINTS = [
  "We don't pretend to be a roofing contractor.",
  "We don't share your info with a lead marketplace.",
  "We don't claim to negotiate insurance claims.",
  "We respond fast — especially to emergencies.",
  "We focus on Dallas–Fort Worth homeowners, not a national funnel.",
];

export default function HowItWorksPage() {
  return (
    <>
      <StructuredData pageUrl="/how-it-works" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1d4ed8] text-white py-12 sm:py-20">
        <Container size="md" className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            How it works — and what we are not
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            We help Dallas homeowners navigate storm damage. We are not a contractor,
            not an insurer, not an adjuster. Here&apos;s exactly what we do.
          </p>
        </Container>
      </section>

      {/* Disclosure banner */}
      <div className="bg-orange-50 border-y border-orange-200 py-3">
        <Container>
          <div className="flex items-start gap-2 text-sm text-orange-800">
            <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
            <p>{DISCLOSURE}</p>
          </div>
        </Container>
      </div>

      {/* Steps */}
      <Section bg="white" spacing="lg">
        <Container size="lg">
          <div className="space-y-12">
            {STEPS.map(({ step, icon: Icon, title, body, note }, i) => (
              <div
                key={step}
                className={`flex flex-col sm:flex-row gap-6 items-start ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
              >
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2 shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-600 text-white font-extrabold text-xl">
                    {step}
                  </div>
                  <Icon className="h-7 w-7 text-orange-500" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[#0f172a] mb-2">{title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-2">{body}</p>
                  <p className="text-xs text-slate-400 italic">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trust section */}
      <Section bg="light" spacing="md">
        <Container size="md">
          <h2 className="text-xl font-bold text-[#0f172a] mb-6">What you can count on from us</h2>
          <div className="space-y-3">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-0.5 text-green-600 font-bold text-lg leading-none">✓</span>
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-blue-700 py-12">
        <Container size="md" className="text-center">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Ready to get help?
          </h2>
          <p className="text-blue-100 mb-6">
            Call or fill out the form. We respond fast — emergencies first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedPhone display="hero">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {PHONE_NUMBER}
            </TrackedPhone>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
              Fill Out the Form →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
