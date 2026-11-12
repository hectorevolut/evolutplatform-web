// Configuración de Astro · web de Evolut Platform LLC (D-087: estático, sin Keystatic).
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.evolutplatform.com", // dominio publicado (GitHub Pages)
  output: "static",                       // solo HTML, CSS y ficheros: sin servidor
});
