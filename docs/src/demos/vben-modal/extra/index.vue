<script lang="ts" setup>
import { OceanButton, useOceanModal } from '@ocean/common-ui';

import ExtraModal from './modal.vue';

const [Modal, modalApi] = useOceanModal({
  // 连接抽离的组件
  connectedComponent: ExtraModal,
});

function openModal() {
  modalApi.open();
}
</script>

<template>
  <div>
    <Modal />
    <OceanButton @click="openModal">Open</OceanButton>
  </div>
</template>
