import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // NO definimos ni 'site' ni 'base'.
  // Esto hace que Astro genere enlaces relativos (./style.css) en lugar de absolutos (/style.css)
  build: {
    // Opcional: organiza los assets en una carpeta
    assets: 'assets'
  }
});
