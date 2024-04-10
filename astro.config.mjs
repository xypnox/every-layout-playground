import { defineConfig } from 'astro/config';
import shikiTheme from "./shiki.json";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: shikiTheme,
    }
  },
});
