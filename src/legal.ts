// Datos del titular para los legales. Salen de variables de entorno (.env en local, variables de GitHub Actions al
// publicar): así no entran en el repositorio (D-082). Si falta alguno, se ve el marcador {{…}} y la comprobación
// previa a publicar lo detecta (buscar "{{" en dist/).
const env = import.meta.env;
export const ENTITY_ID: string = env.PUBLIC_ENTITY_ID ?? "{{ENTITY_ID}}";
export const DIRECCION: string = env.PUBLIC_DIRECCION ?? "{{DIRECCION}}";
export const CORREO = "admin@evolutplatform.com"; // solo en el aviso legal, sin invitar a escribir (D-146)

// Fecha de última actualización, escrita en cada idioma a partir de AAAA-MM-DD
export function fecha(idioma: "en" | "es"): string {
  const iso = env.PUBLIC_FECHA_LEGAL;
  if (!iso) return "{{FECHA}}";
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(idioma === "en" ? "en-GB" : "es-ES", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
}

export const GITHUB_PRIVACIDAD = "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement";
