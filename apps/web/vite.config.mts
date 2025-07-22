import type { EnvType } from '@ocean/vite-config';

import { defineConfig } from '@ocean/vite-config';

import ElementPlus from 'unplugin-element-plus/vite';

const viteUserConfig = defineConfig(async (config) => {
  const env = (config || {}) as EnvType;
  console.warn(env);
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
          [env.apiUrl]: {
            changeOrigin: true,
            rewrite: (path: string) => path.replace(env.apiUrl, ''),
            // mock代理目标地址
            target: env.devProxy,
            ws: false,
          },
        },
      },
    },
  };
}, 'application');

export default viteUserConfig;
