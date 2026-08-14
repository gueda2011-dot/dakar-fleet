import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";
import { buildWebPage, ORG_ID } from "@/lib/structured-data";

const title = "About Dakar Fleet | Chauffeur & Airport Transfers in Dakar";
const description =
  "Learn about Dakar Fleet, a chauffeur-driven transport service based in Diamniadio, SD City, serving Dakar, AIBD, Thiès, Mbour and Saly.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${localizedRoutes.about.en}`,
    siteName: "Dakar Fleet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: `${SITE_URL}${localizedRoutes.about.en}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.about.fr}`,
      en: `${SITE_URL}${localizedRoutes.about.en}`,
    },
  },
};

const webPage = buildWebPage({
  type: "AboutPage",
  canonical: `${SITE_URL}${localizedRoutes.about.en}`,
  name: title,
  description,
  lang: "en",
  mainEntityId: ORG_ID,
});

export default function EnAboutPage() {
  return (
    <>
      <JsonLd data={webPage} />
      <AboutPage lang="en" />
    </>
  );
}
