import {
	ui,
	defaultLang,
	routes,
	type Lang,
	type UIKey,
	type RouteKey,
} from "./ui";

/** Derive the active language from the request URL (anything under /en/ is English). */
export function getLangFromUrl(url: URL): Lang {
	const [, seg] = url.pathname.split("/");
	if (seg === "en") return "en";
	return defaultLang;
}

/** Returns a translate function bound to a language, falling back to the default. */
export function useTranslations(lang: Lang) {
	return function t(key: UIKey): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

/** Localized path for a logical route in a given language. */
export function getRoute(key: RouteKey, lang: Lang): string {
	return routes[key][lang];
}

/** The opposite language (de <-> en). */
export function otherLang(lang: Lang): Lang {
	return lang === "de" ? "en" : "de";
}

/** Both localized URLs for a route, for the language switch and hreflang tags. */
export function getAlternates(key: RouteKey) {
	return { de: routes[key].de, en: routes[key].en };
}
