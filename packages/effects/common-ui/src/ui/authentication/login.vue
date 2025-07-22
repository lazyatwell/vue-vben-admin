<script setup lang="ts">
import type { Recordable } from '@ocean/types';

import type { OceanFormSchema } from '@ocean-core/form-ui';

import type { AuthenticationProps } from './types';

import { computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import { $t } from '@ocean/locales';

import { useOceanForm } from '@ocean-core/form-ui';
import { OceanButton, OceanCheckbox } from '@ocean-core/shadcn-ui';

import Title from './auth-title.vue';
import ThirdPartyLogin from './third-party-login.vue';

interface Props extends AuthenticationProps {
  formSchema?: OceanFormSchema[];
}

defineOptions({
  name: 'AuthenticationLogin',
});

const props = withDefaults(defineProps<Props>(), {
  codeLoginPath: '/auth/code-login',
  forgetPasswordPath: '/auth/forget-password',
  formSchema: () => [],
  loading: false,
  qrCodeLoginPath: '/auth/qrcode-login',
  registerPath: '/auth/register',
  showCodeLogin: false,
  showForgetPassword: false,
  showQrcodeLogin: false,
  showRegister: false,
  showRememberMe: true,
  showThirdPartyLogin: false,
  submitButtonText: '',
  subTitle: '',
  title: '',
});

const emit = defineEmits<{
  submit: [Recordable<any>];
}>();

const [Form, formApi] = useOceanForm(
  reactive({
    commonConfig: {
      hideLabel: true,
      hideRequiredMark: true,
    },
    schema: computed(() => props.formSchema),
    showDefaultActions: false,
  }),
);
const router = useRouter();

const REMEMBER_ME_KEY = `REMEMBER_ME_USERNAME_${location.hostname}`;

const localUsername = localStorage.getItem(REMEMBER_ME_KEY) || '';

const rememberMe = ref(!!localUsername);

async function handleSubmit() {
  const { valid } = await formApi.validate();
  const values = await formApi.getValues();
  if (valid) {
    localStorage.setItem(REMEMBER_ME_KEY, rememberMe.value ? values?.username : '');
    emit('submit', values);
  }
}

function handleGo(path: string) {
  router.push(path);
}

onMounted(() => {
  if (localUsername) {
    formApi.setFieldValue('username', localUsername);
  }
});

defineExpose({
  getFormApi: () => formApi,
});
</script>

<template>
  <div @keydown.enter.prevent="handleSubmit">
    <slot name="title">
      <Title>
        <slot name="title">
          {{ title || `${$t('authentication.welcomeBack')} 👋🏻` }}
        </slot>
        <template #desc>
          <span class="text-muted-foreground">
            <slot name="subTitle">
              {{ subTitle || $t('authentication.loginSubtitle') }}
            </slot>
          </span>
        </template>
      </Title>
    </slot>

    <Form />

    <div v-if="showRememberMe || showForgetPassword" class="mb-6 flex justify-between">
      <div class="flex-center">
        <OceanCheckbox v-if="showRememberMe" v-model:checked="rememberMe" name="rememberMe">
          {{ $t('authentication.rememberMe') }}
        </OceanCheckbox>
      </div>

      <span v-if="showForgetPassword" class="ocean-link text-sm font-normal" @click="handleGo(forgetPasswordPath)">
        {{ $t('authentication.forgetPassword') }}
      </span>
    </div>
    <OceanButton
      :class="{
        'cursor-wait': loading,
      }"
      :loading="loading"
      aria-label="login"
      class="w-full"
      @click="handleSubmit"
    >
      {{ submitButtonText || $t('common.login') }}
    </OceanButton>

    <div v-if="showCodeLogin || showQrcodeLogin" class="mb-2 mt-4 flex items-center justify-between">
      <OceanButton v-if="showCodeLogin" class="w-1/2" variant="outline" @click="handleGo(codeLoginPath)">
        {{ $t('authentication.mobileLogin') }}
      </OceanButton>
      <OceanButton v-if="showQrcodeLogin" class="ml-4 w-1/2" variant="outline" @click="handleGo(qrCodeLoginPath)">
        {{ $t('authentication.qrcodeLogin') }}
      </OceanButton>
    </div>

    <!-- 第三方登录 -->
    <slot name="third-party-login">
      <ThirdPartyLogin v-if="showThirdPartyLogin" />
    </slot>

    <slot name="to-register">
      <div v-if="showRegister" class="mt-3 text-center text-sm">
        {{ $t('authentication.accountTip') }}
        <span class="ocean-link text-sm font-normal" @click="handleGo(registerPath)">
          {{ $t('authentication.createAccount') }}
        </span>
      </div>
    </slot>
  </div>
</template>
