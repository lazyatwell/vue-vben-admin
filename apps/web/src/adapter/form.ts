import type { OceanFormSchema as FormSchema, OceanFormProps } from '@ocean/common-ui';

import type { ComponentType } from './component';

import { setupOceanForm, useOceanForm as useForm, z } from '@ocean/common-ui';
import { $t } from '@ocean/locales';

async function initSetupOceanForm() {
  setupOceanForm<ComponentType>({
    config: {
      modelPropNameMap: {
        Upload: 'fileList',
        CheckboxGroup: 'model-value',
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
}

const useOceanForm = useForm<ComponentType>;

export { initSetupOceanForm, useOceanForm, z };

export type OceanFormSchema = FormSchema<ComponentType>;
export type { OceanFormProps };
