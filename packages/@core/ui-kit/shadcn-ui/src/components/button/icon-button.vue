<script setup lang="ts">
import type { ButtonVariants } from '../../ui';
import type { OceanButtonProps } from './button';

import { computed, useSlots } from 'vue';

import { cn } from '@ocean-core/shared/utils';

import { OceanTooltip } from '../tooltip';
import OceanButton from './button.vue';

interface Props extends OceanButtonProps {
  class?: any;
  disabled?: boolean;
  onClick?: () => void;
  tooltip?: string;
  tooltipDelayDuration?: number;
  tooltipSide?: 'bottom' | 'left' | 'right' | 'top';
  variant?: ButtonVariants;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  onClick: () => {},
  tooltipDelayDuration: 200,
  tooltipSide: 'bottom',
  variant: 'icon',
});

const slots = useSlots();

const showTooltip = computed(() => !!slots.tooltip || !!props.tooltip);
</script>

<template>
  <OceanButton
    v-if="!showTooltip"
    :class="cn('rounded-full', props.class)"
    :disabled="disabled"
    :variant="variant"
    size="icon"
    @click="onClick"
  >
    <slot></slot>
  </OceanButton>

  <OceanTooltip v-else :delay-duration="tooltipDelayDuration" :side="tooltipSide">
    <template #trigger>
      <OceanButton
        :class="cn('rounded-full', props.class)"
        :disabled="disabled"
        :variant="variant"
        size="icon"
        @click="onClick"
      >
        <slot></slot>
      </OceanButton>
    </template>
    <slot v-if="slots.tooltip" name="tooltip"> </slot>
    <template v-else>
      {{ tooltip }}
    </template>
  </OceanTooltip>
</template>
