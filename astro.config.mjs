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
      // Blog posts declare their Medium original as canonical, so they don't
      // belong in this site's sitemap.
      filter: (page) => !/\/blog\/[^/]+\/$/.test(new URL(page).pathname),
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
