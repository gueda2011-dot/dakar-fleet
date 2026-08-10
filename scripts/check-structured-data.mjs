// Structured-data audit for the Dakar Fleet entity graph (SEO-2.4).
//
// Runs against the real, rendered output of `next build`: it extracts every
// JSON-LD block from the prerendered HTML, then asserts the identity-graph
// invariants and runs a forbidden-claim audit. Zero dependencies.
//
// Usage: npm run build && node scripts/check-structured-data.mjs

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://dakarfleet.com";
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const SERVICE_IDS = [
  `${SITE}/#service-airport-transfer`,
  `${SITE}/#service-private-chauffeur`,
  `${SITE}/#service-electric-chauffeur`,
];
const EXPECTED_AREAS = [
  "Dakar",
  "Diamniadio",
  "Blaise Diagne International Airport (AIBD)",
  "Thiès",
  "Mbour",
  "Saly",
];

const NEXT_DIR = join(process.cwd(), ".next");
if (!existsSync(NEXT_DIR)) {
  console.error("✗ .next not found. Run `npm run build` first.");
  process.exit(1);
}

// --- collect every rendered HTML file -------------------------------------
function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true, recursive: true })) {
    if (entry.isFile() && entry.name.endsWith(".html")) {
      out.push(join(entry.parentPath ?? entry.path, entry.name));
    }
  }
  return out;
}

const SCRIPT_RE =
  /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;

function decodeHtml(s) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

const rawBlocks = []; // { file, text }
const nodes = []; // flattened schema nodes

const files = htmlFiles(NEXT_DIR);
for (const file of files) {
  const html = readFileSync(file, "utf8");
  let m;
  while ((m = SCRIPT_RE.exec(html)) !== null) {
    const text = decodeHtml(m[1]);
    rawBlocks.push({ file, text });
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error(`✗ Invalid JSON-LD in ${file}: ${err.message}`);
      process.exit(1);
    }
    const list = Array.isArray(data["@graph"]) ? data["@graph"] : [data];
    for (const node of list) nodes.push(node);
  }
}

if (nodes.length === 0) {
  console.error("✗ No JSON-LD nodes found in build output.");
  process.exit(1);
}

// --- helpers ---------------------------------------------------------------
const failures = [];
const passes = [];
function check(label, ok, detail = "") {
  (ok ? passes : failures).push(`${label}${detail ? ` — ${detail}` : ""}`);
}

const byType = (t) => nodes.filter((n) => n["@type"] === t);
const uniq = (arr) => [...new Set(arr)];
const rawAll = rawBlocks.map((b) => b.text).join("\n");

const orgs = byType("Organization");
const sites = byType("WebSite");
const services = byType("Service");
const webpages = nodes.filter((n) =>
  ["WebPage", "AboutPage", "ContactPage"].includes(n["@type"]),
);
const aboutPages = byType("AboutPage");
const contactPages = byType("ContactPage");

// 1. exactly one logical Organization @id
check(
  "1. single Organization @id",
  orgs.length > 0 && uniq(orgs.map((o) => o["@id"])).length === 1 && orgs.every((o) => o["@id"] === ORG_ID),
  uniq(orgs.map((o) => o["@id"])).join(", "),
);

// 2. exactly one logical WebSite @id
check(
  "2. single WebSite @id",
  sites.length > 0 && uniq(sites.map((s) => s["@id"])).length === 1 && sites.every((s) => s["@id"] === WEBSITE_ID),
  uniq(sites.map((s) => s["@id"])).join(", "),
);

// 3. three stable Service @ids
const serviceIds = uniq(services.map((s) => s["@id"])).sort();
check(
  "3. three stable Service @ids",
  serviceIds.length === 3 && SERVICE_IDS.every((id) => serviceIds.includes(id)),
  serviceIds.join(", "),
);

// 4. no LocalBusiness
check("4. no LocalBusiness", !/LocalBusiness/.test(rawAll));

// 5. no PostalAddress / address
check("5. no PostalAddress / address", !/PostalAddress/i.test(rawAll) && !/"address"/i.test(rawAll) && !/streetAddress|postalCode|addressRegion/i.test(rawAll));

// 6. no legalName
check("6. no legalName", !/legalName/i.test(rawAll));

// 7. no taxID / vatID / companyRegistration / registration ids
check(
  "7. no legal/registration identifiers",
  !/(taxID|vatID|companyRegistration|leiCode|duns|iso6523|naics|RCCM|NINEA)/i.test(rawAll),
);

// 8. no aggregateRating / review
check("8. no ratings/reviews", !/(aggregateRating|"review"|"reviews"|ratingValue)/i.test(rawAll));

// 9. no WhatsApp used as an identity signal: no sameAs anywhere, no wa.me link.
// The bare word "WhatsApp" is allowed inside a page `description` (it names a
// real contact channel and mirrors the visible page copy) — but nowhere else.
const waWordNodes = nodes.filter((n) => /whatsapp/i.test(JSON.stringify(n)));
const waOnlyInDescription = waWordNodes.every((n) => {
  const rest = { ...n };
  delete rest.description;
  return !/whatsapp/i.test(JSON.stringify(rest));
});
check(
  "9. no WhatsApp/sameAs identity signal",
  !/sameAs/i.test(rawAll) && !/wa\.me/i.test(rawAll) && waOnlyInDescription,
  waWordNodes.length ? `WhatsApp only in description of ${waWordNodes.length} node(s)` : "no WhatsApp reference",
);

