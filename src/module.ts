import { defineNuxtModule, addVitePlugin, addWebpackPlugin } from '@nuxt/kit'
import type { Options as VitePlugin } from 'vite-plugin-eslint'
import type { Options as WebpackPlugin } from 'eslint-webpack-plugin'
import vitePluginEslint from 'vite-plugin-eslint'
import EslintWebpackPlugin from 'eslint-webpack-plugin'
import { name, version } from '../package.json'

export type ModuleOptions = VitePlugin & WebpackPlugin

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'eslint',
    compatibility: {
      bridge: true
    }
  },
  defaults: nuxt => ({
    cache: true,
    include: [`${nuxt.options.srcDir}/**/*.{js,jsx,ts,tsx,vue}`],
    exclude: ['**/node_modules/**', nuxt.options.buildDir],
    eslintPath: 'eslint',
    formatter: 'stylish',
    lintOnStart: true,
    emitWarning: true,
    emitError: true,
    failOnWarning: false,
    failOnError: false
  }),
  setup (options, nuxt) {
    if (!nuxt.options.dev) {
      return
    }

    nuxt.hooks.hookOnce('builder:watch', (_, path) => {
      const configFiles = [
        '.eslintrc',
        '.eslintrc.js',
        '.eslintrc.yaml',
        '.eslintrc.yml',
        '.eslintrc.json'
      ]

      if (configFiles.includes(path)) {
        // waiting https://github.com/nuxt/nuxt/pull/18641
        // nuxt.callHook('restart', { hard: true })
      }
    })

    addVitePlugin(vitePluginEslint(options), { server: false })

    addWebpackPlugin(new EslintWebpackPlugin({
      ...options,
      context: nuxt.options.srcDir,
      files: options.include,
      lintDirtyModulesOnly: !options.lintOnStart
    }), { server: false })
  }
})
