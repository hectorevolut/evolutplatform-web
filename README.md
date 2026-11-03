# evolutplatform.com

Web de presentación de **Evolut**, producto de **Evolut Platform LLC** (Wyoming), software de gestión para pequeñas instaladoras de LSF y construcción. Sitio estático publicado con GitHub Pages.

## Estructura

```
index.html        Inglés (raíz). Redirige a /es/ o /pt/ si el navegador está en esos idiomas
es/index.html     Español
pt/index.html     Portugués
404.html          Página de error
assets/style.css  Estilos (modo claro y oscuro automático)
assets/fonts/     Archivo (fuente variable, licencia OFL), servida desde el propio sitio
assets/favicon.svg
CNAME             Dominio personalizado para GitHub Pages
.nojekyll         Publicar los ficheros tal cual, sin Jekyll
robots.txt, sitemap.xml
```

Sin cookies, sin analítica y sin recursos de terceros: no hace falta banner de cookies.

## Publicación (una sola vez)

1. **Verificar el dominio en GitHub** (evita que otra cuenta lo reclame):
   GitHub → foto de perfil → Settings → Pages → *Add a domain* → `evolutplatform.com`.
   GitHub da un registro TXT `_github-pages-challenge-hectorevolut` que se añade en Bizee.
2. **Crear el repositorio** `hectorevolut/evolutplatform-web` (público: Pages gratis lo exige) y subir estos ficheros a la rama `main`.
3. En el repositorio: Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
   Custom domain: `evolutplatform.com`. Cuando el certificado esté listo, marcar *Enforce HTTPS*.
4. **DNS en Bizee** (no tocar MX, SPF, DKIM ni DMARC):

| Tipo  | Host | Valor |
|-------|------|-------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| AAAA  | @    | 2606:50c0:8000::153 (y ::8001, ::8002, ::8003), si Bizee lo permite |
| CNAME | www  | hectorevolut.github.io |

## Cambiar textos

Los textos de los tres idiomas están directamente en cada `index.html`. Si se cambia algo en uno, cambiarlo también en los otros dos.

## Pendiente

- `app.evolutplatform.com`: reservado para la aplicación (Python + PostgreSQL + Docker en un VPS). Se añadirá su registro DNS cuando exista el servidor.
