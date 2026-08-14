import type { Locale } from "@/i18n/content";
import { EMAIL, PHONE, SITE_URL } from "@/lib/constants";

/**
 * Central source of truth for the Dakar Fleet Schema.org graph.
 *
 * Design notes (SEO-2.4):
 * - One logical Organization, one logical WebSite and three logical Services,
 *   identified by stable, language-independent @id anchors. FR and EN pages
 *   reference the exact same nodes so the identity graph never forks per locale.
 * - `Organization` is used as a semantic type to identify the operator/brand.
 *   It is NOT a claim that Dakar Fleet is a registered legal entity, so no
 *   legalName / registration / tax identifiers / founding data are declared.
 * - No LocalBusiness, no PostalAddress, no geo coordinates: there is no
 *   validated public physical address to model those honestly. `location`
 *   records the implantation only, as a named Place.
 * - No sameAs: WhatsApp is a contact channel, not an external identity profile,
 *   and no validated social / business profile exists yet.
 */

// Stable, language-independent @id anchors.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SERVICE_AIRPORT_ID = `${SITE_URL}/#service-airport-transfer`;
export const SERVICE_PRIVATE_ID = `${SITE_URL}/#service-private-chauffeur`;
export const SERVICE_ELECTRIC_ID = `${SITE_URL}/#service-electric-chauffeur`;

const LOGO_URL = `${SITE_URL}/logo.png`;

// Validated areas served, mirroring the areas shown across the public pages.
const AREA_SERVED = [
  "Dakar",
  "Diamniadio",
  "Blaise Diagne International Airport (AIBD)",
  "Thiès",
  "Mbour",
  "Saly",
].map((name) => ({ "@type": "Place", name }));

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Dakar Fleet",
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  telephone: PHONE,
  email: EMAIL,
  // Implantation, not an agency open to the public. No nested PostalAddress.
  location: {
    "@type": "Place",
    name: "Diamniadio, SD City, Senegal",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE,
    email: EMAIL,
    contactType: "customer service",
  },
  areaServed: AREA_SERVED,
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Dakar Fleet",
  publisher: { "@id": ORG_ID },
  inLanguage: ["fr", "en"],
};

const services = [
  {
    "@type": "Service",
    "@id": SERVICE_AIRPORT_ID,
    name: "Airport transfer",
    serviceType: "Airport transfer with private chauffeur",
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  },
  {
    "@type": "Service",
    "@id": SERVICE_PRIVATE_ID,
    name: "Private chauffeur",
    serviceType: "Private and business chauffeur service",
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  },
  {
    "@type": "Service",
    "@id": SERVICE_ELECTRIC_ID,
    name: "Electric chauffeur",
    serviceType: "Electric chauffeur-driven transport",
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  },
];

/**
 * The identity graph shared byte-for-byte across FR and EN layouts.
 * Rendered once per page via the layout; pages then add their own WebPage
 * node, wired to these nodes through @id references.
 */
export const identityGraph = {
  "@context": "https://schema.org",
  "@graph": [organization, website, ...services],
};

type WebPageType = "WebPage" | "AboutPage" | "ContactPage";

interface WebPageInput {
  /** Schema.org type of the page node. Defaults to WebPage. */
  type?: WebPageType;
  /** Absolute canonical URL of the page (used for both url and #webpage @id). */
  canonical: string;
  /** Page name, aligned with the page metadata title. */
  name: string;
  /** Page description, aligned with the page metadata description. */
  description: string;
  /** Page language. */
  lang: Locale;
  /** @id of the primary entity described by the page (a Service or the Organization). */
  mainEntityId?: string;
  /** @id of the entity the page is about (the Organization). */
  aboutId?: string;
}

/**
 * Build a WebPage (or AboutPage / ContactPage) node wired to the shared graph
 * through stable @id references. FR and EN variants of the same page reference
 * the same Service / Organization @id, keeping the graph single-entity.
 */
export function buildWebPage({
  type = "WebPage",
  canonical,
  name,
  description,
  lang,
  mainEntityId,
  aboutId,
}: WebPageInput) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${canonical}#webpage`,
    url: canonical,
    name,
    description,
    inLanguage: lang,
    isPartOf: { "@id": WEBSITE_ID },
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
    ...(aboutId ? { about: { "@id": aboutId } } : {}),
  };
}
