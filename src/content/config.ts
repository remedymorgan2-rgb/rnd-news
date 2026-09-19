import { z, defineCollection } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    image: z.string(),
    excerpt: z.string(),
    breaking: z.boolean().default(false),
    author: z.string().default('Remedy Morgan'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { news };
