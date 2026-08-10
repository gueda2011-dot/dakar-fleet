import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";
import { buildWebPage, ORG_ID } from "@/lib/structured-data";

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

const webPage = buildWebPage({
  type: "AboutPage",
  canonical: `${SITE_URL}${localizedRoutes.about.fr}`,
  name: title,
  description,
  lang: "fr",
  mainEntityId: ORG_ID,
});

export default function AProposPage() {
  return (
    <>
      <JsonLd data={webPage} />
      <AboutPage lang="fr" />
    </>
  );
}
