import type { UserInfo } from '@vben/types';

import { customRequestClient } from '#/api/request';

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  // @ts-expect-error 忽略类型错误
  const { code, msg, ...rest } = await customRequestClient.get<UserInfo>(
    '/system/user/getInfo',
  );

  if (code !== 200) {
    throw new Error(msg);
  }

  return rest;
}
