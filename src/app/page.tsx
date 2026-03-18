import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { PHONE_NUMBER } from "@/lib/design-tokens";
import { Phone, Shield, Clock, FileCheck, Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dallas Storm Damage Help — Fast Local Help After Hail & Wind",
  description:
    "Hail hit your roof? Wind damage? Active leak? We help Dallas–Fort Worth homeowners document storm damage and connect with vetted local specialists. Fast response.",
};

const HOW_IT_WORKS = [
  {
    step: "1",
    icon: Phone,
    title:  "You reach out",
    body:   "Call or fill out the form — takes 2 minutes. Tell us what happened and where.",
  },
  {
    step: "2",
    icon: FileCheck,
    title:  "We help you document",
    body:   "We walk you through what to photograph, what to note, and what your insurer will need.",
  },
  {
    step: "3",
    icon: Search,
    title:  "We match you with a specialist",
    body:   "We connect you with a vetted local contractor who does this work — no cold calls from strangers.",
  },
  {
    step: "4",
    icon: Shield,
    title:  "You get repairs done right",
    body:   "The specialist handles the work. We stay available if questions come up.",
  },
];

const TRUST_BLOCKS = [
  {
    icon: Clock,
    title: "Fast response",
    body:  "We respond quickly because storm damage doesn't wait. Emergencies get priority.",
  },
  {
    icon: Shield,
    title: "We're not a contractor",
    body:  "We help you navigate the process and connect you with specialists — no selling pressure from us.",
  },
  {
    icon: FileCheck,
    title: "Documentation-first",
    body:  "Good documentation means better insurance outcomes. We help you get it right from the start.",
  },
];

const SERVICE_CARDS = [
  { href: "/hail-damage-dallas",       title: "Hail Damage",            desc: "Roof dents, cracked shingles, dented gutters. Dallas gets hammered every spring." },
  { href: "/emergency-roof-leak",      title: "Emergency Roof Leak",     desc: "Active leak or water coming in? This is urgent. Call us first." },
  { href: "/wind-damage-roof-repair",  title: "Wind & Storm Damage",     desc: "Missing shingles, damaged flashing, debris impact. Wind damage is often worse than it looks." },
  { href: "/storm-damage-inspection",  title: "Damage Inspection",       desc: "Not sure how bad it is? A proper inspection is the first step before calling insurance." },
  { href: "/insurance-claim-help",     title: "Insurance Documentation", desc: "We help you document damage correctly before you file — not after things go wrong." },
  { href: "/how-it-works",             title: "How It Works",            desc: "Understand exactly what we do, how we stay independent, and what to expect." },
];

const AREAS_SERVED = [
  "Dallas", "Fort Worth", "Plano", "Arlington", "Irving",
  "Garland", "Frisco", "McKinney", "Richardson", "Carrollton",
  "Mesquite", "Denton", "Lewisville", "Allen", "Flower Mound",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8f] to-[#1d4ed8] text-white py-16 sm:py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Fast local response · Dallas–Fort Worth
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Storm hit your house?<br />
                <span className="text-orange-400">We help you figure out what&apos;s next.</span>
              </h1>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                Hail, wind, roof leak — we help Dallas homeowners document the damage,
                understand their options, and connect with vetted local specialists.
                Fast. Honest. No pressure.
              </p>
              <p className="mt-2 text-sm text-slate-400 italic">
                We are not a contractor. We help you navigate the process.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <TrackedPhone display="hero">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now — {PHONE_NUMBER}
                </TrackedPhone>
              </div>
            </div>

            {/* Right: form */}
            <div id="intake-form" className="bg-white rounded-2xl shadow-hero p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#0f172a] mb-1">
                Get help in minutes
              </h2>
              <p className="text-sm text-slate-500 mb-5">
                Tell us what happened — we&apos;ll get the right specialist to you.
              </p>
              <IntakeForm sourcePage="homepage" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Problem blocks ───────────────────────────────────────────── */}
      <Section bg="light" spacing="md">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] text-center mb-2">
            Storm damage is stressful. We make the first steps simpler.
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
            Most homeowners don&apos;t know what to do in the first 24 hours after a storm.
            That matters — because how you document and report damage affects everything that follows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((card) => (
              <Card key={card.href} variant="bordered" className="hover:shadow-elevated transition-shadow">
                <CardBody>
                  <h3 className="font-bold text-[#0f172a] mb-1">
                    <Link href={card.href} className="hover:text-blue-700 transition-colors">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <Section bg="white" spacing="lg">
        <Container size="lg">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] text-center mb-2">
            How it works
          </h2>
          <p className="text-center text-slate-500 max-w-xl mx-auto mb-12">
            Four steps from storm to solution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map(({ step, icon: Icon, title, body }) => (
              <div key={step} className="flex flex-col items-start gap-3">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white font-extrabold text-lg">
                  {step}
                </div>
                <Icon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                <h3 className="font-bold text-[#0f172a]">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Read the full story →
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── Trust blocks ─────────────────────────────────────────────── */}
      <Section bg="light" spacing="md">
        <Container size="lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TRUST_BLOCKS.map(({ icon: Icon, title, body }) => (
              <Card key={title} variant="bordered">
                <CardBody className="flex flex-col gap-3">
                  <Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                  <h3 className="font-bold text-[#0f172a]">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Areas served ─────────────────────────────────────────────── */}
      <Section bg="white" spacing="sm">
        <Container size="md">
          <h2 className="text-xl font-bold text-[#0f172a] text-center mb-4">
            Serving the Dallas–Fort Worth Metroplex
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {AREAS_SERVED.map((area) => (
              <span
                key={area}
                className="px-3 py-1 text-sm bg-slate-100 text-slate-600 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA banner ───────────────────────────────────────────────── */}
      <section className="bg-blue-700 py-12 sm:py-16">
        <Container size="md" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Storm hit recently? Don&apos;t wait.
          </h2>
          <p className="text-blue-100 mb-8">
            The sooner you document the damage, the better your options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <TrackedPhone display="hero">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now — {PHONE_NUMBER}
            </TrackedPhone>
            <Link href="/contact">
              <Button variant="outline" size="xl"
                className="border-white/50 text-white hover:bg-white/10 hover:border-white/80 w-full sm:w-auto"
              >
                Fill Out the Form →
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
