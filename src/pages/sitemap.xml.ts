// sitemap.xml generado al compilar con las páginas de rutas (i18n.ts), sin dependencias extra.
import { rutas } from "../i18n";

export function GET({ site }: { site: URL }) {
  const urls = [...Object.values(rutas.en), ...Object.values(rutas.es)]
    .map((ruta) => `  <url><loc>${new URL(ruta, site)}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
