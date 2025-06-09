import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    experimentalLayout: "constrained",
  },
  experimental: {
    responsiveImages: true,
  },
});
