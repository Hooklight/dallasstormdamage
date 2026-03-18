import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { StructuredData } from "@/components/ui/StructuredData";
import { PHONE_NUMBER, DISCLOSURE } from "@/lib/design-tokens";
import { Phone, Clock, Shield, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title:       "Get Storm Damage Help in Dallas",
  description: "Call or fill out the form. We help Dallas–Fort Worth homeowners document storm damage and get connected with vetted local specialists — fast.",
  alternates:  { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData pageUrl="/contact" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8f] to-[#1d4ed8] text-white py-12 sm:py-16">
        <Container size="md" className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Get storm damage help now
          </h1>
          <p className="text-lg text-slate-300 mb-6">
            Call directly or fill out the form below. We respond fast — emergencies first.
          </p>
          <TrackedPhone display="hero" className="mx-auto">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {PHONE_NUMBER}
          </TrackedPhone>
        </Container>
      </section>

      {/* Form + Trust */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card variant="elevated">
                <CardBody className="p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-[#0f172a] mb-1">Request Help</h2>
                  <p className="text-sm text-slate-500 mb-6">
                    Fill out the form and a local specialist will be in touch shortly.
                  </p>
                  <IntakeForm sourcePage="contact" />
                </CardBody>
              </Card>
            </div>

            {/* Trust sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <Card variant="bordered">
                <CardBody className="flex gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#0f172a] text-sm">Fast response</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Emergencies get priority. We know storm damage can&apos;t wait.
                    </p>
                  </div>
                </CardBody>
              </Card>
              <Card variant="bordered">
                <CardBody className="flex gap-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#0f172a] text-sm">Not a contractor</p>
                    <p className="text-xs text-slate-500 mt-0.5">{DISCLOSURE}</p>
                  </div>
                </CardBody>
              </Card>
              <Card variant="bordered">
                <CardBody className="flex gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#0f172a] text-sm">Dallas–Fort Worth focused</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      We serve the DFW Metroplex — Dallas, Plano, Frisco, Arlington, Fort Worth, and surrounding areas.
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* Direct call */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-[#0f172a] mb-2">Prefer to call?</p>
                <TrackedPhone display="button" className="w-full justify-center">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {PHONE_NUMBER}
                </TrackedPhone>
                <p className="text-xs text-slate-400 mt-2">Available during business hours</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
