<script setup lang="ts">
import type { SupportedLanguagesType } from '@ocean/locales';

import { SUPPORT_LANGUAGES } from '@ocean/constants';
import { Languages } from '@ocean/icons';
import { loadLocaleMessages } from '@ocean/locales';
import { preferences, updatePreferences } from '@ocean/preferences';

import { OceanDropdownRadioMenu, OceanIconButton } from '@ocean-core/shadcn-ui';

defineOptions({
  name: 'LanguageToggle',
});

async function handleUpdate(value: string | undefined) {
  if (!value) return;
  const locale = value as SupportedLanguagesType;
  updatePreferences({
    app: {
      locale,
    },
  });
  await loadLocaleMessages(locale);
}
</script>

<template>
  <div>
    <OceanDropdownRadioMenu
      :menus="SUPPORT_LANGUAGES"
      :model-value="preferences.app.locale"
      @update:model-value="handleUpdate"
    >
      <OceanIconButton>
        <Languages class="text-foreground size-4" />
      </OceanIconButton>
    </OceanDropdownRadioMenu>
  </div>
</template>
