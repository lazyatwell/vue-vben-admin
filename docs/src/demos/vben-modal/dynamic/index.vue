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

function handleUpdateTitle() {
  modalApi.setState({ title: '外部动态标题' }).open();
}
</script>

<template>
  <div>
    <Modal />

    <OceanButton @click="openModal">Open</OceanButton>
    <OceanButton class="ml-2" type="primary" @click="handleUpdateTitle"> 从外部修改标题并打开 </OceanButton>
  </div>
</template>
