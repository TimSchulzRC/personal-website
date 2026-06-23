// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

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
  integrations: [
    sitemap({
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
