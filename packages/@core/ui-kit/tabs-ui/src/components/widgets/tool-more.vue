<script lang="ts" setup>
import type { DropdownMenuProps } from '@ocean-core/shadcn-ui';

import { ChevronDown } from '@ocean-core/icons';
import { OceanDropdownMenu } from '@ocean-core/shadcn-ui';

defineProps<DropdownMenuProps>();
</script>

<template>
  <OceanDropdownMenu :menus="menus" :modal="false">
    <div
      class="flex-center hover:bg-muted hover:text-foreground text-muted-foreground border-border h-full cursor-pointer border-l px-2 text-lg font-semibold"
    >
      <ChevronDown class="size-4" />
    </div>
  </OceanDropdownMenu>
</template>
