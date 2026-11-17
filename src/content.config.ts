import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/* Legal pages linked from the footer. One Markdown file per locale:
   src/content/legal/{ar,en}/<slug>.md → /<slug> (Arabic) and /en/<slug>. */
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.string().optional(),
  }),
});

/* The journal. One Markdown file per locale with the same filename in each:
   src/content/journal/{ar,en}/<slug>.md → /journal/<slug> (Arabic) and /en/journal/<slug>.
   Photos live in src/assets/images/journal and are referenced relatively, so Astro optimises them. */
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      date: z.coerce.date(),
      readMinutes: z.number(),
      hero: image(),
      heroAlt: z.string(),
    }),
});

export const collections = { legal, journal };
