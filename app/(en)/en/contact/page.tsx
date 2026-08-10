import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { SITE_URL } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";

const title = "Contact Dakar Fleet | Chauffeur & Airport Transfers";
const description =
  "Contact Dakar Fleet by WhatsApp, phone or email to request an AIBD airport transfer, private chauffeur or business journey.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${localizedRoutes.contact.en}`,
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
    canonical: `${SITE_URL}${localizedRoutes.contact.en}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.contact.fr}`,
      en: `${SITE_URL}${localizedRoutes.contact.en}`,
    },
  },
};

export default function EnContactPage() {
  return <ContactPage lang="en" />;
}
