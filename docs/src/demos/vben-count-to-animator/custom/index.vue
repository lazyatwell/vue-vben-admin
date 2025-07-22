<script lang="ts" setup>
import { OceanCountToAnimator } from '@ocean/common-ui';
</script>
<template>
  <OceanCountToAnimator :duration="3000" :end-val="2000000" :start-val="1" prefix="$" separator="/" />
</template>
