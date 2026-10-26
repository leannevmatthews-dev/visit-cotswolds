/**
 * Download external guide images, store WebP copies in the guide-pages bucket,
 * and point hero_image_url / image-block src fields at those copies.
 *
 * Venue photos listed in VENUE_URLS stay hotlinked.
 * Requires SUPABASE_SERVICE_ROLE_KEY in .env.local. The key is never logged.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { readFileSync } from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import sharp from "sharp";

const OWN_HOST = "pwwpxxeploahbcpubhnx.supabase.co";
const BUCKET = "guide-pages";
const USER_AGENT =
  "VisitCotswoldsImageSync/1.0 (https://visitcotswolds.uk; info@visitcotswolds.uk)";

const VENUE_URLS = new Set([
  "https://cotswoldfarmpark.co.uk/media/ctrfvncu/hillside-play.jpg?cc=0.11462365127438646%2C0.2829895982783357%2C0.03558624298141883%2C0&width=768&height=432&quality=80",
  "https://cotswoldfarmpark.co.uk/media/ewnkng3z/highland-calf-princes-first.jpg",
  "https://www.cotswoldwildlifepark.co.uk/wp-content/uploads/giraffe.jpg",
  "https://broadwaytower.co.uk/wp-content/uploads/2023/11/broadway-tower-cotswolds-hero.jpg",
]);

type ImageBlock = {
  type: string;
  src?: string;
  alt?: string;
  [key: string]: unknown;
};

type GuideRow = {
  id: number;
  slug: string;
  hero_image_url: string | null;
  hero_image_alt: string | null;
  content: unknown;
  [key: string]: unknown;
};

type Use = {
  slug: string;
  kind: "hero" | "image";
  alt: string;
  src: string;
  credit: string;
};

type Processed = {
  oldUrl: string;
  newUrl: string;
  originalBytes: number;
  webpBytes: number;
  host: string;
};

function loadEnv(): Record<string, string> {
  const file = path.join(process.cwd(), ".env.local");
  const env: Record<string, string> = {};
  for (const line of readFileSync(file, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    env[line.slice(0, i)] = line.slice(i + 1).trim();
  }
  return env;
}

function hostOf(raw: string): string {
  try {
    return new URL(raw).host;
  } catch {
    return "(invalid-url)";
  }
}

function parseContent(content: unknown): ImageBlock[] {
  if (typeof content === "string") return JSON.parse(content) as ImageBlock[];
  if (Array.isArray(content)) return content as ImageBlock[];
  throw new Error("Guide content is not JSON");
}

function serializeContent(original: unknown, blocks: ImageBlock[]): unknown {
  return typeof original === "string" ? JSON.stringify(blocks) : blocks;
}

function descriptiveName(url: string): string {
  const base = new URL(url).pathname.split("/").pop() || "image";
  let decoded = base;
  try {
    decoded = decodeURIComponent(base);
  } catch {
    decoded = base;
  }
  decoded = decoded.replace(/\.[^.]+$/, "");
  decoded = decoded.replace(/ß/g, "ss").replace(/ẞ/g, "ss");
  decoded = decoded.normalize("NFKD").replace(/\p{M}/gu, "");
  decoded = decoded
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (decoded.length > 80) decoded = decoded.slice(0, 80).replace(/-+$/g, "");
  return decoded || "image";
}

function kb(bytes: number): number {
  return Math.round((bytes / 1024) * 10) / 10;
}

let lastRequestAt = 0;
let rateLimitWaited = false;

async function pace(): Promise<void> {
  const sinceLast = Date.now() - lastRequestAt;
  if (lastRequestAt !== 0 && sinceLast < 2000) {
    await new Promise((resolve) => setTimeout(resolve, 2000 - sinceLast));
  }
  lastRequestAt = Date.now();
}

function geographId(url: string): string | null {
  const file = new URL(url).pathname.split("/").pop() || "";
  let decoded = file;
  try {
    decoded = decodeURIComponent(file);
  } catch {
    decoded = file;
  }
  const match = decoded.match(/^0*(\d+)_/);
  return match?.[1] ?? null;
}

function creditAuthor(credit: string): string {
  let name = credit.replace(/©/g, "").trim();
  name = name.replace(/^photo:\s*/i, "");
  name = name.split("/")[0] ?? name;
  name = name.split(",")[0] ?? name;
  return name.trim();
}

