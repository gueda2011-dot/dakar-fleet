import assert from "node:assert/strict";
import test from "node:test";

// Run against a built local server or a deployment. Never follow redirects:
// otherwise a sitemap regression would look like a successful HTTP 200.
const base = new URL(process.env.SEO_BASE_URL || "http://127.0.0.1:3000");
const canonicalOrigin = "https://www.dakarfleet.com";
const pairs = [
  ["/", "/en"],
  ["/transfert-aeroport-dakar", "/en/airport-transfer-dakar"],
  ["/chauffeur-prive-business-dakar", "/en/private-chauffeur-dakar"],
  ["/vtc-voiture-electrique-dakar", "/en/electric-chauffeur-dakar"],
  ["/a-propos", "/en/about"],
  ["/contact", "/en/contact"],
];
const paths = pairs.flat();
const cache = new Map();
const decode = value => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1].toLowerCase(), decode(m[2])]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map(m => attributes(m[0]));
// Next.js may serialize the root origin without "/" when metadataBase is set.
// URL normalization treats those two spellings as the same HTTP resource.
const alternates = links => Object.fromEntries(links.filter(l => l.hreflang).map(l => [l.hreflang, new URL(l.href).href]));
const expectedAlternates = pair => ({fr: canonicalOrigin + pair[0], en: canonicalOrigin + pair[1]});

async function request(path, headers = {}) {
  const response = await fetch(new URL(path, base), {redirect: "manual", headers, signal: AbortSignal.timeout(30000)});
  return {status: response.status, headers: response.headers, html: await response.text()};
}
function get(path) {
  if (!cache.has(path)) cache.set(path, request(path));
  return cache.get(path);
}
async function page(path) {
  const result = await get(path);
  assert.equal(result.status, 200, `${path} must be directly accessible`);
  return result;
}

test("sitemap contains exactly 12 canonical URLs with reciprocal FR/EN alternates", async () => {
  const {html, headers} = await page("/sitemap.xml");
  assert.match(headers.get("content-type"), /xml/);
  assert.match(html, /xmlns:xhtml="http:\/\/www.w3.org\/1999\/xhtml"/);
  const entries = [...html.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m => ({
    url: m[1].match(/<loc>(.*?)<\/loc>/)?.[1],
    links: tags(m[1], "xhtml:link"),
  }));
  assert.deepEqual(entries.map(e => e.url).sort(), paths.map(p => canonicalOrigin + p).sort());
  for (const entry of entries) {
    const path = new URL(entry.url).pathname;
    const pair = pairs.find(p => p.includes(path));
    assert.equal(entry.links.length, 2);
    assert.deepEqual(alternates(entry.links), expectedAlternates(pair));
    await page(path);
  }
});

test("robots.txt allows crawling and points directly to the canonical sitemap", async () => {
  const {html} = await page("/robots.txt");
  assert.match(html, /User-Agent: \*/i);
  assert.match(html, /^Allow: \/\s*$/m);
  assert.doesNotMatch(html, /^Disallow: \/\s*$/m);
  assert.match(html, /^Sitemap: https:\/\/www\.dakarfleet\.com\/sitemap\.xml\s*$/m);
});

// The build-time checker exhaustively verifies the schema property allowlist.
// These HTTP checks ensure the served pages retain the same graph and references.
const jsonLd = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m => JSON.parse(m[1]));
const entityIds = ["organization", "service-airport-transfer", "service-private-chauffeur", "service-electric-chauffeur", "organization", "organization"];

