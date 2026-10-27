// Recompress images already in Supabase storage, in place (same filename, no link changes).
// Used in the pre-publish image pass. Claude supplies the file list.
//
//   node scripts/recompress-storage-images.mjs "village-images/burford/hero.jpg" "guide-pages/slug/photo.png"
//       -> dry run: downloads, backs up, compresses, prints sizes. Uploads nothing.
//   node scripts/recompress-storage-images.mjs --upload "village-images/burford/hero.jpg" ...
//       -> same, then uploads the compressed files.
//
// Rules: JPEG -> same name, max 2000px wide, mozjpeg q72.
//        PNG with "map" in the name -> same name, palette PNG, max 1600px wide.
//        Other PNG photos -> new .webp file alongside (old PNG kept); Claude updates the page links.
//        WebP -> same name, max 2000px wide, q78.
// Originals are backed up to ~/Documents/visit-cotswolds-image-backups/<date>/ (outside the repo).
import sharp from "sharp";
import fs from "fs";
import path from "path";
import os from "os";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const envText = fs.readFileSync(path.join(ROOT, ".env.local"), "utf8");
const env = (k) => (envText.match(new RegExp(`^${k}=(.*)$`, "m")) || [])[1]?.trim().replace(/^["']|["']$/g, "");
const URL_BASE = (env("NEXT_PUBLIC_SUPABASE_URL") || "").replace(/\/$/, "") + "/storage/v1/object";
const KEY = env("SUPABASE_SERVICE_ROLE_KEY");
const ALLOWED = ["village-images", "guide-pages"];
const upload = process.argv.includes("--upload");
const items = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!items.length) { console.log("Give one or more bucket/path arguments."); process.exit(1); }
if (upload && !KEY) { console.log("SUPABASE_SERVICE_ROLE_KEY missing from .env.local"); process.exit(1); }
const stamp = new Date().toISOString().slice(0, 10);
const BACKUP = path.join(os.homedir(), "Documents/visit-cotswolds-image-backups", stamp);
const WORK = path.join(os.tmpdir(), "vc-recompress");
const enc = (p) => p.split("/").map(encodeURIComponent).join("/");
let tb = 0, ta = 0, fails = 0;
for (const item of items) { try {
  const [bucket, ...rest] = item.split("/");
  const file = rest.join("/");
  if (!ALLOWED.includes(bucket) || !file) { console.log(`SKIP (bad path) ${item}`); fails++; continue; }
  const ext = path.extname(file).toLowerCase();
  const isMap = ext === ".png" && /map/i.test(file);
  const isPngPhoto = ext === ".png" && !isMap;
  const out = isPngPhoto ? file.replace(/\.png$/i, ".webp") : file;
  const mime = isMap ? "image/png" : ext === ".png" || ext === ".webp" ? "image/webp" : "image/jpeg";
  const res = await fetch(`${URL_BASE}/public/${bucket}/${enc(file)}`);
  if (!res.ok) { console.log(`FAIL download ${res.status} ${item}`); fails++; continue; }
  const orig = Buffer.from(await res.arrayBuffer());
  const bak = path.join(BACKUP, bucket, file);
  fs.mkdirSync(path.dirname(bak), { recursive: true });
  if (!fs.existsSync(bak)) fs.writeFileSync(bak, orig);
  let img = sharp(orig).rotate();
  if (isMap) img = img.resize({ width: 1600, withoutEnlargement: true }).png({ palette: true, quality: 85, compressionLevel: 9, effort: 10 });
  else if (isPngPhoto || ext === ".webp") img = img.resize({ width: 2000, withoutEnlargement: true }).webp({ quality: 78 });
  else img = img.resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 72, mozjpeg: true });
  let comp = await img.toBuffer();
  // Leave files alone if they're already small or compression wouldn't help (avoids re-compressing twice).
  if (!isPngPhoto && (orig.length < 300 * 1024 || comp.length >= orig.length * 0.9)) comp = orig;
  const dst = path.join(WORK, bucket, out);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, comp);
  tb += orig.length; ta += comp.length;
  let status = "dry run";
  if (upload) {
    if (comp === orig) status = "already small, not uploaded";
    else {
      const up = await fetch(`${URL_BASE}/${bucket}/${enc(out)}`, { method: "POST", body: comp, headers: {
        Authorization: `Bearer ${KEY}`, apikey: KEY, "Content-Type": mime, "x-upsert": "true", "cache-control": "max-age=31536000" } });
      status = up.ok ? "uploaded" : `FAIL upload ${up.status}`;
      if (!up.ok) fails++;
    }
  }
  console.log(`${item} | ${Math.round(orig.length / 1024)}KB -> ${Math.round(comp.length / 1024)}KB | ${status}${out !== file ? ` | NEW FILE ${bucket}/${out}` : ""}`);
} catch (e) { console.log(`FAIL ${item}: ${e.message}`); fails++; } }
console.log(`TOTAL ${(tb / 1048576).toFixed(1)}MB -> ${(ta / 1048576).toFixed(1)}MB | failures: ${fails} | backups: ${BACKUP}`);
