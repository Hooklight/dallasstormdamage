import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllBlogPosts } from "@/lib/blog";
import { BUSINESS_NAME } from "@/lib/design-tokens";

export const metadata: Metadata = {
  title:       `Storm Damage Resources & Guides | ${BUSINESS_NAME}`,
  description: "Guides for Dallas–Fort Worth homeowners on what to do after a storm — documenting damage, filing insurance claims, and avoiding contractor scams.",
  alternates:  { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8f] to-[#1d4ed8] text-white py-12 sm:py-20">
        <Container size="md">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">
            DFW Homeowner Guides
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Storm Damage Resources
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Practical guides for Dallas–Fort Worth homeowners on documenting storm damage,
            navigating insurance claims, and making the right calls after a major storm.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container size="md">
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <time
                  dateTime={post.datePublished}
                  className="text-xs text-slate-400 font-medium uppercase tracking-wide"
                >
                  {new Date(post.datePublished).toLocaleDateString("en-US", {
                    month: "long",
                    day:   "numeric",
                    year:  "numeric",
                  })}
                </time>
                <h2 className="mt-2 text-xl font-bold text-[#0f172a] leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  {post.metaDescription}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
                >
                  Read the guide →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
