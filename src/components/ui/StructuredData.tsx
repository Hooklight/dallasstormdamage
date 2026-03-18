import { BUSINESS_NAME, PHONE_NUMBER } from "@/lib/design-tokens";

interface FAQItem {
  question: string;
  answer:   string;
}

interface StructuredDataProps {
  faqItems?: FAQItem[];
  pageUrl?:  string;
}

export function StructuredData({ faqItems, pageUrl }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dallasstormdamage.com";
  const url     = pageUrl ? `${baseUrl}${pageUrl}` : baseUrl;

  const localBusiness = {
    "@context":       "https://schema.org",
    "@type":          "LocalBusiness",
    name:             BUSINESS_NAME,
    telephone:        PHONE_NUMBER,
    url:              baseUrl,
    address: {
      "@type":          "PostalAddress",
      addressLocality:  "Dallas",
      addressRegion:    "TX",
      addressCountry:   "US",
    },
    areaServed: [
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Fort Worth" },
      { "@type": "City", name: "Plano" },
      { "@type": "City", name: "Arlington" },
      { "@type": "City", name: "Irving" },
      { "@type": "City", name: "Garland" },
      { "@type": "City", name: "Frisco" },
      { "@type": "City", name: "McKinney" },
    ],
    serviceType: "Storm Damage Assessment and Contractor Referral",
    description:
      "Fast local help after hail, wind, and roof leaks. We help Dallas homeowners document damage and connect with vetted local specialists.",
  };

  const schemas: object[] = [localBusiness];

  if (faqItems && faqItems.length > 0) {
    schemas.push({
      "@context":  "https://schema.org",
      "@type":     "FAQPage",
      url,
      mainEntity: faqItems.map(({ question, answer }) => ({
        "@type":          "Question",
        name:             question,
        acceptedAnswer: {
          "@type": "Answer",
          text:    answer,
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
