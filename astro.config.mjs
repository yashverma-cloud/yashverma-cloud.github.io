// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site served from the root of yashverma-cloud.github.io, so no `base`.
export default defineConfig({
  site: 'https://yashverma-cloud.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Bio short links redirect and must stay out of the index.
      //
      // `/writing` is here while the section is paused (27 Sep 2026): with no published post it
      // renders `noindex`, and a noindex URL sitting in the sitemap is exactly what Search Console
      // reports as an error. **Remove '/writing' from this list when posts return** — the page
      // drops its own `noindex` automatically, but this line will not.
      filter: (page) =>
        !['/in', '/ig', '/fb', '/x', '/threads', '/writing'].includes(
          new URL(page).pathname.replace(/\/$/, ''),
        ),
    }),
  ],
  markdown: {
    // Code is set in the site's own tokens (base.css), not a highlighter theme's palette.
    syntaxHighlight: false,
  },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      // Keeps the eventual 3D chunk identifiable in the bundle report.
      chunkSizeWarningLimit: 300,
    },
  },
});
