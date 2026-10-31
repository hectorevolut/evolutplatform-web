import { config, collection, singleton, fields } from '@keystatic/core';

// En local, los cambios se guardan en los ficheros del proyecto.
// En producción, define PUBLIC_KEYSTATIC_REPO=usuario/repositorio y los cambios
// se guardan como commits en GitHub (la web se vuelve a publicar sola).
const repo = import.meta.env.PUBLIC_KEYSTATIC_REPO as `${string}/${string}` | undefined;

export default config({
  storage: repo ? { kind: 'github', repo } : { kind: 'local' },
  ui: { brand: { name: 'evolutplatform-web' } },
  singletons: {
    empresa: singleton({
      label: 'Datos de la empresa',
      path: 'src/content/empresa',
      format: { data: 'json' },
      schema: {
        nombre: fields.text({ label: 'Nombre comercial' }),
        razonSocial: fields.text({ label: 'Razón social' }),
        nif: fields.text({ label: 'NIF / NIPC' }),
        direccion: fields.text({ label: 'Domicilio' }),
        email: fields.text({ label: 'Correo de contacto' }),
        telefono: fields.text({ label: 'Teléfono' }),
        registro: fields.text({ label: 'Datos registrales', multiline: true }),
        livroReclamacoes: fields.checkbox({ label: 'Mostrar enlace al Livro de Reclamações (Portugal)' }),
      },
    }),
    inicio: singleton({
      label: 'Página de inicio',
      path: 'src/content/inicio',
      format: { data: 'json' },
      schema: {
        etiqueta: fields.text({ label: 'Etiqueta sobre el titular' }),
        titular: fields.text({ label: 'Titular' }),
        subtitulo: fields.text({ label: 'Subtítulo', multiline: true }),
        botonPrincipal: fields.text({ label: 'Texto del botón principal' }),
        puntos: fields.array(
          fields.object({
            titulo: fields.text({ label: 'Título' }),
            texto: fields.text({ label: 'Texto', multiline: true }),
          }),
          { label: 'Puntos fuertes', itemLabel: (p) => p.fields.titulo.value },
        ),
      },
    }),
  },
  collections: {
    servicios: collection({
      label: 'Servicios',
      slugField: 'titulo',
      path: 'src/content/servicios/*',
      format: { contentField: 'contenido' },
      schema: {
        titulo: fields.slug({ name: { label: 'Título' } }),
        resumen: fields.text({ label: 'Resumen (una o dos frases)', multiline: true }),
        orden: fields.integer({ label: 'Orden en la lista', defaultValue: 1 }),
        contenido: fields.markdoc({ label: 'Contenido', extension: 'md' }),
      },
    }),
  },
});
