import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  vite: {
    server: {
      host: '0.0.0.0',
    },
  },
});
