// Per-route structured-data audit for the Dakar Fleet entity graph (SEO-2.4).
// Usage: npm run build && npm run check:structured-data

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, normalize } from "node:path";

const SITE = "https://www.dakarfleet.com";
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const SERVICE_AIRPORT_ID = `${SITE}/#service-airport-transfer`;
const SERVICE_PRIVATE_ID = `${SITE}/#service-private-chauffeur`;
const SERVICE_ELECTRIC_ID = `${SITE}/#service-electric-chauffeur`;
const SHARED_IDS = [ORG_ID, WEBSITE_ID, SERVICE_AIRPORT_ID, SERVICE_PRIVATE_ID, SERVICE_ELECTRIC_ID];
const EXPECTED_AREAS = [
  "Dakar",
  "Diamniadio",
  "Blaise Diagne International Airport (AIBD)",
  "Thiès",
  "Mbour",
  "Saly",
];

const APP_DIR = join(process.cwd(), ".next", "server", "app");
if (!existsSync(APP_DIR)) {
  console.error("✗ .next/server/app not found. Run `npm run build` first.");
  process.exit(1);
}

const routes = [
  {
    route: "/", file: "index.html", locale: "fr", canonical: `${SITE}/`,
    alternateFr: `${SITE}/`, alternateEn: `${SITE}/en`, type: "WebPage",
    relation: "about", target: ORG_ID,
  },
  {
    route: "/en", file: "en.html", locale: "en", canonical: `${SITE}/en`,
    alternateFr: `${SITE}/`, alternateEn: `${SITE}/en`, type: "WebPage",
    relation: "about", target: ORG_ID,
  },
  {
    route: "/transfert-aeroport-dakar", file: "transfert-aeroport-dakar.html", locale: "fr",
    canonical: `${SITE}/transfert-aeroport-dakar`, alternateFr: `${SITE}/transfert-aeroport-dakar`,
    alternateEn: `${SITE}/en/airport-transfer-dakar`, type: "WebPage",
    relation: "mainEntity", target: SERVICE_AIRPORT_ID,
  },
  {
    route: "/en/airport-transfer-dakar", file: join("en", "airport-transfer-dakar.html"), locale: "en",
    canonical: `${SITE}/en/airport-transfer-dakar`, alternateFr: `${SITE}/transfert-aeroport-dakar`,
    alternateEn: `${SITE}/en/airport-transfer-dakar`, type: "WebPage",
    relation: "mainEntity", target: SERVICE_AIRPORT_ID,
  },
  {
    route: "/chauffeur-prive-business-dakar", file: "chauffeur-prive-business-dakar.html", locale: "fr",
    canonical: `${SITE}/chauffeur-prive-business-dakar`, alternateFr: `${SITE}/chauffeur-prive-business-dakar`,
    alternateEn: `${SITE}/en/private-chauffeur-dakar`, type: "WebPage",
    relation: "mainEntity", target: SERVICE_PRIVATE_ID,
  },
  {
    route: "/en/private-chauffeur-dakar", file: join("en", "private-chauffeur-dakar.html"), locale: "en",
    canonical: `${SITE}/en/private-chauffeur-dakar`, alternateFr: `${SITE}/chauffeur-prive-business-dakar`,
    alternateEn: `${SITE}/en/private-chauffeur-dakar`, type: "WebPage",
    relation: "mainEntity", target: SERVICE_PRIVATE_ID,
  },
  {
    route: "/vtc-voiture-electrique-dakar", file: "vtc-voiture-electrique-dakar.html", locale: "fr",
    canonical: `${SITE}/vtc-voiture-electrique-dakar`, alternateFr: `${SITE}/vtc-voiture-electrique-dakar`,
    alternateEn: `${SITE}/en/electric-chauffeur-dakar`, type: "WebPage",
    relation: "mainEntity", target: SERVICE_ELECTRIC_ID,
  },
  {
    route: "/en/electric-chauffeur-dakar", file: join("en", "electric-chauffeur-dakar.html"), locale: "en",
    canonical: `${SITE}/en/electric-chauffeur-dakar`, alternateFr: `${SITE}/vtc-voiture-electrique-dakar`,
    alternateEn: `${SITE}/en/electric-chauffeur-dakar`, type: "WebPage",
    relation: "mainEntity", target: SERVICE_ELECTRIC_ID,
  },
  {
    route: "/a-propos", file: "a-propos.html", locale: "fr", canonical: `${SITE}/a-propos`,
    alternateFr: `${SITE}/a-propos`, alternateEn: `${SITE}/en/about`, type: "AboutPage",
    relation: "mainEntity", target: ORG_ID,
  },
  {
    route: "/en/about", file: join("en", "about.html"), locale: "en", canonical: `${SITE}/en/about`,
    alternateFr: `${SITE}/a-propos`, alternateEn: `${SITE}/en/about`, type: "AboutPage",
    relation: "mainEntity", target: ORG_ID,
  },
  {
    route: "/contact", file: "contact.html", locale: "fr", canonical: `${SITE}/contact`,
    alternateFr: `${SITE}/contact`, alternateEn: `${SITE}/en/contact`, type: "ContactPage",
    relation: "about", target: ORG_ID,
  },
  {
    route: "/en/contact", file: join("en", "contact.html"), locale: "en", canonical: `${SITE}/en/contact`,
    alternateFr: `${SITE}/contact`, alternateEn: `${SITE}/en/contact`, type: "ContactPage",
    relation: "about", target: ORG_ID,
  },
];

