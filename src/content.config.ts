import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { XMLParser } from "fast-xml-parser";
import { excerpt } from "./lib/excerpt";

const MEDIUM_FEED = "https://medium.com/feed/@tim-schulz";

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  "atom:updated": string;
  category?: string | string[];
  "content:encoded": string;
}

/** Strips Medium's RSS tracking query (`?source=rss-…`) from a URL. */
function cleanUrl(url: string): string {
  return url.replace(/\?source=rss[^"]*$/, "");
}

// Fetched once per build. New Medium posts appear after the next deploy.
const blog = defineCollection({
  loader: async () => {
    const res = await fetch(MEDIUM_FEED);
    if (!res.ok) {
      throw new Error(`Medium feed request failed: ${res.status}`);
    }

    const feed = new XMLParser().parse(await res.text());
    const raw = feed.rss.channel.item ?? [];
    const items: FeedItem[] = Array.isArray(raw) ? raw : [raw];

    return items.map((item) => {
      const url = cleanUrl(item.link);
      const content = item["content:encoded"]
        // Drop Medium's view-tracking pixel.
        .replace(
          /<img[^>]*src="https:\/\/medium\.com\/_\/stat[^"]*"[^>]*>/g,
          "",
        )
        .replace(/href="([^"]*)"/g, (_, href) => `href="${cleanUrl(href)}"`);

      return {
        id: url.split("/").pop() as string,
        title: item.title,
        url,
        pubDate: new Date(item.pubDate),
        updated: new Date(item["atom:updated"]),
        categories: [item.category ?? []].flat(),
        excerpt: excerpt(content),
        // The first image in a Medium post is usually its cover.
        image: content.match(/<img[^>]*src="([^"]+)"/)?.[1],
        content,
      };
    });
  },
  schema: z.object({
    title: z.string(),
    url: z.url(),
    pubDate: z.date(),
    updated: z.date(),
    categories: z.array(z.string()),
    excerpt: z.string(),
    image: z.url().optional(),
    content: z.string(),
  }),
});

// German translations of the Medium posts, keyed by the post's id. The body
// is the translated post HTML; `sourceUpdated` is the `updated` date of the
// English version that was translated.
const blogDe = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog-de" }),
  schema: z.object({
    title: z.string(),
    sourceUpdated: z.coerce.date(),
  }),
});

export const collections = { blog, blogDe };
