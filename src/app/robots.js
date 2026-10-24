export default function robots() {
  const baseUrl = "https://dwarkadarshantour.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Explicitly allow AI search crawlers for GEO (Generative Engine Optimization) & AI SEO
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Amazonbot",
          "Applebot",
          "Bingbot",
          "Googlebot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
