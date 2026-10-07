import { getAllPosts } from "@/lib/blog-data";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://arbeitsstundenrechner.de";
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/datenschutz/`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/impressum/`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
