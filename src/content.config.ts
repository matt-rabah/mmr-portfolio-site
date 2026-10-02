import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  pubDate: z.coerce.date().optional(),
  draft: z.boolean().default(true),
  topic: z.string().optional(),
}).superRefine((entry, context) => {
  if (!entry.draft && !entry.pubDate) {
    context.addIssue({ code: 'custom', message: 'Published content needs a publication date.', path: ['pubDate'] });
  }
});

export const collections = {
  blog: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/blog' }), schema }),
  'case-studies': defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }), schema }),
};