// 10 & 11. areaServed is the six validated zones, never only "Dakar"
const areaCarriers = nodes.filter((n) => Array.isArray(n.areaServed));
const areaNameSets = areaCarriers.map((n) =>
  n.areaServed.map((a) => (typeof a === "string" ? a : a?.name)),
);
const allAreasSixZones =
  areaCarriers.length > 0 &&
  areaNameSets.every(
    (names) =>
      names.length === EXPECTED_AREAS.length &&
      EXPECTED_AREAS.every((z) => names.includes(z)),
  );
check("10. areaServed is not only \"Dakar\"", !areaNameSets.some((n) => n.length === 1 && n[0] === "Dakar") && areaCarriers.length > 0);
check("11. six validated zones present", allAreasSixZones, areaNameSets[0]?.join(" | ") ?? "none");

// 12. FR/EN of a service reference the same Service @id
const serviceRefs = webpages
  .filter((p) => p.mainEntity && SERVICE_IDS.includes(p.mainEntity["@id"]))
  .map((p) => p.mainEntity["@id"]);
const refCounts = SERVICE_IDS.map((id) => serviceRefs.filter((r) => r === id).length);
check(
  "12. each Service referenced by FR+EN page (x2)",
  refCounts.every((c) => c === 2),
  SERVICE_IDS.map((id, i) => `${id.split("#")[1]}=${refCounts[i]}`).join(", "),
);

// 13. About FR/EN -> same Organization @id
check(
  "13. AboutPage FR/EN -> Organization",
  aboutPages.length === 2 && aboutPages.every((p) => p.mainEntity?.["@id"] === ORG_ID),
  `${aboutPages.length} AboutPage node(s)`,
);

// 14. Contact FR/EN -> same Organization @id
check(
  "14. ContactPage FR/EN -> Organization",
  contactPages.length === 2 && contactPages.every((p) => p.about?.["@id"] === ORG_ID),
  `${contactPages.length} ContactPage node(s)`,
);

// 15. every WebPage isPartOf the single WebSite @id
check(
  "15. WebPages -> single WebSite @id",
  webpages.length >= 12 && webpages.every((p) => p.isPartOf?.["@id"] === WEBSITE_ID),
  `${webpages.length} page node(s)`,
);

// --- extra hygiene ---------------------------------------------------------
check("H1. no undefined/null leaked", !/:\s*(undefined|null)\b/.test(rawAll) && !/"undefined"/.test(rawAll));
check(
  "H2. all @id absolute https",
  nodes.filter((n) => n["@id"]).every((n) => /^https:\/\//.test(n["@id"])),
);
check(
  "H3. all url absolute https",
  nodes.filter((n) => typeof n.url === "string").every((n) => /^https:\/\//.test(n.url)),
);
check("H4. no double-escaping", !/&quot;|\\u0022|\\\\"/.test(rawAll));

// --- forbidden-claim audit -------------------------------------------------
// Terms that must never appear anywhere in the rendered JSON-LD.
const FORBIDDEN_TERMS = [
  "SARL", "RCCM", "NINEA", "registered", "incorporated",
  "legalName", "companyRegistration", "taxID", "vatID", "founded",
  "foundingDate", "employees", "review", "rating", "aggregateRating",
  "partner", "sponsor", "certified", "award", "PostalAddress",
  "streetAddress", "postalCode", "first fleet", "eco-friendly",
  "zero carbon", "zero emissions", "wa.me", "sameAs",
];
const claimHits = FORBIDDEN_TERMS.filter((t) =>
  new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i").test(rawAll),
);
// "WhatsApp" is audited but explained: allowed only inside ContactPage
// descriptions as a named contact channel (mirrors visible page copy).
const waExplained = /whatsapp/i.test(rawAll) && waOnlyInDescription;

// --- report ----------------------------------------------------------------
console.log(`Scanned ${files.length} HTML file(s), ${rawBlocks.length} JSON-LD block(s), ${nodes.length} node(s).\n`);
for (const p of passes) console.log(`✓ ${p}`);
if (failures.length) {
  console.log("");
  for (const f of failures) console.log(`✗ ${f}`);
}
console.log("\nClaim audit (forbidden terms found in rendered JSON-LD):");
if (claimHits.length === 0) console.log("✓ no forbidden terms");
else console.log(`✗ ${claimHits.join(", ")}`);
if (waExplained) {
  console.log(
    '• "WhatsApp": present only in ContactPage description(s) as a named contact channel (matches visible copy) — explained, not an identity/sameAs signal.',
  );
}

if (failures.length || claimHits.length) {
  console.error(`\nFAILED: ${failures.length} invariant(s), ${claimHits.length} claim hit(s).`);
  process.exit(1);
}
console.log("\nAll structured-data invariants and the claim audit passed.");
