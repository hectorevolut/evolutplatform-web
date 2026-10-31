import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const servicios = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/servicios' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    orden: z.number().default(1),
  }),
});


export const collections = { servicios };
