import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPageRoutes = [
    localizedRoutes.airportTransfer,
    localizedRoutes.businessChauffeur,
    localizedRoutes.electricChauffeur,
    localizedRoutes.about,
    localizedRoutes.contact,
  ];

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
    ...localizedPageRoutes.flatMap((routes) =>
      (["fr", "en"] as const).map((locale) => ({
        url: `${SITE_URL}${routes[locale]}`,
        changeFrequency: "weekly" as const,
        priority: 0.9,
        alternates: {
          languages: {
            fr: `${SITE_URL}${routes.fr}`,
            en: `${SITE_URL}${routes.en}`,
          },
        },
      })),
    ),
  ];
}
