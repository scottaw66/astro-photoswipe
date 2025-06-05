import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const albumsCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "src/content/albums" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      parent: z.string(),
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            title: z.string(),
            description: z.string(),
          }),
        )
        .optional(),
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
