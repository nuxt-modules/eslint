import { defineNuxtModule, addVitePlugin, addWebpackPlugin } from '@nuxt/kit'
import type { Options as VitePlugin } from 'vite-plugin-eslint'
import type { Options as WebpackPlugin } from 'eslint-webpack-plugin'
import vitePluginEslint from 'vite-plugin-eslint'
import EslintWebpackPlugin from 'eslint-webpack-plugin'
import { name, version } from '../package.json'

export type ModuleOptions = VitePlugin & WebpackPlugin & {
  extensions: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'eslint',
    compatibility: {
      bridge: true
    }
  },
  defaults: {
    cache: true,
    exclude: ['**/node_modules/**'],
    extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    eslintPath: 'eslint',
    emitError: true,
    emitWarning: true,
    failOnError: false,
    failOnWarning: false,
    fix: false,
    formatter: 'stylish',
    lintOnStart: true
  },
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

    addVitePlugin(vitePluginEslint({
      ...options,
      include: options.extensions.map(ext => `**/*.${ext}`)
    }), { server: false })

    addWebpackPlugin(new EslintWebpackPlugin({
      ...options,
      context: nuxt.options.srcDir,
      lintDirtyModulesOnly: !options.lintOnStart
    }), { server: false })
  }
})
