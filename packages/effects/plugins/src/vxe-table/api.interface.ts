import type { VxeGridInstance } from 'vxe-table';

import type { ExtendedFormApi } from '@ocean-core/form-ui';

export interface IVxeGridApi<T extends Record<string, any> = any> {
  formApi: ExtendedFormApi;
  grid: VxeGridInstance<T>;
  state: any;
  store: any;

  mount(instance: null | VxeGridInstance<T>, formApi: ExtendedFormApi): void;
  query(params?: Record<string, any>): Promise<void>;
  reload(params?: Record<string, any>): Promise<void>;
  setGridOptions(options: any): void;
  setLoading(isLoading: boolean): void;
  setState(stateOrFn: any): void;
  toggleSearchForm(show?: boolean): boolean | undefined;
  unmount(): void;
}