const SCRIPT_RE = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;

function decodeHtml(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function jsonLdBlocks(html, file) {
  const blocks = [];
  for (const match of html.matchAll(SCRIPT_RE)) {
    try {
      blocks.push(JSON.parse(decodeHtml(match[1])));
    } catch (error) {
      throw new Error(`Invalid JSON-LD in ${file}: ${error.message}`);
    }
  }
  return blocks;
}

function linkValue(html, rel, hreflang) {
  for (const match of html.matchAll(/<link\s+([^>]+)>/gi)) {
    const attributes = {};
    for (const attribute of match[1].matchAll(/([\w:-]+)="([^"]*)"/g)) {
      attributes[attribute[1].toLowerCase()] = decodeHtml(attribute[2]);
    }
    if (attributes.rel?.toLowerCase() === rel &&
        (hreflang === undefined || attributes.hreflang?.toLowerCase() === hreflang)) {
      return attributes.href;
    }
  }
  return undefined;
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  }
  return value;
}

const stableString = (value) => JSON.stringify(stable(value));

function normalizedIdentityGraph(graph) {
  return {
    ...graph,
    "@graph": [...graph["@graph"]].sort((left, right) =>
      left["@id"].localeCompare(right["@id"]),
    ),
  };
}

function flatten(value, visitor, path = "$") {
  if (Array.isArray(value)) {
    value.forEach((item, index) => flatten(item, visitor, `${path}[${index}]`));
    return;
  }
  if (!value || typeof value !== "object") return;
  visitor(value, path);
  for (const [key, child] of Object.entries(value)) flatten(child, visitor, `${path}.${key}`);
}

function collectHtmlFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true, recursive: true })) {
    if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(normalize(join(entry.parentPath ?? entry.path, entry.name)));
    }
  }
  return files;
}

const failures = [];
const passes = [];
function check(label, condition, detail = "") {
  (condition ? passes : failures).push(`${label}${detail ? ` — ${detail}` : ""}`);
}

