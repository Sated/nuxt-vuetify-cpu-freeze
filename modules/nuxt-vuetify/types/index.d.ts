// eslint-disable-next-line no-use-before-define
import { NuxtConfig, NuxtOptions } from '@nuxt/schema'
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

declare module '@nuxt/schema' {
  interface NuxtConfig {
    vuetify?: NuxtVuetifyOptions
  }

  interface NuxtOptions {
    vuetify?: NuxtVuetifyOptions
  }
}
