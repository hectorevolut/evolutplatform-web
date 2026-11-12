// Textos comunes y rutas de la web en los dos idiomas (D-087: EN principal, ES).
// Los textos salen de evolut/llc/TEXTOS-web.md (master). Cambiar aquí = cambia en todas las páginas.

export type Idioma = "en" | "es";
export type Pagina = "inicio" | "aviso" | "privacidad" | "cookies";

// Destino del CTA (D-146): página de empresa en LinkedIn, no el panel de administración
export const LINKEDIN = "https://www.linkedin.com/company/evolut-platform/";

// Cada página tiene su ruta en cada idioma: así el selector EN | ES y el hreflang saben a dónde ir
export const rutas: Record<Idioma, Record<Pagina, string>> = {
  en: { inicio: "/", aviso: "/legal-notice/", privacidad: "/privacy/", cookies: "/cookies/" },
  es: { inicio: "/es/", aviso: "/es/aviso-legal/", privacidad: "/es/privacidad/", cookies: "/es/cookies/" },
};

export const ui = {
  en: {
    menu: "What we build",
    legal: "Legal",
    aviso: "Legal notice",
    privacidad: "Privacy",
    cookies: "Cookies",
    idioma: "Language",
    saltar: "Skip to content",
  },
  es: {
    menu: "Qué creamos",
    legal: "Legal",
    aviso: "Aviso legal",
    privacidad: "Privacidad",
    cookies: "Cookies",
    idioma: "Idioma",
    saltar: "Saltar al contenido",
  },
} as const;
