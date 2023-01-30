import { NuxtVuetifyInstance } from '../types'

export default function (): NuxtVuetifyInstance {
  return useNuxtApp().$vuetify
}
