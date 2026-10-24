// @ts-check

import { existsSync } from "node:fs";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://timschulz.net",
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    domains: ["cdn-images-1.medium.com"],
  },
  integrations: [
    sitemap({
      // German blog post pages without a translation repeat the English
      // article and point to it as canonical, so they aren't listed.
      filter: (page) => {
        const slug = new URL(page).pathname.match(/^\/blog\/([^/]+)\/$/)?.[1];
        return !slug || existsSync(`./src/content/blog-de/${slug}.md`);
      },
      i18n: {
        defaultLocale: "de",
        locales: {
          de: "de",
          en: "en",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
