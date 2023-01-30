import { NuxtVuetifyOptions } from '../types'

export default async function (options: NuxtVuetifyOptions) {
  if (options.blueprint)
    options.blueprint = await import(`vuetify/blueprints/${options.blueprint}`)

  const config = JSON.stringify(options, (key: string, value) =>
    typeof value === 'function' ? eval(value) : value
  )

  return `
    import { createVuetify } from 'vuetify'
    
    export default defineNuxtPlugin((nuxtApp) => {
      const instance = createVuetify(${config})
      nuxtApp.vueApp.use(instance)
      
      return {
        provide: {
          vuetify: instance
        }
      }
    })
  `
}
