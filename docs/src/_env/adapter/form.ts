import type { OceanFormSchema as FormSchema, OceanFormProps } from '@ocean/common-ui';

import type { ComponentType } from './component';

import { setupOceanForm, useOceanForm as useForm, z } from '@ocean/common-ui';
import { $t } from '@ocean/locales';

import { initComponentAdapter } from './component';

initComponentAdapter();
setupOceanForm<ComponentType>({
  config: {
    baseModelPropName: 'value',
    // naive-ui组件的空值为null,不能是undefined，否则重置表单时不生效
    emptyStateValue: null,
    modelPropNameMap: {
      Checkbox: 'checked',
      Radio: 'checked',
      Switch: 'checked',
      Upload: 'fileList',
    },
  },
  defineRules: {
    required: (value, _params, ctx) => {
      if (value === undefined || value === null || value.length === 0) {
        return $t('ui.formRules.required', [ctx.label]);
      }
      return true;
    },
    selectRequired: (value, _params, ctx) => {
      if (value === undefined || value === null) {
        return $t('ui.formRules.selectRequired', [ctx.label]);
      }
      return true;
    },
  },
});

const useOceanForm = useForm<ComponentType>;

export { useOceanForm, z };

export type OceanFormSchema = FormSchema<ComponentType>;
export type { OceanFormProps };
