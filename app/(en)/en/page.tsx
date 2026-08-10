import { PageTemplate } from "@/components/PageTemplate";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPage, ORG_ID } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

const webPage = buildWebPage({
  canonical: `${SITE_URL}/en`,
  name: "Dakar Fleet | Premium Chauffeur Service in Dakar",
  description:
    "Dakar Fleet offers airport transfers, business travel, tours and private hire with professional drivers in Dakar. Premium BYD electric vehicles, available 24/7.",
  lang: "en",
  aboutId: ORG_ID,
});

export default function EnPage() {
  return (
    <>
      <JsonLd data={webPage} />
      <PageTemplate lang="en" />
    </>
  );
}
