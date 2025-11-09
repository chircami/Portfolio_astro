import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // NO ponemos 'site' ni 'base' para que Astro no intente generar URLs absolutas.
  build: {
    // Esto ayuda a mantener los archivos organizados
    assets: '_assets'
  }
});
