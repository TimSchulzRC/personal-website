// Compares the Medium feed with the posts in the deployed site and reports
// whether a rebuild is needed. Used by .github/workflows/rebuild-blog.yml.
//
// Usage: node scripts/check-medium-feed.mjs
// Prints `changed=true|false`, and appends it to $GITHUB_OUTPUT if set.

import { appendFileSync } from "node:fs";

const FEED_URL = "https://medium.com/feed/@tim-schulz";
const STATE_URL =
  process.env.STATE_URL ?? "https://timschulz.net/blog-feed-state.json";

async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${url} responded with ${res.status}`);
  return res.text();
}

/** Same shape as src/pages/blog-feed-state.json.ts. */
function feedState(xml) {
  // An error or challenge page served with status 200 would otherwise look
  // like a feed without posts.
  if (!/<rss[\s>]/.test(xml) || !xml.includes("<channel>")) {
    throw new Error("Medium did not return an RSS feed.");
  }
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  return items
    .map((item) => {
      const link = item.match(/<link>([^<]+)<\/link>/)?.[1] ?? "";
      const updated = item.match(/<atom:updated>([^<]+)</)?.[1] ?? "";
      return {
        url: link.replace(/\?source=rss.*$/, ""),
        updated: new Date(updated).toISOString(),
      };
    })
    .sort((a, b) => a.url.localeCompare(b.url));
}

async function deployedState() {
  try {
    return JSON.parse(await fetchText(STATE_URL));
  } catch (error) {
    // Not deployed yet or unreachable: rebuild to be safe.
    console.log(`Could not read deployed state: ${error.message}`);
    return null;
  }
}

const live = feedState(await fetchText(FEED_URL));
const deployed = await deployedState();
const changed = JSON.stringify(live) !== JSON.stringify(deployed);

if (changed) {
  const known = new Map((deployed ?? []).map((p) => [p.url, p.updated]));
  for (const post of live) {
    if (!known.has(post.url)) console.log(`New post: ${post.url}`);
    else if (known.get(post.url) !== post.updated)
      console.log(`Updated post: ${post.url}`);
  }
  const current = new Set(live.map((p) => p.url));
  for (const url of known.keys()) {
    if (!current.has(url)) console.log(`Removed from feed: ${url}`);
  }
} else {
  console.log("No changes in the Medium feed.");
}

console.log(`changed=${changed}`);
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
}
