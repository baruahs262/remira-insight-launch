# Recovered pre-launch landing page (Xander)

These are the salvageable parts of the pre-launch landing page work that was pushed in
commits `028b22a` / `7700149` / `b72e362`. **They are not wired into the app** — see
"What's missing" below.

Nothing in this folder is compiled. `tsconfig.app.json` has `"include": ["src"]`, and Vite
only bundles what `src/main.tsx` reaches, so these files are inert until moved into `src/`.

## What happened

The commits were made through GitHub's web "Add files via upload", which paired the wrong
filename with each file's bytes. Every text file landed under a `.png` name and vice versa.
Verified by running `file` on each blob from the GitHub API:

| Committed as | Actually contained | Recovered here as |
| --- | --- | --- |
| `index.html` (Vite entry) | a PNG image | — (entry restored from `e2a46b3`) |
| `mock-stats.png` | `src/App.tsx` | `App.tsx` |
| `mock-report.png` | `src/index.css` | `index.css` |
| `index.css` | `EmailForm.tsx` | `EmailForm.tsx` |
| `PreLaunch.tsx` | a PNG (dup of `mock-stats-BKKuzrPM.png`) | `assets/mock-stats.png` |
| `config.ts` | a PNG (dup of `mock-hero-T5S45FOG.png`) | `assets/mock-hero.png` |
| `mock-home.png` | a PNG (genuine) | `assets/mock-home.png` |
| `mock-home-AZFnpguM.png` | a built Vite CSS bundle | discarded |
| `index-wphPZrHH.css` | a built Vite JS bundle | discarded |

The root `index.html` being overwritten with a PNG is why `main` could not build.

## What's missing

Two source files have **no recoverable copy** — their slots in the commit were overwritten
by images, so the originals exist only on Xander's machine:

- **`src/pages/PreLaunch.tsx`** — the landing page itself. `App.tsx` here imports it.
- **`src/config.ts`** — must export `isFormLive()` and `formspreeEndpoint()`.
  `EmailForm.tsx` here imports both from `@/config`.

Please re-push those two **with git**, not the GitHub web upload.

## Wiring it up once those two land

1. `git mv recovered/prelaunch/App.tsx src/App.tsx`
2. `git mv recovered/prelaunch/index.css src/index.css`
3. `git mv recovered/prelaunch/EmailForm.tsx src/components/EmailForm.tsx`
4. `git mv recovered/prelaunch/assets/*.png src/assets/`
5. Drop in `src/pages/PreLaunch.tsx` and `src/config.ts`, then delete this folder.

Two things to know before doing that:

- **This changes the live homepage.** The recovered `App.tsx` routes `/` to `PreLaunch` and
  moves the current landing page to `/app`. Right now `/` is still the existing page.
- **The recovered `index.css` restyles the whole site.** It changes `--background` from
  `0 0% 0%` to `232 26% 5%` and adds `--mint` / `--violet` / `--amber` / `--rose`. The
  matching Tailwind color tokens are already merged in `tailwind.config.ts`, so that part
  needs no further change.

## Not affected

The premium waitlist page live at `/premium` is unrelated to this folder. It is a
self-contained page now tracked at `public/premium/index.html`.
