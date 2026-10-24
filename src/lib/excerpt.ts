/** First paragraph as plain text, shortened for list views and meta tags. */
export function excerpt(html: string, max = 180): string {
  const firstParagraph = html.match(/<p>([\s\S]*?)<\/p>/)?.[1] ?? "";
  const text = firstParagraph
    .replace(/<br\s*\/?>/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max))}…`;
}
