import { defineOverridesPreferences } from '@ocean/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 * !!! 更改配置后请清空缓存，否则可能不生效
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    layout: 'header-sidebar-nav',
    accessMode: 'mixed',
  },
  breadcrumb: {
    styleType: 'normal',
  },
  theme: {
    builtinType: 'sky-blue',
    colorPrimary: 'hsl(231 98% 65%)',
  },
  tabbar: {
    maxCount: 10,
    persist: false,
  },
});
