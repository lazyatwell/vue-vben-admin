import type { UserInfoType } from '@ocean-core/typings';

import { acceptHMRUpdate, defineStore } from 'pinia';

interface AccessState {
  /**
   * 用户信息
   */
  userInfo: null | UserInfoType;
  /**
   * 用户权限
   */
  userPermissions: string[];
  /**
   * 用户角色
   */
  userRoles: string[];
}

/**
 * @zh_CN 用户信息相关
 */
export const useUserStore = defineStore('core-user', {
  actions: {
    setUserInfo(userInfo: null | UserInfoType) {
      // 设置用户信息
      this.userInfo = userInfo;
      // 设置角色信息
      const roles = userInfo?.roles ?? [];
      this.setUserRoles(roles);
      // 设置权限信息
      const permissions = userInfo?.permissions ?? [];
      this.setUserPermissions(permissions);
    },
    setUserRoles(roles: string[]) {
      this.userRoles = roles;
    },
    setUserPermissions(permissions: string[]) {
      this.userPermissions = permissions;
    },
  },
  state: (): AccessState => ({
    userInfo: null,
    userRoles: [],
    userPermissions: [],
  }),
});

// 解决热更新问题
const hot = import.meta.hot;
if (hot) {
  hot.accept(acceptHMRUpdate(useUserStore, hot));
}
