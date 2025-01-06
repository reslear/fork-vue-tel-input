<template>
  <main class="vp-doc">
    <template v-for="prop in props">
      <h2>{{ prop.key }}</h2>
      <ul>
        <li>Type: <span v-html="getType(prop.value)"></span></li>
        <li>
          Default:
          <span v-if="prop.key === 'allCountries'">
            An array of all countries, see
            <a
              target="_blank"
              href="https://github.com/iamstevendao/vue-tel-input/blob/master/src/assets/all-countries.js"
            >
              <code>allCountries.js</code>
            </a>
          </span>
          <code v-else-if="prop.value !== ''" >{{ getDefault(prop) }}</code>
        </li>
      </ul>
    </template>
  </main>
</template>

<script lang="ts" setup>
import { defaultOptions } from '../../../../src/config';

const props = Object.keys(defaultOptions).map((key) => ({ key, value: defaultOptions[key] }));

function getType(type: any): string {
  if (type.length === 1) {
    return `<code>${type.name}</code>`;
  }
  return type.map((t: any) => `<code>${t.name}</code>`).join(', ');
}

function getDefault(prop: any): string {
  switch (typeof prop.default) {
    case 'number':
      return String(prop.default);
    case 'boolean':
      return prop.default.toString();
    case 'string':
      return `'${prop.default}'`;
    case 'object':
      return JSON.stringify(prop.default);
    case 'undefined':
      return ''
    default:
      return String(prop.default);
  }
}
</script>
