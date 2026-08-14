import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";
import { buildWebPage, ORG_ID } from "@/lib/structured-data";

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

const webPage = buildWebPage({
  type: "ContactPage",
  canonical: `${SITE_URL}${localizedRoutes.contact.en}`,
  name: title,
  description,
  lang: "en",
  aboutId: ORG_ID,
});

export default function EnContactPage() {
  return (
    <>
      <JsonLd data={webPage} />
      <ContactPage lang="en" />
    </>
  );
}
