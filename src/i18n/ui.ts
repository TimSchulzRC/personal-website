export const languages = {
	de: "Deutsch",
	en: "English",
} as const;

export const defaultLang = "de";
export type Lang = keyof typeof languages;

// Maps a logical page to its localized URL path, used for routing + hreflang.
export const routes = {
	home: { de: "/", en: "/en/" },
	imprint: { de: "/impressum/", en: "/en/imprint/" },
	privacy: { de: "/datenschutz/", en: "/en/privacy/" },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
	de: {
		"meta.title": "Tim Schulz – Softwareentwickler & IT-Berater",
		"meta.description":
			"Tim Schulz: Softwareentwickler und IT-Berater aus Deutschland. Ich entwickle moderne Websites und Webanwendungen mit Fokus auf durchdachte User Experience.",
		"meta.home.title": "Tim Schulz – Softwareentwickler & IT-Berater",
		"meta.imprint.title": "Impressum – Tim Schulz",
		"meta.imprint.description": "Impressum und Anbieterkennzeichnung von Tim Schulz.",
		"meta.privacy.title": "Datenschutzerklärung – Tim Schulz",
		"meta.privacy.description":
			"Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf timschulz.net.",

		"hero.greeting": "Hey, ich bin",
		"about.title": "Über mich",
		"about.p1":
			"Ich habe Informatik studiert und entwickle seit Jahren Websites und Webanwendungen. Mein Fokus liegt auf einer durchdachten User Experience – Anwendungen sollen nicht nur funktionieren, sondern sich gut bedienen lassen.",
		"about.p2":
			"Als IT-Berater und Anwendungsentwickler setze ich Projekte in unterschiedlichsten Bereichen um: Von der Restrukturierung gewachsener Systeme bis hin zu individuellen Webanwendungen.",

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
	},
	en: {
		"meta.title": "Tim Schulz – Software Developer & IT Consultant",
		"meta.description":
			"Tim Schulz: software developer and IT consultant from Germany. I build modern websites and web applications with a focus on thoughtful user experience.",
		"meta.home.title": "Tim Schulz – Software Developer & IT Consultant",
		"meta.imprint.title": "Imprint – Tim Schulz",
		"meta.imprint.description": "Imprint and provider information for Tim Schulz.",
		"meta.privacy.title": "Privacy Policy – Tim Schulz",
		"meta.privacy.description":
			"Information on data protection and the processing of personal data on timschulz.net.",

		"hero.greeting": "Hey, I'm",
		"about.title": "About me",
		"about.p1":
			"I studied computer science and have been building websites and web applications for years. My focus is on a thoughtful user experience: software should not only work, it should be a pleasure to use.",
		"about.p2":
			"As an IT consultant and application developer I deliver projects across a wide range of domains: from restructuring legacy systems to building bespoke web applications.",

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

		"nav.imprint": "Imprint",
		"nav.privacy": "Privacy",
		"lang.switch": "Deutsch",
		"lang.label": "Language",
		"a11y.social": "Social networks",
		"a11y.skipToContent": "Skip to content",
		"back.home": "Back to home",
	},
} as const;

export type UIKey = keyof (typeof ui)["de"];
