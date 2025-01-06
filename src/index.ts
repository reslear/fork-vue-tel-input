
import type { Plugin } from 'vue';
import VueTelInput from './components/vue-tel-input.vue';
import { VueTelInputOptions } from './types'

export * from './types'
export { VueTelInput };

export default {
  install(app, options: Partial<VueTelInputOptions> = {}) {

    app.provide('vue-tel-input-options', options)

    app.component('VueTelInput', options);
  },
} as Plugin<VueTelInputOptions>;
