/**
 * Pre-deploy guard: refuse to publish anything but a production Paddle config.
 *
 * Wired as the `predeploy` npm script, so `npm run deploy` runs it automatically —
 * including deploys nobody thought to check.
 *
 * WHY THIS EXISTS. `dist/pricing/paddle-config.js` is git-tracked and is exactly what
 * `gh-pages -d dist` publishes to remira-ai.com. Two routine actions can put a SANDBOX
 * token there:
 *
 *   1. `npm run paddle:config` with PADDLE_ENV=sandbox — now blocked at the source
 *      (gen-paddle-config.mjs writes public/ only for sandbox).
 *   2. `npm run build` while a sandbox config sits in public/ — Vite copies public/**
 *      verbatim into dist/. NOTHING upstream can prevent this one, which is why the
 *      check has to live here, at the last moment before publishing.
 *
 * ⚠️ THE FAILURE IS SILENT WITHOUT THIS CHECK. The pricing page validates that the
 * token prefix matches the environment — and `sandbox` + `test_` passes that test. So a
 * mis-deployed page shows no error, renders sandbox prices, and takes no money. Revenue
 * stops and nothing alerts. A loud non-zero exit here is the whole point.
 */

import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FILE = join(ROOT, "dist", "pricing", "paddle-config.js");

function fail(msg) {
  console.error(`\n✗ predeploy: ${msg}\n`);
  console.error("  Fix: PADDLE_ENV=production npm run paddle:config && npm run stage:static");
  console.error("  Then re-run the deploy.\n");
  process.exit(1);
}

if (!existsSync(FILE)) {
  fail(
    "dist/pricing/paddle-config.js is missing — /pricing/ would deploy with no Paddle " +
      "config and render its 'Checkout is not configured' error."
  );
}

const contents = readFileSync(FILE, "utf8");

// Parse the object rather than regex the file, so a comment mentioning "production"
// cannot satisfy the check.
const match = contents.match(/window\.__PADDLE_CONFIG__\s*=\s*(\{[\s\S]*?\});/);
if (!match) fail("could not parse window.__PADDLE_CONFIG__ out of dist/pricing/paddle-config.js");

let cfg;
try {
  cfg = JSON.parse(match[1]);
} catch {
  fail("window.__PADDLE_CONFIG__ in dist/ is not valid JSON");
}

if (cfg.environment !== "production") {
  fail(
    `dist/ is built for environment '${cfg.environment}', not 'production'. ` +
      "Deploying this would point remira-ai.com at the wrong Paddle account."
  );
}

if (typeof cfg.token !== "string" || !cfg.token.startsWith("live_")) {
  fail(
    `dist/ carries a token starting '${String(cfg.token).slice(0, 5)}…' — production ` +
      "requires a live_ client token. A test_ token here means live checkout takes no money."
  );
}

console.log(`✓ predeploy: dist/ is production (token ${cfg.token.slice(0, 9)}…)`);
