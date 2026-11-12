// Textos de la landing en EN y ES. Fuente única: evolut/llc/TEXTOS-web.md (master), aprobados por Héctor el 12/11.
// Si cambia un texto, se cambia allí y aquí.

export const textos = {
  en: {
    hero: {
      titulo: "Digital tools built on the job site",
      sub: "For small industrialized construction companies",
      texto:
        "How long does a quote take you? Do you know if it was right? Do you really know where your sites stand? We're building tools that answer them with your own data.",
      cta: "Tell us what you need",
      enlace: "See what we build →",
    },
    bucle: { pasos: ["Manufacturing", "Assembly", "Installation", "Data"], centro: ["Every site", "feeds the next one"] },
    problema: {
      etiqueta: "The problem",
      titulo: "Where small off-site builders lose time and money",
      tarjetas: [
        ["Quotes in Excel that take days", "Hours copying the manufacturer's report into a spreadsheet. And every change means starting again."],
        ["Cost deviations you only see at the end", "Imagine a 5–10 % cost deviation, site after site. How much money are you losing?"],
        ["Every site ends with no data for the next one", "You finish the job and nobody knows how long each phase really took. The next quote, by eye again."],
      ],
    },
    solucion: {
      etiqueta: "The solution",
      titulo: "From the manufacturer's report to a better-run job",
      pasos: [
        ["Manufacturer's report", "Load it as it comes. No retyping."],
        ["Productivity data from your own sites", "Every finished job updates your real rates."],
        ["Accurate quotes", "Priced with your numbers, adjustable before you send them."],
        ["Better processes", "See where the time goes and fix it on the next job."],
      ],
    },
    productos: {
      etiqueta: "What we build",
      titulo: "What we're building",
      lista: [
        ["Estimator", "In development · pilots 2027", "From the manufacturer's report to a PDF quote, based on the rates of your own sites."],
        ["Tracker", "Planned · 2027", "Hours, progress and costs of every site while they happen, not at the end."],
      ],
      enlace: "Tell us what you need →",
    },
    necesidad: {
      etiqueta: "Your need",
      titulo: "Tell us what you need",
      texto: "Tell us where you lose time or money on your sites, in your own words. Two minutes is enough.",
      lista: ["We read every message", "It helps us decide what to build", "No newsletters, no spam"],
      boton: "Message us on LinkedIn",
    },
  },
  es: {
    hero: {
      titulo: "Herramientas digitales nacidas en la obra",
      sub: "Para pequeñas empresas de construcción industrializada",
      texto:
        "¿Cuánto tardas en hacer un presupuesto? ¿Sabes si acertaste? ¿Sabes realmente cómo van tus obras? Estamos creando herramientas que responden con tus propios datos.",
      cta: "Cuéntanos tu necesidad",
      enlace: "Mira lo que creamos →",
    },
    bucle: { pasos: ["Fabricación", "Montaje", "Instalación", "Datos"], centro: ["Cada obra", "alimenta la siguiente"] },
    problema: {
      etiqueta: "El problema",
      titulo: "Dónde pierden tiempo y dinero las pequeñas empresas de construcción industrializada",
      tarjetas: [
        ["Presupuestos en Excel que tardan días", "Horas pasando el informe del fabricante a una hoja de cálculo. Y cada cambio, vuelta a empezar."],
        ["Desviaciones de costes que solo ves al final", "Imagina una desviación del 5–10 %, obra tras obra. ¿Cuánto dinero estás perdiendo?"],
        ["Cada obra termina sin datos para la siguiente", "Terminas la obra y nadie sabe cuánto se tardó de verdad en cada fase. El próximo presupuesto, otra vez a ojo."],
      ],
    },
    solucion: {
      etiqueta: "La solución",
      titulo: "Del informe del fabricante a una obra mejor gestionada",
      pasos: [
        ["Informe del fabricante", "Lo cargas tal como llega. Sin volver a teclear."],
        ["Datos de rendimiento de tus propias obras", "Cada obra terminada actualiza tus rendimientos reales."],
        ["Presupuestos precisos", "Calculados con tus números y ajustables antes de enviarlos."],
        ["Mejores procesos", "Ves dónde se va el tiempo y lo corriges en la siguiente obra."],
      ],
    },
    productos: {
      etiqueta: "Qué creamos",
      titulo: "En qué estamos trabajando",
      lista: [
        ["Presupuestador", "En desarrollo · pilotos en 2027", "Del informe del fabricante a la oferta en PDF, basada en los rendimientos de tus propias obras."],
        ["Control de obra", "Previsto · 2027", "Horas, avance y costes de cada obra mientras ocurren, no al final."],
      ],
      enlace: "Cuéntanos tu necesidad →",
    },
    necesidad: {
      etiqueta: "Tu necesidad",
      titulo: "Cuéntanos tu necesidad",
      texto: "Cuéntanos dónde pierdes tiempo o dinero en tus obras, con tus palabras. Con dos minutos basta.",
      lista: ["Leemos todos los mensajes", "Nos ayuda a decidir qué crear", "Sin boletines ni spam"],
      boton: "Escríbenos por LinkedIn",
    },
  },
} as const;
