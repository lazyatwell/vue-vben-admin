<script lang="ts" setup>
import { OceanButton, useOceanDrawer } from '@ocean/common-ui';

const [Drawer, drawerApi] = useOceanDrawer();
</script>
<template>
  <div>
    <OceanButton @click="() => drawerApi.open()">Open</OceanButton>
    <Drawer class="w-[600px]" title="基础示例"> drawer content </Drawer>
  </div>
</template>
