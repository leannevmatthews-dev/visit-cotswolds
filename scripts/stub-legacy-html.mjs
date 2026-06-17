#!/usr/bin/env node
/** Replace legacy static HTML pages with redirect stubs (no duplicate header). */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function destinationFor(source) {
  if (source === "/index.html") return "/";
  if (source === "/pages/villages/index.html") return "/villages";
  if (source.startsWith("/pages/villages/")) {
    return source.replace("/pages/villages/", "/villages/").replace(/\.html$/, "");
  }
  return source.replace("/pages/", "/").replace(/\.html$/, "");
}

const REDIRECTS = [
  ["/index.html", "index.html"],
  ["/pages/villages/index.html", "pages/villages/index.html"],
  ["/pages/villages/bibury.html", "pages/villages/bibury.html"],
  ["/pages/villages/burford.html", "pages/villages/burford.html"],
  ["/pages/villages/bourton-on-the-water.html", "pages/villages/bourton-on-the-water.html"],
  ["/pages/villages/castle-combe.html", "pages/villages/castle-combe.html"],
  ["/pages/villages/snowshill.html", "pages/villages/snowshill.html"],
  ["/pages/places-to-stay.html", "pages/places-to-stay.html"],
  ["/pages/places-to-eat.html", "pages/places-to-eat.html"],
  ["/pages/things-to-do.html", "pages/things-to-do.html"],
  ["/pages/journal.html", "pages/journal.html"],
  ["/pages/plan-your-visit.html", "pages/plan-your-visit.html"],
  ["/pages/whats-on.html", "pages/whats-on.html"],
].map(([source, relative]) => ({
  source,
  relative,
  destination: destinationFor(source),
}));

for (const { relative, destination } of REDIRECTS) {
  const title = destination === "/" ? "Visit Cotswolds" : `Redirecting to ${destination}`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="refresh" content="0;url=${destination}" />
  <link rel="canonical" href="${destination}" />
  <title>${title}</title>
  <script>location.replace(${JSON.stringify(destination)});</script>
</head>
<body>
  <p>This page has moved. <a href="${destination}">Continue</a>.</p>
</body>
</html>
`;

  writeFileSync(path.join(root, relative), html);
  console.log("Stubbed", relative, "→", destination);
}
