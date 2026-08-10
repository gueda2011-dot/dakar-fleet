import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { SITE_URL } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";

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

export default function FrContactPage() {
  return <ContactPage lang="fr" />;
}
