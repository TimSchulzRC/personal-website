import { getCollection, getEntry } from "astro:content";
import type { Lang } from "../i18n/ui";
import { excerpt } from "./excerpt";

/** A Medium post as shown on a page in the given language. */
export interface LocalizedPost {
  id: string;
  /** URL of the original on Medium. */
  url: string;
  pubDate: Date;
  updated: Date;
  categories: string[];
  image?: string;
  title: string;
  excerpt: string;
  content: string;
  /** Language the title and content are in. */
  contentLang: Lang;
  /** Whether a German translation of this post exists. */
  hasTranslation: boolean;
}

/** All posts, newest first, using the German translation where one exists. */
export async function getPosts(lang: Lang): Promise<LocalizedPost[]> {
  const posts = await getCollection("blog");

  const localized = await Promise.all(
    posts.map(async ({ id, data }) => {
      const translation = await getEntry("blogDe", id);

      if (translation && translation.data.sourceUpdated < data.updated) {
        console.warn(
          `[blog] German translation of "${id}" is older than the Medium post. Update src/content/blog-de/${id}.md.`,
        );
      }

      const post: LocalizedPost = {
        id,
        url: data.url,
        pubDate: data.pubDate,
        updated: data.updated,
        categories: data.categories,
        image: data.image,
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        contentLang: "en",
        hasTranslation: translation !== undefined,
      };

      if (lang === "de" && translation?.body) {
        post.title = translation.data.title;
        post.excerpt = excerpt(translation.body);
        post.content = translation.body;
        post.contentLang = "de";
      }

      return post;
    }),
  );

  return localized.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}
