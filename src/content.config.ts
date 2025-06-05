import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const albumsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      cover: image(),
    }),
});

const wordsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/words" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      keywords: z.string().array(),
      date: z
        .string()
        .transform((str) => new Date(str))
        .optional()
        .nullable(),
    }),
});

export const collections = {
  albums: albumsCollection,
  words: wordsCollection,
};