for (const pair of pairs) for (const [index, path] of pair.entries()) {
  const locale = index === 0 ? "fr" : "en";
  test(`${path}: HTTP 200, indexable, one self canonical, correct language and metadata`, async () => {
    const {html, headers} = await page(path);
    const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1];
    assert.ok(head, "HTML head must be present");
    const canonical = tags(head, "link").filter(l => l.rel === "canonical");
    assert.deepEqual(canonical.map(l => new URL(l.href).href), [canonicalOrigin + path]);
    assert.equal(tags(html, "html")[0].lang, locale);
    assert.equal([...html.matchAll(/<h1\b/gi)].length, 1);
    const metas = tags(head, "meta");
    assert.doesNotMatch(headers.get("x-robots-tag") || "", /noindex|nofollow/i);
    assert.doesNotMatch(metas.filter(m => /^(robots|googlebot)$/i.test(m.name || "")).map(m => m.content).join(" "), /noindex|nofollow/i);
    assert.match(head, /<title>[^<]+<\/title>/);
    const descriptions = metas.filter(m => m.name === "description");
    assert.equal(descriptions.length, 1);
    assert.ok(descriptions[0].content.length > 40 && descriptions[0].content.length <= 160, "Project description length budget exceeded");
    assert.equal(new URL(metas.find(m => m.property === "og:url").content).href, canonicalOrigin + path);
    for (const image of metas.filter(m => m.property === "og:image")) assert.equal(new URL(image.content).origin, canonicalOrigin);
  });
  test(`${path}: reciprocal and self-referencing hreflang in the HTML head`, async () => {
    const {html} = await page(path);
    const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1] || "";
    const links = tags(head, "link").filter(l => l.hreflang);
    assert.equal(links.length, 2);
    assert.ok(links.every(l => l.rel === "alternate"));
    assert.deepEqual(alternates(links), expectedAlternates(pair));
    for (const alternate of pair) {
      const other = await page(alternate);
      assert.deepEqual(alternates(tags(other.html.match(/<head>([\s\S]*?)<\/head>/i)[1], "link")), expectedAlternates(pair));
    }
  });
  test(`${path}: shared JSON-LD graph and page references match the canonical URL`, async () => {
    const {html} = await page(path);
    const blocks = jsonLd(html);
    assert.equal(blocks.length, 2);
    assert.ok(blocks.every(b => b["@context"] === "https://schema.org"));
    const graph = blocks.find(b => Array.isArray(b["@graph"]));
    const webPage = blocks.find(b => b["@type"]);
    assert.deepEqual(graph, jsonLd((await page("/")).html).find(b => b["@graph"]));
    assert.equal(graph["@graph"].length, 5);
    const ids = graph["@graph"].map(n => n["@id"]);
    assert.equal(new Set(ids).size, 5);
    assert.ok(ids.every(id => new URL(id).origin === canonicalOrigin));
    assert.equal(webPage.url, canonicalOrigin + path);
    assert.equal(webPage["@id"], canonicalOrigin + path + "#webpage");
    assert.equal(webPage.inLanguage, locale);
    assert.equal(webPage.isPartOf["@id"], canonicalOrigin + "/#website");
    const entityId = canonicalOrigin + "/#" + entityIds[pairs.indexOf(pair)];
    assert.equal((webPage.mainEntity || webPage.about)["@id"], entityId);
    assert.ok(ids.includes(entityId));
    const organization = graph["@graph"].find(n => n["@type"] === "Organization");
    assert.equal(organization.telephone, "+221777796922");
    assert.equal(organization.email, "contact@dakarfleet.com");
    const services = graph["@graph"].filter(n => n["@type"] === "Service");
    assert.equal(services.length, 3);
    for (const service of services) {
      assert.equal(service.provider["@id"], organization["@id"]);
      for (const key of ["telephone", "email", "priceRange", "openingHoursSpecification"]) {
        assert.ok(!(key in service), `Invalid Service.${key}`);
      }
    }
  });
}

test("titles and descriptions are unique across all 12 pages", async () => {
  const pages = await Promise.all(paths.map(page));
  const titles = pages.map(p => p.html.match(/<title>(.*?)<\/title>/)[1]);
  const descriptions = pages.map(p => tags(p.html, "meta").find(m => m.name === "description").content);
  assert.equal(new Set(titles).size, paths.length);
  assert.equal(new Set(descriptions).size, paths.length);
});
test("internal links stay on canonical routes and fragments exist", async () => {
  for (const path of paths) {
    const {html} = await page(path);
    for (const anchor of tags(html, "a")) {
      if (!anchor.href) continue;
      const url = new URL(anchor.href, canonicalOrigin + path);
      if (!/^(www\.)?dakarfleet\.com$/.test(url.hostname)) continue;
      assert.equal(url.origin, canonicalOrigin, `Non-canonical internal link ${anchor.href}`);
      assert.ok(paths.includes(url.pathname), `Unexpected internal route ${url.pathname}`);
      const target = await page(url.pathname);
      if (url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        assert.ok(target.html.includes(`id="${id}"`), `Missing fragment ${anchor.href}`);
      }
    }
  }
});
test("language preferences do not redirect the FR/EN landing pages", async () => {
  for (const [path, lang] of [["/", "fr"], ["/en", "en"]]) {
    const result = await request(path, {"Accept-Language": "en-US,en;q=0.9", Cookie: "NEXT_LOCALE=en"});
    assert.equal(result.status, 200);
    assert.equal(tags(result.html, "html")[0].lang, lang);
  }
});
test("missing pages return 404 rather than a soft 404", async () => {
  assert.equal((await get("/seo-audit-missing-page")).status, 404);
});
