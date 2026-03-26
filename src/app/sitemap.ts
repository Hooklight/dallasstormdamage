import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dallasstormdamage.com";

const STATIC_ROUTES: { url: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
  { url: "/",                              changeFrequency: "weekly",  priority: 1.0  },
  { url: "/contact",                       changeFrequency: "monthly", priority: 0.9  },
  { url: "/emergency-roof-leak",           changeFrequency: "monthly", priority: 0.95 },
  { url: "/hail-damage-dallas",            changeFrequency: "monthly", priority: 0.9  },
  { url: "/storm-damage-inspection",       changeFrequency: "monthly", priority: 0.85 },
  { url: "/wind-damage-roof-repair",       changeFrequency: "monthly", priority: 0.85 },
  { url: "/insurance-claim-help",          changeFrequency: "monthly", priority: 0.8  },
  { url: "/how-it-works",                  changeFrequency: "monthly", priority: 0.75 },
  { url: "/first-24-hours-after-storm",    changeFrequency: "monthly", priority: 0.75 },
  { url: "/roof-replacement-hail",         changeFrequency: "monthly", priority: 0.7  },
  { url: "/gutter-siding-window-storm-damage", changeFrequency: "monthly", priority: 0.65 },
  { url: "/commercial-storm-damage",       changeFrequency: "monthly", priority: 0.65 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map(({ url, changeFrequency, priority }) => ({
    url:            `${baseUrl}${url}`,
    lastModified:   new Date(),
    changeFrequency,
    priority,
  }));

  const blogEntries = getAllBlogPosts().map((post) => ({
    url:            `${baseUrl}/blog/${post.slug}`,
    lastModified:   new Date(post.datePublished),
    changeFrequency: "monthly" as const,
    priority:       0.7,
  }));

  return [...staticEntries, { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 }, ...blogEntries];
}
