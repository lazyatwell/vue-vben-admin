<script lang="ts" setup>
import { useOceanModal } from '@ocean/common-ui';

const [Modal] = useOceanModal({
  draggable: true,
});
</script>
<template>
  <Modal title="拖拽示例"> modal content </Modal>
</template>
