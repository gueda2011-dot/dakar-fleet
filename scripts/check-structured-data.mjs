// Per-route structured-data audit for the Dakar Fleet entity graph (SEO-2.4).
// Usage: npm run build && npm run check:structured-data

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, normalize, relative } from "node:path";

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

const ALLOWED_INTERNAL_HTML_FILES = new Set(["_global-error.html", "_not-found.html"]);
const EXPECTED_ROUTE_FILES = new Map(routes.map(({ route, file }) => [route, normalize(file)]));

function decodeHtml(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function tagAttributes(html, tagName) {
  const tags = [];
  const tagPattern = new RegExp(`<${tagName}\\b([^>]*)>`, "gi");
  for (const tag of html.matchAll(tagPattern)) {
    const attributes = {};
    const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>]+)))?/g;
    for (const attribute of tag[1].matchAll(attributePattern)) {
      const value = attribute[2] ?? attribute[3] ?? attribute[4] ?? "";
      attributes[attribute[1].toLowerCase()] = decodeHtml(value);
    }
    tags.push(attributes);
  }
  return tags;
}

function jsonLdBlocks(html, file) {
  const blocks = [];
  const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(scriptPattern)) {
    const [attributes] = tagAttributes(`<script${match[1]}>`, "script");
    if (attributes?.type?.toLowerCase() !== "application/ld+json") continue;
    try {
      blocks.push(JSON.parse(decodeHtml(match[2])));
    } catch (error) {
      throw new Error(`Invalid JSON-LD in ${file}: ${error.message}`);
    }
  }
  return blocks;
}

function hasRel(attributes, expectedRel) {
  return attributes.rel?.toLowerCase().split(/\s+/).includes(expectedRel) ?? false;
}

