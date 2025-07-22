<script lang="ts" setup>
import { OceanSpinner } from '@ocean-core/shadcn-ui';

import { useContentSpinner } from './use-content-spinner';

defineOptions({ name: 'LayoutContentSpinner' });

const { spinning } = useContentSpinner();
</script>
<template>
  <OceanSpinner :spinning="spinning" />
</template>
