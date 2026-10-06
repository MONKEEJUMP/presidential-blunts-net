import { createHash } from "node:crypto";
import { copyFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = "J:\\presidential-official\\sources\\client\\google-drive-drop\\_EXTRACTED\\Product Graphics-20260703T032133Z-3-001\\Product Graphics";
const referencePublic = "J:\\presidential-thc-net\\public";
const imageOutput = path.join(projectRoot, "public", "images");
const fontOutput = path.join(projectRoot, "public", "fonts");
const assetRegistry = path.join(projectRoot, "src", "content", "assets.ts");

const folderFormats = [
  ["Blunts", "blunt"],
  ["Mini Blunts", "mini-blunt"],
  ["Singles Mini Blunts", "single-mini-blunt"],
  ["Prerolls", "infused-pre-roll"],
  ["Moonrocks", "moon-rocks"],
  ["Mini Prerolls", "mini-pre-roll"],
];

const strainMatchers = [
  ["img2367", "Head Cheese"], ["img2368", "Head Cheese"],
  ["orangepushpop", "Orange Push Pop"], ["opp", "Orange Push Pop"],
  ["ghosthazetrain", "Ghost Train Haze"], ["ghosthaze", "Ghost Haze"],
  ["whoasiwhoa", "Whoa Si Whoa"], ["whosiwhoa", "Whoa Si Whoa"],
  ["daniellarrusso", "Daniel LaRusso"], ["daniellarusso", "Daniel LaRusso"],
  ["lauracharles", "Laura Charles"], ["ninobrown", "Nino Brown"],
  ["galacticgas", "Galactic Gas"], ["galriccookie", "Garlic Cookie"], ["garliccookie", "Garlic Cookie"],
  ["cherrygelato", "Cherry Gelato"], ["cherryminiblunt", "Cherry Gelato"],
  ["gorillagoo", "Gorilla Goo"], ["peachmango", "Peach Mango"], ["pinkcookie", "Pink Cookie"],
  ["papayapunch", "Papaya Punch"], ["rainbowbelts", "Rainbow Belts"], ["bluedream", "Blue Dream"],
  ["blueraz", "Blue Raspberry"], ["capjunky", "Cap Junky"], ["cresendo", "Crescendo"], ["crescendo", "Crescendo"],
  ["kinglouis", "King Louis"], ["kingl", "King Louis"], ["nycdiesel", "NYC Diesel"],
  ["skywalker", "Skywalker"], ["strawberry", "Strawberry"], ["watermelon", "Watermelon"],
  ["pineapple", "Pineapple"], ["tropical", "Tropical"], ["apricotti", "Apricotti"],
  ["sfvog", "SFV OG"], ["xj13", "XJ-13"], ["xxx", "XXX"], ["waui", "Waui"],
  ["grape", "Grape"], ["presidential", "Presidential"], ["presminisingle", "Presidential"],
  ["presminiblunt", "Presidential"], ["presmoonrock", "Presidential"], ["presblunt", "Presidential"],
  ["prespreroll", "Presidential"], ["prex", "Presidential"],
];

const pages = [
  ["/", 9, ["blunt", "mini-blunt", "moon-rocks", "single-mini-blunt", "infused-pre-roll"]],
  ["/wrap", 5, ["blunt", "mini-blunt"]],
  ["/compare", 5, ["blunt", "infused-pre-roll", "mini-blunt"]],
  ["/ritual", 5, ["blunt", "mini-blunt", "single-mini-blunt"]],
  ["/strains", 5, ["blunt", "mini-blunt", "moon-rocks"]],
  ["/wrap/what-a-wrap-does", 4, ["blunt", "mini-blunt"]],
  ["/wrap/hemp-vs-tobacco", 4, ["blunt", "mini-blunt"]],
  ["/wrap/tobacco-free", 4, ["blunt", "mini-blunt"]],
  ["/wrap/burn-rate", 4, ["blunt", "mini-blunt", "single-mini-blunt"]],
  ["/wrap/wrap-and-flavour", 4, ["blunt", "mini-blunt"]],
  ["/wrap/how-wraps-are-made", 4, ["blunt", "mini-blunt"]],
  ["/compare/blunt-vs-joint", 4, ["blunt", "infused-pre-roll"]],
  ["/compare/blunt-vs-pre-roll", 4, ["blunt", "infused-pre-roll", "mini-pre-roll"]],
  ["/compare/blunt-vs-spliff", 4, ["blunt", "infused-pre-roll"]],
  ["/compare/mini-vs-full", 4, ["mini-blunt", "blunt", "single-mini-blunt"]],
  ["/compare/infused-vs-non-infused", 4, ["moon-rocks", "blunt", "infused-pre-roll"]],
  ["/compare/hemp-wrap-vs-paper", 4, ["blunt", "infused-pre-roll", "mini-pre-roll"]],
  ["/ritual/how-to-light-one", 4, ["blunt", "mini-blunt", "single-mini-blunt"]],
  ["/ritual/relighting", 4, ["blunt", "mini-blunt", "single-mini-blunt"]],
  ["/ritual/storage", 4, ["single-mini-blunt", "mini-blunt", "blunt"]],
  ["/ritual/session-length", 4, ["blunt", "mini-blunt", "infused-pre-roll"]],
  ["/ritual/sharing", 4, ["blunt", "mini-blunt"]],
  ["/about", 3, ["blunt", "moon-rocks", "infused-pre-roll"]],
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function identifyStrain(filename) {
  const normalized = filename.toLowerCase().replace(/copy of/g, "").replace(/[^a-z0-9]+/g, "");
  for (const [needle, label] of strainMatchers) {
    if (normalized.includes(needle)) return label;
  }
  throw new Error(`No strain mapping for ${filename}`);
}

function formatLabel(format) {
  return {
    "blunt": "blunt",
    "mini-blunt": "mini blunt",
    "single-mini-blunt": "single mini blunt",
    "infused-pre-roll": "infused pre-roll",
    "moon-rocks": "moon rocks",
    "mini-pre-roll": "mini pre-roll",
  }[format];
}

async function collectSources() {
  const seenHashes = new Set();
  const records = [];
  for (const [folder, format] of folderFormats) {
    const files = (await readdir(path.join(sourceRoot, folder))).sort((a, b) => a.localeCompare(b));
    for (const filename of files) {
      const source = path.join(sourceRoot, folder, filename);
      const bytes = await readFile(source);
      const hash = createHash("sha256").update(bytes).digest("hex");
      if (seenHashes.has(hash)) continue;
      seenHashes.add(hash);
      records.push({ source, filename, folder, format, strain: identifyStrain(filename), hash });
    }
  }
  return records;
}

function assignSources(records) {
  const unused = [...records];
  const assignments = new Map();
  for (const [pagePath, count, preferredFormats] of pages) {
    const selected = [];
    for (let index = 0; index < count; index += 1) {
      const desired = preferredFormats[index % preferredFormats.length];
      let sourceIndex = unused.findIndex((record) => record.format === desired);
      if (sourceIndex < 0) sourceIndex = unused.findIndex((record) => preferredFormats.includes(record.format));
      if (sourceIndex < 0) sourceIndex = 0;
      if (!unused[sourceIndex]) throw new Error(`Asset pool exhausted while assigning ${pagePath}`);
      selected.push(unused.splice(sourceIndex, 1)[0]);
    }
    assignments.set(pagePath, selected);
  }
  return assignments;
}

async function main() {
  await mkdir(imageOutput, { recursive: true });
  await mkdir(fontOutput, { recursive: true });
  await copyFile(path.join(referencePublic, "images", "presidential-crest.webp"), path.join(imageOutput, "presidential-crest.webp"));
  for (const weight of [400, 500, 600, 700]) {
    await copyFile(path.join(referencePublic, "fonts", `clash-display-${weight}.woff2`), path.join(fontOutput, `clash-display-${weight}.woff2`));
  }

  const sources = await collectSources();
  const assignments = assignSources(sources);
  const variantCounts = new Map();
  const pageImages = {};

  for (const [pagePath, records] of assignments) {
    pageImages[pagePath] = [];
    for (const record of records) {
      const displayStrain = record.strain === "Presidential" ? "Classic" : record.strain;
      const baseKey = `${slugify(displayStrain)}-${record.format}`;
      const variant = (variantCounts.get(baseKey) ?? 0) + 1;
      variantCounts.set(baseKey, variant);
      const variantSuffix = variant > 1 ? `-alternate-${variant}` : "";
      const outputName = `presidential-${slugify(displayStrain)}-${record.format}${variantSuffix}-packaging.webp`;
      const outputPath = path.join(imageOutput, outputName);
      await sharp(record.source).rotate().webp({ quality: 82, effort: 5 }).toFile(outputPath);
      const metadata = await sharp(outputPath).metadata();
      if (!metadata.width || !metadata.height) throw new Error(`Missing dimensions for ${outputName}`);
      const alternate = variant > 1 ? ` alternate edition ${variant}` : "";
      pageImages[pagePath].push({
        src: `/images/${outputName}`,
        width: metadata.width,
        height: metadata.height,
        alt: `Presidential ${displayStrain} ${formatLabel(record.format)} packaging${alternate} with illustrated label artwork`,
        caption: `Presidential ${displayStrain} ${formatLabel(record.format)} package artwork${variant > 1 ? `, alternate edition ${variant}` : ""}.`,
      });
    }
  }

  const registry = `import type { ContentImage } from "./types";\n\nexport const pageImages: Record<string, ContentImage[]> = ${JSON.stringify(pageImages, null, 2)};\n`;
  await writeFile(assetRegistry, registry, "utf8");
  const assignedCount = Object.values(pageImages).reduce((total, images) => total + images.length, 0);
  console.log(JSON.stringify({ sourceUnique: sources.length, assigned: assignedCount, pages: Object.keys(pageImages).length }, null, 2));
}

await main();
