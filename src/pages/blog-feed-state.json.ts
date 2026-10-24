import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

// The Medium posts this build contains. The "Rebuild blog" workflow compares
// it with the live feed to decide whether a new deploy is needed.
export const GET: APIRoute = async () => {
  const posts = (await getCollection("blog"))
    .map(({ data }) => ({ url: data.url, updated: data.updated.toISOString() }))
    .sort((a, b) => a.url.localeCompare(b.url));

  return new Response(JSON.stringify(posts, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
};
