<script lang="ts" setup>
import { Settings } from '@ocean/icons';

import { OceanIconButton } from '@ocean-core/shadcn-ui';

import Preferences from './preferences.vue';

const emit = defineEmits<{ clearPreferencesAndLogout: [] }>();

function clearPreferencesAndLogout() {
  emit('clearPreferencesAndLogout');
}
</script>
<template>
  <Preferences @clear-preferences-and-logout="clearPreferencesAndLogout">
    <OceanIconButton>
      <Settings class="text-foreground size-4" />
    </OceanIconButton>
  </Preferences>
</template>
