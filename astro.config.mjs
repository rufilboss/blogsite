import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.rufilboss.me',
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