function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function authorsMatch(credit: string, artistHtml: string): boolean {
  const author = creditAuthor(credit).toLowerCase();
  const artist = plainText(artistHtml).toLowerCase();
  if (!author || !artist) return false;
  return artist.includes(author);
}

async function commonsGet(params: Record<string, string>): Promise<unknown> {
  await pace();
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  for (const [key, value] of Object.entries(params)) api.searchParams.set(key, value);
  api.searchParams.set("format", "json");
  const response = await fetch(api, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Commons API HTTP ${response.status}`);
  return response.json();
}

async function commonsOriginal(
  url: string,
  credits: string[],
): Promise<{ downloadUrl: string; title: string }> {
  const id = geographId(url);
  if (!id) throw new Error("no Commons copy");
  const search = (await commonsGet({
    action: "query",
    list: "search",
    srsearch: `geograph.org.uk - ${id}`,
    srnamespace: "6",
    srlimit: "5",
  })) as {
    query?: {
      searchinfo?: { totalhits?: number };
      search?: { title: string }[];
    };
  };
  const hits = search.query?.search ?? [];
  const total = search.query?.searchinfo?.totalhits ?? hits.length;
  if (total !== 1 || hits.length !== 1) throw new Error("no Commons copy");

  const info = (await commonsGet({
    action: "query",
    prop: "imageinfo",
    titles: hits[0].title,
    iiprop: "url|extmetadata",
  })) as {
    query?: {
      pages?: Record<
        string,
        { imageinfo?: { url?: string; extmetadata?: { Artist?: { value?: string } } }[] }
      >;
    };
  };
  const page = Object.values(info.query?.pages ?? {})[0];
  const image = page?.imageinfo?.[0];
  const artist = image?.extmetadata?.Artist?.value ?? "";
  const fileUrl = image?.url;
  if (!fileUrl || credits.length === 0 || credits.some((credit) => !authorsMatch(credit, artist))) {
    throw new Error("no Commons copy");
  }
  const original = new URL(fileUrl);
  original.search = "";
  return { downloadUrl: original.toString(), title: hits[0].title };
}

async function downloadImage(url: string): Promise<Buffer> {
  await pace();

  let lastError = "download failed";
  for (let attempt = 1; attempt <= 3; attempt++) {
    const response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "image/*,*/*;q=0.8",
      },
      redirect: "follow",
    });
    if (response.status === 429) {
      lastError = "HTTP 429";
      const retryAfter = Number(response.headers.get("retry-after") || "60");
      const waitSeconds = Number.isFinite(retryAfter)
        ? Math.min(Math.max(retryAfter, 1), 600)
        : 60;
      if (!rateLimitWaited) {
        rateLimitWaited = true;
        console.log(`Rate limited. Waiting ${waitSeconds}s before retrying.`);
        await new Promise((resolve) => setTimeout(resolve, waitSeconds * 1000));
        lastRequestAt = Date.now();
        continue;
      }
      throw new Error("HTTP 429");
    }
    if (response.status >= 500) {
      lastError = `HTTP ${response.status}`;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      continue;
    }
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length === 0) throw new Error("empty response");
    return bytes;
  }
  throw new Error(lastError);
}

async function main() {
  const env = loadEnv();
  const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.error(
      "SUPABASE_SERVICE_ROLE_KEY is missing from .env.local. No images were downloaded or changed.",
    );
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  const { data, error } = await supabase
    .from("guides")
    .select("*")
    .order("slug");
  if (error) throw new Error(`Failed to read guides: ${error.message}`);
  const guides = (data ?? []) as GuideRow[];

  const backupDir = path.join(process.cwd(), "scripts", "backups");
  mkdirSync(backupDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(backupDir, `guides-${stamp}.json`);
  writeFileSync(backupPath, JSON.stringify(guides, null, 2));
  console.log(`Backup written: ${backupPath}`);

  const uses: Use[] = [];
  for (const guide of guides) {
    if (guide.hero_image_url) {
      uses.push({
        slug: guide.slug,
        kind: "hero",
        alt: guide.hero_image_alt ?? "",
        src: guide.hero_image_url,
        credit: guide.hero_image_credit ?? "",
      });
    }
    for (const block of parseContent(guide.content)) {
      if (block.type === "image" && typeof block.src === "string" && block.src) {
        const credit = block.imageCredit;
        uses.push({
          slug: guide.slug,
          kind: "image",
          alt: typeof block.alt === "string" ? block.alt : "",
          src: block.src,
          credit:
            credit &&
            typeof credit === "object" &&
            typeof (credit as { text?: unknown }).text === "string"
              ? (credit as { text: string }).text
              : "",
        });
      }
    }
  }

  const externalUses = uses.filter((use) => hostOf(use.src) !== OWN_HOST);
  const byUrl = new Map<string, Use[]>();
  for (const use of externalUses) {
    const list = byUrl.get(use.src) ?? [];
    list.push(use);
    byUrl.set(use.src, list);
  }

  const processed = new Map<string, Processed>();
  const failed: { url: string; reason: string }[] = [];
  const noCommons = new Set<string>();
  const usedNames = new Map<string, Set<string>>();

  const urls = [...byUrl.keys()].sort();
  for (const url of urls) {
    if (VENUE_URLS.has(url)) continue;
    const owners = byUrl.get(url)!;
    const slug = [...new Set(owners.map((use) => use.slug))].sort()[0];

    try {
      const fromCommons = hostOf(url).endsWith("geograph.org.uk");
      const commons = fromCommons
        ? await commonsOriginal(
            url,
            [...new Set(owners.map((use) => use.credit).filter(Boolean))],
          )
        : null;
      const sourceUrl = commons?.downloadUrl ?? url;
      const base = commons
        ? descriptiveName(`https://commons.wikimedia.org/${commons.title.replace(/^File:/, "")}`)
        : descriptiveName(url);
      const taken = usedNames.get(slug) ?? new Set<string>();
      let name = base;
      let n = 2;
      while (taken.has(name)) name = `${base}-${n++}`;
      taken.add(name);
      usedNames.set(slug, taken);

      const original = await downloadImage(sourceUrl);
      let image: sharp.Sharp;
      try {
        image = sharp(original, { failOn: "error" });
        const meta = await image.metadata();
        if (!meta.format) throw new Error("not an image");
      } catch {
        throw new Error("file is not an image");
      }
      const webp = await sharp(original, { failOn: "error" })
        .rotate()
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toBuffer();

      const objectPath = `${slug}/${name}.webp`;
      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(objectPath, webp, {
          contentType: "image/webp",
          upsert: false,
        });
      if (uploadError) throw new Error(`upload failed: ${uploadError.message}`);

      const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(objectPath);
      processed.set(url, {
        oldUrl: url,
        newUrl: pub.publicUrl,
        originalBytes: original.length,
        webpBytes: webp.length,
        host: hostOf(url),
      });
      console.log(`Uploaded ${objectPath} (${kb(original.length)}KB -> ${kb(webp.length)}KB)`);
    } catch (err) {
      const reason = err instanceof Error ? err.message : "unknown error";
      if (reason === "no Commons copy") {
        noCommons.add(url);
        console.log(`No Commons copy: ${url}`);
      } else {
        failed.push({ url, reason });
        console.error(`Skipped ${url}: ${reason}`);
      }
    }
  }

  for (const guide of guides) {
    const fresh = await supabase
      .from("guides")
      .select("id, slug, hero_image_url, content")
      .eq("id", guide.id)
      .single();
    if (fresh.error || !fresh.data) {
      throw new Error(`Could not refetch ${guide.slug}: ${fresh.error?.message}`);
    }

    const row = fresh.data as GuideRow;
    let hero = row.hero_image_url;
    let heroChanged = false;
    if (hero && processed.has(hero)) {
      hero = processed.get(hero)!.newUrl;
      heroChanged = true;
    }

    const blocks = parseContent(row.content);
    let contentChanged = false;
    for (const block of blocks) {
      if (block.type === "image" && typeof block.src === "string" && processed.has(block.src)) {
        block.src = processed.get(block.src)!.newUrl;
        contentChanged = true;
      }
    }

    if (!heroChanged && !contentChanged) continue;

    const content = serializeContent(row.content, blocks);
    const { error: updateError } = await supabase
      .from("guides")
      .update({
        hero_image_url: hero,
        content,
      })
      .eq("id", row.id);
    if (updateError) {
      throw new Error(`Update failed for ${guide.slug}: ${updateError.message}`);
    }

    const check = await supabase
      .from("guides")
      .select("hero_image_url, content")
      .eq("id", row.id)
      .single();
    if (check.error || !check.data) {
      throw new Error(`Verify read failed for ${guide.slug}: ${check.error?.message}`);
    }
    const savedHero = check.data.hero_image_url as string | null;
    const savedBlocks = parseContent(check.data.content);
    if (savedHero !== hero) {
      throw new Error(`Hero URL did not save for ${guide.slug}`);
    }
    savedBlocks.forEach((block, index) => {
      if (block.type === "image" && block.src !== blocks[index]?.src) {
        throw new Error(`Image src did not save for ${guide.slug} block ${index}`);
      }
    });
    console.log(`Updated ${guide.slug}`);
  }

  const report = externalUses.map((use) => {
    if (VENUE_URLS.has(use.src)) {
      return {
        guide: use.slug,
        alt: use.alt,
        kind: use.kind,
        oldHost: hostOf(use.src),
        oldUrl: use.src,
        newUrl: use.src,
        originalKB: null,
        webpKB: null,
        status: "left hotlinked (venue's own photo)",
      };
    }
    if (noCommons.has(use.src)) {
      return {
        guide: use.slug,
        alt: use.alt,
        kind: use.kind,
        oldHost: hostOf(use.src),
        oldUrl: use.src,
        newUrl: null,
        originalKB: null,
        webpKB: null,
        status: "no Commons copy",
      };
    }
    const done = processed.get(use.src);
    if (!done) {
      const failure = failed.find((item) => item.url === use.src);
      return {
        guide: use.slug,
        alt: use.alt,
        kind: use.kind,
        oldHost: hostOf(use.src),
        oldUrl: use.src,
        newUrl: null,
        originalKB: null,
        webpKB: null,
        status: `failed: ${failure?.reason ?? "unchanged"}`,
      };
    }
    return {
      guide: use.slug,
      alt: use.alt,
      kind: use.kind,
      oldHost: done.host,
      oldUrl: use.src,
      newUrl: done.newUrl,
      originalKB: kb(done.originalBytes),
      webpKB: kb(done.webpBytes),
      status: "converted",
    };
  });

  let originalBytes = 0;
  let webpBytes = 0;
  for (const item of processed.values()) {
    originalBytes += item.originalBytes;
    webpBytes += item.webpBytes;
  }

  const summary = {
    backupPath,
    uniqueConverted: processed.size,
    uniqueFailed: failed.length,
    uniqueNoCommons: noCommons.size,
    originalKB: kb(originalBytes),
    webpKB: kb(webpBytes),
    failed,
    report,
  };
  writeFileSync(
    path.join(backupDir, `report-${stamp}.json`),
    JSON.stringify(summary, null, 2),
  );
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
