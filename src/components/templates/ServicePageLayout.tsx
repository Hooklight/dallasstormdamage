import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { StructuredData } from "@/components/ui/StructuredData";
import { PHONE_NUMBER } from "@/lib/design-tokens";
import { Phone, ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer:   string;
}

export interface ContentSection {
  heading: string;
  content: ReactNode;
}

interface ServicePageLayoutProps {
  slug:             string;
  heroHeadline:     string;
  heroSubheadline:  string;
  ctaText?:         string;
  presetEmergency?: boolean;
  sections:         ContentSection[];
  faqItems?:        FAQItem[];
  relatedLinks?:    { href: string; label: string }[];
}

export function ServicePageLayout({
  slug,
  heroHeadline,
  heroSubheadline,
  ctaText = "Get Help Now",
  presetEmergency = false,
  sections,
  faqItems = [],
  relatedLinks = [],
}: ServicePageLayoutProps) {
  return (
    <>
      <StructuredData pageUrl={`/${slug}`} faqItems={faqItems} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8f] to-[#1d4ed8] text-white py-12 sm:py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Copy */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
                {heroHeadline}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {heroSubheadline}
              </p>
              <TrackedPhone display="hero">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now — {PHONE_NUMBER}
              </TrackedPhone>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 shadow-hero">
              <h2 className="text-base font-bold text-[#0f172a] mb-1">{ctaText}</h2>
              <p className="text-xs text-slate-500 mb-4">
                Tell us what happened. A specialist will contact you shortly.
              </p>
              <IntakeForm sourcePage={slug} presetEmergency={presetEmergency} compact />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Content sections ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <article className="lg:col-span-2 prose prose-slate max-w-none">
              {sections.map((s, i) => (
                <div key={i} className="mb-8">
                  <h2 className="text-xl font-bold text-[#0f172a] not-prose mb-3 border-b border-slate-100 pb-2">
                    {s.heading}
                  </h2>
                  <div className="text-slate-600 leading-relaxed">{s.content}</div>
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="space-y-4">
              {/* Sticky CTA */}
              <Card variant="elevated" className="bg-blue-700 text-white">
                <CardBody>
                  <p className="font-bold text-lg mb-1">Need help now?</p>
                  <p className="text-sm text-blue-100 mb-3">
                    Call or fill out the form. We respond fast.
                  </p>
                  <TrackedPhone display="button" className="w-full justify-center bg-orange-500 hover:bg-orange-600">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {PHONE_NUMBER}
                  </TrackedPhone>
                  <Link href="/contact" className="block text-center text-xs text-blue-200 mt-2 hover:text-white underline">
                    Or fill out the form →
                  </Link>
                </CardBody>
              </Card>

              {/* Related */}
              {relatedLinks.length > 0 && (
                <Card variant="bordered">
                  <CardBody>
                    <p className="font-semibold text-[#0f172a] text-sm mb-3">Related Pages</p>
                    <ul className="space-y-2">
                      {relatedLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="text-sm text-blue-700 hover:text-blue-900 hover:underline">
                            {link.label} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              )}
            </aside>
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {faqItems.length > 0 && (
        <Section bg="light" spacing="md">
          <Container size="md">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="group bg-white border border-slate-200 rounded-xl">
                  <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-semibold text-[#0f172a] text-sm">
                    {item.question}
                    <ChevronDown
                      className="h-4 w-4 text-slate-400 shrink-0 group-open:rotate-180 transition-transform"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="bg-blue-700 py-12">
        <Container size="md" className="text-center">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Ready to get help?
          </h2>
          <p className="text-blue-100 mb-6">
            Call us or fill out the form. We respond fast — emergencies first.
          </p>
          <TrackedPhone display="hero" className="mx-auto">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {PHONE_NUMBER}
          </TrackedPhone>
        </Container>
      </section>
    </>
  );
}
