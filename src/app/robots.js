export const dynamic = "force-static";

export default function robots() {
  const baseUrl = "https://arbeitsstundenrechner.de";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
