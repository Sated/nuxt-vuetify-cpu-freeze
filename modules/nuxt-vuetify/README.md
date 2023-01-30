# Nuxt Vuetify

## Install

### Config

```ts
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },

  css: ['vuetify/styles'],
})
```

## Usage examples

### Config key

```ts
export default defineNuxtConfig({
  modules: ['~/modules/nuxt-vuetify/module'],

  vuetify: {
    ssr: true,
    blueprint: 'md1',

    locale: {
      locale: 'ru',
      messages: { ru },
    },

    theme: {
      themes: {
        light: {
          colors: environmentColors,
        },
      },
    },
  },
})
```

### Module options

```ts
export default defineNuxtConfig({
  modules: [
    [
      '~/modules/nuxt-vuetify/module',
      {
        options: {
          ssr: true,
          blueprint: 'md1',

          locale: {
            locale: 'ru',
            messages: { ru },
          },

          theme: {
            themes: {
              light: {
                colors: environmentColors,
              },
            },
          },
        },
      },
    ],
  ],
})
```

### Component

```ts
const vuetify = useVuetify()
```

## Interfaces

```ts
import { UnwrapNestedRefs } from 'vue'
import {
  DefaultsInstance,
  DisplayInstance,
  ThemeInstance,
  IconOptions,
  LocaleInstance,
  RtlInstance,
  VuetifyOptions,
} from 'vuetify'

export interface NuxtVuetifyInstance {
  defaults: DefaultsInstance
  display: UnwrapNestedRefs<DisplayInstance>
  locale: UnwrapNestedRefs<LocaleInstance & RtlInstance>
  theme: UnwrapNestedRefs<ThemeInstance>
  icons: IconOptions
}

export interface NuxtVuetifyOptions extends VuetifyOptions {
  blueprint?: 'md1' | 'md2' | 'md3'
}
```
