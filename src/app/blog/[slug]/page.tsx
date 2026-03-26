import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { BUSINESS_NAME, PHONE_NUMBER } from "@/lib/design-tokens";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { Phone } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title:       post.metaTitle,
    description: post.metaDescription,
    alternates:  { canonical: `/blog/${slug}` },
    openGraph: {
      type:        "article",
      title:       post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.datePublished,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context":       "https://schema.org",
    "@type":          "Article",
    headline:         post.title,
    description:      post.metaDescription,
    datePublished:    post.datePublished,
    dateModified:     post.datePublished,
    author: {
      "@type": "Organization",
      name:    BUSINESS_NAME,
      url:     "https://dallasstormdamage.com",
    },
    publisher: {
      "@type": "Organization",
      name:    BUSINESS_NAME,
      url:     "https://dallasstormdamage.com",
    },
    mainEntityOfPage: `https://dallasstormdamage.com/blog/${slug}`,
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8f] to-[#1d4ed8] text-white py-10 sm:py-16">
        <Container size="lg">
          <Link
            href="/blog"
            className="text-xs font-semibold text-blue-300 hover:text-white uppercase tracking-wide"
          >
            ← All Guides
          </Link>
          <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold leading-tight max-w-3xl">
            {post.title}
          </h1>
          <time
            dateTime={post.datePublished}
            className="mt-3 block text-sm text-blue-300"
          >
            {new Date(post.datePublished).toLocaleDateString("en-US", {
              month: "long",
              day:   "numeric",
              year:  "numeric",
            })}
          </time>
        </Container>
      </section>

      {/* Body */}
      <section className="py-12 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Article */}
            <article
              className="lg:col-span-2 prose prose-slate max-w-none prose-h2:text-xl prose-h2:font-bold prose-h2:text-[#0f172a] prose-a:text-blue-700"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Sidebar */}
            <aside className="space-y-5">
              <Card variant="elevated" className="bg-blue-700 text-white">
                <CardBody>
                  <p className="font-bold text-lg mb-1">Need help now?</p>
                  <p className="text-sm text-blue-100 mb-4">
                    We help DFW homeowners document damage and connect with vetted local specialists.
                  </p>
                  <TrackedPhone display="button" className="w-full justify-center bg-orange-500 hover:bg-orange-600">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {PHONE_NUMBER}
                  </TrackedPhone>
                  <Link
                    href="/contact"
                    className="block text-center text-xs text-blue-200 mt-2 hover:text-white underline"
                  >
                    Or fill out the form →
                  </Link>
                </CardBody>
              </Card>

              {post.relatedLinks.length > 0 && (
                <Card variant="bordered">
                  <CardBody>
                    <p className="font-semibold text-[#0f172a] text-sm mb-3">Related Pages</p>
                    <ul className="space-y-2">
                      {post.relatedLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-sm text-blue-700 hover:text-blue-900 hover:underline"
                          >
                            {link.label} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              )}

              <Card variant="bordered">
                <CardBody>
                  <p className="font-semibold text-[#0f172a] text-sm mb-3">Get free help</p>
                  <IntakeForm sourcePage={`blog:${slug}`} compact />
                </CardBody>
              </Card>
            </aside>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
