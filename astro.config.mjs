// @ts-check

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
      // German blog post pages carry the same article as the English ones
      // and point to them as canonical, so only the English URLs are listed.
      filter: (page) => !/^\/blog\/[^/]+\/$/.test(new URL(page).pathname),
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
