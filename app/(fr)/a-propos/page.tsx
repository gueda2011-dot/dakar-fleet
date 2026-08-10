import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { SITE_URL } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";

const title = "À propos de Dakar Fleet | Transport avec chauffeur à Dakar";
const description =
  "Découvrez Dakar Fleet, service de transport avec chauffeur implanté à Diamniadio, SD City, desservant Dakar, l’AIBD, Thiès, Mbour et Saly.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${localizedRoutes.about.fr}`,
    siteName: "Dakar Fleet",
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: `${SITE_URL}${localizedRoutes.about.fr}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.about.fr}`,
      en: `${SITE_URL}${localizedRoutes.about.en}`,
    },
  },
};

export default function AProposPage() {
  return <AboutPage lang="fr" />;
}
