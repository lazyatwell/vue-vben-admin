import type { EnvType } from '@ocean/vite-config';

import { defineConfig } from '@ocean/vite-config';

import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

const viteUserConfig = defineConfig(async (config) => {
  const env = (config || {}) as EnvType;
  return {
    application: {},
    vite: {
      plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver()],
          dts: 'src/typings/components.d.ts',
        }),
        Components({
          resolvers: [ElementPlusResolver()],
          dts: 'src/typings/auto-imports.d.ts',
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
