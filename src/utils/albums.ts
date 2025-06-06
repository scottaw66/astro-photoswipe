import { getCollection } from "astro:content";

export async function getAlbumImages(albumId: string) {
  // 1. List all album files from collections path
  let images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/images/**/*.{jpeg,jpg}",
  );

  // 2. Filter images by albumId
  images = Object.fromEntries(
    Object.entries(images).filter(([key]) => key.includes(albumId)),
  );

  // 3. Images are promises, so we need to resolve the glob promises
  const resolvedImages = await Promise.all(
    Object.values(images).map((image) => image().then((mod) => mod.default)),
  );

  // 4. Shuffle images with random order
  resolvedImages.sort(() => Math.random() - 0.5);

  return resolvedImages;
}

export async function getChildAlbums(albumId: string) {
  const albums = await getCollection("albums", ({ data }) => {
    return data.parent?.toLowerCase() === albumId.toLowerCase();
  });

  return albums;
}
