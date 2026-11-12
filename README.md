# evolutplatform.com

Web de **Evolut Platform LLC** (Wyoming): herramientas digitales para pequeñas empresas de construcción
industrializada. Versión escaparate (D-146 del repositorio master): sin formularios, sin cookies, sin analítica y sin
recursos de terceros. **Astro estático** (D-087), publicado en GitHub Pages.

## Uso

```
npm install        # una vez
npm run dev        # http://localhost:4321
npm run build      # genera dist/
```

Los datos del titular de los legales van en `.env` (copiar `.env.ejemplo`); `.env` no entra en git.

## Estructura

```
src/pages/            Páginas: / (EN), /es/ (ES), legales EN y ES, 404, sitemap.xml
src/layouts/Base.astro  Molde común: <head>, cabecera, pie, hreflang
src/components/       Secciones de la landing, bucle, iconos y molde legal
src/textos.ts         Textos de la landing (fuente: TEXTOS-web.md del master)
src/i18n.ts           Rutas en los dos idiomas, textos comunes y URL de LinkedIn
src/legal.ts          Datos del titular desde .env
src/styles/           Tokens de la marca, @font-face y estilos base
public/               Fuentes (OFL), logos, favicon, CNAME, robots.txt
```
