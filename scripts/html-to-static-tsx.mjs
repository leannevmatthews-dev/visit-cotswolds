#!/usr/bin/env node
/**
 * Extracts page body content (hero + main) from legacy static HTML and writes a React component.
 * Skips duplicated <header>, <footer>, and bottom mobile nav.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const PAGES = [
  {
    html: "pages/places-to-stay.html",
    component: "components/static-pages/places-to-stay-content.static.tsx",
    exportName: "PlacesToStayContent",
    source: "pages/places-to-stay.html",
  },
  {
    html: "pages/places-to-eat.html",
    component: "components/static-pages/places-to-eat-content.static.tsx",
    exportName: "PlacesToEatContent",
    source: "pages/places-to-eat.html",
  },
  {
    html: "pages/things-to-do.html",
    component: "components/static-pages/things-to-do-content.static.tsx",
    exportName: "ThingsToDoContent",
    source: "pages/things-to-do.html",
  },
  {
    html: "pages/journal.html",
    component: "components/static-pages/journal-content.static.tsx",
    exportName: "JournalContent",
    source: "pages/journal.html",
  },
  {
    html: "pages/plan-your-visit.html",
    component: "components/static-pages/plan-your-visit-content.static.tsx",
    exportName: "PlanYourVisitContent",
    source: "pages/plan-your-visit.html",
  },
  {
    html: "pages/whats-on.html",
    component: "components/static-pages/whats-on-content.static.tsx",
    exportName: "WhatsOnContent",
    source: "pages/whats-on.html",
  },
  {
    html: "pages/villages/bourton-on-the-water.html",
    component: "components/static-pages/villages/bourton-on-the-water-content.static.tsx",
    exportName: "BourtonOnTheWaterContent",
    source: "pages/villages/bourton-on-the-water.html",
  },
  {
    html: "pages/villages/burford.html",
    component: "components/static-pages/villages/burford-content.static.tsx",
    exportName: "BurfordContent",
    source: "pages/villages/burford.html",
  },
  {
    html: "pages/villages/castle-combe.html",
    component: "components/static-pages/villages/castle-combe-content.static.tsx",
    exportName: "CastleCombeContent",
    source: "pages/villages/castle-combe.html",
  },
  {
    html: "pages/villages/snowshill.html",
    component: "components/static-pages/villages/snowshill-content.static.tsx",
    exportName: "SnowshillContent",
    source: "pages/villages/snowshill.html",
  },
];

function extractBodyContent(html) {
  const siteHeaderStart = html.indexOf('<header class="site-header');
  if (siteHeaderStart === -1) {
    throw new Error("Missing site header");
  }

  const headerEnd = html.indexOf("</header>", siteHeaderStart);
  if (headerEnd === -1) {
    throw new Error("Missing </header> for site header");
  }

  let content = html.slice(headerEnd + "</header>".length);
  const footerStart = content.search(/<footer[\s>]/i);
  if (footerStart !== -1) {
    let beforeFooter = content.slice(0, footerStart).trimEnd();
    const openMains = (beforeFooter.match(/<main[\s>]/gi) || []).length;
    const closeMains = (beforeFooter.match(/<\/main>/gi) || []).length;
    if (openMains > closeMains) {
      beforeFooter += "\n</main>";
    }
    content = beforeFooter;
  } else {
    const mainClose = content.lastIndexOf("</main>");
    if (mainClose !== -1) {
      content = content.slice(0, mainClose + "</main>".length);
    }
  }

  return content.trim();
}

function htmlToJsx(fragment) {
  return (
    fragment
      .replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}")
      .replace(/\bclass=/g, "className=")
      .replace(/\bfor=/g, "htmlFor=")
      .replace(/\btabindex=/g, "tabIndex=")
      .replace(/\bplaysinline\b/g, "playsInline")
      .replace(/\bautocomplete=/g, "autoComplete=")
      .replace(/<img([^>]*?)\s*\/?>/gi, "<img$1 />")
      .replace(/<input([^>]*?)\s*\/?>/gi, "<input$1 />")
      .replace(/<br>/gi, "<br />")
      .replace(/<hr>/gi, "<hr />")
      .replace(/style="([^"]*)"/g, (_, style) => {
        const props = style
          .split(";")
          .filter(Boolean)
          .map((rule) => {
            const [rawKey, ...rest] = rule.split(":");
            const key = rawKey
              .trim()
              .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
            const value = rest.join(":").trim().replace(/'/g, '"');
            return `${key}: ${JSON.stringify(value)}`;
          })
          .join(", ");
        return `style={{ ${props} }}`;
      })
      // Legacy relative links → app routes
      .replace(/href="\.\.\/index\.html"/g, 'href="/"')
      .replace(/href="index\.html"/g, 'href="/"')
      .replace(/href="villages\/index\.html"/g, 'href="/villages"')
      .replace(/href="places-to-stay\.html"/g, 'href="/places-to-stay"')
      .replace(/href="places-to-eat\.html"/g, 'href="/places-to-eat"')
      .replace(/href="things-to-do\.html"/g, 'href="/things-to-do"')
      .replace(/href="journal\.html"/g, 'href="/journal"')
      .replace(/href="plan-your-visit\.html"/g, 'href="/plan-your-visit"')
      .replace(/href="whats-on\.html"/g, 'href="/whats-on"')
      .replace(/href="bibury\.html"/g, 'href="/villages/bibury"')
      .replace(/href="burford\.html"/g, 'href="/villages/burford"')
      .replace(/href="bourton-on-the-water\.html"/g, 'href="/villages/bourton-on-the-water"')
      .replace(/href="castle-combe\.html"/g, 'href="/villages/castle-combe"')
      .replace(/href="snowshill\.html"/g, 'href="/villages/snowshill"')
      .replace(/href="\/pages\/villages\/index\.html"/g, 'href="/villages"')
      .replace(/href="\/pages\/places-to-stay\.html"/g, 'href="/places-to-stay"')
      .replace(/href="\/pages\/places-to-eat\.html"/g, 'href="/places-to-eat"')
      .replace(/href="\/pages\/things-to-do\.html"/g, 'href="/things-to-do"')
      .replace(/href="\/pages\/journal\.html"/g, 'href="/journal"')
      .replace(/href="\/pages\/plan-your-visit\.html"/g, 'href="/plan-your-visit"')
      .replace(/href="\/pages\/whats-on\.html"/g, 'href="/whats-on"')
      .replace(/href="\/pages\/villages\/([^"]+)\.html"/g, 'href="/villages/$1"')
  );
}

mkdirSync(path.join(root, "components/static-pages/villages"), { recursive: true });

for (const page of PAGES) {
  const htmlPath = path.join(root, page.html);
  const html = readFileSync(htmlPath, "utf8");
  const body = extractBodyContent(html);
  const jsx = htmlToJsx(body);
  const out = `/* Auto-converted from ${page.source} — body only; header/footer via app layout */\nexport function ${page.exportName}() {\n  return (\n    <>\n${jsx
    .split("\n")
    .map((line) => "      " + line)
    .join("\n")}\n    </>\n  );\n}\n`;

  const outPath = path.join(root, page.component);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, out);
  console.log("Wrote", page.component);
}
