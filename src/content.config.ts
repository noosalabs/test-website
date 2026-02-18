import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    logo: z.string(),
    url: z.string().url(),
    testimonialUrl: z.string().url().optional(),
    order: z.number(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    country: z.string(),
    photo: z.string().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = { portfolio, team };
