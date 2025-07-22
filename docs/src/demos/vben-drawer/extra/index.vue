<script lang="ts" setup>
import { OceanButton, useOceanDrawer } from '@ocean/common-ui';

import ExtraDrawer from './drawer.vue';

const [Drawer, drawerApi] = useOceanDrawer({
  // 连接抽离的组件
  connectedComponent: ExtraDrawer,
});

function open() {
  drawerApi.open();
}
</script>

<template>
  <div>
    <Drawer />
    <OceanButton @click="open">Open</OceanButton>
  </div>
</template>
