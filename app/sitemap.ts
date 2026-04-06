import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "", priority: 1 },
    { url: "/transfert-aeroport-dakar", priority: 0.9 },
    { url: "/chauffeur-prive-business-dakar", priority: 0.9 },
    { url: "/vtc-voiture-electrique-dakar", priority: 0.9 },
  ];

  const sitemapData: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    sitemapData.push({
      url: `${SITE_URL}${route.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route.priority,
      alternates: {
        languages: { en: `${SITE_URL}/en${route.url}` },
      },
    });
    
    sitemapData.push({
      url: `${SITE_URL}/en${route.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route.priority - 0.1,
      alternates: {
        languages: { fr: `${SITE_URL}${route.url}` },
      },
    });
  });

  return sitemapData;
}
