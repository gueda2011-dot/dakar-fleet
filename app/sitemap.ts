import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: { fr: `${SITE_URL}/`, en: `${SITE_URL}/en` },
      },
    },
    {
      url: `${SITE_URL}/en`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: { fr: `${SITE_URL}/`, en: `${SITE_URL}/en` },
      },
    },
    ...[
      "/transfert-aeroport-dakar",
      "/chauffeur-prive-business-dakar",
      "/vtc-voiture-electrique-dakar",
    ].map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
