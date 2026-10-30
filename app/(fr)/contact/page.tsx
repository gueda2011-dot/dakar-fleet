import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";
import { buildWebPage, ORG_ID } from "@/lib/structured-data";

const title = "Contact Dakar Fleet | Chauffeur & Transfert AIBD Dakar";
const description =
  "Contactez Dakar Fleet par WhatsApp, téléphone ou email pour demander un transfert AIBD, un chauffeur privé ou un trajet professionnel.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${localizedRoutes.contact.fr}`,
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
    canonical: `${SITE_URL}${localizedRoutes.contact.fr}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.contact.fr}`,
      en: `${SITE_URL}${localizedRoutes.contact.en}`,
    },
  },
};

const webPage = buildWebPage({
  type: "ContactPage",
  canonical: `${SITE_URL}${localizedRoutes.contact.fr}`,
  name: title,
  description,
  lang: "fr",
  aboutId: ORG_ID,
});

export default function FrContactPage() {
  return (
    <>
      <JsonLd data={webPage} />
      <ContactPage lang="fr" />
    </>
  );
}
