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

function handleUpdateTitle() {
  drawerApi.setState({ title: '外部动态标题' }).open();
}
</script>

<template>
  <div>
    <Drawer />

    <OceanButton @click="open">Open</OceanButton>
    <OceanButton class="ml-2" type="primary" @click="handleUpdateTitle"> 从外部修改标题并打开 </OceanButton>
  </div>
</template>
