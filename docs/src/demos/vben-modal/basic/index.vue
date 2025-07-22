<script lang="ts" setup>
import { OceanButton, useOceanModal } from '@ocean/common-ui';

const [Modal, modalApi] = useOceanModal();
</script>
<template>
  <div>
    <OceanButton @click="() => modalApi.open()">Open</OceanButton>
    <Modal class="w-[600px]" title="基础示例"> modal content </Modal>
  </div>
</template>
