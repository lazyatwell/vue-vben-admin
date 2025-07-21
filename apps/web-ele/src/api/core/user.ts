import type { UserInfoType } from '@vben/types';

import { customRequestClient, requestClient } from '#/api/request';

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  // @ts-expect-error 忽略类型错误
  const { code, msg, ...rest } = await customRequestClient.get<UserInfoType>(
    '/system/user/getInfo',
  );

  if (code !== 200) {
    throw new Error(msg);
  }

  return rest;
}

/** 获取路由信息 */
export async function getRoutesApi() {
  return requestClient.get('/system/menu/getRouters');
}

/** 获取多项目列表 */
export async function getMultiProjectListApi() {
  return requestClient.get('/mineMultipleProjects/projectconfig/list');
}

/** 获取大屏组件列表 */
export async function getBigScreenComponentListApi() {
  return requestClient.post('/mineMultipleProjects/prelogin');
}
