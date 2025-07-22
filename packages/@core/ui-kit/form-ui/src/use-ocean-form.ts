import type { BaseFormComponentType, ExtendedFormApi, OceanFormProps } from './types';

import { defineComponent, h, isReactive, onBeforeUnmount, watch } from 'vue';

import { useStore } from '@ocean-core/shared/store';

import { FormApi } from './form-api';
import OceanUseForm from './ocean-use-form.vue';

export function useOceanForm<T extends BaseFormComponentType = BaseFormComponentType>(options: OceanFormProps<T>) {
  const IS_REACTIVE = isReactive(options);
  const api = new FormApi(options);
  const extendedApi: ExtendedFormApi = api as never;
  extendedApi.useStore = (selector) => {
    return useStore(api.store, selector);
  };

  const Form = defineComponent(
    (props: OceanFormProps, { attrs, slots }) => {
      onBeforeUnmount(() => {
        api.unmount();
      });
      api.setState({ ...props, ...attrs });
      return () => h(OceanUseForm, { ...props, ...attrs, formApi: extendedApi }, slots);
    },
    {
      name: 'OceanUseForm',
      inheritAttrs: false,
    },
  );
  // Add reactivity support
  if (IS_REACTIVE) {
    watch(
      () => options.schema,
      () => {
        api.setState({ schema: options.schema });
      },
      { immediate: true },
    );
  }

  return [Form, extendedApi] as const;
}