const forbiddenTypes = new Set([
  "TaxiService", "LocalBusiness", "PostalAddress", "FAQPage", "Offer", "Product", "Vehicle",
  "SearchAction", "Review", "AggregateRating",
]);
const forbiddenProperties = new Set([
  "address", "streetAddress", "postalCode", "addressRegion", "legalName", "companyRegistration",
  "taxID", "vatID", "leiCode", "duns", "iso6523Code", "naics", "founder", "foundingDate",
  "numberOfEmployees", "openingHours", "openingHoursSpecification", "priceRange", "sameAs",
  "review", "reviews", "aggregateRating", "ratingValue",
]);
const forbiddenClaimPatterns = [
  /\bSARL\b/i, /\bRCCM\b/i, /\bNINEA\b/i, /\bregistered\b/i, /\bincorporated\b/i,
  /\bpartner\b/i, /\bsponsor\b/i, /\bcertified\b/i, /\baward\b/i, /\bfirst fleet\b/i,
  /\beco-friendly\b/i, /\bzero carbon\b/i, /\bzero emissions\b/i, /\bwa\.me\b/i,
];

const expectedIdentity = new Map([
  [ORG_ID, {
    type: "Organization", name: "Dakar Fleet", url: `${SITE}/`, logo: `${SITE}/logo.png`,
    telephone: "+221777796922", email: "contact@dakarfleet.com",
    location: { "@type": "Place", name: "Diamniadio, SD City, Senegal" },
    contactPoint: {
      "@type": "ContactPoint", telephone: "+221777796922", email: "contact@dakarfleet.com",
      contactType: "customer service",
    },
  }],
  [WEBSITE_ID, { type: "WebSite", name: "Dakar Fleet", url: `${SITE}/`, publisher: ORG_ID }],
  [SERVICE_AIRPORT_ID, {
    type: "Service", name: "Airport transfer", serviceType: "Airport transfer with private chauffeur",
    provider: ORG_ID,
  }],
  [SERVICE_PRIVATE_ID, {
    type: "Service", name: "Private chauffeur", serviceType: "Private and business chauffeur service",
    provider: ORG_ID,
  }],
  [SERVICE_ELECTRIC_ID, {
    type: "Service", name: "Electric chauffeur", serviceType: "Electric chauffeur-driven transport",
    provider: ORG_ID,
  }],
]);

function areaNames(node) {
  if (!Array.isArray(node.areaServed)) return [];
  return node.areaServed.map((area) => (typeof area === "string" ? area : area?.name)).sort();
}

const expectedFiles = new Set(routes.map(({ file }) => normalize(join(APP_DIR, file))));
const htmlFiles = collectHtmlFiles(APP_DIR);
const unexpectedStructuredFiles = [];
for (const file of htmlFiles) {
  if (expectedFiles.has(file)) continue;
  if (jsonLdBlocks(readFileSync(file, "utf8"), file).length > 0) unexpectedStructuredFiles.push(file);
}
check("No unexpected structured-data HTML route", unexpectedStructuredFiles.length === 0,
  unexpectedStructuredFiles.join(", "));

let referenceGraph;
const pageIds = [];
const allRouteBlocks = [];

