/**
 * Deploy guard for remira-ai.com.
 *
 * Wired as the `predeploy` npm script, so `npm run deploy` (gh-pages -d dist) runs it
 * automatically and refuses to publish when it fails. dist/ is committed and is
 * exactly what goes live, so this is the last moment to catch a bad deploy.
 *
 * WHY THIS EXISTS. Remira subscriptions are sold only through Apple In-App Purchase,
 * inside the iPhone app. The site used to carry a Paddle web checkout that never
 * launched; it has been removed. This guard makes sure none of it comes back by
 * accident (an old build, a stale copy, a merge) and that the published site is
 * complete and in sync with its sources. It fails, with a non-zero exit, when:
 *
 *   1. any file under dist/ mentions a web payment processor or a Paddle price id
 *      ("paddle", "pri_01", "cdn.paddle.com", "stripe" — case-insensitive);
 *   2. a page the site must always have is missing from dist/;
 *   3. a static page under public/<name>/index.html is not byte-identical to
 *      dist/<name>/index.html, or the root index.html differs from dist/index.html
 *      (edit the source page, then copy it into dist/).
 *
 * Run it by hand with: node scripts/check-deploy-config.mjs
 */

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const PUBLIC = join(ROOT, "public");

const FORBIDDEN = ["paddle", "pri_01", "cdn.paddle.com", "stripe"];

const REQUIRED = [
  "index.html",
  "pricing/index.html",
  "privacy/index.html",
  "terms/index.html",
  "refunds/index.html",
  "support/index.html",
  "premium/index.html",
];

const problems = [];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const rel = (p) => relative(ROOT, p);

if (!existsSync(DIST)) {
  console.error("\ndeploy guard: FAILED\n  - dist/ does not exist\n");
  process.exit(1);
}

// 1. Forbidden payment-processor references anywhere in dist/.
for (const file of walk(DIST)) {
  const text = readFileSync(file).toString("latin1").toLowerCase();
  const hits = FORBIDDEN.filter((term) => text.includes(term));
  if (hits.length) problems.push(`${rel(file)} contains forbidden text: ${hits.join(", ")}`);
}

// 2. Pages that must always be published.
for (const page of REQUIRED) {
  if (!existsSync(join(DIST, page))) problems.push(`dist/${page} is missing`);
}

// 3. Source pages and their published copies must be byte-identical.
const pairs = [[join(ROOT, "index.html"), join(DIST, "index.html")]];
for (const src of walk(PUBLIC)) {
  if (src.endsWith("/index.html")) pairs.push([src, join(DIST, relative(PUBLIC, src))]);
}
for (const [src, out] of pairs) {
  if (!existsSync(src)) {
    problems.push(`${rel(src)} is missing`);
  } else if (!existsSync(out)) {
    if (REQUIRED.some((page) => join(DIST, page) === out)) continue; // already reported
    problems.push(`${rel(out)} is missing (copy it from ${rel(src)})`);
  } else if (!readFileSync(src).equals(readFileSync(out))) {
    problems.push(`${rel(out)} differs from ${rel(src)} (copy the source page into dist/)`);
  }
}

if (problems.length) {
  console.error("\ndeploy guard: FAILED — refusing to deploy.\n");
  for (const p of problems) console.error(`  - ${p}`);
  console.error("");
  process.exit(1);
}

console.log("deploy guard: ok");
