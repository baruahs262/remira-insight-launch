import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Standalone static pages that live under public/<name>/index.html and are
// shared as clean URLs (e.g. /waitlist, /external). GitHub Pages serves the
// directory index for these in production, but the Vite dev server does not —
// it falls through to the SPA, which renders the React 404. This dev-only
// middleware rewrites the clean URL to the real file so local testing matches
// production.
const STATIC_PAGES = ["waitlist", "external"];
const serveStaticPages = () => ({
  name: "serve-static-pages",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = (req.url || "").split("?")[0].replace(/\/$/, "");
      if (STATIC_PAGES.includes(url.replace(/^\//, ""))) {
        req.url = `${url}/index.html`;
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), serveStaticPages(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
