import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { PHONE_NUMBER } from "@/lib/design-tokens";
import {
  Phone, Shield, Clock, FileCheck, Search,
  ArrowRight, MapPin, CheckCircle, AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dallas Storm Damage Help — Fast Local Help After Hail & Wind",
  description:
    "Hail hit your roof? Wind damage? Active leak? We help Dallas–Fort Worth homeowners document storm damage and connect with vetted local specialists. Fast response.",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title:  "You reach out",
    body:   "Call or fill out the form — 2 minutes. Tell us what happened and where.",
  },
  {
    step: "02",
    title:  "We help you document",
    body:   "We walk you through photos, notes, and what your insurer will need.",
  },
  {
    step: "03",
    title:  "We match you with a specialist",
    body:   "We connect you with a vetted local contractor — no cold calls from strangers.",
  },
  {
    step: "04",
    title:  "You get repairs done right",
    body:   "The specialist handles the work. We stay available if questions come up.",
  },
];

const SERVICE_CARDS = [
  {
    href:  "/hail-damage-dallas",
    label: "MOST COMMON",
    title: "Hail Damage",
    desc:  "Dallas gets hammered every spring. Roof dents, cracked shingles, dented gutters — get it documented before the adjuster comes.",
    color: "border-blue-600",
    tag:   "bg-blue-600",
  },
  {
    href:  "/emergency-roof-leak",
    label: "CALL NOW",
    title: "Emergency Roof Leak",
    desc:  "Active water intrusion is a structural risk. This is urgent — call us before it gets worse.",
    color: "border-red-500",
    tag:   "bg-red-500",
  },
  {
    href:  "/wind-damage-roof-repair",
    label: "OFTEN MISSED",
    title: "Wind & Storm Damage",
    desc:  "Missing shingles, damaged flashing, debris impact. Wind damage is often worse than it looks from the ground.",
    color: "border-orange-500",
    tag:   "bg-orange-500",
  },
  {
    href:  "/storm-damage-inspection",
    label: "FIRST STEP",
    title: "Damage Inspection",
    desc:  "Not sure how bad it is? A proper inspection before calling insurance changes everything.",
    color: "border-slate-400",
    tag:   "bg-slate-500",
  },
  {
    href:  "/insurance-claim-help",
    label: "SAVE MONEY",
    title: "Insurance Documentation",
    desc:  "Document damage correctly before you file — not after things go wrong with your claim.",
    color: "border-green-600",
    tag:   "bg-green-600",
  },
  {
    href:  "/how-it-works",
    label: "LEARN MORE",
    title: "How It Works",
    desc:  "We're not a contractor. We help you navigate the process and connect you with vetted specialists.",
    color: "border-slate-300",
    tag:   "bg-slate-400",
  },
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
      <section className="hero-bg text-white py-16 sm:py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Left: copy — takes 3/5 */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-orange-500/25 border border-orange-400/30 text-orange-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                Dallas – Fort Worth · Fast Local Response
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Storm hit<br />
                your house?<br />
                <span className="text-orange-400">We help you</span><br />
                <span className="text-orange-400">figure out</span><br />
                <span className="text-orange-400">what&apos;s next.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-lg">
                Hail, wind, roof leak — we help DFW homeowners document the damage,
                understand their options, and connect with vetted local specialists.
              </p>

              <p className="mt-3 text-sm text-slate-400 italic border-l-2 border-orange-500/50 pl-3">
                We are not a contractor. We help you navigate the process, not sell you repairs.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <TrackedPhone display="hero">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now — {PHONE_NUMBER}
                </TrackedPhone>
                <a href="#intake-form">
                  <Button variant="outline" size="xl"
                    className="border-white/40 text-white hover:bg-white/10 hover:border-white/70 w-full sm:w-auto"
                  >
                    Fill Out the Form
                  </Button>
                </a>
              </div>

              {/* Quick trust row */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                  No selling pressure
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                  Fast response
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                  100% Dallas-focused
                </span>
              </div>
            </div>

            {/* Right: form — takes 2/5 */}
            <div id="intake-form" className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-orange-500 px-6 py-4">
                  <h2 className="text-white font-bold text-lg tracking-wide">
                    Get Help Fast
                  </h2>
                  <p className="text-orange-100 text-sm mt-0.5">
                    Tell us what happened — we&apos;ll connect you with the right specialist.
                  </p>
                </div>
                <div className="p-6">
                  <IntakeForm sourcePage="homepage" />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Credibility strip ─────────────────────────────────────────── */}
      <div className="stat-strip text-white py-4 border-y border-blue-900/50">
        <Container size="lg">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium">
            <span className="flex items-center gap-2 text-slate-300">
              <AlertTriangle className="h-4 w-4 text-orange-400" aria-hidden="true" />
              <strong className="text-white">Not a contractor</strong> — independent guidance only
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <Clock className="h-4 w-4 text-orange-400" aria-hidden="true" />
              <strong className="text-white">Fast response</strong> — emergencies get priority
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <MapPin className="h-4 w-4 text-orange-400" aria-hidden="true" />
              <strong className="text-white">DFW-focused</strong> — we know these neighborhoods
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <FileCheck className="h-4 w-4 text-orange-400" aria-hidden="true" />
              <strong className="text-white">Documentation-first</strong> — better outcomes start here
            </span>
          </div>
        </Container>
      </div>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <Section bg="light" spacing="lg">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-3">
              What are you dealing with?
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              Most homeowners don&apos;t know what to do in the first 24 hours after a storm.
              That window matters — how you document and report damage affects your insurance outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`group block bg-white rounded-xl border-l-4 ${card.color} border border-slate-200 p-5 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`text-[10px] font-bold tracking-widest uppercase text-white px-2 py-0.5 rounded ${card.tag}`}>
                    {card.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all mt-0.5 shrink-0" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#0f172a] text-lg mb-1.5 group-hover:text-blue-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <Section bg="white" spacing="lg">
        <Container size="lg">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-3">
              Here&apos;s how it works
            </h2>
            <p className="text-slate-500 text-lg">
              From first call to finished repairs. Four steps, no runaround.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {HOW_IT_WORKS.map(({ step, title, body }, i) => (
              <div key={step} className="relative flex flex-col gap-4 p-6 lg:p-8 border-t-4 border-blue-600 bg-white">
                {/* Connector line between steps (desktop) */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-0 right-0 w-px h-4 bg-blue-600 translate-x-[50%]" aria-hidden="true" />
                )}
                <div className="text-5xl font-bold text-blue-600/15 leading-none tracking-tight select-none">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] text-lg mb-1">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Read the full process <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── Why us — no cards, just text + checks ─────────────────────── */}
      <section className="bg-[#0f172a] text-white py-16 sm:py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                We&apos;re not a contractor.<br />
                <span className="text-orange-400">That&apos;s the whole point.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Every contractor you call wants to be the one who does your repairs.
                We don&apos;t. We help you figure out what actually happened to your home,
                get it documented the right way, and then connect you with a specialist
                who&apos;s earned that position — not just one who answered the phone first.
              </p>
              <Link href="/how-it-works">
                <Button variant="secondary" size="lg">
                  See how we stay independent <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Shield,
                  title: "No pressure to buy anything",
                  body:  "We help you understand your options. You decide what happens next.",
                },
                {
                  icon: Clock,
                  title: "We respond fast because damage doesn't wait",
                  body:  "Water intrusion, structural damage, insurance deadlines — speed matters.",
                },
                {
                  icon: FileCheck,
                  title: "Good documentation changes outcomes",
                  body:  "We know what insurers look for. We help you capture it before the adjuster arrives.",
                },
                {
                  icon: Search,
                  title: "Vetted specialists, not cold leads",
                  body:  "The contractors we connect you with have earned our trust. Not just paid for a listing.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <Icon className="h-5 w-5 text-orange-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{title}</p>
                    <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Areas served ─────────────────────────────────────────────── */}
      <Section bg="light" spacing="sm">
        <Container size="md">
          <div className="flex items-center gap-2 justify-center mb-4">
            <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <h2 className="text-base font-bold text-[#0f172a] uppercase tracking-wider">
              Serving the Dallas–Fort Worth Metroplex
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {AREAS_SERVED.map((area) => (
              <span
                key={area}
                className="px-3 py-1 text-sm bg-white border border-slate-200 text-slate-600 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA banner ───────────────────────────────────────────────── */}
      <section className="bg-orange-500 py-12 sm:py-16">
        <Container size="md" className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Storm hit recently? Don&apos;t wait.
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-lg mx-auto">
            The first 24–48 hours after a storm are critical for documentation.
            The sooner you start, the better your options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <TrackedPhone display="hero" className="bg-white text-orange-600 hover:bg-orange-50">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now — {PHONE_NUMBER}
            </TrackedPhone>
            <Link href="/contact">
              <Button variant="outline" size="xl"
                className="border-white/60 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto"
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
