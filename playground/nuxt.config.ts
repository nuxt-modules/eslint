import { defineNuxtConfig } from 'nuxt3'
import eslintModule from '..'

export default defineNuxtConfig({
  buildModules: [
    eslintModule
  ]
})