function auditSeoLinks(html, expected) {
  const links = tagAttributes(html, "link");
  const canonical = links.filter((attributes) => hasRel(attributes, "canonical"));
  const hreflang = links.filter((attributes) => hasRel(attributes, "alternate") &&
    attributes.hreflang !== undefined);
  const fr = hreflang.filter((attributes) => attributes.hreflang.toLowerCase() === "fr");
  const en = hreflang.filter((attributes) => attributes.hreflang.toLowerCase() === "en");
  const unexpected = hreflang.filter((attributes) => !["fr", "en"].includes(attributes.hreflang.toLowerCase()));
  return {
    canonical,
    hreflang,
    fr,
    en,
    unexpected,
    valid: canonical.length === 1 && canonical[0].href === expected.canonical &&
      hreflang.length === 2 && fr.length === 1 && fr[0].href === expected.alternateFr &&
      en.length === 1 && en[0].href === expected.alternateEn && unexpected.length === 0,
  };
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

function relativeHtmlFile(file) {
  return normalize(relative(APP_DIR, file));
}

function routeFromHtmlFile(file) {
  const portableFile = file.replaceAll("\\", "/");
  const withoutExtension = portableFile.slice(0, -".html".length);
  if (withoutExtension === "index") return "/";
  if (withoutExtension.endsWith("/index")) {
    return `/${withoutExtension.slice(0, -"/index".length)}`;
  }
  return `/${withoutExtension}`;
}

function compareRouteMaps(actual, expected) {
  const missing = [...expected.keys()].filter((route) => !actual.has(route));
  const unexpected = [...actual.keys()].filter((route) => !expected.has(route));
  const mismatched = [...expected.entries()]
    .filter(([route, file]) => actual.has(route) && actual.get(route) !== file)
    .map(([route, file]) => `${route}: expected ${file}, found ${actual.get(route)}`);
  return { missing, unexpected, mismatched, valid: missing.length === 0 && unexpected.length === 0 && mismatched.length === 0 };
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
const forbiddenClaimPatterns = [
  /\bSARL\b/i, /\bRCCM\b/i, /\bNINEA\b/i, /\bregistered\b/i, /\bincorporated\b/i,
  /\bpartner\b/i, /\bsponsor\b/i, /\bcertified\b/i, /\baward\b/i, /\bfirst fleet\b/i,
  /\beco-friendly\b/i, /\bzero carbon\b/i, /\bzero emissions\b/i, /\bwa\.me\b/i,
];

const allowedPropertiesByType = new Map([
  ["Organization", new Set([
    "@type", "@id", "name", "url", "telephone", "email", "location", "contactPoint", "areaServed", "logo",
  ])],
  ["WebSite", new Set(["@type", "@id", "name", "url", "publisher", "inLanguage"])],
  ["Service", new Set(["@type", "@id", "name", "serviceType", "provider", "areaServed"])],
  ["WebPage", new Set([
    "@context", "@type", "@id", "url", "name", "description", "inLanguage", "isPartOf", "about", "mainEntity",
  ])],
  ["AboutPage", new Set([
    "@context", "@type", "@id", "url", "name", "description", "inLanguage", "isPartOf", "mainEntity",
  ])],
  ["ContactPage", new Set([
    "@context", "@type", "@id", "url", "name", "description", "inLanguage", "isPartOf", "about",
  ])],
  ["Place", new Set(["@type", "name"])],
  ["ContactPoint", new Set(["@type", "telephone", "email", "contactType"])],
]);
const allowedTypes = new Set(allowedPropertiesByType.keys());
const allowedGraphProperties = new Set(["@context", "@graph"]);
const allowedReferenceProperties = new Set(["@id"]);

function unknownProperties(object, allowed) {
  return Object.keys(object).filter((property) => !allowed.has(property));
}

function allowlistViolations(value, path = "$") {
  const violations = [];
  if (Array.isArray(value)) {
    value.forEach((item, index) => violations.push(...allowlistViolations(item, `${path}[${index}]`)));
    return violations;
  }
  if (!value || typeof value !== "object") return violations;

  let allowed;
  if (Array.isArray(value["@graph"])) {
    allowed = allowedGraphProperties;
  } else if (typeof value["@type"] === "string") {
    allowed = allowedPropertiesByType.get(value["@type"]);
    if (!allowed) violations.push(`${path}.@type=${value["@type"]}`);
  } else if (typeof value["@id"] === "string") {
    allowed = allowedReferenceProperties;
  } else {
    violations.push(`${path}: unrecognized object shape`);
  }

  if (allowed) {
    for (const property of unknownProperties(value, allowed)) violations.push(`${path}.${property}`);
  }
  for (const [property, child] of Object.entries(value)) {
    violations.push(...allowlistViolations(child, `${path}.${property}`));
  }
  return violations;
}

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

const htmlFiles = collectHtmlFiles(APP_DIR);
const actualRouteFiles = new Map();
const duplicateActualRoutes = [];
const actualPublicFiles = [];
for (const file of htmlFiles) {
  const relativeFile = relativeHtmlFile(file);
  if (ALLOWED_INTERNAL_HTML_FILES.has(relativeFile)) continue;
  actualPublicFiles.push(relativeFile);
  const actualRoute = routeFromHtmlFile(relativeFile);
  if (actualRouteFiles.has(actualRoute)) {
    duplicateActualRoutes.push(`${actualRoute}: ${actualRouteFiles.get(actualRoute)}, ${relativeFile}`);
  } else {
    actualRouteFiles.set(actualRoute, relativeFile);
  }
}
const expectedFiles = new Set([...EXPECTED_ROUTE_FILES.values()]);
const actualPublicFileSet = new Set(actualPublicFiles);
const missingPublicFiles = [...expectedFiles].filter((file) => !actualPublicFileSet.has(file));
const unexpectedPublicFiles = [...actualPublicFileSet].filter((file) => !expectedFiles.has(file));
check("Actual public HTML files exactly match expected files",
  missingPublicFiles.length === 0 && unexpectedPublicFiles.length === 0 && duplicateActualRoutes.length === 0,
  [
    ...missingPublicFiles.map((file) => `missing ${file}`),
    ...unexpectedPublicFiles.map((file) => `unexpected ${file}`),
    ...duplicateActualRoutes.map((route) => `duplicate ${route}`),
  ].join(", "));
const routeComparison = compareRouteMaps(actualRouteFiles, EXPECTED_ROUTE_FILES);
check("Actual public routes exactly match expected routes", routeComparison.valid,
  [
    ...routeComparison.missing.map((route) => `missing ${route}`),
    ...routeComparison.unexpected.map((route) => `unexpected ${route}`),
    ...routeComparison.mismatched,
  ].join(", "));

const unexpectedStructuredFiles = [];
for (const file of htmlFiles) {
  const relativeFile = relativeHtmlFile(file);
  if (expectedFiles.has(relativeFile)) continue;
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

  const htmlTags = tagAttributes(html, "html");
  const lang = htmlTags.length === 1 ? htmlTags[0].lang : undefined;
  check(`${expected.route}: exactly one HTML root`, htmlTags.length === 1, `${htmlTags.length}`);
  check(`${expected.route}: HTML lang`, lang === expected.locale, lang ?? "missing");

  const seoLinks = auditSeoLinks(html, expected);
  check(`${expected.route}: exactly one canonical`, seoLinks.canonical.length === 1,
    `${seoLinks.canonical.length}`);
  check(`${expected.route}: canonical`, seoLinks.canonical[0]?.href === expected.canonical,
    seoLinks.canonical[0]?.href ?? "missing");
  check(`${expected.route}: exactly two hreflang links`, seoLinks.hreflang.length === 2,
    `${seoLinks.hreflang.length}`);
  check(`${expected.route}: exactly one FR hreflang`, seoLinks.fr.length === 1, `${seoLinks.fr.length}`);
  check(`${expected.route}: FR hreflang`, seoLinks.fr[0]?.href === expected.alternateFr,
    seoLinks.fr[0]?.href ?? "missing");
  check(`${expected.route}: exactly one EN hreflang`, seoLinks.en.length === 1, `${seoLinks.en.length}`);
  check(`${expected.route}: EN hreflang`, seoLinks.en[0]?.href === expected.alternateEn,
    seoLinks.en[0]?.href ?? "missing");
  check(`${expected.route}: no unexpected hreflang locale`, seoLinks.unexpected.length === 0,
    seoLinks.unexpected.map(({ hreflang }) => hreflang).join(", "));

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

const routesByCanonical = new Map(routes.map((route) => [route.canonical, route]));
const reciprocalHreflang = routes.every((route) => {
  const frRoute = routesByCanonical.get(route.alternateFr);
  const enRoute = routesByCanonical.get(route.alternateEn);
  return frRoute?.alternateFr === route.alternateFr && frRoute?.alternateEn === route.alternateEn &&
    enRoute?.alternateFr === route.alternateFr && enRoute?.alternateEn === route.alternateEn;
});
check("Expected FR/EN hreflang pairs are reciprocal", reciprocalHreflang);
check("Exactly 12 actual public routes", actualRouteFiles.size === 12, `${actualRouteFiles.size}`);
check("Exactly 24 JSON-LD blocks", allRouteBlocks.length === 24, `${allRouteBlocks.length}`);
check("Exactly 12 unique page @ids", pageIds.length === 12 && new Set(pageIds).size === 12, `${pageIds.length}`);

const forbiddenHits = [];
const unexpectedTypes = [];
for (const block of allRouteBlocks) {
  flatten(block, (object, path) => {
    const types = Array.isArray(object["@type"]) ? object["@type"] : [object["@type"]];
    for (const type of types.filter(Boolean)) {
      if (forbiddenTypes.has(type)) forbiddenHits.push(`${path}.@type=${type}`);
      if (!allowedTypes.has(type)) unexpectedTypes.push(`${path}.@type=${type}`);
    }
  });
}
check("No forbidden Schema.org types", forbiddenHits.length === 0, forbiddenHits.join(", "));
check("Only allowlisted Schema.org types", unexpectedTypes.length === 0, unexpectedTypes.join(", "));

const allowlistHits = allRouteBlocks.flatMap((block, index) => allowlistViolations(block, `$[${index}]`));
check("Only allowlisted properties at every nesting level", allowlistHits.length === 0, allowlistHits.join(", "));

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

const selfTestExpected = {
  canonical: `${SITE}/`,
  alternateFr: `${SITE}/`,
  alternateEn: `${SITE}/en`,
};
const validSeoLinks = [
  `<link rel="canonical" href="${selfTestExpected.canonical}">`,
  `<link rel="alternate" hreflang="fr" href="${selfTestExpected.alternateFr}">`,
  `<link rel="alternate" hreflang="en" href="${selfTestExpected.alternateEn}">`,
].join("");
check("Validator self-test accepts valid canonical/hreflang cardinality",
  auditSeoLinks(validSeoLinks, selfTestExpected).valid);
check("Validator self-test rejects duplicated canonical",
  !auditSeoLinks(`${validSeoLinks}<link rel="canonical" href="${selfTestExpected.canonical}">`, selfTestExpected).valid);
check("Validator self-test rejects duplicated FR hreflang",
  !auditSeoLinks(`${validSeoLinks}<link rel="alternate" hreflang="fr" href="${selfTestExpected.alternateFr}">`,
    selfTestExpected).valid);

const extraRouteFiles = new Map(EXPECTED_ROUTE_FILES);
extraRouteFiles.set("/unexpected", "unexpected.html");
check("Validator self-test rejects an additional public route",
  !compareRouteMaps(extraRouteFiles, EXPECTED_ROUTE_FILES).valid);
const missingRouteFiles = new Map(EXPECTED_ROUTE_FILES);
missingRouteFiles.delete("/contact");
check("Validator self-test rejects a missing public route",
  !compareRouteMaps(missingRouteFiles, EXPECTED_ROUTE_FILES).valid);
const mismatchedRouteFiles = new Map(EXPECTED_ROUTE_FILES);
mismatchedRouteFiles.set("/contact", "wrong-contact.html");
check("Validator self-test rejects a route mapped to the wrong HTML file",
  !compareRouteMaps(mismatchedRouteFiles, EXPECTED_ROUTE_FILES).valid);

const rejectedOrganizationProperties = [
  "founders", "employee", "employees", "numberOfEmployees", "identifier",
];
for (const property of rejectedOrganizationProperties) {
  check(`Validator self-test rejects Organization.${property}`,
    allowlistViolations({ "@type": "Organization", [property]: "unvalidated" }).length > 0);
}
check("Validator self-test rejects nested Place.legalAddress",
  allowlistViolations({
    "@type": "Organization",
    location: { "@type": "Place", name: "Test", legalAddress: "unvalidated" },
  }).length > 0);
check("Validator self-test rejects an extra property on an @id reference",
  allowlistViolations({ "@id": ORG_ID, legalName: "unvalidated" }).length > 0);

console.log(`Scanned exactly ${routes.length} public route(s), ${allRouteBlocks.length} JSON-LD block(s), and ${htmlFiles.length} rendered HTML file(s).\n`);
for (const pass of passes) console.log(`✓ ${pass}`);
if (failures.length > 0) {
  console.log("");
  for (const failure of failures) console.log(`✗ ${failure}`);
  console.error(`\nFAILED: ${failures.length} structured-data check(s).`);
  process.exit(1);
}

console.log("\nAll per-route structured-data, canonical-domain, graph identity, and forbidden-claim checks passed.");
