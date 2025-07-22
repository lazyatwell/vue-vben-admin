<script lang="ts" setup>
import type { NotificationItem } from '@ocean/layouts';

import { computed, ref, watch } from 'vue';

import { AuthenticationLoginExpiredModal } from '@ocean/common-ui';
import { useWatermark } from '@ocean/hooks';
import { BookOpenText } from '@ocean/icons';
import { BasicLayout, LockScreen, Notification, UserDropdown } from '@ocean/layouts';
import { preferences } from '@ocean/preferences';
import { useAccessStore, useUserStore } from '@ocean/stores';
import { openWindow } from '@ocean/utils';

import { $t } from '#/locales';
import { useAuthStore } from '#/store';
import LoginForm from '#/views/_core/authentication/login.vue';

const notifications = ref<NotificationItem[]>([]);

const userStore = useUserStore();
const authStore = useAuthStore();
const accessStore = useAccessStore();
const { destroyWatermark, updateWatermark } = useWatermark();
const showDot = computed(() => notifications.value.some((item) => !item.isRead));

const menus = computed(() => [
  {
    handler: () => {
      openWindow('/', {
        target: '_blank',
      });
    },
    icon: BookOpenText,
    text: $t('ui.widgets.home'),
  },
]);

const avatar = computed(() => {
  return userStore.userInfo?.user.avatar ?? preferences.app.defaultAvatar;
});

async function handleLogout() {
  await authStore.logout(false);
}

function handleNoticeClear() {
  notifications.value = [];
}

function handleMakeAll() {
  notifications.value.forEach((item) => (item.isRead = true));
}
watch(
  () => preferences.app.watermark,
  async (enable) => {
    if (enable) {
      await updateWatermark({
        content: `${userStore.userInfo?.user.userName} - ${userStore.userInfo?.user.remark}`,
      });
    } else {
      destroyWatermark();
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <BasicLayout @clear-preferences-and-logout="handleLogout">
    <template #user-dropdown>
      <UserDropdown
        :avatar
        :menus
        :text="userStore.userInfo?.user.userName"
        :description="userStore.userRoles.join(', ')"
        :tag-text="userStore.userInfo?.user.remark"
        @logout="handleLogout"
      />
    </template>
    <template #notification>
      <Notification
        :dot="showDot"
        :notifications="notifications"
        @clear="handleNoticeClear"
        @make-all="handleMakeAll"
      />
    </template>
    <template #extra>
      <AuthenticationLoginExpiredModal v-model:open="accessStore.loginExpired" :avatar>
        <LoginForm />
      </AuthenticationLoginExpiredModal>
    </template>
    <template #lock-screen>
      <LockScreen :avatar @to-login="handleLogout" />
    </template>
  </BasicLayout>
</template>
