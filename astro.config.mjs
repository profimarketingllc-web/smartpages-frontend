// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '~': path.resolve('./src'),
      },
    },
    css: {
      postcss: './postcss.config.cjs',
    },
    plugins: [tailwind()],
  },
});
