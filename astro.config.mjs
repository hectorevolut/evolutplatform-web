// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';

const enDesarrollo = process.argv.includes('dev');
const env = loadEnv(enDesarrollo ? 'development' : 'production', process.cwd(), '');

// Dirección pública de la web (para el sitemap y las URL canónicas).
const site = env.SITE_URL || 'https://evolutplatform.es';

// Panel de edición /keystatic: siempre en local; en la web publicada, solo si está
// conectado a GitHub (PUBLIC_KEYSTATIC_REPO). Así nunca queda un panel abierto
// que escriba en el servidor.
const conPanel = enDesarrollo || Boolean(env.PUBLIC_KEYSTATIC_REPO);

export default defineConfig({
  site,
  // Páginas estáticas por defecto; el formulario y el panel van en modo servidor.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    ...(conPanel ? [react(), keystatic()] : []),
    sitemap({ filter: (url) => !url.includes('/keystatic') }),
  ],
});
