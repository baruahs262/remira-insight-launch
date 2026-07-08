// ─────────────────────────────────────────────────────────────────────────────
// Remira pre-launch landing — single place to edit the things you'll want to
// change without touching the design.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Where waitlist emails go.
 *
 * The form is wired for Formspree (free, works on this static site).
 *   1. Create a free form at https://formspree.io  →  New Form
 *   2. Copy the form's hashed id (looks like "xdorwqvb" — the last part of the
 *      endpoint URL https://formspree.io/f/xdorwqvb)
 *   3. Paste it below.
 *
 * Until you paste a real id, the form runs in DEMO mode: it still shows the
 * success state so you can click through the page, but nothing is sent.
 */
export const FORMSPREE_ID = ""; // e.g. "xdorwqvb"

export const isFormLive = () => FORMSPREE_ID.trim().length > 0;
export const formspreeEndpoint = () => `https://formspree.io/f/${FORMSPREE_ID.trim()}`;

// Social / contact ------------------------------------------------------------
export const SOCIALS = {
  instagram: "https://www.instagram.com/remira.t1d/?hl=en",
  tiktok: "https://www.tiktok.com/@remira.t1d",
  x: "https://x.com/RemiraApp",
  email: "hello@remira-ai.com", // ← update to your real contact inbox
};

// Headline social proof (edit as your numbers change) -------------------------
export const STATS = {
  members: "1,000+",
  rating: "4.9",
  priceMonthly: "$4.99",
  priceYearly: "$49.99",
};
