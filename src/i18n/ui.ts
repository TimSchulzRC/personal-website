export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export const defaultLang = "de";
export type Lang = keyof typeof languages;

// Maps a logical page to its localized URL path, used for routing + hreflang.
export const routes = {
  home: { de: "/", en: "/en/" },
  imprint: { de: "/impressum/", en: "/en/legal/" },
  privacy: { de: "/datenschutz/", en: "/en/privacy/" },
  blog: { de: "/blog/", en: "/en/blog/" },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  de: {
    "meta.title": "Tim Schulz – Softwareentwickler & IT-Berater",
    "meta.description":
      "Als Entwickler und IT-Berater setze ich Projekte in unterschiedlichsten Bereichen um: Von der Restrukturierung gewachsener Systeme bis hin zu individuellen Webanwendungen.",
    "meta.home.title": "Tim Schulz – Softwareentwickler & IT-Berater",
    "meta.imprint.title": "Impressum – Tim Schulz",
    "meta.imprint.description":
      "Impressum und Anbieterkennzeichnung von Tim Schulz.",
    "meta.privacy.title": "Datenschutzerklärung – Tim Schulz",
    "meta.privacy.description":
      "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf timschulz.net.",
    "meta.blog.title": "Blog – Tim Schulz",
    "meta.blog.description":
      "Artikel von Tim Schulz über Softwareentwicklung, Technik und Produkte.",

    "hero.greeting": "Hey, ich bin",
    "about.title": "Über mich",
    "about.p1":
      "Ich habe Informatik studiert und entwickle seit Jahren Websites und Webanwendungen. Mein Fokus liegt auf einer durchdachten User Experience – Anwendungen sollen nicht nur funktionieren, sondern sich gut bedienen lassen.",
    "about.p2":
      "Als Entwickler und IT-Berater setze ich Projekte in unterschiedlichsten Bereichen um: Von der Restrukturierung gewachsener Systeme bis hin zu individuellen Webanwendungen.",

    "skills.title": "Skills",
    "skills.websites.title": "Websites",
    "skills.websites.body":
      "Seit einigen Jahren ist das Erstellen von Webseiten meine Spezialität.",
    "skills.webapps.title": "Webapps",
    "skills.webapps.body":
      "Individuelle, interaktive Webanwendungen – von der Idee bis zum produktiven Einsatz.",
    "skills.consulting.title": "Beratung",
    "skills.consulting.body":
      "Von der Restrukturierung gewachsener Systeme bis zur Auswahl der passenden Technologie.",

    "footer.tagline": "Softwareentwickler & IT-Berater",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.legal": "Rechtliches",

    "nav.imprint": "Impressum",
    "nav.privacy": "Datenschutz",
    "lang.switch": "English",
    "lang.label": "Sprache",
    "a11y.social": "Soziale Netzwerke",
    "a11y.skipToContent": "Zum Inhalt springen",
    "back.home": "Zurück zur Startseite",

    "nav.blog": "Blog",
    "blog.title": "Blog",
    "blog.empty": "Noch keine Artikel veröffentlicht.",
    "blog.readMore": "Weiterlesen",
    "blog.back": "Alle Artikel",
    "blog.onMedium": "Auch auf Medium erschienen",
    "blog.readOnMedium": "Auf Medium lesen",
  },
  en: {
    "meta.title": "Tim Schulz – Software Developer & IT Consultant",
    "meta.description":
      "As a developer and IT consultant, I deliver projects across a wide range of domains: from restructuring legacy systems to building bespoke web applications.",
    "meta.home.title": "Tim Schulz – Software Developer & IT Consultant",
    "meta.imprint.title": "Legal – Tim Schulz",
    "meta.imprint.description":
      "Legal notice and provider information for Tim Schulz.",
    "meta.privacy.title": "Privacy Policy – Tim Schulz",
    "meta.privacy.description":
      "Information on data protection and the processing of personal data on timschulz.net.",
    "meta.blog.title": "Blog – Tim Schulz",
    "meta.blog.description":
      "Articles by Tim Schulz on software development, tech and products.",

    "hero.greeting": "Hey, I'm",
    "about.title": "About me",
    "about.p1":
      "I studied computer science and have been building websites and web applications for years. My focus is on a thoughtful user experience: software should not only work, it should be a pleasure to use.",
    "about.p2":
      "As a developer and IT consultant I deliver projects across a wide range of domains: from restructuring legacy systems to building bespoke web applications.",

    "skills.title": "Skills",
    "skills.websites.title": "Websites",
    "skills.websites.body":
      "Building websites has been my specialty for several years.",
    "skills.webapps.title": "Web apps",
    "skills.webapps.body":
      "Custom, interactive web applications, from the first idea to production.",
    "skills.consulting.title": "Consulting",
    "skills.consulting.body":
      "From restructuring legacy systems to choosing the right technology.",

    "footer.tagline": "Software Developer & IT Consultant",
    "footer.rights": "All rights reserved.",
    "footer.legal": "Legal",

    "nav.imprint": "Legal",
    "nav.privacy": "Privacy",
    "lang.switch": "Deutsch",
    "lang.label": "Language",
    "a11y.social": "Social networks",
    "a11y.skipToContent": "Skip to content",
    "back.home": "Back to home",

    "nav.blog": "Blog",
    "blog.title": "Blog",
    "blog.empty": "No articles published yet.",
    "blog.readMore": "Read more",
    "blog.back": "All articles",
    "blog.onMedium": "Also published on Medium",
    "blog.readOnMedium": "Read on Medium",
  },
} as const;

export type UIKey = keyof (typeof ui)["de"];
