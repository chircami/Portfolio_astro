import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // La URL base de tu sitio en GitHub Pages
  site: 'https://chircami.github.io',
  // El nombre de tu repositorio. DEBE empezar con barra.
  // IMPORTANTE: Asegúrate de que las mayúsculas/minúsculas coinciden con la URL de GitHub.
  base: '/Portfolio_astro',
});
```
*(Si tu repositorio en GitHub se llama todo en minúsculas `portfolio_astro`, cambia la línea `base` para que coincida exactamente).*

3.  Guarda el archivo.
4.  Sube los cambios:
    ```bash
    git add astro.config.mjs
    git commit -m "Fix base URL for GitHub Pages assets"
    git push
    ```
5.  Espera a que termine el despliegue en GitHub Actions (pestaña "Actions" en tu repositorio).

**SI ESTO SIGUE FALLANDO**, hay una medida desesperada que funciona el 99% de las veces: **usar rutas relativas**.

Para usar rutas relativas, cambia `astro.config.mjs` a esto:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Al no poner 'site' ni 'base', Astro intentará usar rutas relativas.
  // Esto suele funcionar bien para proyectos simples en GitHub Pages.
  build: {
    // Opcional: pone todos los assets (CSS, JS, imágenes) en una carpeta '_assets'
    assets: '_assets'
  }
});
