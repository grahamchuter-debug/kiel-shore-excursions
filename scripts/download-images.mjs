#!/usr/bin/env node
/**
 * Download Kiel / Baltic imagery — Wikimedia Commons (preferred) with Unsplash fallbacks.
 * Run: node scripts/download-images.mjs
 */
import { writeFileSync, mkdirSync, readdirSync, unlinkSync, copyFileSync } from "fs";
import { join } from "path";

const OUT = "public/images";
mkdirSync(OUT, { recursive: true });
const UA = "kiel-shore-excursions/1.0 (image fetch; contact webmaster)";

/** Verified direct URLs — tested July 2026. */
const KIEL_IMAGES = {
  "hero-home.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Costa_Pacifica_in_Harbour_of_Kiel_%28Ostseekai%29.jpg",
  "og-default.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Kiel_ostseekai_IMG_3825.JPG",
  "kiel.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Schiffsverkehr_%2801%29_%2819123441954%29.jpg",
  "cruise-port.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Kiel_ostseekai_IMG_3825.JPG",
  "planner.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Kiel_ostseekai_IMG_3825.JPG",
  "canal.jpg":
    "https://images.unsplash.com/photo-1776599114773-de5a27e1d039?w=1600&q=85",
  "fjord.jpg":
    "https://images.unsplash.com/photo-1741271803085-0084ae71719e?w=1600&q=85",
  "hamburg.jpg":
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=85",
  "lubeck.jpg":
    "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=1600&q=85",
  "food.jpg":
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600&q=85",
  "family.jpg":
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1600&q=85",
};

const ALLOWED = new Set([
  ...Object.keys(KIEL_IMAGES),
  "highlights.jpg",
  "comparison.jpg",
  "logo-mark.svg",
  "favicon.ico",
]);

async function download(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error("file too small");
  return buf;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function downloadWithRetry(url, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await download(url);
    } catch (e) {
      if (i === attempts - 1) throw e;
      await sleep(3000 + i * 2000);
    }
  }
  throw new Error("unreachable");
}

async function main() {
  for (const name of readdirSync(OUT)) {
    if (!ALLOWED.has(name)) {
      unlinkSync(join(OUT, name));
      console.log(`removed orphan ${name}`);
    }
  }

  let failed = 0;
  for (const [file, url] of Object.entries(KIEL_IMAGES)) {
    try {
      const buf = await downloadWithRetry(url);
      writeFileSync(join(OUT, file), buf);
      console.log(`ok ${file} (${Math.round(buf.length / 1024)} KB)`);
      await sleep(1500);
    } catch (e) {
      console.error(`FAIL ${file}: ${e.message}`);
      failed++;
    }
  }

  // Derived copies
  copyFileSync(join(OUT, "canal.jpg"), join(OUT, "highlights.jpg"));
  copyFileSync(join(OUT, "lubeck.jpg"), join(OUT, "comparison.jpg"));
  console.log("ok highlights.jpg (from canal.jpg)");
  console.log("ok comparison.jpg (from lubeck.jpg)");

  if (failed) process.exit(1);
  console.log(`\nAll ${Object.keys(KIEL_IMAGES).length + 2} Kiel images ready.`);
}

main();
