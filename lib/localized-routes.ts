import type { Locale } from "@/i18n/content";

export const localizedRoutes = {
  home: { fr: "/", en: "/en" },
  airportTransfer: { fr: "/transfert-aeroport-dakar", en: "/en/airport-transfer-dakar" },
  businessChauffeur: { fr: "/chauffeur-prive-business-dakar", en: "/en/private-chauffeur-dakar" },
  electricChauffeur: { fr: "/vtc-voiture-electrique-dakar", en: "/en/electric-chauffeur-dakar" },
} as const satisfies Record<string, Record<Locale, string | null>>;

export function getLocalizedRoute(pathname: string, locale: Locale): string {
  const route = Object.values(localizedRoutes).find((paths) =>
    Object.values(paths).includes(pathname as never),
  );

  return route?.[locale] ?? localizedRoutes.home[locale];
}
