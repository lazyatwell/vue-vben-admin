import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'OceanAbout',
    path: '/ocean-admin/about',
    component: () => import('#/views/_core/about/index.vue'),
    meta: {
      icon: 'lucide:copyright',
      title: $t('demos.ocean.about'),
      order: 9999,
      devOnly: true,
    },
  },
];

export default routes;
