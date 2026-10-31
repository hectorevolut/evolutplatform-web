# evolutplatform-web

Web hecha con la plantilla `web-cliente` (Astro + Keystatic). Sigue el *Procedimiento de desarrollo web*.

## Día a día

```sh
npm install          # la primera vez
npm run dev          # http://localhost:4321  ·  panel de edición en /keystatic
npm run comprobar    # revisa el código y compila; tiene que salir sin errores
npm run formato      # ordena el código
```

Ramas: trabaja en `pruebas` (el cliente revisa) y pasa a `main` (la web publicada) cuando lo apruebe:

```sh
git switch main && git merge pruebas && git push && git switch pruebas
```

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| Colores y tipografías | `src/styles/marca.css` |
| Menú | `src/navegacion.ts` |
| Datos de la empresa (pie, aviso legal) | `/keystatic` → Datos de la empresa, o `src/content/empresa.json` |
| Portada | `/keystatic` → Página de inicio, o `src/content/inicio.json` |
| Servicios y noticias | `/keystatic`, o `src/content/servicios` y `src/content/noticias` |
| Opciones del desplegable del formulario | `src/pages/contacto.astro` → `<FormularioContacto tipos={[...]} />` |
| Textos legales | `src/pages/aviso-legal.astro`, `privacidad.astro`, `cookies.astro` |

## Publicar en Hostinger (plan Business o Cloud)

1. *Websites → Create site → Web App → Import Git Repository* → este repositorio, rama `main`.
2. Build: `npm run build` · Start: `npm start` · Node.js 22 o superior.
3. Variables de entorno: las de `.env.example` (`HOST`, `SITE_URL`, `SMTP_*`, `CONTACTO_DESTINO`).
4. Segunda web app con la rama `pruebas` en `pruebas.<dominio>`.

## Panel de edición para el cliente

En local, `/keystatic` guarda en los ficheros. En la web publicada solo existe si se conecta a GitHub:

1. Pon `PUBLIC_KEYSTATIC_REPO=usuario/repositorio` en `.env` y arranca `npm run dev`.
2. Entra en `http://127.0.0.1:4321/keystatic` y sigue el asistente: crea una GitHub App y genera las variables
   `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET` y
   `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.
3. Copia esas variables, y `PUBLIC_KEYSTATIC_REPO`, a la configuración de la web app en Hostinger.
4. Da acceso al cliente al repositorio en GitHub: cada cambio que guarde es un commit y la web se publica sola.
