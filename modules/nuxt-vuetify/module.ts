import defu from 'defu'
import {
  addImportsDir,
  addPluginTemplate,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import { ModuleOptions, Nuxt } from '@nuxt/schema'
import viteVuetify from 'vite-plugin-vuetify'
import plugin from './runtime/plugin'

export default defineNuxtModule({
  meta: {
    name: '@test/nuxt-vuetify',
  },

  setup: async (moduleOptions: ModuleOptions, nuxt: Nuxt) => {
    const { resolve } = createResolver(import.meta.url)
    const options = nuxt.options.vuetify || moduleOptions?.options || {}

    nuxt.hook('vite:extendConfig', (config: any) => {
      config.optimizeDeps = defu(config.optimizeDeps, {
        exclude: ['vuetify'],
      })

      return config.plugins.push(
        viteVuetify()
      )
    })

    addPluginTemplate({
      getContents: async () => await plugin(options),
      filename: 'nuxt-vuetify.plugin.mjs',
    })

    addImportsDir(resolve('./composables'))
  },
})
