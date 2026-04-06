import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      /*base: '/siteCCP/',*/
      base: '/',
      server: {
        port: 3002,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'clean-url-rewrite',
          configureServer(server) {
            server.middlewares.use((req, _res, next) => {
              if (req.url === '/lgpd_orbys' || req.url === '/lgpd_orbys/') {
                req.url = '/lgpd_orbys/index.html';
              }
              next();
            });
          },
        },
      ],
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            lgpd: path.resolve(__dirname, 'lgpd_orbys/index.html'),
          },
        },
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
