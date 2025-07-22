<script lang="ts" setup>
import { ref } from 'vue';

import { OceanButton, useOceanDrawer } from '@ocean/common-ui';

const list = ref<number[]>([]);

const [Drawer, drawerApi] = useOceanDrawer({
  onCancel() {
    drawerApi.close();
  },
  onConfirm() {
    console.log('onConfirm');
  },
  onOpenChange(isOpen) {
    if (isOpen) {
      handleUpdate(10);
    }
  },
});

function handleUpdate(len: number) {
  drawerApi.setState({ loading: true });
  setTimeout(() => {
    list.value = Array.from({ length: len }, (_v, k) => k + 1);
    drawerApi.setState({ loading: false });
  }, 2000);
}
</script>
<template>
  <Drawer title="自动计算高度">
    <div v-for="item in list" :key="item" class="even:bg-heavy bg-muted flex-center h-[220px] w-full">
      {{ item }}
    </div>
    <template #prepend-footer>
      <OceanButton type="link" @click="handleUpdate(6)"> 点击更新数据 </OceanButton>
    </template>
  </Drawer>
</template>
