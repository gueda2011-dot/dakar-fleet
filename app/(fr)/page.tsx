import { PageTemplate } from "@/components/PageTemplate";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPage, ORG_ID } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

const webPage = buildWebPage({
  canonical: `${SITE_URL}/`,
  name: "Dakar Fleet | Transport premium avec chauffeur à Dakar",
  description:
    "Dakar Fleet propose des transferts aéroport, déplacements business, excursions et mise à disposition avec chauffeur à Dakar. Services organisables 24h/24 et 7j/7, sur réservation et selon disponibilité.",
  lang: "fr",
  aboutId: ORG_ID,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPage} />
      <PageTemplate lang="fr" />
    </>
  );
}
