<script lang="ts" setup>
import { OceanButton, useOceanDrawer } from '@ocean/common-ui';

import ExtraDrawer from './drawer.vue';

const [Drawer, drawerApi] = useOceanDrawer({
  // 连接抽离的组件
  connectedComponent: ExtraDrawer,
});

function open() {
  drawerApi
    .setData({
      content: '外部传递的数据 content',
      payload: '外部传递的数据 payload',
    })
    .open();
}
</script>

<template>
  <div>
    <Drawer />

    <OceanButton @click="open">Open</OceanButton>
  </div>
</template>
