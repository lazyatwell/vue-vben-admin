import { defineConfig } from '@ocean/vite-config';

import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      plugins: [
        ElementPlus({
          format: 'esm',
        }),
      ],
      server: {
        proxy: {
          '/dev-api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/dev-api/, ''),
            // mock代理目标地址
            target: 'http://10.3.0.52/prod-api',
            ws: false,
          },
        },
      },
    },
  };
});
