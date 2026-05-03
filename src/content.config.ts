import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    demoUrl: z.string().url().optional().nullable(),
    githubUrl: z.string().url().optional().nullable(),
  }),
});

export const collections = { projects };
