// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '~/modules/nuxt-vuetify/module',
    ],

    vuetify: {
        ssr: true,
        blueprint: 'md1',
    },

    build: {
        transpile: ['vuetify'],
    },
})
