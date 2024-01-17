import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
/* import node from '@astrojs/node';
import netlify from '@astrojs/netlify/functions'; */

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
/*   adapter: netlify({
    edgeMiddleware: true
  }), */
});