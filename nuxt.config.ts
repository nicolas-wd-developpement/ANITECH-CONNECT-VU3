import { defineNuxtConfig } from 'nuxt'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt','@nuxtjs/vuetify','@nuxtjs/axios'],
    modules: ['@nuxtjs/axios'],
})
