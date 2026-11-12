// Configuración de Astro · web de Evolut Platform LLC (D-087: estático, sin Keystatic).
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://evolutplatform.com",     // dominio publicado (CNAME de GitHub Pages; www redirige aquí)
  output: "static",                       // solo HTML, CSS y ficheros: sin servidor
  // Direcciones antiguas → nuevas. En una web estática Astro genera una página que redirige al momento.
  redirects: {
    "/pt": "/es/",                         // D-087: sin versión portuguesa, /pt/ lleva a /es/
    "/pt/aviso-legal": "/es/aviso-legal/",
    "/legal": "/legal-notice/",            // aviso legal y privacidad de la web antigua (03/11)
  },
});