for (const expected of routes) {
  const file = normalize(join(APP_DIR, expected.file));
  check(`${expected.route}: rendered HTML exists`, existsSync(file), file);
  if (!existsSync(file)) continue;

  const html = readFileSync(file, "utf8");
  let blocks;
  try {
    blocks = jsonLdBlocks(html, file);
  } catch (error) {
    failures.push(`${expected.route}: ${error.message}`);
    continue;
  }
  allRouteBlocks.push(...blocks);
  const graphs = blocks.filter((block) => Array.isArray(block["@graph"]));
  const pageNodes = blocks.filter((block) => ["WebPage", "AboutPage", "ContactPage"].includes(block["@type"]));

  check(`${expected.route}: exactly two JSON-LD blocks`, blocks.length === 2, `${blocks.length}`);
  check(`${expected.route}: exactly one identity graph`, graphs.length === 1, `${graphs.length}`);
  check(`${expected.route}: exactly one page node`, pageNodes.length === 1, `${pageNodes.length}`);
  check(`${expected.route}: no TaxiService text`, !/TaxiService/.test(html));

  const lang = html.match(/<html\s+[^>]*lang="([^"]+)"/i)?.[1];
  check(`${expected.route}: HTML lang`, lang === expected.locale, lang ?? "missing");
  check(`${expected.route}: canonical`, linkValue(html, "canonical") === expected.canonical,
    linkValue(html, "canonical") ?? "missing");
  check(`${expected.route}: FR hreflang`, linkValue(html, "alternate", "fr") === expected.alternateFr,
    linkValue(html, "alternate", "fr") ?? "missing");
  check(`${expected.route}: EN hreflang`, linkValue(html, "alternate", "en") === expected.alternateEn,
    linkValue(html, "alternate", "en") ?? "missing");

  if (graphs.length === 1) {
    const graph = graphs[0];
    const nodes = graph["@graph"];
    const ids = nodes.map((node) => node["@id"]);
    check(`${expected.route}: graph context`, graph["@context"] === "https://schema.org");
    check(`${expected.route}: exactly five shared nodes`, nodes.length === 5, `${nodes.length}`);
    check(`${expected.route}: exact shared @ids`,
      ids.length === new Set(ids).size && SHARED_IDS.every((id) => ids.includes(id)), ids.join(", "));

    const normalizedGraph = stableString(normalizedIdentityGraph(graph));
    referenceGraph ??= normalizedGraph;
    check(`${expected.route}: identity graph matches every locale`, normalizedGraph === referenceGraph);

    for (const [id, properties] of expectedIdentity) {
      const node = nodes.find((candidate) => candidate["@id"] === id);
      check(`${expected.route}: shared node ${id.split("#")[1]} exists`, Boolean(node));
      if (!node) continue;
      check(`${expected.route}: ${id} @type`, node["@type"] === properties.type);
      check(`${expected.route}: ${id} name`, node.name === properties.name);
      if (properties.url) check(`${expected.route}: ${id} url`, node.url === properties.url);
      if (properties.logo) check(`${expected.route}: ${id} logo`, node.logo === properties.logo);
      if (properties.publisher) check(`${expected.route}: ${id} publisher`,
        node.publisher?.["@id"] === properties.publisher);
      if (properties.provider) check(`${expected.route}: ${id} provider`,
        node.provider?.["@id"] === properties.provider);
      if (properties.serviceType) check(`${expected.route}: ${id} serviceType`,
        node.serviceType === properties.serviceType);
      if (properties.telephone) check(`${expected.route}: ${id} telephone`,
        node.telephone === properties.telephone);
      if (properties.email) check(`${expected.route}: ${id} email`, node.email === properties.email);
      if (properties.location) check(`${expected.route}: ${id} location`,
        stableString(node.location) === stableString(properties.location));
      if (properties.contactPoint) check(`${expected.route}: ${id} contactPoint`,
        stableString(node.contactPoint) === stableString(properties.contactPoint));
      if (id === WEBSITE_ID) {
        check(`${expected.route}: website languages`,
          stableString(node.inLanguage) === stableString(["fr", "en"]));
      } else {
        check(`${expected.route}: ${id} exact areaServed`,
          stableString(areaNames(node)) === stableString([...EXPECTED_AREAS].sort()), areaNames(node).join(" | "));
      }
    }
  }

  if (pageNodes.length === 1) {
    const page = pageNodes[0];
    const expectedPageId = `${expected.canonical}#webpage`;
    pageIds.push(page["@id"]);
    check(`${expected.route}: page context`, page["@context"] === "https://schema.org");
    check(`${expected.route}: page type`, page["@type"] === expected.type, page["@type"]);
    check(`${expected.route}: page @id`, page["@id"] === expectedPageId, page["@id"]);
    check(`${expected.route}: page url`, page.url === expected.canonical, page.url);
    check(`${expected.route}: page language`, page.inLanguage === expected.locale, page.inLanguage);
    check(`${expected.route}: page name present`, typeof page.name === "string" && page.name.length > 0);
    check(`${expected.route}: page description present`,
      typeof page.description === "string" && page.description.length > 0);
    check(`${expected.route}: isPartOf website`, page.isPartOf?.["@id"] === WEBSITE_ID);
    check(`${expected.route}: ${expected.relation} target`,
      page[expected.relation]?.["@id"] === expected.target, page[expected.relation]?.["@id"] ?? "missing");
    const unexpectedRelation = expected.relation === "about" ? "mainEntity" : "about";
    check(`${expected.route}: no unexpected ${unexpectedRelation}`, page[unexpectedRelation] === undefined);
  }
}

check("Exactly 12 expected routes", routes.length === 12, `${routes.length}`);
check("Exactly 12 unique page @ids", pageIds.length === 12 && new Set(pageIds).size === 12, `${pageIds.length}`);

const forbiddenHits = [];
for (const block of allRouteBlocks) {
  flatten(block, (object, path) => {
    const types = Array.isArray(object["@type"]) ? object["@type"] : [object["@type"]];
    for (const type of types.filter(Boolean)) {
      if (forbiddenTypes.has(type)) forbiddenHits.push(`${path}.@type=${type}`);
    }
    for (const property of Object.keys(object)) {
      if (forbiddenProperties.has(property)) forbiddenHits.push(`${path}.${property}`);
    }
  });
}
check("No forbidden Schema.org types or properties", forbiddenHits.length === 0, forbiddenHits.join(", "));

const rawAll = allRouteBlocks.map((block) => JSON.stringify(block)).join("\n");
const forbiddenClaimHits = forbiddenClaimPatterns.filter((pattern) => pattern.test(rawAll)).map((pattern) => pattern.source);
check("No forbidden textual claims", forbiddenClaimHits.length === 0, forbiddenClaimHits.join(", "));
check("No undefined/null leaked", !/:\s*(undefined|null)\b/.test(rawAll) && !/"undefined"/.test(rawAll));
check("No double escaping", !/&quot;|\\u0022|\\\\"/.test(rawAll));

const absoluteValues = [];
flatten(allRouteBlocks, (object, path) => {
  if (typeof object["@id"] === "string") absoluteValues.push([`${path}.@id`, object["@id"]]);
  if (typeof object.url === "string") absoluteValues.push([`${path}.url`, object.url]);
  if (typeof object.logo === "string") absoluteValues.push([`${path}.logo`, object.logo]);
});
const wrongDomainValues = absoluteValues.filter(([, value]) => !value.startsWith(`${SITE}/`));
check("All @id/url/logo values use the canonical www domain", wrongDomainValues.length === 0,
  wrongDomainValues.map(([path, value]) => `${path}=${value}`).join(", "));

const whatsappOutsideDescription = [];
flatten(allRouteBlocks, (object, path) => {
  if (!/whatsapp/i.test(JSON.stringify(object))) return;
  const copy = { ...object };
  delete copy.description;
  if (/whatsapp/i.test(JSON.stringify(copy))) whatsappOutsideDescription.push(path);
});
check("WhatsApp appears only in page descriptions", whatsappOutsideDescription.length === 0,
  whatsappOutsideDescription.join(", "));

console.log(`Scanned exactly ${routes.length} public route(s), ${allRouteBlocks.length} JSON-LD block(s), and ${htmlFiles.length} rendered HTML file(s).\n`);
for (const pass of passes) console.log(`✓ ${pass}`);
if (failures.length > 0) {
  console.log("");
  for (const failure of failures) console.log(`✗ ${failure}`);
  console.error(`\nFAILED: ${failures.length} structured-data check(s).`);
  process.exit(1);
}

console.log("\nAll per-route structured-data, canonical-domain, graph identity, and forbidden-claim checks passed.");
